import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Monitor, Layers, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

// --- Pricing Data ---
const pricingData = {
    dev: {
        landing: {
            price: "$2,500",
            title: "Landing Page",
            description: "Perfect for high-conversion marketing campaigns and product launches.",
            features: ["Wireframe Architecture", "Persuasive Copywriting", "High-Fidelity Figma Design", "Interactive 3D Elements", "React/Framer Development", "3 Revisions Rounds", "30 Days Post-Launch Support"]
        },
        multipage: {
            price: "$5,000",
            title: "Multi-Page Site",
            description: "A complete digital presence for scaling startups and enterprises.",
            features: ["Systematic Wireframing", "Brand Storytelling Copy", "Scalable Design System", "Advanced Animations", "Full-Stack Development", "Unlimited Revisions", "Priority Support"]
        }
    },
    design: {
        landing: {
            price: "$1,500",
            title: "Design Only",
            description: "Visuals that captivate. Logic that converts. Handed off in Figma.",
            features: ["UX Wireframes", "Brand-Aligned Visuals", "Figma Prototypes", "Developer-Ready Assets", "Interaction Documentation"]
        },
        multipage: {
            price: "$3,000",
            title: "Full Brand Design",
            description: "Comprehensive design language for your entire digital ecosystem.",
            features: ["Strategic UX/UI", "Design System Creation", "Responsive Prototypes", "Motion Design Concepts", "Asset Library"]
        }
    }
};

// Reusable PricingCard component
const PricingCard = ({ type, mode }) => {
    const isLanding = type === 'landing';
    const [displayData, setDisplayData] = useState(pricingData[mode][type]);
    const [isAnimating, setIsAnimating] = useState(false);

    // Track previous mode/type to trigger animation when they change
    const [prevProps, setPrevProps] = useState({ mode, type });

    if (mode !== prevProps.mode || type !== prevProps.type) {
        setPrevProps({ mode, type });
        setIsAnimating(true);
    }

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setDisplayData(pricingData[mode][type]);
                setIsAnimating(false);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, mode, type]);

    const cardBgClass = isLanding
        ? 'bg-gradient-to-br from-blue-900/40 via-blue-950/20 to-transparent border-blue-500/30 shadow-blue-900/20'
        : 'bg-gradient-to-br from-purple-900/40 via-purple-950/20 to-transparent border-purple-500/30 shadow-purple-900/20';

    const accentColor = isLanding ? 'text-blue-400' : 'text-purple-400';
    const buttonClass = isLanding
        ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/25'
        : 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/25';

    // Icons
    const renderIcon = () => isLanding ? <Monitor size={20} /> : <Layers size={20} />;

    return (
        <div className={cn(
            "relative w-full rounded-3xl border backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-2xl group",
            cardBgClass,
            "min-h-[600px] hover:scale-[1.01]"
        )}>
            {/* Ambient Glow */}
            <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-b from-white/5 to-transparent pointer-events-none")} />

            <div className="relative p-8 md:p-10 flex flex-col h-full z-10">
                {/* Header Badge */}
                <div className={cn(
                    "self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/10 bg-white/5",
                    accentColor
                )}>
                    {renderIcon()}
                    <span>{displayData.title}</span>
                </div>

                {/* Price Area */}
                <div className="mb-2 relative">
                    <AnimatePresence mode="wait">
                        {!isAnimating && (
                            <motion.div
                                key={displayData.price}
                                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                                    {displayData.price}
                                </h3>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <p className="text-zinc-400 text-sm font-medium mt-2">
                        {isLanding ? 'One-time investment' : 'Starting package price'}
                    </p>
                </div>

                {/* Description - Animated */}
                <div className="h-16 my-6">
                    <AnimatePresence mode="wait">
                        {!isAnimating && (
                            <motion.p
                                key={displayData.description}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-zinc-300 leading-relaxed"
                            >
                                {displayData.description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

                {/* Features List */}
                <div className="flex-grow">
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <AnimatePresence mode="wait">
                            {!isAnimating && displayData.features.map((feature, i) => (
                                <motion.div
                                    key={feature + i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className={cn("mt-1 p-0.5 rounded-full bg-white/10", accentColor)}>
                                        <CheckCircle2 size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Action Button */}
                <button className={cn(
                    "w-full mt-8 py-4 rounded-xl text-white font-bold tracking-wide transition-all flex items-center justify-center gap-2 group/btn",
                    buttonClass
                )}>
                    <span>Book Strategy Call</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

// The main PricingPage component
export const PricingPage = () => {
    const [mode, setMode] = useState('dev');

    const handleToggle = (e) => {
        setMode(e.target.checked ? 'design' : 'dev');
    };

    return (
        <section className="relative w-full py-24 px-4 overflow-hidden bg-brand-dark min-h-screen flex flex-col items-center justify-center">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-16 max-w-3xl">
                    <h2 className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4">Transparent Pricing</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8">
                        Invest in Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400">Digital Architecture.</span>
                    </h1>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-6 mt-8 bg-white/5 backdrop-blur-md p-2 rounded-full border border-white/10 w-fit mx-auto">
                        <span className={cn("text-sm font-bold transition-colors px-4", mode === 'dev' ? "text-white" : "text-zinc-500")}>Development + Design</span>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" onChange={handleToggle} checked={mode === 'design'} />
                            <div className="w-14 h-8 bg-slate-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-brand-blue after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-slate-800 border border-white/20"></div>
                        </label>

                        <span className={cn("text-sm font-bold transition-colors px-4", mode === 'design' ? "text-white" : "text-zinc-500")}>Design Only</span>
                    </div>
                </header>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
                    <PricingCard type="landing" mode={mode} />
                    <PricingCard type="multipage" mode={mode} />
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
