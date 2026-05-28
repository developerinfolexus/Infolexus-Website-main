import React from 'react';
import AboutHero from './sections/AboutHero';
import CoreStrengths from './sections/CoreStrengths';
import WhoWeAre from './sections/WhoWeAre';
import Journey from './sections/Journey';
import MissionVision from './sections/MissionVision';
import Capabilities from './sections/Capabilities';

import WhyChooseUs from './sections/WhyChooseUs';

import Values from './sections/Values';
import AboutCTA from './sections/AboutCTA';

const About = () => {
    // Integrating updated CoreStrengths section
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-brand-blue selection:text-white">
            <AboutHero />
            <CoreStrengths />
            <WhoWeAre />
            <Journey />
            <MissionVision />
            <Capabilities />

            <WhyChooseUs />

            <Values />
            <AboutCTA />
        </div>
    );
};

export default About;
