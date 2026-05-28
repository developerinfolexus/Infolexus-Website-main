import React, { useEffect } from 'react';
import ClientsHero from './sections/ClientsHero';
import ClientsProjectShowcase from './sections/ClientsProjectShowcase';
import ClientImpact from './sections/ClientImpact';
import EngagementModels from './sections/EngagementModels';
import MarketsWeServe from './sections/MarketsWeServe';
import ServiceInquiryForm from '../servicedetailpage/sections/ServiceInquiryForm';

const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans bg-slate-50 min-h-screen">
            <ClientsHero />
            <ClientImpact />

            <ClientsProjectShowcase />


            <EngagementModels />
            <MarketsWeServe />
            <ServiceInquiryForm id="consultation-form" />
        </div>
    );
};

export default Clients;
