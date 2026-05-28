import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 z-0 hidden lg:block" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Title Section */}
                    <div className="lg:w-1/3 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#00A3FF] font-bold tracking-widest uppercase text-sm mb-2 block">Our Evolution</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                Our Journey <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">So Far.</span>
                            </h2>
                            <p className="text-slate-500 text-lg mb-8">
                                From a small team of visionaries to a global IT & HR solutions provider.
                            </p>
                            <div className="h-1 w-24 bg-slate-900 rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* Content Section - Narrative */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-purple-900/5 border border-slate-100 relative"
                        >
                            <span className="absolute -top-6 -left-6 text-9xl text-slate-100 font-black z-0 opacity-50 select-none">&quot;</span>
                            <div className="relative z-10 space-y-6">
                                <p className="text-lg md:text-xl text-slate-700 leading-loose font-light">
                                    <strong className="text-slate-900 font-semibold">Infolexus</strong> began with a simple vision to bridge the gap between innovative technology and talented people. Over time, we have grown into a trusted <strong className="text-blue-600 font-medium">IT and HR services partner</strong>, supporting businesses with reliable solutions and workforce expertise.
                                </p>
                                <p className="text-lg md:text-xl text-slate-700 leading-loose font-light">
                                    Our journey has been shaped by learning, adapting, and continuously improving what we do. From our early beginnings to today, we&apos;ve had the privilege of working with diverse clients and talented professionals, helping them achieve their goals. Every milestone has strengthened our commitment to quality, integrity, and long-term partnerships and this is only the beginning of our story.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
