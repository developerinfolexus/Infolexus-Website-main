import React, { useEffect, useRef, useState } from 'react';

const WavyBackground = ({
    imageSrc,
    amplitude = 15,
    frequency = 0.005,
    speed = 0.02,
    resolution = 1, // 1 = 1px strips (highest quality), 5 = 5px strips (faster)
    waveColor // Optional color to draw visible wave lines
}) => {
    const canvasRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageRef = useRef(new Image());

    useEffect(() => {
        const img = imageRef.current;
        img.src = imageSrc;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [imageSrc]);

    useEffect(() => {
        if (!imageLoaded) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const img = imageRef.current;
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth * dpr;
                canvas.height = canvas.parentElement.offsetHeight * dpr;
                canvas.style.width = `${canvas.parentElement.offsetWidth}px`;
                canvas.style.height = `${canvas.parentElement.offsetHeight}px`;
            } else {
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;
            }
            ctx.scale(dpr, dpr);
        };

        const render = () => {
            if (!canvas.width || !canvas.height) return;

            const dpr = window.devicePixelRatio || 1;
            // Logical dimensions (what we draw in)
            const cw = canvas.width / dpr;
            const ch = canvas.height / dpr;

            ctx.clearRect(0, 0, cw, ch);

            // Calculate "Cover" dimensions
            const iw = img.width;
            const ih = img.height;

            const scale = Math.max(cw / iw, ch / ih);
            const scaledW = iw * scale;
            const scaledH = ih * scale;
            const offsetX = (cw - scaledW) / 2;
            const offsetY = (ch - scaledH) / 2;

            // Draw strips
            for (let x = 0; x < cw; x += resolution) {
                // Calculate wave displacement (Vertical)
                // Sum of sines for "Silk" fluid feel
                const wave1 = Math.sin(x * frequency + time);
                const wave2 = Math.sin(x * (frequency * 2.5) + time * 0.7);
                const displacement = (wave1 + wave2 * 0.5) * amplitude;

                const sy = 0; // Source Y (full height)
                const sHeight = ih; // Source height

                // Map screen X back to Image X
                const sx = (x - offsetX) / scale;
                const sWidth = resolution / scale;

                // Optimization: Don't draw if source is out of bounds
                if (sx + sWidth < 0 || sx > iw) continue;

                // Dest rect
                const dx = x;
                const dy = offsetY + displacement; // Apply wave to Y position
                const dWidth = resolution;
                const dHeight = scaledH;

                ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            }

            // Draw visible wave lines if color provided
            if (waveColor) {
                ctx.strokeStyle = waveColor;
                ctx.lineWidth = 2;

                // Draw a few parallel waves for effect
                [0, 50, 100].forEach((lineOffset, i) => {
                    ctx.beginPath();
                    ctx.globalAlpha = 1 - (i * 0.3); // Fade out secondary waves

                    for (let x = 0; x < cw; x += 5) { // Step 5px for line smoothness
                        const wave1 = Math.sin(x * frequency + time + (i * 0.5));
                        const wave2 = Math.sin(x * (frequency * 2.5) + time * 0.7 + (i * 0.5));
                        const displacement = (wave1 + wave2 * 0.5) * amplitude;

                        const y = (ch / 2) + displacement + lineOffset - 50; // Center vertically somewhat
                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                });
            }

            time += speed;
            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [imageLoaded, amplitude, frequency, speed, resolution, waveColor]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
        />
    );
};

export default WavyBackground;
