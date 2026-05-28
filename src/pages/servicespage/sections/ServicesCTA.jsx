import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, MessageSquareCode, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
    const ref = useRef(null);
    useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={ref} className="relative w-full overflow-hidden bg-slate-950 border-t border-white/5">
            {/* Background Elements - Full Width */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-slate-950 to-slate-950 blur-3xl opacity-60" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-24 text-center">
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 left-4 md:left-[10%] text-[8rem] md:text-[12rem] leading-none font-serif text-brand-blue/5 select-none pointer-events-none">&quot;</div>

                <div className="max-w-5xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-wider mb-6 uppercase"
                    >
                        <Sparkles size={12} />
                        Start Your Transformation
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 [word-spacing:15px] leading-[1.1]"
                    >
                        &quot;The gap between Idea and Impact
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 italic pr-2"> is Execution.</span>&quot;
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    >
                        Don&apos;t let your vision stay a concept. We engineer the software that defines your industry&apos;s future.
                        <span className="block mt-2 text-white font-medium">Scalable. Secure. Delivered at Speed.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            to="/contact"
                            className="group relative px-8 py-4 bg-white text-brand-blue font-bold rounded-xl text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="relative flex items-center gap-3">
                                Schedule Technical Discovery
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>

                        <Link
                            to="/about"
                            className="px-6 py-4 text-slate-400 hover:text-white font-medium transition-colors flex items-center gap-2 group"
                        >
                            Why Infolexus
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue group-hover:animate-pulse" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="absolute -top-20 -right-20 p-12 opacity-5 pointer-events-none">
                <MessageSquareCode size={400} strokeWidth={0.5} />
            </div>
        </section>
    );
};

export default ServicesCTA;
