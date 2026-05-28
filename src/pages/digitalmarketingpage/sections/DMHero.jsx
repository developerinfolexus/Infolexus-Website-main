import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../../assets/digitalmarketing1.jpeg'; // Reusing related image

const DMHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Image & Overlays matching TechHero style */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src={heroBg}
                    alt="Digital Marketing Excellence"
                    className="w-full h-full object-cover md:object-contain object-right opacity-100"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 80%)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Digital Dominance
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Dominate the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">Digital Landscape.</span>
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                        Top-rated <b>Digital Marketing company in India</b> specializing in <b>SEO, SMO, & PPC</b>. We use data-driven strategies to elevate your brand.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DMHero;
