import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../../../assets/Gemini_Generated_Image_8m8ln58m8ln58m8l.png';

const AboutHero = () => {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white perspective-1000">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src={heroBg}
                    alt="Global IT and HR Services Network"
                    className="w-full h-full object-cover opacity-50 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#040e4b]/90 via-[#040e4b]/60 to-[#040e4b]/95" />
                {/* Added overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs md:text-sm font-semibold tracking-wider uppercase shadow-lg shadow-cyan-500/10">
                        Leading IT & HR Solutions Provider
                    </div>

                    {/* H1 Title with SEO Keywords */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-2xl">
                        Transforming Businesses with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient-x">
                            Intelligent Tech & Top Talent
                        </span>
                    </h1>

                    {/* SEO-Optimized Description */}
                    <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md mb-10">
                        We empower businesses with <strong className="text-white font-medium">Scalable Tech</strong>, <strong className="text-white font-medium">Expert Recruitment</strong>, and <strong className="text-white font-medium">Digital Marketing</strong>—bridging the gap between innovation and workforce excellence.
                    </p>

                    {/* Contact Button */}
                    <div className="flex justify-center">
                        <Link
                            to="/contact"
                            className="group relative z-50 inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-cyan-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
                        >
                            <span className="relative flex items-center gap-2">
                                Get in Touch
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                    </div>

                    {/* Floating Decorative Elements (Abstract Shapes) */}
                    <motion.div
                        className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
                        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"
                        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
