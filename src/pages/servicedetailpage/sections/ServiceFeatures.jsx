import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const themes = {
    it: {
        label: "Capabilities",
        labelColor: "text-violet-600",
        headingColor: "text-slate-900",
        cardClass: "bg-white border-slate-100 hover:shadow-2xl hover:bg-gradient-to-br hover:from-violet-600 hover:to-indigo-700 hover:-translate-y-2",
        iconBox: "bg-violet-50 text-violet-600 group-hover:bg-white/20 group-hover:text-white",
        titleClass: "text-slate-900 group-hover:text-white",
        descClass: "text-slate-500 group-hover:text-violet-100"
    },
    dm: {
        label: "Why Choose Us",
        labelColor: "text-orange-500",
        headingColor: "text-slate-900",
        cardClass: "bg-slate-50 border-transparent hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-105 border-0 relative overflow-hidden",
        iconBox: "bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg shadow-orange-500/30",
        titleClass: "text-slate-900 group-hover:text-orange-600",
        descClass: "text-slate-500",
        overlay: true // Special flag for gradient overlay
    },
    hr: {
        label: "Our Approach",
        labelColor: "text-emerald-600",
        headingColor: "text-slate-800",
        cardClass: "bg-white border-emerald-100 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-100/50 transition-all rounded-xl",
        iconBox: "bg-emerald-100 text-emerald-700 rounded-full",
        titleClass: "text-slate-800",
        descClass: "text-slate-600"
    },
    training: {
        label: "What You'll Gain",
        labelColor: "text-blue-600",
        headingColor: "text-slate-900",
        cardClass: "bg-white border-slate-200 border-l-4 border-l-blue-500 hover:shadow-xl hover:border-l-8 transition-all",
        iconBox: "bg-blue-100 text-blue-600 rounded-md",
        titleClass: "text-slate-900",
        descClass: "text-slate-500"
    }
};

const ServiceFeatures = ({ service, variant = 'it' }) => {
    const theme = themes[variant] || themes.it;
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination Logic
    const itemsPerPage = 4;
    const shouldPaginate = variant === 'hr' && service.features && service.features.length > itemsPerPage;

    // Calculate total pages
    const totalPages = shouldPaginate ? Math.ceil(service.features.length / itemsPerPage) : 1;

    // Get current items
    const currentFeatures = shouldPaginate
        ? (service.features || []).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : (service.features || []);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <div className="mb-32">
            <div className="text-center mb-16">
                <span className={`${theme.labelColor} font-bold tracking-widest uppercase text-xs mb-2 block`}>{theme.label}</span>
                <h2 className={`text-4xl font-black ${theme.headingColor}`}>Core Features</h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${shouldPaginate ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'} gap-6 ${variant === 'dm' ? 'gap-y-10' : ''}`}>
                <AnimatePresence>
                    {currentFeatures.map((feature, index) => (
                        <motion.div
                            key={`${currentPage}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border shadow-sm transition-all duration-300 group ${theme.cardClass}`}
                        >
                            {/* DM Overlay Effect */}
                            {theme.overlay && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            )}

                            <div className={`w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300 backdrop-blur-sm ${theme.iconBox} ${variant === 'hr' ? 'rounded-full' : 'rounded-2xl'}`}>
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 transition-colors ${theme.titleClass}`}>{feature}</h3>
                            <p className={`text-sm leading-relaxed transition-colors ${theme.descClass}`}>
                                Designed to deliver exceptional value and tangible results for your business needs.
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {shouldPaginate && (
                <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-full border transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed border-slate-200' : 'hover:bg-emerald-50 border-emerald-200 text-emerald-600'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <span className="text-sm font-bold text-slate-400 tracking-widest">
                        PAGE {currentPage} / {totalPages}
                    </span>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-full border transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed border-slate-200' : 'hover:bg-emerald-50 border-emerald-200 text-emerald-600'}`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServiceFeatures;
