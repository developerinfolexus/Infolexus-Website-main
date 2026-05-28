import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DMServiceSection = ({ title, subtitle, items, id, bgColor = "bg-white", isReversed = false }) => (
    <section id={id} className={`py-24 ${bgColor} overflow-hidden`}>
        <div className="container mx-auto px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-wider">{title}</h2>
                {subtitle && <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{subtitle}</p>}
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-8"></div>
            </motion.div>

            <div className="space-y-32">
                {items.map((item, index) => {
                    // Determine direction based on isReversed prop and item index
                    // If isReversed is true, start with reverse.
                    // If multiple items exist, they will still alternate.
                    const isRow = (index + (isReversed ? 1 : 0)) % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${isRow ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-4`}
                        >
                            <div className="lg:w-1/2 w-full flex justify-center">
                                <motion.div
                                    className="relative w-full max-w-xl"
                                    variants={{
                                        hidden: { opacity: 0, x: isRow ? -100 : 100 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                >
                                    {/* Standardized 'Fixed Background' Look: Blended Image with Gradient Mask */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto object-cover relative z-10"
                                        style={{
                                            maskImage: isRow
                                                ? 'linear-gradient(to right, black 95%, transparent 100%)'
                                                : 'linear-gradient(to left, black 95%, transparent 100%)',
                                            WebkitMaskImage: isRow
                                                ? 'linear-gradient(to right, black 95%, transparent 100%)'
                                                : 'linear-gradient(to left, black 95%, transparent 100%)'
                                        }}
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                className="lg:w-1/2 w-full"
                                variants={{
                                    hidden: { opacity: 0, x: isRow ? 100 : -100 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
                                }}
                            >
                                <h3 className="text-3xl md:text-3xl font-bold text-slate-800 mb-4">{item.title}</h3>
                                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line text-justify mb-6">{item.description}</p>

                                {/* Features List */}
                                {item.features && (
                                    <ul className="space-y-3 mb-8">
                                        {item.features.slice(0, 5).map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-slate-700">
                                                <span className="mr-3 text-blue-500 mt-1">✔</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Explore Service button removed */}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default DMServiceSection;
