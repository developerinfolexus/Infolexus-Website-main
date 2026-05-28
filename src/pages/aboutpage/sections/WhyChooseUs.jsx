import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, Award, Zap, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3 block"
                    >
                        Success Driven Partnership
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-8"
                    >
                        Why Choose Infolexus?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl leading-relaxed font-light"
                    >
                        At <strong className="text-slate-900">Infolexus</strong>, we believe that the right blend of <span className="text-blue-600 font-medium">technology</span> and <span className="text-purple-600 font-medium">talent</span> can transform any organization. We take the time to understand your goals, challenges, and long-term vision — allowing us to deliver IT and HR solutions that truly make a difference. Our team is committed to quality, transparency, and timely delivery.
                    </motion.p>
                </div>

                {/* Feature Grid - Bento Box Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Integrated Ecosystem",
                            desc: "Seamlessly blending IT development with HR recruitment for holistic growth.",
                            icon: Layers,
                            color: "bg-blue-50 text-blue-600",
                            delay: 0
                        },
                        {
                            title: "Tailored Strategy",
                            desc: "Customized solutions for startups & enterprises to meet specific business goals.",
                            icon: Target,
                            color: "bg-green-50 text-green-600",
                            delay: 0.1
                        },
                        {
                            title: "Expert Team",
                            desc: "Access to certified developers, HR specialists, and creative marketers.",
                            icon: Award,
                            color: "bg-amber-50 text-amber-600",
                            delay: 0.2
                        },
                        {
                            title: "Cost Efficiency",
                            desc: "Streamline operations and reduce overhead with our unified service model.",
                            icon: Zap,
                            color: "bg-rose-50 text-rose-600",
                            delay: 0.3
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                            className="bg-slate-50 p-8 rounded-3xl hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-default"
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges / SEO Footer Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center pt-10 border-t border-slate-100"
                >
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Trusted Partner For</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["Startups", "SMEs", "Enterprises", "Job Seekers", "Global Brands"].map((badge, i) => (
                            <span key={i} className="px-4 py-2 bg-slate-50 rounded-lg text-slate-600 text-sm font-semibold border border-slate-100 flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-emerald-500" /> {badge}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
