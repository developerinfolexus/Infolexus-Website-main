import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Briefcase } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-20 -left-20 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Mission Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-5 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Target size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-loose font-light">
                            To empower businesses with <strong className="font-semibold text-cyan-700">innovative IT solutions</strong> and <strong className="font-semibold text-cyan-700">reliable HR services</strong>, while creating meaningful opportunities for people to grow, succeed, and thrive. We are committed to delivering quality, building trust, and adding real value to every organization we serve through ethical practices and technological excellence.
                        </p>
                    </motion.div>

                    {/* Vision Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-5 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Globe size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Vision</h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-loose font-light">
                            To become a <strong className="font-semibold text-purple-700">leading global partner</strong> for technology and talent solutions — recognized for our integrity, innovation, and people-first approach, shaping a future where businesses and individuals achieve their full potential in a connected world.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MissionVision;
