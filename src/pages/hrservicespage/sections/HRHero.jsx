import React from 'react';
import { motion } from 'framer-motion';
import hrHeroBg from '../../../assets/hr.jpeg';

const HRHero = ({ onEnquire }) => {
    return (
        <section className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={hrHeroBg}
                    alt="HR Services Team"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-900/40"></div> {/* Dark overlay for text readability */}

                {/* Animated Particles/Glow effect (optional) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                        The Job You&apos;ve Always Dreamt <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Is Just One Click Away!</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed mb-10">
                        Leading <b>IT Staffing Solutions</b> & <b>Recruitment company</b>. <br className="hidden md:block" />
                        A trusted <b>IT services company in Coimbatore</b> connecting talent with success.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onEnquire}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-500/30 transition-all text-lg uppercase tracking-wide"
                    >
                        Find Your Dream Job
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HRHero;
