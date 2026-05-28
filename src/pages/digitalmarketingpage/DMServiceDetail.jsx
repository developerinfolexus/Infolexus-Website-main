import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { dmServiceDetails } from '../../data/dmServiceDetails'; // Import the new data file

// Import standardized components (adjust paths as needed)
import ServiceHero from '../servicedetailpage/sections/ServiceHero';
import ServiceDeepDive from '../servicedetailpage/sections/ServiceDeepDive';
import ServiceFeatures from '../servicedetailpage/sections/ServiceFeatures';
import ServiceRoadmap from '../servicedetailpage/sections/ServiceRoadmap';
import ServiceCTA from '../servicedetailpage/sections/ServiceCTA';

const DMServiceDetail = () => {
    const { id } = useParams();
    const service = dmServiceDetails[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                    <p className="text-slate-500 mb-8">The requested service could not be found.</p>
                    <Link to="/dm-services" className="text-blue-600 hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Digital Marketing
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            {/* Reuse standard ServiceHero */}
            <ServiceHero service={service} id={id} />

            <div id="details" className="pt-24 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Reuse standard Detail sections */}
                    <ServiceDeepDive service={service} variant="dm" />
                    <ServiceFeatures service={service} variant="dm" />
                    <ServiceRoadmap service={service} variant="dm" />
                </div>
            </div>

            <ServiceCTA />
        </div>
    );
};

export default DMServiceDetail;
