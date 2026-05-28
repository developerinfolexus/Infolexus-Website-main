import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Rocket, Users, ArrowRight } from 'lucide-react';

const Capabilities = () => {
    return (
        <section className="py-24 bg-[#081A4A] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
                <Layers size={400} className="text-white" />
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Core Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">360° Business Solutions</h2>
                    <div className="min-w-[100px] h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full inline-block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {/* IT Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)] hover:-translate-y-2"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.0)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                <Code size={30} strokeWidth={2.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">IT Solutions</h3>
                            <p className="text-cyan-400 font-medium text-xs mb-6 uppercase tracking-widest">Build & Innovate</p>

                            <p className="text-slate-300 leading-relaxed text-sm mb-6 group-hover:text-white/90 transition-colors">
                                We engineer scalable, high-performance software tailored to your specific business needs. From custom web and mobile application development to complex cloud infrastructure.
                            </p>

                            <div
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('openMegaMenu', { detail: { categoryIndex: 0 } }));
                                }}
                                className="flex items-center gap-2 text-cyan-400 font-semibold text-sm cursor-pointer group/link"
                            >
                                <span>Explore Services</span>
                                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Digital Marketing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:-translate-y-2"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.0)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                                <Rocket size={30} strokeWidth={2.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-100 transition-colors">Digital Marketing</h3>
                            <p className="text-orange-400 font-medium text-xs mb-6 uppercase tracking-widest">Grow & Scale</p>

                            <p className="text-slate-300 leading-relaxed text-sm mb-6 group-hover:text-white/90 transition-colors">
                                Drive growth with <strong>Social Media Marketing</strong>, <strong>SEO</strong>, and targeted <strong>Google & Social Ads</strong>. We elevate brands through <strong>Content & Email Marketing</strong>, <strong>Website Optimization</strong>, detailed <strong>Analytics</strong>, and professional <strong>Video Production</strong>.
                            </p>

                            <div
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('openMegaMenu', { detail: { categoryIndex: 1 } }));
                                }}
                                className="flex items-center gap-2 text-orange-400 font-semibold text-sm cursor-pointer group/link"
                            >
                                <span>Explore Services</span>
                                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>

                    {/* HR Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)] hover:-translate-y-2"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.0)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                <Users size={30} strokeWidth={2.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">HR Services</h3>
                            <p className="text-purple-400 font-medium text-xs mb-6 uppercase tracking-widest">Recruit & Manage</p>

                            <p className="text-slate-300 leading-relaxed text-sm mb-6 group-hover:text-white/90 transition-colors">
                                From <strong>Recruitment & Talent Acquisition</strong> to <strong>Staffing Solutions</strong> and <strong>HR Consulting</strong>, we handle it all. We also streamline operations with <strong>Onboarding</strong>, <strong>Payroll Administration</strong>, <strong>Skill Development</strong>, and <strong>Performance Management</strong> support.
                            </p>

                            <div
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('openMegaMenu', { detail: { categoryIndex: 2 } }));
                                }}
                                className="flex items-center gap-2 text-purple-400 font-semibold text-sm cursor-pointer group/link"
                            >
                                <span>Explore Services</span>
                                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
