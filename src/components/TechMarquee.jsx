import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Code, Server, Globe, Cpu, Shield, Smartphone } from 'lucide-react';

const technologies = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Database },
    { name: 'Kubernetes', icon: Server },
    { name: 'TypeScript', icon: Code },
    { name: 'GraphQL', icon: Globe },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Redis', icon: Database },
    { name: 'Flutter', icon: Smartphone },
    { name: 'TensorFlow', icon: Cpu },
    { name: 'CyberSecurity', icon: Shield },
];

const TechMarquee = () => {
    return (
        <div className="py-10 bg-brand-dark/50 border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />

            <motion.div
                className="flex gap-16 w-max"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {[...technologies, ...technologies].map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div key={index} className="flex items-center gap-3 text-slate-400 group hover:text-brand-blue transition-colors cursor-default">
                            <Icon size={24} className="group-hover:animate-pulse" />
                            <span className="text-xl font-bold tracking-wide">{tech.name}</span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
