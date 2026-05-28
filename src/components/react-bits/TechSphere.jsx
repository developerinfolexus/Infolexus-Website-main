import React, { useEffect, useRef } from 'react';

const TechSphere = ({ color = "#00f2ff", size = 400 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = size;
        let height = canvas.height = size;

        let particles = [];
        const particleCount = 150;
        const connectionDistance = 80;
        const rotationSpeed = 0.005;

        // Initialize particles on a sphere
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = size * 0.35; // Radius

            particles.push({
                x: r * Math.sin(phi) * Math.cos(theta),
                y: r * Math.sin(phi) * Math.sin(theta),
                z: r * Math.cos(phi),
                baseX: r * Math.sin(phi) * Math.cos(theta),
                baseY: r * Math.sin(phi) * Math.sin(theta),
                baseZ: r * Math.cos(phi),
            });
        }

        let angle = 0;

        const animate = () => {
            if (!canvas) return;
            ctx.clearRect(0, 0, width, height);

            // Center the coordinate system
            ctx.save();
            ctx.translate(width / 2, height / 2);

            angle += rotationSpeed;
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Update particle positions (Rotation)
            particles.forEach(p => {
                // Rotate around Y axis
                const x1 = p.baseX * cos - p.baseZ * sin;
                const z1 = p.baseZ * cos + p.baseX * sin;

                // Store projected 2D position
                // Simple perspective projection: x' = x / (1 - z/d)
                const scale = 300 / (300 - z1);
                p.px = x1 * scale;
                p.py = p.baseY * scale; // No rotation on X yet
                p.scale = scale;
                p.zIndex = z1;
            });

            // Sort particles by Z so front ones draw on top
            particles.sort((a, b) => b.zIndex - a.zIndex); // Draw back to front not strictly needed for dots, but good for lines

            // Draw Lines
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                for (let j = i + 1; j < particles.length; j++) { // Optimize checking
                    const p2 = particles[j];
                    const dx = p1.px - p2.px;
                    const dy = p1.py - p2.py;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        // Alpha based on distance and depth
                        const alpha = (1 - dist / connectionDistance) * p1.scale;
                        ctx.strokeStyle = `${color}${Math.floor(alpha * 150).toString(16).padStart(2, '0')}`; // fast hex alpha
                        ctx.beginPath();
                        ctx.moveTo(p1.px, p1.py);
                        ctx.lineTo(p2.px, p2.py);
                        ctx.stroke();
                    }
                }
            }

            // Draw Particles
            particles.forEach(p => {

                ctx.fillStyle = color;
                ctx.globalAlpha = p.scale > 1 ? 1 : p.scale * 0.8; // dim back particles
                ctx.beginPath();
                ctx.arc(p.px, p.py, 1.5 * p.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.restore();
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [color, size]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default TechSphere;
