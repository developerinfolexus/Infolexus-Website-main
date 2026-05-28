import React, { useEffect } from 'react';
import { hrServiceDetails } from '../../../data/hrServiceDetails';
import ServiceHero from '../../servicedetailpage/sections/ServiceHero';
import ServiceDeepDive from '../../servicedetailpage/sections/ServiceDeepDive';
import ServiceFeatures from '../../servicedetailpage/sections/ServiceFeatures';
import ServiceRoadmap from '../../servicedetailpage/sections/ServiceRoadmap';
import ServiceCTA from '../../servicedetailpage/sections/ServiceCTA';

const CollegePlacements = () => {
    const service = hrServiceDetails['hr-college-placements'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) return null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            <ServiceHero service={service} id="hr-college-placements" />
            <div id="details" className="pt-24 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    <ServiceDeepDive service={service} />
                    <ServiceFeatures service={service} />
                    <ServiceRoadmap service={service} />
                </div>
            </div>
            <ServiceCTA />
        </div>
    );
};

export default CollegePlacements;

