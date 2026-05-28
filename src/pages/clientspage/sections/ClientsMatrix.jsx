import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../../../data/services';

const ClientsMatrix = () => {
    const itServices = services.filter(s => s.category === 'IT Services');
    const [activeService, setActiveService] = useState(0);

    return (
        <section id="services-grid" className="py-24 relative bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-violet-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-pulse">
                            {"/// CAPABILITY_MATRIX_INIT"}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600">Capabilities.</span>
                        </h2>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            Advanced digital capabilities engineered for enterprise scalability and performance.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                    {/* LEFT: Interactive Menu */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-1 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
                        <style>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                            .scrollbar-hide {
                                -ms-overflow-style: none;
                                scrollbar-width: none;
                            }
                        `}</style>
                        {itServices.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`group relative text-left p-4 md:p-5 rounded-2xl transition-all duration-300 border ${activeService === index
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 border-transparent shadow-xl shadow-violet-500/30 scale-100 z-10'
                                    : 'bg-white border-slate-100 hover:border-violet-200 hover:shadow-lg scale-95 opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Icon in Menu */}
                                        <div className={`p-3 rounded-xl transition-colors ${activeService === index ? 'bg-white text-violet-600 shadow-sm' : 'bg-slate-50 text-slate-500 group-hover:bg-violet-50 group-hover:text-violet-600'}`}>
                                            <service.icon size={20} />
                                        </div>

                                        <div className="flex flex-col">
                                            <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${activeService === index ? 'text-violet-200' : 'text-slate-400'}`}>
                                                SECTOR // {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <h3 className={`text-base md:text-lg font-bold leading-tight ${activeService === index ? 'text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {activeService === index && (
                                        <div className="text-white bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                            <ArrowRight size={16} />
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: Dynamic Preview Panel - Mockup Style */}
                    <div className="w-full lg:w-2/3 sticky top-24">
                        {/* Device Frame */}
                        <div className="relative mx-auto w-full shadow-2xl">
                            {/* Lid/Screen Outline */}
                            <div className="relative bg-[#1a1b1e] rounded-[1.5rem] p-3 shadow-2xl border border-slate-800">
                                {/* Camera Notch Area */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-[#1a1b1e] rounded-b-xl z-20 flex justify-center items-center border-x border-b border-slate-800/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f1012] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
                                </div>

                                {/* Screen Inner */}
                                <div className="relative overflow-hidden rounded-xl bg-slate-900 h-[500px] md:h-[600px] w-full group isolate">
                                    {/* Inner content wrapper to handle AnimatePresence key changes cleanly */}
                                    <motion.div
                                        key={activeService}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >

                                        {/* Active Service Data Lookup */}
                                        {(() => {
                                            const currentService = itServices[activeService];
                                            const serviceResources = {
                                                'Mobile Application': { img: '/images/services/mobile-app.png', tags: ['Flutter', 'iOS', 'Android'], code: 'MA-01' },
                                                'Custom Web Application': { img: '/images/services/software.png', tags: ['MERN', 'Python', 'Vue'], code: 'CW-02' },
                                                'Enterprise Solutions (ERP/CRM)': { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', tags: ['SAP', 'Salesforce', 'Oracle'], code: 'ES-03' },
                                                'AI & Machine Learning': { img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80', tags: ['TF', 'OpenAI', 'PyTorch'], code: 'AI-04' },
                                                'UI/UX Design': { img: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80', tags: ['Figma', 'Adobe', 'Proto'], code: 'UI-05' },
                                                'Data Analytics': { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', tags: ['Big Data', 'BI', 'Tableau'], code: 'DA-06' },
                                                'Infrastructure & Cloud': { img: '/images/services/cloud.png', tags: ['AWS', 'Azure', 'K8s'], code: 'IC-07' },
                                                'Testing & QA': { img: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80', tags: ['Selenium', 'Jest'], code: 'QA-08' },
                                                'Web Development': { img: '/images/services/web-dev.png', tags: ['React', 'Next.js', 'Tailwind'], code: 'WD-09' },
                                                'IT Support': { img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80', tags: ['24/7', 'Helpdesk'], code: 'IT-10' },
                                                'Digital Marketing': { img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80', tags: ['SEO', 'Ads', 'Social'], code: 'DM-11' }
                                            }[currentService.title] || { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', tags: ['Tech', 'Innovation'], code: 'EX-00' };

                                            return (
                                                <>
                                                    {/* Screen Content - Image & Info */}
                                                    <div className="absolute inset-0">
                                                        <img
                                                            src={serviceResources.img}
                                                            alt={currentService.title}
                                                            className="w-full h-full object-cover opacity-100"
                                                        />
                                                        {/* Gradient Overlay for Readability */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                                                    </div>

                                                    {/* Content Overlay */}
                                                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start z-10 w-full">

                                                        {/* Top Info Bar */}
                                                        <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                                                            <div className="backdrop-blur-md bg-black/30 border border-white/10 p-2 pr-4 rounded-full flex items-center gap-3">
                                                                <div className="bg-violet-600 p-1.5 rounded-full text-white">
                                                                    <currentService.icon size={16} />
                                                                </div>
                                                                <div>
                                                                    <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase block leading-none mb-0.5">PROTOCOL</span>
                                                                    <span className="text-white font-mono font-bold text-sm leading-none">{serviceResources.code}</span>
                                                                </div>
                                                            </div>

                                                            <div className="flex gap-1.5">
                                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                                            </div>
                                                        </div>

                                                        <div className="w-full">
                                                            <motion.h3
                                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                                                                className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg"
                                                            >
                                                                {currentService.title}
                                                            </motion.h3>

                                                            <motion.p
                                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                                                className="text-base md:text-lg text-slate-300 mb-6 max-w-xl leading-relaxed font-medium drop-shadow-md border-l-2 border-violet-500 pl-4"
                                                            >
                                                                {currentService.description}
                                                            </motion.p>

                                                            <motion.div
                                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                                                className="flex items-center justify-between w-full"
                                                            >
                                                                <div className="flex flex-wrap gap-2">
                                                                    {serviceResources.tags.map(tag => (
                                                                        <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/10 text-slate-200 font-medium rounded-lg text-xs backdrop-blur-sm">
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </div>

                                                                <Link to={`/services/${serviceResources.code.toLowerCase()}`} className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-violet-50 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 group">
                                                                    <span>Specifications</span>
                                                                    <ArrowRight size={18} className="text-violet-600 group-hover:translate-x-1 transition-transform" />
                                                                </Link>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })()}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Laptop Base Reflection/Shadow (Subtle) */}
                            <div className="absolute -bottom-4 left-[2%] right-[2%] h-4 bg-black/20 blur-xl rounded-[100%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsMatrix;
