import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceHero = ({ service }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Image & Overlays matching Tech/DM Hero style */}
            {/* Background Image & Overlays matching Tech/DM Hero style */}
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-slate-950">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center opacity-100"
                />
                {/* Full Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-slate-950/80" />
                {/* Gradient for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="max-w-4xl">
                    {/* Back to Services link removed */}

                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Service Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                            {service.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
                            <Motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-3"
                            >
                                Explore Details <ArrowRight size={20} />
                            </Motion.button>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
