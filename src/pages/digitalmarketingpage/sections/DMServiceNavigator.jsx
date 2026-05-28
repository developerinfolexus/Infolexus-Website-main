import React, { useState, useEffect } from 'react';


const DMServiceNavigator = ({ services }) => {
    const [activeId, setActiveId] = useState('');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust for sticky header if any
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveId(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for trigger point

            // Find the current active section
            services.forEach((service) => {
                const element = document.getElementById(service.id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    const elementTop = top + window.scrollY;
                    const elementBottom = bottom + window.scrollY;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveId(service.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [services]);

    return (
        <section className="py-12 bg-white sticky top-0 z-40 shadow-sm/90 backdrop-blur-md bg-white/90 border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => scrollToSection(service.id)}
                            className={`p-4 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 border ${activeId === service.id
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                                }`}
                        >
                            {service.title.split('(')[0].trim()} {/* Simplified Title */}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DMServiceNavigator;
