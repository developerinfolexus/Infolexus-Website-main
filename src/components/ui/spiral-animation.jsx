"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Vector Utility Class
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static random(min, max) {
        return min + Math.random() * (max - min);
    }
}

class Vector3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static random(min, max) {
        return min + Math.random() * (max - min);
    }
}

// Animation Controller
class AnimationController {
    constructor(canvas, ctx, dpr, size) {
        // Properties
        this.time = 0;
        this.stars = [];
        this.changeEventTime = 0.32;
        this.cameraZ = -400;
        this.cameraTravelDistance = 3400;
        this.startDotYOffset = 28;
        this.viewZoom = 300;
        this.numberOfStars = 5000;
        this.trailLength = 80;

        this.canvas = canvas;
        this.ctx = ctx;
        this.dpr = dpr;
        this.size = size;
        this.timeline = gsap.timeline({ repeat: -1 });

        // Initialization
        this.setupRandomGenerator();
        this.createStars();
        this.setupTimeline();
    }

    // Setup Random Generator
    setupRandomGenerator() {
        const originalRandom = Math.random;
        const customRandom = () => {
            let seed = 1234;
            return () => {
                seed = (seed * 9301 + 49297) % 233280;
                return seed / 233280;
            };
        };

        Math.random = customRandom();
        this.createStars();
        Math.random = originalRandom;
    }

    // Create Stars
    createStars() {
        this.stars = [];
        for (let i = 0; i < this.numberOfStars; i++) {
            this.stars.push(new Star(this.cameraZ, this.cameraTravelDistance));
        }
    }

    // Setup Timeline
    setupTimeline() {
        this.timeline
            .to(this, {
                time: 1,
                duration: 15,
                repeat: -1,
                ease: "none",
                onUpdate: () => this.render()
            });
    }

    // Easing Function
    ease(p, g) {
        if (p < 0.5)
            return 0.5 * Math.pow(2 * p, g);
        else
            return 1 - 0.5 * Math.pow(2 * (1 - p), g);
    }

    // Elastic Easing
    easeOutElastic(x) {
        const c4 = (2 * Math.PI) / 4.5;
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        return Math.pow(2, -8 * x) * Math.sin((x * 8 - 0.75) * c4) + 1;
    }

