import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud, Code2, Briefcase, Globe, UsersRound, Smartphone, BrainCircuit, Palette, BarChart3, CheckCircle2, Headset, Megaphone } from 'lucide-react';
import Particles from '../../../components/react-bits/Particles';

// Images
import mobileAppImg from '../../../assets/mobile1.jpeg';
import uiuxImg from '../../../assets/uiux2.jpeg';
import customWebImg from '../../../assets/custom.jpeg';
import erpImg from '../../../assets/erp.jpeg';
import dataAnalyticsImg from '../../../assets/dataanalystic.jpeg';
import digitalMarketingImg from '../../../assets/digitalmarketing1.jpeg';
import aiMlImg from '../../../assets/Ai&ml.jpeg';
import webDevImg from '../../../assets/webimage.jpeg';
import cloudImg from '../../../assets/abstract-background-of-digital-technologies-vector-56508182.avif';
import hrImg from '../../../assets/hr.jpeg';
import testingImg from '../../../assets/testing_qa_v2.png';
import itSupportImg from '../../../assets/it_support_247_v2.png';

const Services = [
    { title: 'Mobile App Development', img: mobileAppImg, icon: Smartphone, color: 'from-blue-600 to-indigo-600', desc: "Seamless mobile experiences for iOS and Android.", link: "/services/ma-01" },
    { title: 'Custom Web Application', img: customWebImg, icon: Globe, color: 'from-emerald-500 to-teal-500', desc: "Scalable, high-performance web solutions.", link: "/services/cw-02" },
    { title: 'Enterprise Solutions (ERP/CRM)', img: erpImg, icon: Briefcase, color: 'from-slate-700 to-gray-800', desc: "Streamline operations with custom ERP & CRM.", link: "/services/es-03" },
    { title: 'AI & Machine Learning', img: aiMlImg, icon: BrainCircuit, color: 'from-violet-600 to-purple-600', desc: "Intelligent automation and data-driven insights.", link: "/services/ai-04" },
    { title: 'UI/UX Design', img: uiuxImg, icon: Palette, color: 'from-pink-500 to-rose-500', desc: "Create user experiences that captivate and engage.", link: "/services/ui-05" },
    { title: 'Data Analytics', img: dataAnalyticsImg, icon: BarChart3, color: 'from-orange-500 to-amber-500', desc: "Turn raw data into actionable business intelligence.", link: "/services/da-06" },
    { title: 'Infrastructure & Cloud', img: cloudImg, icon: Cloud, color: 'from-cyan-500 to-blue-500', desc: "Secure, scalable cloud infrastructure management.", link: "/services/ic-07" },
    { title: 'Testing & QA', img: testingImg, icon: CheckCircle2, color: 'from-lime-500 to-green-600', desc: "Ensure flawless performance with rigorous testing.", link: "/services/qa-08" },
    { title: 'Web Development', img: webDevImg, icon: Code2, color: 'from-blue-500 to-cyan-500', desc: "Modern websites built for speed and conversion.", link: "/services/wd-09" },
    { title: 'IT Support (24/7)', img: itSupportImg, icon: Headset, color: 'from-red-500 to-orange-500', desc: "Round-the-clock support for uninterrupted operations.", link: "/services/it-10" },
    { title: 'Digital Marketing', img: digitalMarketingImg, icon: Megaphone, color: 'from-rose-500 to-pink-600', desc: "Boost your brand presence and drive growth.", link: "/services/dm-11" },
    { title: 'HR Services', img: hrImg, icon: UsersRound, color: 'from-purple-600 to-indigo-600', desc: "End-to-end recruitment and workforce solutions.", link: "/hr-services" }
];

const DualAdvantageSection = () => {
    return (
        /* ========================================
             WHY INFOLEXUS: DUAL ADVANTAGE
        ========================================
        */
        <section id="our-services" className="py-12 md:py-24 bg-white overflow-hidden relative">
            {/* Full Width Particles Background */}
            <div className="absolute inset-0 z-0">
                <Particles particleCount={150} particleColor="rgba(15, 23, 42, 0.1)" lineColor="rgba(15, 23, 42, 0.05)" />
            </div>

            {/* Content Removed - Background Retained */}
            <div className="container mx-auto px-6 relative z-10 py-8 md:py-16">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Futures</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        We provide top-tier <b>software development services</b> and elite talent to deliver high-impact solutions that redefine what&apos;s possible.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    <style>{`
                        .perspective-1000 { perspective: 1000px; }
                        .transform-style-3d { transform-style: preserve-3d; }
                        .backface-hidden { backface-visibility: hidden; }
                        .rotate-y-180 { transform: rotateY(180deg); }
                        .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
                    `}</style>
                    {Services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[280px] w-full perspective-1000 cursor-pointer z-0 hover:z-50"
                        >
                            <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180 group-hover:scale-115 shadow-xl hover:shadow-[0_0_60px_rgba(6,182,212,0.9)] rounded-2xl border border-white/10 group-hover:border-white/30"
                            >

                                {/* --- FRONT FACE --- */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-slate-900">
                                    {/* Main Image - Fully Visible - No Tint */}
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Bottom Shadow for Text Readability Only */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />



                                    {/* Title (Always Visible on Front) */}
                                    <div className="absolute bottom-4 left-5 right-5">
                                        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{service.title}</h3>
                                        <div className={`h-1 w-10 bg-gradient-to-r ${service.color} rounded-full mt-1.5`}></div>
                                    </div>
                                </div>

                                {/* --- BACK FACE (Flipped) --- */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-black p-6 flex flex-col justify-center items-center text-center">

                                    {/* Bottom Colored Line (Back Face) */}
                                    <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-700 delay-300 ease-out z-40`} />

                                    {/* Floating Glass Icon (Visible on Back Face) */}
                                    <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-30">
                                        <service.icon className="w-5 h-5 text-white" />
                                    </div>

                                    {/* Background Image (Visible but Darkened) */}
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-0 bg-black/60 z-10" />
                                        {/* Top Light Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent z-10" />
                                        {/* Service Color Tint */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 z-20 mix-blend-overlay`} />
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover opacity-80 grayscale"
                                        />
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className="relative z-20 flex flex-col items-center gap-3">
                                        <h3 className="text-lg font-bold text-white tracking-wide leading-tight">{service.title}</h3>
                                        <p className="text-slate-200 text-xs leading-relaxed font-medium line-clamp-3">
                                            {service.desc}
                                        </p>
                                        <Link to={service.link} className={`px-6 py-2 rounded-full bg-gradient-to-r ${service.color} text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DualAdvantageSection;
