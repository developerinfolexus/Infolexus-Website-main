import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, MessageSquareCode, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
    const ref = useRef(null);
    useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={ref} className="relative w-full overflow-hidden bg-[#081A4A] border-t border-white/5">
            {/* Background Elements - Removed as requested */}

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
                        &quot;The gap between <span className="text-cyan-400 italic px-2">Idea</span> and <span className="text-cyan-400 italic px-2">Impact</span> is Execution.&quot;
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
                            className="group relative px-8 py-4 bg-white text-[#081A4A] font-bold rounded-xl text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="relative flex items-center gap-3">
                                Schedule Technical Discovery
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </span>
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

export default AboutCTA;
