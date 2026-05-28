import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { trainingServiceDetails } from '../../data/trainingServiceDetails';

// Import shared service components
import TrainingServiceHero from '../servicedetailpage/sections/TrainingServiceHero';
import ServiceDeepDive from '../servicedetailpage/sections/ServiceDeepDive';
import ServiceFeatures from '../servicedetailpage/sections/ServiceFeatures';
import ServiceRoadmap from '../servicedetailpage/sections/ServiceRoadmap';
import ServiceCTA from '../servicedetailpage/sections/ServiceCTA';

const TrainingServiceDetail = () => {
    const { id } = useParams();
    const service = trainingServiceDetails[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Not Found</h2>
                    <p className="text-slate-500 mb-8">The requested training program &quot;{id}&quot; does not exist.</p>
                    <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-200">
            <TrainingServiceHero service={service} id={id} />
            <div id="details" className="pt-24 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    <ServiceDeepDive service={service} variant="training" />
                    <ServiceFeatures service={service} variant="training" />
                    <ServiceRoadmap service={service} variant="training" />
                </div>
            </div>
            <ServiceCTA variant={['technical', 'placement-readiness', 'soft-skills', 'aptitude', 'pre-placement'].includes(id) ? 'college' : 'job-seeker'} />
        </div>
    );
};

export default TrainingServiceDetail;