    // Map Function
    map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }

    // Constrain Function
    constrain(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    // Linear Interpolation
    lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    // Spiral Path
    spiralPath(p) {
        p = this.constrain(1.2 * p, 0, 1);
        p = this.ease(p, 1.8);
        const numberOfSpiralTurns = 6;
        const theta = 2 * Math.PI * numberOfSpiralTurns * Math.sqrt(p);
        const r = 350 * Math.sqrt(p);

        return new Vector2D(
            r * Math.cos(theta),
            r * Math.sin(theta) + this.startDotYOffset
        );
    }

    // Rotation Transform
    rotate(v1, v2, p, orientation) {
        const middle = new Vector2D(
            (v1.x + v2.x) / 2,
            (v1.y + v2.y) / 2
        );

        const dx = v1.x - middle.x;
        const dy = v1.y - middle.y;
        const angle = Math.atan2(dy, dx);
        const o = orientation ? -1 : 1;
        const r = Math.sqrt(dx * dx + dy * dy);

        // Bounce effect
        const bounce = Math.sin(p * Math.PI) * 0.05 * (1 - p);

        return new Vector2D(
            middle.x + r * (1 + bounce) * Math.cos(angle + o * Math.PI * this.easeOutElastic(p)),
            middle.y + r * (1 + bounce) * Math.sin(angle + o * Math.PI * this.easeOutElastic(p))
        );
    }

    // Show Projected Dot
    showProjectedDot(position, sizeFactor) {
        const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1);
        const newCameraZ = this.cameraZ + this.ease(Math.pow(t2, 1.2), 1.8) * this.cameraTravelDistance;

        if (position.z > newCameraZ) {
            const dotDepthFromCamera = position.z - newCameraZ;

            // 3D -> 2D Projection
            const x = this.viewZoom * position.x / dotDepthFromCamera;
            const y = this.viewZoom * position.y / dotDepthFromCamera;

            // Adjust scale based on dpr if needed, but ctx is scaled. 
            // The original logic assumes 'sw' is stroke width or size.
            // 400 is a magic number for "field of view" or scale.
            const sw = 400 * sizeFactor / dotDepthFromCamera;

            this.ctx.lineWidth = sw;
            this.ctx.beginPath();
            this.ctx.arc(x, y, 0.5, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    // Draw Start Dot
    drawStartDot() {
        if (this.time > this.changeEventTime) {
            const dy = this.cameraZ * this.startDotYOffset / this.viewZoom;
            const position = new Vector3D(0, dy, this.cameraTravelDistance);
            this.showProjectedDot(position, 2.5);
        }
    }

    // Main Render Function
    render() {
        const ctx = this.ctx;
        if (!ctx) return;

        // Ensure we clear the canvas correctly considering the transform
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform to clear full canvas
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.restore();

        ctx.save();
        // Translate to center
        // Note: In TSX version, it translates size/2, size/2. 
        // size was passed as Math.max(width, height).
        // Since we want it centered in the canvas (which might be rectangular), 
        // we should probably translate to canvas width/2 and height/2 (in logical pixels).
        // However, let's stick to the original logic first, which takes a square 'size'.
        ctx.translate(this.size / 2, this.size / 2);

        // Time calculations
        const t1 = this.constrain(this.map(this.time, 0, this.changeEventTime + 0.25, 0, 1), 0, 1);
        const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1);

        // Rotate Camera
        ctx.rotate(-Math.PI * this.ease(t2, 2.7));

        // Draw Trail
        this.drawTrail(t1);

        // Draw Stars
        ctx.fillStyle = 'white';
        for (const star of this.stars) {
            star.render(t1, this);
        }

        // Draw Start Dot
        this.drawStartDot();

        ctx.restore();
    }

    // Draw Trail
    drawTrail(t1) {
        for (let i = 0; i < this.trailLength; i++) {
            const f = this.map(i, 0, this.trailLength, 1.1, 0.1);
            const sw = (1.3 * (1 - t1) + 3.0 * Math.sin(Math.PI * t1)) * f;

            this.ctx.fillStyle = 'white';
            this.ctx.lineWidth = sw;

            const pathTime = t1 - 0.00015 * i;
            const position = this.spiralPath(pathTime);

            // Add rotation effect
            const basePos = position;
            const offset = new Vector2D(position.x + 5, position.y + 5);
            const rotated = this.rotate(
                basePos,
                offset,
                Math.sin(this.time * Math.PI * 2) * 0.5 + 0.5,
                i % 2 === 0
            );

            this.ctx.beginPath();
            this.ctx.arc(rotated.x, rotated.y, sw / 2, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    pause() {
        this.timeline.pause();
    }

    resume() {
        this.timeline.play();
    }

    destroy() {
        this.timeline.kill();
    }
}

// Star Class
class Star {
    constructor(cameraZ, cameraTravelDistance) {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = 30 * Math.random() + 15;
        this.rotationDirection = Math.random() > 0.5 ? 1 : -1;
        this.expansionRate = 1.2 + Math.random() * 0.8;
        this.finalScale = 0.7 + Math.random() * 0.6;

        this.dx = this.distance * Math.cos(this.angle);
        this.dy = this.distance * Math.sin(this.angle);

        this.spiralLocation = (1 - Math.pow(1 - Math.random(), 3.0)) / 1.3;
        this.z = Vector2D.random(0.5 * cameraZ, cameraTravelDistance + cameraZ);

        const lerp = (start, end, t) => start * (1 - t) + end * t;
        this.z = lerp(this.z, cameraTravelDistance / 2, 0.3 * this.spiralLocation);
        this.strokeWeightFactor = Math.pow(Math.random(), 2.0);
    }

    render(p, controller) {
        const spiralPos = controller.spiralPath(this.spiralLocation);
        const q = p - this.spiralLocation;

        if (q > 0) {
            const displacementProgress = controller.constrain(4 * q, 0, 1);

            const linearEasing = displacementProgress;
            const elasticEasing = controller.easeOutElastic(displacementProgress);
            const powerEasing = Math.pow(displacementProgress, 2);

            let easing;
            if (displacementProgress < 0.3) {
                easing = controller.lerp(linearEasing, powerEasing, displacementProgress / 0.3);
            } else if (displacementProgress < 0.7) {
                const t = (displacementProgress - 0.3) / 0.4;
                easing = controller.lerp(powerEasing, elasticEasing, t);
            } else {
                easing = elasticEasing;
            }

            let screenX, screenY;

            if (displacementProgress < 0.3) {
                screenX = controller.lerp(spiralPos.x, spiralPos.x + this.dx * 0.3, easing / 0.3);
                screenY = controller.lerp(spiralPos.y, spiralPos.y + this.dy * 0.3, easing / 0.3);
            } else if (displacementProgress < 0.7) {
                const midProgress = (displacementProgress - 0.3) / 0.4;
                const curveStrength = Math.sin(midProgress * Math.PI) * this.rotationDirection * 1.5;

                const baseX = spiralPos.x + this.dx * 0.3;
                const baseY = spiralPos.y + this.dy * 0.3;

                const targetX = spiralPos.x + this.dx * 0.7;
                const targetY = spiralPos.y + this.dy * 0.7;

                const perpX = -this.dy * 0.4 * curveStrength;
                const perpY = this.dx * 0.4 * curveStrength;

                screenX = controller.lerp(baseX, targetX, midProgress) + perpX * midProgress;
                screenY = controller.lerp(baseY, targetY, midProgress) + perpY * midProgress;
            } else {
                const finalProgress = (displacementProgress - 0.7) / 0.3;

                const baseX = spiralPos.x + this.dx * 0.7;
                const baseY = spiralPos.y + this.dy * 0.7;

                const targetDistance = this.distance * this.expansionRate * 1.5;
                const spiralTurns = 1.2 * this.rotationDirection;
                const spiralAngle = this.angle + spiralTurns * finalProgress * Math.PI;

                const targetX = spiralPos.x + targetDistance * Math.cos(spiralAngle);
                const targetY = spiralPos.y + targetDistance * Math.sin(spiralAngle);

                screenX = controller.lerp(baseX, targetX, finalProgress);
                screenY = controller.lerp(baseY, targetY, finalProgress);
            }

            const vx = (this.z - controller.cameraZ) * screenX / controller.viewZoom;
            const vy = (this.z - controller.cameraZ) * screenY / controller.viewZoom;

            const position = new Vector3D(vx, vy, this.z);

            let sizeMultiplier = 1.0;
            if (displacementProgress < 0.6) {
                sizeMultiplier = 1.0 + displacementProgress * 0.2;
            } else {
                const t = (displacementProgress - 0.6) / 0.4;
                sizeMultiplier = 1.2 * (1.0 - t) + this.finalScale * t;
            }

            const dotSize = 8.5 * this.strokeWeightFactor * sizeMultiplier;

            controller.showProjectedDot(position, dotSize);
        }
    }
}

export function SpiralAnimation() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            } else {
                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        // Use the larger dimension for square rendering logic if desired, or just adapt
        // The original code used Math.max(width, height) for 'size' to keep aspect ratio or something.
        const size = Math.max(dimensions.width, dimensions.height);

        canvas.width = dimensions.width * dpr;
        canvas.height = dimensions.height * dpr;

        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;

        ctx.scale(dpr, dpr);

        // Pass width/height or manage translation inside controller for non-square?
        // For now, let's trust the controller uses 'size' for its internal coordinate system centering
        // We might need to adjust translation in the controller if it assumes full square.
        // It does: ctx.translate(this.size / 2, this.size / 2);
        // We probably want it centered on the *actual* canvas center.
        // Let's modify the controller instantiation or the controller logic slightly?
        // Or simpler, just pass the 'size' as the controlling dimension but translate to actual center in render.
        // I'll stick to original logic but ensure the translation uses actual dimensions if I can modify Controller inside.
        // Since Controller is defined above, I'll modify the Render method in the class above (already defined in previous block).
        // Wait, I already pasted the class above. The instruction `ctx.translate(this.size / 2, this.size / 2)` lines up the center.
        // If my canvas is rectangular (e.g. wide), and 'size' is the max dimension, then size/2 might be correct if we drew a square canvas.
        // But here I set canvas.width to actual width.
        // So I should modify the translation to be `this.canvas.width / 2 / dpr` and `this.canvas.height / 2 / dpr` ideally.
        // But let's see. If I pass `size` as max(w,h), then size/2 is half of the bounding square.
        // If I strictly follow the snippet, I should trust it works for full screen which is rectangular.

        // Actually, let's fix the translation in the render method to be dynamic based on canvas size, 
        // OR just pass the correct center. 
        // For now, I'll stick to the snippet's logic: it takes 'size'.

        animationRef.current = new AnimationController(canvas, ctx, dpr, size);

        // Monkey patch the render method's translation if needed?
        // The original `render` explicitly does `ctx.translate(this.size / 2, this.size / 2)`.
        // If width < height, this moves center too far right.
        // If width > height, this moves center too far down.
        // Actually, looking at the code: `ctx.translate(this.size / 2, this.size / 2)` uses the `size` property.
        // `size` is `Math.max(width, height)`.
        // So if window is 1920x1080, `size` = 1920.
        // It translates to (960, 960).
        // Vertical center should be 540. So 960 is way off-screen for Y.
        // This suggests the original code might have intended for a square canvas.
        // I will FIX this by centering on the actual canvas dimensions in the `render` method override below.

        animationRef.current.render = function () {
            const ctx = this.ctx;
            if (!ctx) return;

            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.restore();

            ctx.save();
            // CORRECT CENTERING:
            // Canvas logical width/height is passed in css pixels (before scale), 
            // but the context is scaled by dpr. 
            // `this.canvas.width` is physical pixels. 
            // We want to translate to the center of the drawing area.
            // Since we scaled by dpr, we work in logical pixels.
            // `this.canvas.width` / dpr is the logical width.
            const centerX = (this.canvas.width / this.dpr) / 2;
            const centerY = (this.canvas.height / this.dpr) / 2;

            ctx.translate(centerX, centerY);

            const t1 = this.constrain(this.map(this.time, 0, this.changeEventTime + 0.25, 0, 1), 0, 1);
            const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1);

            ctx.rotate(-Math.PI * this.ease(t2, 2.7));
            this.drawTrail(t1);
            ctx.fillStyle = 'white';
            for (const star of this.stars) {
                star.render(t1, this);
            }
            this.drawStartDot();
            ctx.restore();
        };

        return () => {
            if (animationRef.current) {
                animationRef.current.destroy();
                animationRef.current = null;
            }
        };
    }, [dimensions]);

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
