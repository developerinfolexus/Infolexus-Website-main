import React from 'react';

const CoreStrengths = () => {
    return (
        <section className="w-full py-14 bg-[#00A3FF] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
                    {[
                        { title: "Innovation", desc: "Driven by Creativity" },
                        { title: "Agility", desc: "Fast & Flexible" },
                        { title: "Passion", desc: "Dedicated Team" },
                        { title: "Quality", desc: "Excellence First" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 text-center group hover:bg-white/10 transition-colors duration-300 cursor-default">
                            <h3 className="text-3xl font-bold mb-2 tracking-tight drop-shadow-sm">{item.title}</h3>
                            <p className="text-white/90 text-sm font-bold uppercase tracking-widest">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreStrengths;
