import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, Code, Cloud, Lock, UserPlus, FileSpreadsheet, HeartHandshake, ArrowRight } from 'lucide-react';
import SpotlightCard from '../react-bits/SpotlightCard';
import DecryptedText from '../react-bits/DecryptedText';
import Galaxy from '../react-bits/Galaxy';

const ServiceList = ({ items }) => (
    <ul className="space-y-3 mt-4 mb-6">
        {items.map((item, index) => (
            <li key={index} className="flex items-center text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 shrink-0" />
                {item}
            </li>
        ))}
    </ul>
);

const InfoluxSpectrum = () => {
    return (
        <section className="py-24 bg-[#080c18] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <Galaxy starCount={2000} speedFactor={0.0002} backgroundColor="#080c18" />
            </div>

            <div className="container mx-auto px-6 md:px-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 font-display"
                    >
                        Infolux <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Spectrum</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Comprehensive solutions tailored to empower your business from technology to talent.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* IT Services Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -500, y: 100, rotate: -30, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="h-full"
                    >
                        <SpotlightCard className="h-full p-8 md:p-10 border-slate-800 bg-slate-900/50 backdrop-blur-xl" spotColor="rgba(34, 211, 238, 0.2)">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400">
                                    <Monitor size={32} />
                                </div>

                                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    <DecryptedText text="IT Services" className="text-white" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Cutting-edge technology solutions designed to streamline operations and drive digital transformation.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4">
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <Code size={16} className="text-cyan-400" />
                                        <span className="text-sm">Custom Dev</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <Cloud size={16} className="text-cyan-400" />
                                        <span className="text-sm">Cloud Solutions</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <Lock size={16} className="text-cyan-400" />
                                        <span className="text-sm">Cybersecurity</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <FileSpreadsheet size={16} className="text-cyan-400" />
                                        <span className="text-sm">Data Analytics</span>
                                    </div>
                                </div>

                                <button className="mt-8 w-full py-3 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group text-sm font-medium">
                                    Explore IT Solutions
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* HR Services Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 500, y: -100, rotate: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                        transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="h-full"
                    >
                        <SpotlightCard className="h-full p-8 md:p-10 border-slate-800 bg-slate-900/50 backdrop-blur-xl" spotColor="rgba(168, 85, 247, 0.2)">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 text-purple-400">
                                    <Users size={32} />
                                </div>

                                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    <DecryptedText text="HR Services" className="text-white" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Building your dream team with precision recruitment and comprehensive human resource management.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4">
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <UserPlus size={16} className="text-purple-400" />
                                        <span className="text-sm">Talent Acquisition</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <FileSpreadsheet size={16} className="text-purple-400" />
                                        <span className="text-sm">Payroll Mgmt</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <HeartHandshake size={16} className="text-purple-400" />
                                        <span className="text-sm">Employee Relations</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-300">
                                        <Users size={16} className="text-purple-400" />
                                        <span className="text-sm">HR Consulting</span>
                                    </div>
                                </div>

                                <button className="mt-8 w-full py-3 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400 transition-all duration-300 flex items-center justify-center gap-2 group text-sm font-medium">
                                    Discover HR Services
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default InfoluxSpectrum;
