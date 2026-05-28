import React, { useEffect } from 'react';
import CareerHero from './sections/CareerHero';
import JobOpenings from './sections/JobOpenings';
import ApplicationForm from './sections/ApplicationForm';
import PerksAndCulture from './sections/PerksAndCulture';

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <CareerHero />

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-12">
                        <PerksAndCulture />
                        <JobOpenings />
                    </div>

                    {/* Right Column: Sticky Form */}
                    <div className="lg:sticky lg:top-24">
                        <ApplicationForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
