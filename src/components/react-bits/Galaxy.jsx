import React, { useEffect, useRef } from 'react';

const Galaxy = ({
    starCount = 1000,
    speedFactor = 0.05,
    backgroundColor = '#000',
    starColor = '#fff',
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                // Randomly assign a color: white, cyan, or purple
                const randomColor = Math.random();
                let color = starColor;
                if (randomColor > 0.8) {
                    const hue = Math.random() > 0.5 ? 200 : 280; // Blue or Purple
                    const saturation = Math.floor(Math.random() * 50 + 50);
                    color = `hsl(${hue}, ${saturation}%, 80%)`;
                }

                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width, // Depth
                    size: Math.random() * 1.5,
                    color: color
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (backgroundColor !== 'transparent') {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            stars.forEach((star) => {
                // Simple 3D projection
                const depth = star.z / canvas.width;
                const size = Math.max(0.1, (1 - depth) * 2 * star.size);
                const opacity = 1 - depth;

                ctx.globalAlpha = opacity;
                ctx.fillStyle = star.color;
                ctx.beginPath();

                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;

                const dx = star.x - centerX;
                const dy = star.y - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);

                const speed = speedFactor * (distance / 500);
                const newAngle = angle + speed + 0.001;

                star.x = centerX + Math.cos(newAngle) * distance;
                star.y = centerY + Math.sin(newAngle) * distance;

                // Draw
                ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [starCount, speedFactor, backgroundColor, starColor]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
};

export default Galaxy;
