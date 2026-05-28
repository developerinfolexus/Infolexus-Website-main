import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const DMServiceDetailedList = ({ services }) => {
    return (
        <div className="flex flex-col">
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} overflow-hidden relative group`}
                >
                    <div className="container mx-auto px-6 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/2 w-full">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Decorative Blob */}
                                    <div className={`absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-100 to-purple-100' : 'from-emerald-100 to-cyan-100'} rounded-full blur-3xl opacity-60`}></div>
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="h-0.5 w-12 bg-blue-600 rounded-full"></span>
                                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Service {index + 1}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {service.title}
                                </h2>
                                <h3 className="text-xl text-slate-700 font-medium mb-6 italic">
                                    &quot;{service.subtitle}&quot;
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify whitespace-pre-line">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    {service.features && service.features.slice(0, 6).map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default DMServiceDetailedList;
