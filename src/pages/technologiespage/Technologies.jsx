import React, { useEffect } from 'react';
import TechHero from './sections/TechHero';
import TechCategories from './sections/TechCategories';
import TechCTA from './sections/TechCTA';

const Technologies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <TechHero />
            <TechCategories />
            <TechCTA />
        </div>
    );
};

export default Technologies;
