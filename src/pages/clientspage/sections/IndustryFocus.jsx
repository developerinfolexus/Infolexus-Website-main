import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cloud, BrainCircuit, ShoppingCart, UserCheck, CreditCard } from 'lucide-react';

const IndustryFocus = () => {
    const sectors = [
        { name: "SaaS", icon: Cloud, desc: "B2B & B2C Platforms" },
        { name: "Mobile", icon: Smartphone, desc: "iOS & Android Apps" },
        { name: "AI/ML", icon: BrainCircuit, desc: "Intelligent Features" },
        { name: "E-Commerce", icon: ShoppingCart, desc: "DTC Brands" },
        { name: "FinTech", icon: CreditCard, desc: "Neobanking & Payments" },
        { name: "Social", icon: UserCheck, desc: "Community & Networks" },
    ];

    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Where We Shine</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            Building for <br /> Disruptors.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {sectors.map((sector, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="aspect-square rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-4 group cursor-default"
                        >
                            <div className="mb-4 text-slate-400 group-hover:text-indigo-600 transition-colors group-hover:scale-110 duration-300 transform">
                                <sector.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-slate-800">{sector.name}</h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{sector.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryFocus;
