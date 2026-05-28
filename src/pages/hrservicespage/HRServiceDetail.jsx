import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { hrServiceDetails } from '../../data/hrServiceDetails';

// Import shared service components
import ServiceHero from '../servicedetailpage/sections/ServiceHero';
import ServiceDeepDive from '../servicedetailpage/sections/ServiceDeepDive';
import ServiceFeatures from '../servicedetailpage/sections/ServiceFeatures';
import ServiceRoadmap from '../servicedetailpage/sections/ServiceRoadmap';
import ServiceCTA from '../servicedetailpage/sections/ServiceCTA';

const HRServiceDetail = () => {
    const { id } = useParams();
    const service = hrServiceDetails[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                    <p className="text-slate-500 mb-8">The requested HR service &quot;{id}&quot; does not exist.</p>
                    <Link to="/hr-services" className="text-blue-600 hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to HR Services
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
                    <ServiceDeepDive service={service} variant="hr" />
                    <ServiceFeatures service={service} variant="hr" />
                    <ServiceRoadmap service={service} variant="hr" />
                </div>
            </div>
            <ServiceCTA variant={['campus-recruitment'].includes(id) ? 'college' : ['job-seeker', 'resume-optimization', 'interview-prep', 'career-guidance', 'fresher-hiring'].includes(id) ? 'job-seeker' : 'default'} />
        </div>
    );
};

export default HRServiceDetail;
