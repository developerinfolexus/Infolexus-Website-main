import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutTeamImage from '../../../assets/about-team-collaboration.png';

const WhoWeAre = () => {
    return (
        <section className="py-20 relative z-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                                We Are The Architects of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Transformation</span>
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                <span className="font-semibold text-slate-800">Infolexus</span> is more than just an IT company—we are a catalyst for change. By fusing <span className="font-semibold text-blue-600">cutting-edge technology</span> with <span className="font-semibold text-purple-600">human-centric talent solutions</span>, we empower businesses to navigate the complexities of the digital age with confidence and agility.
                            </p>
                            <p>
                                Our holistic approach bridges the gap between ambitious vision and tangible reality. From engineering scalable <strong className="text-slate-800">Enterprise Software</strong> to curating high-performance teams through our <strong className="text-slate-800">Staffing & Recruitment</strong> expertise, we don&apos;t just deliver services—we deliver growth, efficiency, and a competitive edge that lasts.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link to="/clients" className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/30">
                                <span className="relative z-10 flex items-center gap-2">
                                    Work We Deliver <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side: Professional Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Professional Team Collaboration Image */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white z-10 group max-h-[500px]">
                            <img
                                src={aboutTeamImage}
                                alt="Infolexus Team - Digital Transformation Experts"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Subtle Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-70"></div>
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-100 rounded-full blur-3xl -z-10 opacity-70"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
