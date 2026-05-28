import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Repeat, Clock, ChevronDown, Check } from 'lucide-react';

const EngagementModels = () => {
    const [activeModel, setActiveModel] = useState(0);

    const models = [
        {
            title: "The MVP Sprint",
            icon: Rocket,
            description: "Got an idea? We build your Minimum Viable Product in weeks, not months. Perfect for validating your concept and pitching to investors.",
            features: ["Rapid Prototyping", "Core Feature Focus", "User-Centric UI/UX", "Launch-Ready Code"]
        },
        {
            title: "Dedicated Innovation Team",
            icon: Repeat,
            description: "An extension of your in-house team. We provide a full squad of engineers, designers, and product managers fully dedicated to your long-term success.",
            features: ["Full Lifecycle Management", "Scalable Resources", "Knowledge Retention", "Seamless Integration"]
        },
        {
            title: "CTO on Demand",
            icon: Clock,
            description: "Strategic technical leadership without the full-time equity cost. We guide your architecture, stack choices, and hiring roadmap.",
            features: ["Tech Strategy", "Architecture Review", "Security Audit", "Hiring Assistance"]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Flexible Engagement</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                        Built for Startups.
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col gap-6 relative">
                        {models.map((model, idx) => (
                            <motion.div
                                key={idx}
                                initial={false}
                                animate={{
                                    backgroundColor: activeModel === idx ? "rgb(255 255 255)" : "rgba(255, 255, 255, 0.5)",
                                    boxShadow: activeModel === idx ? "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)" : "none",
                                    scale: activeModel === idx ? 1.02 : 1
                                }}
                                className={`rounded-3xl overflow-hidden cursor-pointer border ${activeModel === idx ? 'border-orange-100' : 'border-slate-200'} transition-all duration-300`}
                                onClick={() => setActiveModel(idx)}
                            >
                                <div className="p-8 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${activeModel === idx ? 'bg-orange-500 text-white' : 'bg-white border border-slate-100 text-slate-400'}`}>
                                            <model.icon size={26} />
                                        </div>
                                        <div className="text-left">
                                            <h3 className={`text-2xl font-bold ${activeModel === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                                                {model.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeModel === idx ? 180 : 0 }}
                                        className="text-slate-400"
                                    >
                                        <ChevronDown />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {activeModel === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8 md:pl-[6.5rem]">
                                                <p className="text-slate-600 mb-8 max-w-2xl text-lg leading-relaxed">
                                                    {model.description}
                                                </p>
                                                <div className="flex flex-wrap gap-4">
                                                    {model.features.map((feat, i) => (
                                                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-800 rounded-full text-sm font-bold border border-orange-100">
                                                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                            {feat}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
