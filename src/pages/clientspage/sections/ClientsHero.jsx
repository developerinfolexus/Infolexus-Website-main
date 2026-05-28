import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../../../assets/client-hero.jpeg';

const ClientsHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src={heroBg}
                    alt="Startup Growth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A3FF] text-xs font-bold tracking-widest uppercase mb-8">
                            <Rocket size={12} />
                            Your Growth Partner
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-white">
                            We Build Software That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-cyan-400">Drives Real Results.</span>
                        </h1>

                        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            Infolexus is the robust development partner you&apos;ve been looking for. We deliver scalable, stunning, and efficient digital products tailored to your business goals.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#00A3FF] text-white font-bold rounded-xl text-lg shadow-lg shadow-[#00A3FF]/30 hover:bg-[#008ECC] hover:shadow-[#00A3FF]/50 transition-all gap-3"
                                >
                                    Start Your Project <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a
                                    href="#consultation-form"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
                                >
                                    Book Free Consultation
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClientsHero;
