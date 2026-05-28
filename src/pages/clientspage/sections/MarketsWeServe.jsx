import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket,
    Briefcase,
    ShoppingCart,
    Globe,
    ShieldCheck,
    Home,
    BadgeDollarSign,
    Truck,
    ArrowRight
} from 'lucide-react';

const getIconAnimation = () => {
    return {
        initial: { x: 0, transition: { duration: 0.4, ease: "easeIn" } },
        hover: { x: 130, transition: { duration: 0.8, ease: "easeOut" } }
    };
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(59, 130, 246, 0.15)", onMouseEnter, onMouseLeave, ...props }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleLocalMouseEnter = (e) => {
        setOpacity(1);
        if (onMouseEnter) onMouseEnter(e);
    };

    const handleLocalMouseLeave = (e) => {
        setOpacity(0);
        if (onMouseLeave) onMouseLeave(e);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleLocalMouseEnter}
            onMouseLeave={handleLocalMouseLeave}
            className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

const MarketCard = ({ market }) => {
    const [isHovered, setIsHovered] = useState(false);
    const iconAnim = getIconAnimation();

    return (
        <SpotlightCard
            className="group h-full transition-all duration-300 hover:shadow-xl hover:border-transparent"
            spotlightColor={market.spotlight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-6 h-full flex flex-col relative z-10">
                <div className="mb-4 w-full max-w-[200px] h-14 rounded-xl bg-slate-50 flex items-center px-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-sm">
                    <motion.div
                        variants={iconAnim}
                        animate={isHovered ? "hover" : "initial"}
                    >
                        <market.icon size={28} className={`transition-colors duration-300 ${market.groupHoverColor} text-slate-600`} />
                    </motion.div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {market.title}
                </h3>

                <div className="relative">
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {market.description}
                    </p>

                    <Link
                        to="/contact"
                        className={`mt-auto flex items-center gap-2 text-xs font-bold ${market.color} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
                    >
                        Explore Solutions <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Decorative blob for static state */}
                <div className={`absolute -right-6 -bottom-6 w-20 h-20 ${market.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
        </SpotlightCard>
    );
};

const MarketsWeServe = () => {
    const markets = [
        {
            title: "Startups & Founders",
            description: "Turn ideas into reality with rapid MVP development and scalable tech infrastructure designed for growth.",
            icon: Rocket,
            color: "text-blue-600",
            groupHoverColor: "group-hover:text-blue-600",
            bg: "bg-blue-100",
            spotlight: "rgba(37, 99, 235, 0.1)"
        },
        {
            title: "Small & Medium Businesses",
            description: "Digitalize operations and expand online presence with cost-effective, high-impact web solutions.",
            icon: Briefcase,
            color: "text-emerald-600",
            groupHoverColor: "group-hover:text-emerald-600",
            bg: "bg-emerald-100",
            spotlight: "rgba(5, 150, 105, 0.1)"
        },
        {
            title: "E-commerce Brands",
            description: "Boost sales with high-performance online stores, seamless checkout flows, and SEO optimization.",
            icon: ShoppingCart,
            color: "text-purple-600",
            groupHoverColor: "group-hover:text-purple-600",
            bg: "bg-purple-100",
            spotlight: "rgba(147, 51, 234, 0.1)"
        },
        {
            title: "International Remote Clients",
            description: "Reliable offshore development teams that integrate seamlessly with your workflow across time zones.",
            icon: Globe,
            color: "text-orange-600",
            groupHoverColor: "group-hover:text-orange-600",
            bg: "bg-orange-100",
            spotlight: "rgba(234, 88, 12, 0.1)"
        },
        {
            title: "Education & Healthcare",
            description: "Secure, compliant platforms for profound institutions requiring data privacy and accessibility.",
            icon: ShieldCheck,
            color: "text-cyan-600",
            groupHoverColor: "group-hover:text-cyan-600",
            bg: "bg-cyan-100",
            spotlight: "rgba(8, 145, 178, 0.1)"
        },
        {
            title: "Real Estate & Construction",
            description: "Showcase properties and manage inquiries with stunning portfolios and lead-gen systems.",
            icon: Home,
            color: "text-rose-600",
            groupHoverColor: "group-hover:text-rose-600",
            bg: "bg-rose-100",
            spotlight: "rgba(225, 29, 72, 0.1)"
        },
        {
            title: "Finance & Professional Services",
            description: "Performance-focused solutions ensuring data integrity and operational efficiency for professionals.",
            icon: BadgeDollarSign,
            color: "text-teal-600",
            groupHoverColor: "group-hover:text-teal-600",
            bg: "bg-teal-100",
            spotlight: "rgba(13, 148, 136, 0.1)"
        },
        {
            title: "Logistics & Manufacturing",
            description: "Automate processes and track operations with custom internal tools and dashboards.",
            icon: Truck,
            color: "text-indigo-600",
            groupHoverColor: "group-hover:text-indigo-600",
            bg: "bg-indigo-100",
            spotlight: "rgba(79, 70, 229, 0.1)"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Industries Verified
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
                    >
                        Markets We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Serve</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        Deep expertise across diverse sectors, delivering tailored digital transformation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {markets.map((market, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <MarketCard market={market} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketsWeServe;
