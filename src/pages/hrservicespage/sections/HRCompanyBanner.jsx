import React from 'react';
import { motion } from 'framer-motion';

// Import company logos
import accenture from '../../../assets/company/Accenture.png';
import ardhas from '../../../assets/company/Ardhas.jpg';
import hcl from '../../../assets/company/HCL.png';
// import hrLogo from '../../../assets/company/HR logo.jpg'; // Skipped based on name
import hexaware from '../../../assets/company/Hexaware.png';
import integra from '../../../assets/company/Integra.jpg';
import omega from '../../../assets/company/Omega logo.jpg';
import wipro from '../../../assets/company/Wipro.png';
import appInnovation from '../../../assets/company/app-innovation.jpeg';
import cognizant from '../../../assets/company/cognizant.jpeg';
import infosys from '../../../assets/company/infosys.jpeg';
import zoho from '../../../assets/company/zoho.jpeg';

const companies = [
    { name: 'Accenture', logo: accenture },
    { name: 'HCL', logo: hcl },
    { name: 'Wipro', logo: wipro },
    { name: 'Infosys', logo: infosys },
    { name: 'Cognizant', logo: cognizant },
    { name: 'Zoho', logo: zoho },
    { name: 'Hexaware', logo: hexaware },
    { name: 'Ardhas', logo: ardhas },
    { name: 'Integra', logo: integra },
    { name: 'Omega', logo: omega },
    { name: 'App Innovation', logo: appInnovation },
];

const HRCompanyBanner = () => {
    return (
        <div className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Our Candidates Have Got Placed In The Following Companies
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-16 w-max items-center"
                    animate={{ x: [0, -1920] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                >
                    {[...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-40 h-24 transition-all duration-300"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HRCompanyBanner;
