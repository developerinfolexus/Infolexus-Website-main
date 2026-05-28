import React, { useState } from 'react';
import HRHero from './sections/HRHero';
import HRServiceSection from './sections/HRServiceSection';
import HRInquiryModal from './components/HRInquiryModal';
import HRCompanyBanner from './sections/HRCompanyBanner';
import { hrServiceDetails } from '../../data/hrServiceDetails';

const HRServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCategory, setModalCategory] = useState('Job Seeker');
    const [modalSubject, setModalSubject] = useState('');

    const openModal = (category, item) => {
        setModalCategory(category);
        setModalSubject(item ? item.title : '');
        setIsModalOpen(true);
    };

    const services = Object.entries(hrServiceDetails).map(([key, service]) => ({
        id: key,
        ...service
    }));

    return (
        <div className="font-sans">
            <HRHero onEnquire={() => openModal('Job Seeker', { title: 'General Job Inquiry' })} />

            {services.map((service, index) => (
                <HRServiceSection
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    items={[{
                        ...service,
                        // Override item title with subtitle for display in the inner card as per DM layout
                        title: service.subtitle
                    }]}
                    isReversed={index % 2 !== 0}
                    bgColor={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    actionLabel="Enquire Now"
                    onEnquire={(item) => openModal('HR Service', { ...item, title: service.title })}
                />
            ))}

            <HRInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialCategory={modalCategory}
                initialSubject={modalSubject}
            />

            <HRCompanyBanner />
        </div>
    );
};

export default HRServices;
