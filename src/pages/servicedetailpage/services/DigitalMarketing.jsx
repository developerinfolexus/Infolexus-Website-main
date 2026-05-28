import React, { useEffect } from 'react';
import { Share2, Search, Megaphone, FileText, Mail, LayoutGrid, BarChart3, Video } from 'lucide-react';
import { serviceDetails } from '../../../data/serviceDetails';
import ServiceHero from '../sections/ServiceHero';
import ServiceDeepDive from '../sections/ServiceDeepDive';
import ServiceFeatures from '../sections/ServiceFeatures';
import ServiceRoadmap from '../sections/ServiceRoadmap';
import ServiceCTA from '../sections/ServiceCTA';

const DigitalMarketing = () => {
    const service = serviceDetails['dm-11'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) return null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-violet-200">
            <ServiceHero service={service} id="dm-11" />
            <div id="details" className="pt-24 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    <ServiceDeepDive service={service} />
                    <ServiceFeatures service={service} />

                    {/* Digital Marketing Services Grid */}
                    <div className="py-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#081A4A] mb-4">DIGITAL MARKETING</h2>
                            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "SOCIAL MEDIA MARKETING", icon: Share2 },
                                { title: "SEO", icon: Search },
                                { title: "GOOGLE & SOCIAL ADS", icon: Megaphone },
                                { title: "CONTENT MARKETING", icon: FileText },
                                { title: "EMAIL MARKETING", icon: Mail },
                                { title: "WEB OPTIMIZATION", icon: LayoutGrid },
                                { title: "ANALYTICS & REPORTING", icon: BarChart3 },
                                { title: "VIDEO SHOOTS & EDITING", icon: Video },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-slate-100">
                                    <div className="w-20 h-20 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all shadow-inner">
                                        <item.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ServiceRoadmap service={service} />
                </div>
            </div>
            <ServiceCTA />
        </div>
    );
};

export default DigitalMarketing;

