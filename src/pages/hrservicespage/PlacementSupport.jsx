import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { hrServiceDetails } from '../../data/hrServiceDetails';
import InquiryModal from '../../components/ui/InquiryModal';

import placementHeroBg from '../../assets/placement_hero.png';
import ClientMarquee from '../../components/ui/ClientMarquee';

const PlacementSupport = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Keys for Placement Support Services
    const serviceKeys = [
        'job-seeker',
        'resume-optimization',
        'interview-prep',
        'career-guidance'
    ];

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-200">
            {/* HERO SECTION */}
            <div className="relative bg-[#081A4A] py-32 lg:py-48 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={placementHeroBg}
                        alt="Placement Support"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 to-slate-950/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A4A] via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
                    >
                        Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-500">Support</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Comprehensive career guidance and placement assistance to launch your professional journey.
                    </motion.p>
                </div>
            </div>

            {/* ZIG-ZAG CONTENT SECTION */}
            <div className="py-24 space-y-24 md:space-y-32 container mx-auto px-4 md:px-6">
                {serviceKeys.map((key, index) => {
                    const data = hrServiceDetails[key];
                    const isEven = index % 2 === 0;

                    if (!data) return null;

                    return (
                        <div id={key} key={key} className="flex flex-col gap-10 mb-32 last:mb-0">

                            {/* Centered Heading Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center max-w-4xl mx-auto space-y-4 px-4"
                            >
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                                        Support {index + 1}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                    {data.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto">
                                    {data.subtitle}
                                </p>
                            </motion.div>

                            {/* Zig-Zag Content Section */}
                            <div className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Text Content (Description & Actions) */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex-1 space-y-8 text-left"
                                >
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {data.description}
                                    </p>

                                    <ul className="space-y-4 pt-2">
                                        {data.features && data.features.slice(0, 5).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-700 flex items-center justify-center shrink-0 shadow-sm">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <span className="text-slate-700 font-medium text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="inline-flex items-center gap-3 text-white bg-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 group cursor-pointer"
                                        >
                                            Apply Now
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Image Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex-1 relative w-full"
                                >
                                    {/* White Card Container */}
                                    <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl relative rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
                                        <div className="relative rounded-[2rem] overflow-hidden h-[300px] md:h-[380px] w-full group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                                            {data.image ? (
                                                <img
                                                    src={data.image}
                                                    alt={data.title}
                                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                                    <span className="text-slate-400">No Image Available</span>
                                                </div>
                                            )}

                                            {/* Floating Badge */}
                                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white px-5 py-3 rounded-2xl shadow-xl z-20">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="text-green-500">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                                            <polyline points="17 6 23 6 23 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IMPACT</span>
                                                </div>
                                                <p className="text-slate-900 font-bold text-base md:text-lg leading-tight">Career Accelerated</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CLIENT MARQUEE SECTION */}
            <ClientMarquee />

            {/* CTA SECTION */}
            <div className="bg-[#081A4A] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Kickstart Your Career</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                        Join our placement program and find the perfect role for your skills.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all cursor-pointer"
                    >
                        Get Placed Today
                    </button>
                </div>
            </div>

            {/* Inquiry Modal */}
            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                type="placement"
            />
        </div>
    );
};

export default PlacementSupport;
