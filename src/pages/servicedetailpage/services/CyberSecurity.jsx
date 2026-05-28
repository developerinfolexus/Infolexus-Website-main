import React, { useEffect } from 'react';
import { serviceDetails } from '../../../data/serviceDetails';
import ServiceHero from '../sections/ServiceHero';
import ServiceDeepDive from '../sections/ServiceDeepDive';
import ServiceFeatures from '../sections/ServiceFeatures';
import ServiceRoadmap from '../sections/ServiceRoadmap';
import ServiceCTA from '../sections/ServiceCTA';

const CyberSecurity = () => {
    const service = serviceDetails['security'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) return null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            <ServiceHero service={service} id="security" />
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

export default CyberSecurity;
