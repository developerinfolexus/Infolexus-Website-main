import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Import local assets for Services page
import strategyImg from '../assets/process-icons/strategy.png';
import executionImg from '../assets/process-icons/execution.png';

// New relatable images
import whyDataImg from '../assets/why-data.png';
import launchSupportImg from '../assets/delivery&support.png';

const steps = [
    {
        id: '01',
        title: 'Discovery',
        subtitle: 'The Insight Phase',
        description: 'We dive deep into your business goals, challenges, and requirements to understand the full scope of your vision.',
        image: whyDataImg,
        color: 'from-blue-500 to-cyan-400',
        glow: 'rgba(34, 211, 238, 0.4)',
        features: ['Business Audit', 'Requirements Gathering', 'Vision Alignment']
    },
    {
        id: '02',
        title: 'Strategy',
        subtitle: 'Architectural Blueprint',
        description: 'Our architects design a comprehensive roadmap, selecting the right technologies and architecture for scalability.',
        image: strategyImg,
        color: 'from-indigo-500 to-purple-400',
        glow: 'rgba(168, 85, 247, 0.4)',
        features: ['Tech Stack Selection', 'Scalable Roadmap', 'Architecture Design']
    },
    {
        id: '03',
        title: 'Development',
        subtitle: 'Agile Engineering',
        description: 'Agile development cycles ensure rapid delivery of high-quality code, with regular updates and feedback loops.',
        image: executionImg,
        color: 'from-purple-500 to-pink-500',
        glow: 'rgba(236, 72, 153, 0.4)',
        features: ['Rapid Sprints', 'Code Excellence', 'Weekly Demos']
    },
    {
        id: '04',
        title: 'Launch & Support',
        subtitle: 'Peak Performance',
        description: 'Seamless deployment to production followed by 24/7 monitoring and maintenance to ensure peak performance.',
        image: launchSupportImg,
        color: 'from-orange-500 to-rose-500',
        glow: 'rgba(249, 115, 22, 0.4)',
        features: ['Global Deployment', '24/7 Monitoring', 'Ongoing Support']
    }
];

const ModernProcessPath = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative max-w-6xl mx-auto py-20 px-4">
            {/* Central Guide Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-slate-100 -translate-x-1/2 hidden lg:block rounded-full" />
            <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 to-orange-500 -translate-x-1/2 hidden lg:block origin-top z-10 rounded-full"
                style={{ scaleY }}
            />

            <div className="space-y-40">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={step.id} className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                            {/* Connector Node */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex flex-col items-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12 }}
                                    className={`w-6 h-6 rounded-full bg-white border-4 border-slate-900 z-20 shadow-[0_0_20px_${step.glow}]`}
                                />
                                <div className="h-full w-[1px] bg-slate-200/50" />
                            </div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -60 : 60, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right lg:order-1' : 'lg:order-2 lg:text-left'}`}
                            >
                                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-xl bg-white shadow-sm border border-slate-100 text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} animate-pulse`} />
                                    PHASE {step.id}
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase italic underline decoration-slate-100 underline-offset-8">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 font-bold text-base mb-6 tracking-wide uppercase">{step.subtitle}</p>
                                <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                                    {step.description}
                                </p>

                                <div className={`flex flex-wrap gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                    {step.features.map(f => (
                                        <span key={f} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[12px] font-bold text-slate-500 hover:text-white hover:bg-slate-900 transition-all cursor-default">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Visual Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -10 : 10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                viewport={{ once: true }}
                                className={`w-full lg:w-5/12 flex ${isEven ? 'lg:justify-start lg:order-2' : 'lg:justify-end lg:order-1'}`}
                            >
                                <div className="relative group perspective-1000">
                                    <div className="relative w-full max-w-[220px] aspect-square rounded-[2rem] bg-white border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] group-hover:-translate-y-4 overflow-hidden">

                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

                                        <motion.img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover relative z-10 transition-transform duration-700 scale-110 group-hover:scale-125"
                                        />

                                        <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 flex items-center justify-center text-xs font-black text-slate-400 group-hover:text-slate-900 transition-colors z-20 shadow-sm">
                                            {step.id}
                                        </div>

                                        <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${step.color} z-20`} />
                                    </div>

                                    <div className={`absolute -inset-8 rounded-[4rem] bg-gradient-to-r ${step.color} blur-3xl opacity-10 group-hover:opacity-20 transition-opacity -z-10`} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ModernProcessPath;
