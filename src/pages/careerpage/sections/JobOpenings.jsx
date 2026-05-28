import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, MapPin, Clock } from 'lucide-react';

const positions = [
    {
        title: "Digital Marketing Executive",
        exp: "Freshers or 0–3 years",
        requirements: [
            "Knowledge of social media marketing & content creation",
            "Basic understanding of SEO / Google & social media ads",
            "Good communication & creativity"
        ]
    },
    {
        title: "HR Recruiter",
        exp: "Freshers or 0–3 years",
        requirements: [
            "Experience or interest in recruitment & candidate sourcing",
            "Strong communication and coordination skills",
            "Ability to screen and shortlist candidates"
        ]
    },
    {
        title: "Placement Coordinator",
        exp: "Freshers or 0–3 years",
        requirements: [
            "Ability to connect with companies and students",
            "Good communication & relationship-building skills",
            "Organized and detail-oriented"
        ]
    },
    {
        title: "Business Development Executive (BDE)",
        exp: "Freshers or 0–3 years",
        requirements: [
            "Strong communication & presentation skills",
            "Ability to build client relationships and generate leads",
            "Interest in sales and business growth"
        ]
    },
    {
        title: "UI/UX Designer",
        exp: "Freshers or 0–3 years",
        requirements: [
            "Basic understanding of wireframing & user-centric design",
            "Experience with design tools (Figma / Adobe XD preferred)",
            "Creative mindset & attention to detail",
            "Portfolio or project experience preferred"
        ]
    },
    {
        title: "Python Developer",
        exp: "Freshers or 0–3 years",
        requirements: [
            "Strong understanding of Python programming",
            "Knowledge of APIs, databases & frameworks (Django) and Flask is a plus",
            "Problem-solving & logical thinking"
        ]
    }
];

const JobOpenings = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="openings">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Openings</h2>
            <div className="flex flex-col gap-4">
                {positions.map((job, idx) => (
                    <div
                        key={idx}
                        className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-blue-500 shadow-md transform scale-[1.01]' : 'border-slate-200 hover:border-blue-300'}`}
                    >
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div>
                                <h3 className={`text-xl font-bold mb-2 transition-colors ${openIndex === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
                                    <span className="flex items-center gap-1">
                                        <Briefcase size={14} /> Full Time
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {job.exp}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} /> On-site / Remote
                                    </span>
                                </div>
                            </div>
                            <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                                <ChevronDown size={20} />
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2">
                                        <h4 className="font-bold text-slate-700 mb-3 mt-4">Requirements:</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                            {job.requirements.map((req, rIdx) => (
                                                <li key={rIdx}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobOpenings;
