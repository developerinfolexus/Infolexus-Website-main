import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TechCTA = () => {
    return (
        <section className="py-24 bg-[#081A4A] relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#081A4A]/95 to-[#081A4A]/95" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Ready to build with the best?
                </h2>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105"
                >
                    Start Your Project <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default TechCTA;
