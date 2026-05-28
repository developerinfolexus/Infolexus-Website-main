import React from 'react';
import { Cpu, LineChart, Zap } from 'lucide-react';

const WhyChooseServices = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-black/20 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Digital Transformation",
                            desc: "Modernize processes, customer experience, and business models to stay ahead in a rapidly evolving digital landscape.",
                            icon: Cpu,
                            color: "text-cyan-400",
                            spotColor: "rgba(34, 211, 238, 0.2)"
                        },
                        {
                            title: "Competitive Intelligence",
                            desc: "Gain strategic insights through in-depth market analysis and competitor tracking to make data-driven decisions.",
                            icon: LineChart,
                            color: "text-emerald-400",
                            spotColor: "rgba(52, 211, 153, 0.2)"
                        },
                        {
                            title: "Operational Excellence",
                            desc: "Streamline workflows, eliminate waste, and increase productivity with optimized operational frameworks.",
                            icon: Zap,
                            color: "text-purple-400",
                            spotColor: "rgba(192, 132, 252, 0.2)"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="h-full bg-white/5 rounded-3xl border border-white/50 hover:bg-white/10 transition-colors duration-300">
                            <div className="p-8 h-full flex flex-col relative z-20">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-3xl ${feature.color}`}>
                                    <feature.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseServices;
