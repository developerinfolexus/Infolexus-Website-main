import React from 'react';
import Hero from './sections/Hero';
import DualAdvantageSection from './sections/DualAdvantageSection';
import ProcessSection from './sections/ProcessSection';
import Testimonials from './sections/Testimonials';

const Home = () => {
    // Render home sections
    return (
        <div className='bg-[#081A4A]/95 text-white font-sans overflow-x-hidden relative min-h-screen'>
            <Hero />
            <DualAdvantageSection />
            <ProcessSection />
            <Testimonials />
        </div>
    );
};

export default Home;
