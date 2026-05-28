import React from 'react';
import ModernProcessPath from '../../../components/ModernProcessPath';

const ClientsProcess = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Unique Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Proven Methodology</span>
                    <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
                        How We <span className="text-brand-blue">Build.</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                        A precision-engineered methodology designed for speed, scale, and strategic impact, taking your vision from concept to reality.
                    </p>
                </div>
                <ModernProcessPath />
            </div>
        </section>
    );
};

export default ClientsProcess;
