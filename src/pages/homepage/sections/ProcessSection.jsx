import React, { useRef, useState, useEffect } from "react";
import discoveryIcon from "../../../assets/process-icons/analyse_3d.png";
import strategyIcon from "../../../assets/process-icons/strategy_3d.png";
import executionIcon from "../../../assets/process-icons/build_3d.png";
import testingIcon from "../../../assets/process-icons/testing_3d.png";
import deliveryIcon from "../../../assets/process-icons/delivery.png";
import supportIcon from "../../../assets/support-neon.png";
import companyLogo from "../../../assets/lnfolexus_4k_WALLPAPER_WITHOUT_CAPTION___1_-removebg-preview.png";

// --- STEPS DATA ---
// Full Layout: 360 deg distribution.
// 0 deg = Right. 90 deg = Down.
// Positions: Top(270), Top-Right(330), Bottom-Right(30), Bottom(90), Bottom-Left(150), Top-Left(210).
const steps = [
    {
        id: "01",
        title: "Strategic Discovery",
        sub: "Vision Alignment",
        image: discoveryIcon,
        color: "from-blue-500 to-indigo-600",
        shadow: "shadow-blue-500/40",
        angle: 270,
        // 270 deg (Top) -> Text Centered Above (Mobile), Above (Desktop)
        textWrapperClass: "bottom-[120%] md:top-auto md:bottom-[150%] left-1/2 -translate-x-1/2 items-center text-center",
        imgPadding: "12px"
    },
    {
        id: "02",
        title: "Blueprint & Design",
        sub: "Architecting Success",
        image: strategyIcon,
        color: "from-cyan-400 to-blue-500",
        shadow: "shadow-cyan-500/40",
        angle: 330,
        // 330 deg (Top Right) -> Text Centered Above (Mobile), Left-Aligned (Desktop)
        textWrapperClass: "bottom-[120%] left-1/2 -translate-x-1/2 items-center text-center md:top-1/2 md:left-[140%] md:translate-x-0 md:-translate-y-1/2 md:items-start md:text-left",
        imgPadding: "5px"
    },
    {
        id: "03",
        title: "Agile Engineering",
        sub: "Rapid Development",
        image: executionIcon,
        color: "from-purple-500 to-fuchsia-600",
        shadow: "shadow-purple-500/40",
        angle: 30,
        // 30 deg (Bottom Right) -> Text Centered Below (Mobile), Left-Aligned (Desktop)
        textWrapperClass: "top-[120%] left-1/2 -translate-x-1/2 items-center text-center md:top-1/2 md:left-[140%] md:translate-x-0 md:-translate-y-1/2 md:items-start md:text-left",
        imgPadding: "5px"
    },
    {
        id: "04",
        title: "Quality Mastery",
        sub: "Precision Testing",
        image: testingIcon,
        color: "from-pink-500 to-rose-500",
        shadow: "shadow-pink-500/40",
        angle: 90,
        // 90 deg (Bottom) -> Text Centered Below (Mobile & Desktop)
        textWrapperClass: "top-[120%] md:top-[150%] left-1/2 -translate-x-1/2 items-center text-center",
        imgPadding: "5px"
    },
    {
        id: "05",
        title: "Seamless Launch",
        sub: "Global Deployment",
        image: deliveryIcon,
        color: "from-orange-400 to-amber-500",
        shadow: "shadow-orange-500/40",
        angle: 150,
        // 150 deg (Bottom Left) -> Text Centered Below (Mobile), Right-Aligned (Desktop, Outside Left)
        textWrapperClass: "top-[120%] left-1/2 -translate-x-1/2 items-center text-center md:top-1/2 md:left-auto md:right-[140%] md:translate-x-0 md:-translate-y-1/2 md:items-end md:text-right",
        imgPadding: "5px"
    },
    {
        id: "06",
        title: "Growth & Scale",
        sub: "Continuous Evolution",
        image: supportIcon,
        color: "from-emerald-400 to-green-500",
        shadow: "shadow-emerald-500/40",
        angle: 210,
        // 210 deg (Top Left) -> Text Centered Above (Mobile), Right-Aligned (Desktop, Outside Left)
        textWrapperClass: "bottom-[120%] left-1/2 -translate-x-1/2 items-center text-center md:top-1/2 md:left-auto md:right-[140%] md:translate-x-0 md:-translate-y-1/2 md:items-end md:text-right",
        imgPadding: "12px"
    }
];

