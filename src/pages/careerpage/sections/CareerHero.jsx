import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../../assets/carrer-hero.png';

const CareerHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src={heroImg}
                    alt="Career at Infolexus"
                    className="w-full h-full object-cover md:object-contain object-right opacity-100 translate-x-0 md:translate-x-32 lg:translate-x-48"
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        We Are Hiring
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Build the Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Of Technology.</span>
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                        Join a team of visionaries, engineers, and creators. We are looking for passionate individuals who want to make a real impact.
                    </p>

                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-3"
                            onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Openings <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CareerHero;
