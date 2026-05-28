import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { serviceDetails } from '../../data/serviceDetails';

// Import shared service components
import ServiceHero from './sections/ServiceHero';
import ServiceDeepDive from './sections/ServiceDeepDive';
import ServiceFeatures from './sections/ServiceFeatures';
import ServiceRoadmap from './sections/ServiceRoadmap';
import ServiceCTA from './sections/ServiceCTA';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceDetails[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                    <p className="text-slate-500 mb-8">The requested service ID &quot;{id}&quot; does not exist.</p>
                    <Link to="/services" className="text-blue-600 hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            <ServiceHero service={service} id={id} />
            <div id="details" className="pt-24 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    <ServiceDeepDive service={service} />
                    <ServiceFeatures service={service} />
                    <ServiceRoadmap service={service} />

                    {/* Render Sub-Services if they exist */}
                    {service.subServices && service.subServices.map((subId) => {
                        const subService = serviceDetails[subId];
                        if (!subService) return null;

                        return (
                            <div key={subId} className="mt-32 pt-16 border-t border-slate-200">
                                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-12 text-center">
                                    {subService.title}
                                </h2>
                                <ServiceDeepDive service={subService} />
                                <ServiceFeatures service={subService} />
                                <ServiceRoadmap service={subService} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <ServiceCTA />
        </div>
    );
};

export default ServiceDetail;
