import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Discovery',
        description: 'We dive deep into your business goals, challenges, and requirements to understand the full scope of your vision.',
        icon: Search
    },
    {
        id: '02',
        title: 'Strategy',
        description: 'Our architects design a comprehensive roadmap, selecting the right technologies and architecture for scalability.',
        icon: Lightbulb
    },
    {
        id: '03',
        title: 'Development',
        description: 'Agile development cycles ensure rapid delivery of high-quality code, with regular updates and feedback loops.',
        icon: Code2
    },
    {
        id: '04',
        title: 'Launch & Support',
        description: 'Seamless deployment to production followed by 24/7 monitoring and maintenance to ensure peak performance.',
        icon: Rocket
    }
];

const ProcessTimeline = () => {
    return (
        <div className="py-12 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-sky-200/50 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-sky-200 transition-all duration-500 h-full">
                                <div className="absolute -top-4 left-8 bg-sky-50 px-4 py-1.5 border border-sky-100 rounded-lg text-sky-600 font-mono font-black text-xs tracking-widest">
                                    STEP {step.id}
                                </div>
                                <div className="mb-8 p-4 bg-sky-50 rounded-2xl w-16 h-16 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProcessTimeline;
