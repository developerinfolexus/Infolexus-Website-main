import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import DecryptedText from '../../../components/react-bits/DecryptedText';
import heroBg from '../../../assets/robotic-hands-full.jpg';

const ServicesHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image & Overlays */}
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-slate-950">
                <img
                    src={heroBg}
                    alt="Global Tech Network"
                    className="w-full h-full object-cover object-center opacity-100"
                />
                {/* Full Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-slate-950/80" />
                {/* Gradient for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md font-['Times_New_Roman',_serif]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Global IT Infrastructure & Managed Services
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white leading-tight font-['Times_New_Roman',_serif]">
                        <DecryptedText text="Future-Ready" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" />
                        <br />
                        <span className="text-slate-300">IT Ecosystems.</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-['Times_New_Roman',_serif] tracking-wide">
                        Empowering your business with secure, scalable, and high-performance interconnectivity. We architect the digital backbone of tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                        >
                            Transform Your Infrastructure <ArrowRight size={20} />
                        </Link>
                        <a
                            href="#services-grid"
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-xl transition-all backdrop-blur-sm"
                        >
                            View Solutions
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;
