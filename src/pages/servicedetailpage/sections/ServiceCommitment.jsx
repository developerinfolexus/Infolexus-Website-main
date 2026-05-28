import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceCommitment = () => {
    const commitments = [
        {
            title: "Expert Consultation",
            description: "We don't just write code. We provide strategic guidance on technology selection, architecture, and long-term scalability to ensure your investment pays off.",
        },
        {
            title: "Agile Development Methodology",
            description: "We adapt to your changing business needs with iterative sprints, ensuring flexibility and rapid delivery of high-value features.",
        },
        {
            title: "Continuous Improvement",
            description: "Your software shouldn't stagnate. We continually refine and enhance your solution based on real user feedback and emerging market trends.",
        },
        {
            title: "Exceptional Customer Support",
            description: "Our relationship doesn't end at deployment. We offer responsive, 24/7 post-launch support to keep your operations running smoothly.",
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        The Infolexus Advantage
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        We are passionate about transforming abstract ideas into robust, market-ready realities. Here is what sets us apart.
                    </p>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-8"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {commitments.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start group p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            {/* Icon Wrapper */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0F265C] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                                </div>
                                {/* Vertical Line */}
                                {index !== commitments.length - 1 && (
                                    <div className="w-0.5 h-full bg-slate-200 my-2 group-hover:bg-blue-200 transition-colors min-h-[40px]"></div>
                                )}
                            </div>

                            <div className="pt-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCommitment;
