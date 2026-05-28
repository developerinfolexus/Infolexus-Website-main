import React from 'react';
import { Globe } from 'lucide-react';

const GlobalReach = () => {
    return (
        <section className="py-24 bg-[#081A4A] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Empowering Businesses <br /><span className="text-[#00A3FF]">Across The Globe</span></h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            From startups in Silicon Valley to enterprises in Dubai, Infolexus provides seamless support regardless of boundaries.
                        </p>
                        <ul className="grid grid-cols-2 gap-6">
                            {[
                                { country: "USA", city: "San Francisco" },
                                { country: "UK", city: "London" },
                                { country: "India", city: "Chennai (HQ)" },
                                { country: "UAE", city: "Dubai" },
                            ].map((loc, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#00A3FF]"></div>
                                    <div>
                                        <strong className="block text-white">{loc.country}</strong>
                                        <span className="text-slate-500 text-sm">{loc.city}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        {/* Abstract Globe Representation using Icon for now */}
                        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center animate-pulse">
                            <Globe size={180} className="text-blue-500/40" />
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
