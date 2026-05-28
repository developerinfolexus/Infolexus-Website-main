import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, MessageSquare, Laptop, Globe } from 'lucide-react';

const GlobalFootprint = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 p-8 flex flex-col justify-center">
                            {/* Abstract Graphic representing connection */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Slack Connect</h3>
                                    <p className="text-xs text-slate-500">Instant communication channel</p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 mt-8"
                                >
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4">
                                        <Laptop size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Daily Standups</h3>
                                    <p className="text-xs text-slate-500">Sync with your squad daily</p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-4">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Timezone Align</h3>
                                    <p className="text-xs text-slate-500">Overlap hours guaranteed</p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 mt-8"
                                >
                                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-4">
                                        <Wifi size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Remote First</h3>
                                    <p className="text-xs text-slate-500">Work from anywhere</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Borderless Collaboration</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                            Your Team, <br /> Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital.</span>
                        </h2>
                        <p className="text-slate-500 font-medium leading-relaxed mb-8 text-lg">
                            We ditched the corporate boardrooms for agile remote workflows. Whether you&apos;re in San Francisco or Singapore, we work as if we&apos;re sitting right next to you.
                        </p>

                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                            No layers of management. No &quot;let me check with my supervisor&quot;. Just direct access to the engineers building your future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalFootprint;
