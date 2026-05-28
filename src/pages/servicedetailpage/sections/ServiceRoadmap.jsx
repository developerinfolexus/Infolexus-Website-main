import React from 'react';
import { motion } from 'framer-motion';

const themes = {
    it: {
        label: "Workflow",
        labelColor: "text-violet-600",
        numberBg: "bg-slate-900 border-white",
        lineColor: "bg-slate-100"
    },
    dm: {
        label: "Strategic Process",
        labelColor: "text-orange-500",
        numberBg: "bg-gradient-to-r from-orange-500 to-pink-500 border-white",
        lineColor: "bg-orange-100"
    },
    hr: {
        label: "Recruitment Cycle",
        labelColor: "text-emerald-600",
        numberBg: "bg-emerald-600 border-white",
        lineColor: "bg-emerald-50"
    },
    training: {
        label: "Learning Path",
        labelColor: "text-blue-600",
        numberBg: "bg-blue-600 border-white",
        lineColor: "bg-blue-100"
    }
};

const ServiceRoadmap = ({ service, variant = 'it' }) => {
    const theme = themes[variant] || themes.it;
    const steps = service.process || service.roadmap || [];

    if (steps.length === 0) return null;

    return (
        <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className={`${theme.labelColor} font-bold tracking-widest uppercase text-xs mb-3 block`}>{theme.label}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900">Execution Roadmap</h2>
                </div>

                <div className="max-w-7xl mx-auto relative">
                    {/* Connecting Line - positioned at badge level */}
                    <div className="absolute top-[80px] left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 hidden md:block" style={{ zIndex: 0 }}></div>

                    <div className={`grid grid-cols-1 ${steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-6 md:gap-8 relative`} style={{ zIndex: 1 }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                            >
                                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-6 text-white shadow-lg bg-gradient-to-r from-orange-500 to-pink-500 relative z-10">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed text-center">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRoadmap;
