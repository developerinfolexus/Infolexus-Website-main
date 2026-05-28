import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Rocket, UserCheck, BadgeCheck } from 'lucide-react';
import SplitText from '../../../components/react-bits/SplitText';
import WavyBackground from '../../../components/react-bits/WavyBackground';
import heroImage from '../../../assets/hero-new-wave.jpg';

const Hero = () => {
    const services = [
        "Web Development", "App Development", "Cloud Solutions", "Cyber Security", "AI & ML",
        "Enterprise (ERP)", "Data Analytics", "Testing & QA", "IT Support",
        "Social Media Marketing", "SEO & Branding", "Google & Social Ads",
        "Content Marketing", "Email Marketing", "Web Optimization", "Video Production",
        "Recruitment & Talent", "Staffing Solutions", "HR Consulting"
    ];

    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [services.length]);

    return (
        /* ========================================
             HERO SECTION (FIXED VISIBILITY)
        ========================================
        */
        <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <WavyBackground
                    imageSrc={heroImage}
                    amplitude={20}
                    speed={0.008}
                    frequency={0.003}
                />
                {/* Brighter Gradient Overlay with Vibrant Blue Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#081A4A] via-[#0A2B8F]/90 to-[#081A4A]/0 pointer-events-none z-10" />
            </div>

            {/* Content - Text Section (Left Aligned) */}
            <div className="relative z-10 w-full px-6 md:pl-10">
                <div className="pt-10 pb-4 max-w-4xl">

                    {/* Heading */}
                    {/* Heading */}
                    <div className="mb-8 drop-shadow-lg md:min-h-[120px]">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                            Our Spectrum <br />

                            <span className="text-blue-400 block h-auto md:h-[1.2em]">
                                <span className="text-white">in&nbsp;</span>
                                <SplitText
                                    key={services[currentServiceIndex]}
                                    text={services[currentServiceIndex]}
                                    className="text-4xl md:text-6xl lg:text-7xl"
                                    delay={0}
                                />
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-up-delay-2 drop-shadow-md font-light">
                            Premier <b>IT services company in Coimbatore</b> & expert <b>staffing solution</b> provider. <br />
                            Smart software solutions built with purpose, delivered with impact.
                        </p>
                    </div>

                    {/* Shimmer Border Button - Build With Us & Explore Services */}
                    <div className="mb-10 animate-fade-up-delay-3 flex flex-wrap gap-4">
                        <a
                            href="#our-services"
                            className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all text-white font-medium hover:scale-105 shadow-lg shadow-black/10 flex items-center gap-2 group/btn"
                        >
                            Explore Expertise
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-cyan-400" />
                        </a>
                        <Link
                            to="/contact"
                            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold tracking-wider uppercase text-sm shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Build With Us
                            </span>
                            {/* Shine Animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        </Link>

                    </div>

                    {/* Feature Pills - Compact Size */}
                    <div className="flex flex-wrap gap-3 animate-fade-up-delay-3 w-full max-w-3xl">
                        {[
                            { text: "Intelligent Solutions", icon: Lightbulb, color: "text-amber-400", border: "border-amber-400/50", bg: "bg-[#081A4A]/60" },
                            { text: "Agile Delivery Approach", icon: Rocket, color: "text-emerald-400", border: "border-emerald-400/50", bg: "bg-[#081A4A]/60" },
                            { text: "Curated Talent Network", icon: UserCheck, color: "text-purple-400", border: "border-purple-400/50", bg: "bg-[#081A4A]/60" },
                            { text: "Quality-Driven Hiring Process", icon: BadgeCheck, color: "text-sky-400", border: "border-sky-400/50", bg: "bg-[#081A4A]/60" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${item.border} ${item.bg} backdrop-blur-md transition-all hover:scale-105 cursor-default shadow-lg group`}
                            >
                                <item.icon size={16} className={item.color} />
                                <span className="text-xs font-bold text-white tracking-wide">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
