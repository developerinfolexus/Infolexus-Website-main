import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
    FaCode, FaPaintBrush, FaSearch, FaBullhorn, FaShareAlt,
    FaUserTie, FaChalkboardTeacher, FaUniversity, FaUserGraduate,
    FaLaptopCode, FaChartLine, FaUsers, FaTimes
} from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import HyperspeedBackground from "../../components/HyperspeedBackground";
import GridBackground from "../../components/GridBackground";

export default function ServicesSection() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categories = [
        {
            id: "it",
            title: "IT Services",
            icon: <FaLaptopCode />,
            description: "Robust Technology",
            color: "cyan",
            services: [
                { icon: <FaCode />, title: "Web Dev" },
                { icon: <FaPaintBrush />, title: "UI/UX Design" },
                { icon: <MdOutlineScreenSearchDesktop />, title: "Digital Assets" },
                { icon: <FaCode />, title: "App Dev" },
            ]
        },
        {
            id: "marketing",
            title: "Digital Marketing",
            icon: <FaChartLine />,
            description: "Growth & Reach",
            color: "blue",
            services: [
                { icon: <FaBullhorn />, title: "Marketing" },
                { icon: <FaSearch />, title: "SEO" },
                { icon: <FaShareAlt />, title: "Social Media" },
                { icon: <FaBullhorn />, title: "Branding" }
            ]
        },
        {
            id: "hr",
            title: "HR Solutions",
            icon: <FaUsers />,
            description: "Talent & Teams",
            color: "purple",
            services: [
                { icon: <FaUserTie />, title: "Recruitment" },
                { icon: <FaChalkboardTeacher />, title: "Training" },
                { icon: <FaUniversity />, title: "Colleges" },
                { icon: <FaUserGraduate />, title: "Job Seekers" }
            ]
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 relative overflow-hidden min-h-[800px] flex items-center justify-center bg-[#081A4A]/95"
        >
            <GridBackground />
            <style>{`
                @keyframes bounceInLeft {
                    0% { opacity: 0; transform: translateX(-500px); }
                    60% { opacity: 1; transform: translateX(30px); }
                    80% { transform: translateX(-10px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes bounceInRight {
                    0% { opacity: 0; transform: translateX(500px); }
                    60% { opacity: 1; transform: translateX(-30px); }
                    80% { transform: translateX(10px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
            `}</style>

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative w-full z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-cyan-400 font-bold tracking-[0.2em] text-sm uppercase inline-block py-1 px-3 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to elevate your business in the digital landscape.
                    </p>
                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {categories.map((category, index) => (
                        <ServiceCard
                            key={category.id}
                            category={category}
                            inView={inView}
                            slideDirection={index === 2 ? 'right' : 'left'}
                            delay={index * 300}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ category, inView, slideDirection, delay }) {
    const colorStyles = {
        cyan: {
            bg: "hover:bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400",
            glow: "group-hover:shadow-cyan-500/50", iconBg: "bg-cyan-500/20", iconText: "text-cyan-300"
        },
        blue: {
            bg: "hover:bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400",
            glow: "group-hover:shadow-blue-500/50", iconBg: "bg-blue-500/20", iconText: "text-blue-300"
        },
        purple: {
            bg: "hover:bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400",
            glow: "group-hover:shadow-purple-500/50", iconBg: "bg-purple-500/20", iconText: "text-purple-300"
        }
    };
    const style = colorStyles[category.color];

    // Animation Logic
    const animationName = slideDirection === 'left' ? 'bounceInLeft' : 'bounceInRight';
    const animationStyle = inView
        ? {
            animationName: animationName,
            animationDuration: '1s',
            animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            animationFillMode: 'both',
            animationDelay: `${delay}ms`
        }
        : { opacity: 0 };

    return (
        <div
            className="relative h-[500px]"
            style={animationStyle}
        >
            {/* Flip Container */}
            <div className="relative w-full h-full group perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

                    {/* Front Side - Image & Title */}
                    <div className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden border-2 ${style.border} ${style.glow} shadow-xl`}>
                        {/* Hyperspeed Background */}
                        <div className="absolute inset-0">
                            <HyperspeedBackground />
                        </div>

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${style.iconBg.replace('/20', '/40')}`}></div>

                        {/* Icon as Large Image */}
                        <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                            <div className={`text-9xl mb-6 ${style.iconText} drop-shadow-2xl`}>
                                {category.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-white text-center mb-2 drop-shadow-lg">
                                {category.title}
                            </h3>
                            <p className={`${style.text} text-sm font-medium text-center drop-shadow-md`}>
                                {category.description}
                            </p>
                            <div className="absolute bottom-6 text-white/50 text-sm">
                                Hover to see details →
                            </div>
                        </div>
                    </div>

                    {/* Back Side - Details */}
                    <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-[#0f1c3a]/95 to-[#0A1E42]/95 backdrop-blur-xl border-2 ${style.border} ${style.glow} shadow-xl p-8`}>
                        <div className="h-full flex flex-col">
                            {/* Back Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div className={`p-3 rounded-xl ${style.iconBg} ${style.iconText} text-2xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Services List - No Scroll, All Visible */}
                            <div className="flex-1 space-y-3">
                                {category.services.map((service, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:translate-x-2"
                                    >
                                        <span className={`${style.text} text-xl`}>{service.icon}</span>
                                        <span className="text-gray-200 text-sm font-medium">{service.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/10">
                                <Link
                                    to={`/services#${category.id}`}
                                    className={`block w-full text-center py-3 px-6 rounded-lg ${style.iconBg} ${style.text} font-semibold text-sm hover:scale-105 transition-transform`}
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Styles */}
            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .group:hover .group-hover\\:rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}
