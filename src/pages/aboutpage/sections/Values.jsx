import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Users } from 'lucide-react';

const Values = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-slate-400 font-bold tracking-widest uppercase text-sm">Core Principles</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Innovation", desc: "Constantly updating with the latest tech trends.", icon: Briefcase },
                        { title: "Integrity", desc: "Honest and transparent recruitment and development processes.", icon: ShieldCheck },
                        { title: "People-Centric", desc: "We value humans as much as we value code.", icon: Users }
                    ].map((val, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-slate-200 hover:border-brand-blue transition-all"
                        >
                            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-6 mx-auto">
                                <val.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-center text-slate-900 mb-3">{val.title}</h3>
                            <p className="text-slate-600 text-center">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
