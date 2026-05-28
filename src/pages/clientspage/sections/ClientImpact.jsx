import React from 'react';
import { motion } from 'framer-motion';

const ClientImpact = () => {
    const metrics = [
        { value: "4 Weeks", label: "Idea to Launch", desc: "Average MVP delivery time" },
        { value: "100%", label: "IP Ownership", desc: "You own every line of code" },
        { value: "Zero", label: "Tech Debt", desc: "Scalable architecture from day one" },
        { value: "24/7", label: "Founder Support", desc: "Direct access to our leads" }
    ];

    return (
        <section className="py-20 bg-[#081A4A]/5 border-y border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {metrics.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                                {item.value}
                            </div>
                            <div className="text-orange-500 font-bold uppercase tracking-wider text-xs mb-2">
                                {item.label}
                            </div>
                            <div className="text-slate-400 font-medium text-sm max-w-[150px] mx-auto leading-tight">
                                {item.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientImpact;
