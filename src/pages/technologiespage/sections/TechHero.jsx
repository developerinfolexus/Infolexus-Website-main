import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../../assets/robotic-hands-full.jpg';

const TechHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src={heroImg}
                    alt="Advanced Technology"
                    className="w-full h-full object-cover md:object-contain object-right opacity-100"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 80%)'
                    }}
                />
                {/* Gradient Overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Technological Excellence
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Built for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Scale & Velocity.</span>
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                        We don&apos;t just write code. We engineer future-proof solutions using the most advanced and reliable technologies available today.
                    </p>

                    <div className="flex gap-4">
                        <a href="#tech-stack" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/25">
                            Explore Technologies
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechHero;
