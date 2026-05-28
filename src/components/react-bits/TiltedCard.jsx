import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltedCard = ({
    children,
    className = "",
    containerHeight = "100%",
    containerWidth = "100%",
    scaleOnHover = 1.05,
    rotateAmplitude = 12,
    showTooltip = false,
    overlayContent = null,
    displayOverlayContent = false
}) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

    const scale = useSpring(1, { stiffness: 200, damping: 10 });
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Calculate rotation for figcaption if tooltip is used
        const newY = yPct * -rotateAmplitude;
        rotateFigcaption.set(newY);

        opacity.set(1);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        x.set(0);
        y.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <motion.figure
            ref={ref}
            className={`relative w-full h-full [perspective:1000px] ${className}`}
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-full h-full relative [transform-style:preserve-3d]"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                {children}

                {displayOverlayContent && overlayContent && (
                    <motion.div className="absolute inset-0 z-50">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[100]"
                    style={{ x, y, opacity, rotate: rotateFigcaption }}
                >
                    Tooltip
                </motion.figcaption>
            )}
        </motion.figure>
    );
};

export default TiltedCard;
