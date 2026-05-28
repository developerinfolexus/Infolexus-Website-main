import React, { useEffect, useRef } from 'react';

const WaveLines = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let t = 0;

        const resize = () => {
            if (canvas.parentElement) {
                width = canvas.parentElement.offsetWidth;
                height = canvas.parentElement.offsetHeight;
            } else {
                width = window.innerWidth;
                height = window.innerHeight;
            }
            // Increase resolution for HD/Retina displays
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };

        window.addEventListener('resize', resize);
        resize();

        // Config for the "High Res" Ribbon
        const lines = 80;
        const speed = 0.005;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Thin lines for HD look
            ctx.lineWidth = 1.2;
            // ctx.lineCap = 'round'; // Optional, might be smoother

            for (let i = 0; i < lines; i++) {
                ctx.beginPath();

                // Color: Brand Blue/Cyan Gradients
                // i/lines goes 0->1
                const normalizedI = i / lines;
                const hue = 190 + (normalizedI * 40); // 190(Cyan) to 230(Blue)

                // Opacity creates depth (fades at edges of ribbon)
                const opacity = 0.5 * Math.sin(normalizedI * Math.PI);

                ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacity})`;

                // Draw curve
                // We'll use 100 segments for smoothness
                const segments = 100;

                for (let j = 0; j <= segments; j++) {
                    const p = j / segments; // 0 to 1 across screen width
                    const x = p * width;

                    // --- THE MATH FOR THE " REFERENCE IMAGE" SHAPE ---

                    // 1. Main Path (The Spine)
                    // Starts high-left, dips low-middle, curves slightly up-right
                    // Imagine a cubic bezier: P0(0, 0.1h), P1(0.3w, 0.1h), P2(0.6w, 0.9h), P3(1w, 0.8h)

                    // Manual Bezier logic for smooth custom curve
                    // This creates the "Waterfall / Slide" shape
                    const curveY = height * (
                        0.1 * Math.pow(1 - p, 3) +           // Start Top (10%)
                        3 * 0.1 * Math.pow(1 - p, 2) * p +   // Control 1 (Stay high)
                        3 * 0.9 * (1 - p) * Math.pow(p, 2) + // Control 2 (Dip low 90%)
                        0.8 * Math.pow(p, 3)               // End Bottom-ish (80%)
                    );

                    // 2. The "Ribbon Twist" (Offset)
                    // This makes the lines spread apart and crossover
                    // We oscillate the spread based on position P and time T

                    const spreadPhase = p * Math.PI * 2 + t;
                    const spreadBase = (i - lines / 2) * 5; // Base spacing

                    // The spread varies along the length to look like it twists
                    // twistFactor is small at ends, wide in middle
                    const twistFactor = Math.sin(p * Math.PI) * 1.5;

                    const spread = spreadBase * twistFactor * Math.cos(spreadPhase * 0.5);

                    // 3. Fine Wave (Detail)
                    // Subtle vibration for "energy" feel
                    const detail = Math.sin(p * 10 + t * 2 + i * 0.1) * 2;

                    const y = curveY + spread + detail;

                    if (j === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            t += speed;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
            style={{ filter: 'drop-shadow(0 0 10px rgba(0,163,255,0.3))' }}
        />
    );
};

export default WaveLines;
