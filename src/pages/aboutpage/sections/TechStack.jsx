import React from 'react';

const TechStack = () => {
    return (
        <section className="py-20 bg-slate-900 border-y border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10">
                <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Our Technology Core</p>
            </div>
            {/* Simple CSS-less marquee effect simulation with flex for now, ideally needs proper animation class */}
            <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Flutter', 'TensorFlow', 'Figma'].map((tech) => (
                    <span key={tech} className="text-2xl md:text-3xl font-bold text-white hover:text-[#00A3FF] cursor-default">{tech}</span>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
