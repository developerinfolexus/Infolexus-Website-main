
import React from 'react';

const NeonGradientCard = ({
    children,
    className = "",
    borderGradient = "bg-[conic-gradient(from_0deg,transparent_0_340deg,#06b6d4_360deg)]",
    glowColor = "rgba(6,182,212,0.15)"
}) => {
    return (
        <div className={`relative group isolate ${className} rounded-3xl`}>
            {/* Animated Gradient Border - Conic Gradient Spinning */}
            <div className="absolute inset-[-2px] rounded-3xl overflow-hidden">
                <div className={`absolute inset-[-100%] ${borderGradient} animate-border-spin opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>

            {/* Secondary Static Glow for depth */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-white/10 to-white/5 blur-sm group-hover:blur-md transition-all duration-500 opacity-20" />

            {/* Main Container */}
            <div className="relative h-full w-full rounded-[22px] bg-[#020617] p-1 overflow-hidden">

                {/* Inner Glass Layer */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                {/* Radial Gradient Glow on Hover */}
                <div
                    className="absolute -inset-full top-0 block h-[200%] w-[200%] rotate-90 translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                    style={{ background: `radial-gradient(circle at center, ${glowColor} 0, transparent 55%)` }}
                />

                {/* Content */}
                <div className="relative z-10 h-full w-full rounded-2xl overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NeonGradientCard;
