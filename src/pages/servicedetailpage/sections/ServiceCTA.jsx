import React from 'react';
import ServiceCommitment from './ServiceCommitment';
import ServiceInquiryForm from './ServiceInquiryForm';

const ServiceCTA = ({ variant }) => {
    return (
        <>
            <ServiceCommitment />
            <ServiceInquiryForm variant={variant} />
        </>
    );
};

export default ServiceCTA;
