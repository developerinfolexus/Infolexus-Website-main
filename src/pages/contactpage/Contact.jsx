import React from 'react';
import ContactHeader from './sections/ContactHeader';
import ContactFormSection from './sections/ContactFormSection';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <ContactHeader />
            <ContactFormSection />
        </div>
    );
};

export default Contact;
