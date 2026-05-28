import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DMHero from './sections/DMHero';
import DMServiceSection from './sections/DMServiceSection';
import { dmServiceDetails } from '../../data/dmServiceDetails';

const DigitalMarketing = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100); // Slight delay to ensure render
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    // Convert data object to array
    const services = Object.entries(dmServiceDetails).map(([key, service]) => ({
        id: key,
        ...service
    }));

    return (
        <div className="font-sans">
            <DMHero />

            {/* Render a Section for Each Service */}
            {services.map((service, index) => (
                <DMServiceSection
                    key={service.id}
                    id={service.id}
                    title={service.title} // Main Section Title
                    items={[{
                        ...service,
                        title: service.subtitle, // Use subtitle as the inner item title
                        description: service.description,
                        image: service.image,
                        features: service.features
                    }]}
                    bgColor={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    isReversed={index % 2 !== 0} // Zigzag: odd indices are reversed (Right-to-Left)
                />
            ))}
        </div>
    );
};

export default DigitalMarketing;