export default function ProcessSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSectionRef = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (currentSectionRef) observer.observe(currentSectionRef);
        return () => { if (currentSectionRef) observer.unobserve(currentSectionRef); };
    }, []);

    const toRad = (deg) => (deg * Math.PI) / 180;

    return (
        <section className="w-full py-10 min-h-[700px] bg-[#081A4A] flex flex-col items-center justify-center overflow-hidden relative" ref={sectionRef}>

            {/* Background Texture & Bokeh */}
            <div className="absolute inset-0 pointer-events-none">
                {/* CSS Dot Pattern */}
                <div className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[80px]" />
            </div>

            {/* SECTION TITLE */}
            <div className="text-center mb-10 relative z-10 px-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] font-semibold tracking-wider mb-3 uppercase">
                    Workflow
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
                    Our Process
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-70"></div>
                <p className="text-blue-200/80 mt-4 max-w-xl mx-auto text-base font-light leading-relaxed">
                    A streamlined workflow transforming ideas into scalable digital solutions.
                </p>
            </div>

            {/* MAIN CIRCULAR CONTAINER 
                Mobile: R=120px. Desktop: R=220px.
            */}
            <div className="relative w-full max-w-[900px] h-[550px] md:h-[700px] flex items-center justify-center [--radius:120px] md:[--radius:220px]">

                {/* OUTER ORBIT RINGS */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Dashed Orbital Path */}
                    <div className="w-[240px] h-[240px] md:w-[440px] md:h-[440px] rounded-full border-[1.5px] border-dashed border-white/10 animate-[spin_120s_linear_infinite]" />
                    {/* Faint Glow Ring */}
                    <div className="absolute w-[240px] h-[240px] md:w-[440px] md:h-[440px] rounded-full border border-blue-500/5 shadow-[0_0_80px_rgba(59,130,246,0.05)]" />
                </div>

                {/* CENTER HUB: White Core with Orbital Dots */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center">

                        {/* 🌟 SOFT OUTER AURA */}
                        <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full 
      bg-cyan-400/20 blur-[60px] animate-pulse" />

                        {/* 🌟 PULSE RING */}
                        <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full 
      border border-cyan-400/40 animate-[ping_3s_linear_infinite]" />

                        {/* ⭐ MAIN WHITE PLATFORM */}
                        <div className="relative w-28 h-28 md:w-44 md:h-44 
      bg-[#081A4A] rounded-full flex flex-col items-center justify-center
      border-[4px] border-[#081A4A]
      shadow-[0_0_70px_rgba(34,211,238,0.5)]
      z-20 overflow-hidden">

                            {/* Central Logo */}
                            <img
                                src={companyLogo}
                                alt="Infolexus"
                                className="w-full h-full object-contain object-center p-2"
                            />
                        </div>

                        {/* 🌐 ORBIT RING - Smaller */}
                        <div className="absolute w-36 h-36 md:w-52 md:h-52 
      rounded-full border border-dashed border-cyan-400/30 
      animate-[spin_40s_linear_infinite] pointer-events-none z-10">

                            {/* ✨ GLOWING DOTS */}
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full 
            bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]
            animate-[float_4s_ease-in-out_infinite]"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 45}deg) translate(85px, 0)` // Reduced translate
                                    }}
                                />
                            ))}
                        </div>

                    </div>
                </div>

                {/* STEPS */}
                {steps.map((s, index) => {
                    const angleRad = toRad(s.angle);
                    const x = Math.cos(angleRad);
                    const y = Math.sin(angleRad);

                    return (
                        <div
                            key={s.id}
                            className={`absolute transition-all duration-1000 ease-out z-30
                            ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                left: `calc(50% + (${x} * var(--radius)))`,
                                top: `calc(50% + (${y} * var(--radius)))`,
                                transform: isVisible
                                    ? 'translate(-50%, -50%)'
                                    : `translate(calc(-50% + ${x * 800}px), calc(-50% + ${y * 800}px))`
                            }}
                        >
                            <div className="relative group cursor-pointer flex flex-col items-center">

                                {/* BADGE / BUBBLE (Pin Style) */}
                                <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full 
bg-gradient-to-br ${s.color} p-[2px] ${s.shadow} shadow-lg 
group-hover:scale-110 transition-transform duration-300 z-20`}>

                                    {/* White Inner Circle */}
                                    <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover"
                                            style={{
                                                transform: `rotate(${s.angle + 180}deg)`, // side-facing (as discussed)
                                                transition: "transform 0.6s ease"
                                            }}
                                        />
                                    </div>


                                    {/* OUTWARD TAIL (Triangle) */}
                                    <div
                                        className={`absolute w-4 h-4 md:w-4 md:h-4 bg-gradient-to-br ${s.color} -z-10`}
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            // Rotate to angle, push out past bubble edge (~42px), rotate 45 to point
                                            transform: `translate(-50%, -50%) rotate(${s.angle + 180}deg) translate(40px, 0) rotate(45deg)`,
                                            borderRadius: '2px'
                                        }}
                                    />

                                    {/* Number Badge */}
                                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#081A4A] border border-white flex items-center justify-center z-30 shadow-md">
                                        <span className="text-white text-[9px] font-bold">{s.id}</span>
                                    </div>

                                </div>

                                {/* TEXT LABEL */}
                                <div className={`absolute w-28 md:w-52 flex flex-col ${s.textWrapperClass} flex transition-all duration-300 opacity-100 group-hover:opacity-100 z-40 pointer-events-none`}>
                                    <h3 className="text-white font-bold text-xs md:text-lg leading-tight drop-shadow-lg">
                                        {s.title}
                                    </h3>
                                    <p className="text-blue-200 text-[9px] md:text-xs uppercase tracking-wider font-semibold mt-0.5 hidden md:block">
                                        {s.sub}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}
