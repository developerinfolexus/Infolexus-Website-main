import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { trainingServiceDetails } from '../../data/trainingServiceDetails';
import HRInquiryModal from '../hrservicespage/components/HRInquiryModal';

// Import Images
import technicalImg from '../../assets/trainings/technical.png';
import placementImg from '../../assets/trainings/placement.png';
import softSkillsImg from '../../assets/trainings/soft-skills.png';
import aptitudeImg from '../../assets/trainings/aptitude.png';
import prePlacementImg from '../../assets/trainings/pre-placement.png';
import collegeHeroBg from '../../assets/trainings/colleges_hero_bg.png';

const CollegeTrainings = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCategory, setModalCategory] = useState("College");
    const [modalSubject, setModalSubject] = useState("");

    const openModal = (subject) => {
        setModalCategory("College");
        setModalSubject(subject);
        setIsModalOpen(true);
    };

    const trainingKeys = [
        { key: 'technical', img: technicalImg },
        { key: 'placement-readiness', img: placementImg },
        { key: 'soft-skills', img: softSkillsImg },
        { key: 'aptitude', img: aptitudeImg },
        { key: 'pre-placement', img: prePlacementImg }
    ];

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                // Determine header height (likely 80px or so) plus some padding
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-200">
            {/* HERO SECTION */}
            <div className="relative bg-[#081A4A] py-32 lg:py-48 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={collegeHeroBg}
                        alt="Colleges & Institutions Training"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-[#081A4A]/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A4A] via-transparent to-[#081A4A]/40" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
                    >
                        For Colleges & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Institutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Empowering students with industry-ready skills and campus placement support. We bridge the gap between academic curriculum and corporate expectations.
                    </motion.p>
                </div>
            </div>

            {/* ZIG-ZAG CONTENT SECTION */}
            <div className="py-24 space-y-24 md:space-y-32 container mx-auto px-4 md:px-6">
                {trainingKeys.map((item, index) => {
                    const data = trainingServiceDetails[item.key];
                    const isEven = index % 2 === 0;

                    if (!data) return null;

                    return (
                        <div id={item.key} key={item.key} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex-1 space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                        Step {index + 1}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                    {data.title}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {data.description}
                                </p>

                                <ul className="space-y-3 pt-2">
                                    {data.features && data.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-700 flex items-center justify-center shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <button
                                        onClick={() => openModal(data.title)}
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group"
                                    >
                                        Enquiry Now
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex-1 relative w-full"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={item.img}
                                        alt={data.title}
                                        className="w-full h-[250px] md:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Decorative Elements */}
                                    <div className={`absolute -z-10 w-full h-full border-2 border-dashed border-slate-300 rounded-2xl top-4 ${isEven ? 'left-4' : 'right-4'}`} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* CTA SECTION */}
            <div className="bg-[#081A4A] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Campus?</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                        Partner with InfoLexus to provide your students with top-tier training and placement support.
                    </p>
                    <button
                        onClick={() => openModal('General College Partnership')}
                        className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
                    >
                        Schedule a Discussion
                    </button>
                </div>
            </div>

            {/* MODAL */}
            <HRInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialCategory={modalCategory}
                initialSubject={modalSubject}
            />
        </div>
    );
};

export default CollegeTrainings;
