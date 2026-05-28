import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Zap, Globe, Clock, Shield } from 'lucide-react';

const PerksAndCulture = () => {
    const perks = [
        {
            icon: Heart,
            title: "Health & Wellness",
            desc: "Comprehensive health insurance and mental wellness programs."
        },
        {
            icon: Zap,
            title: "Growth Fund",
            desc: "Annual budget for courses, conferences, and certifications."
        },
        {
            icon: Clock,
            title: "Flexible Hours",
            desc: "Work when you're most productive. We focus on output, not hours."
        },
        {
            icon: Globe,
            title: "Remote First",
            desc: "Work from anywhere in the world, or check into our hubs."
        },
        {
            icon: Coffee,
            title: "Team Retreats",
            desc: "Quarterly meetups to bond, brainstorm, and recharge."
        },
        {
            icon: Shield,
            title: "Top Gear",
            desc: "Latest MacBook Pros and noise-canceling headphones for everyone."
        }
    ];

    return (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                Why Join Us?
            </h2>
            <p className="text-slate-500 mb-8">
                It&apos;s not just a job. It&apos;s an adventure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {perks.map((perk, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-slate-50 p-5 rounded-2xl border border-slate-100"
                    >
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-3">
                            <perk.icon size={20} />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{perk.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                            {perk.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PerksAndCulture;
