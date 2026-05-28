import React from 'react';
import infinityImg from '../../assets/company/infosys.jpeg';
import cognizantImg from '../../assets/company/cognizant.jpeg';
import zohoImg from '../../assets/company/zoho.jpeg';
import wiproImg from '../../assets/company/Wipro.png';
import hclImg from '../../assets/company/HCL.png';
import accentureImg from '../../assets/company/Accenture.png';
import hexawareImg from '../../assets/company/Hexaware.png';
import ardhasImg from '../../assets/company/Ardhas.jpg';
import integraImg from '../../assets/company/Integra.jpg';
import omegaImg from '../../assets/company/Omega logo.jpg';

const clients = [
    { name: 'Infosys', logo: infinityImg, scale: 1 },
    { name: 'Cognizant', logo: cognizantImg, scale: 1 },
    { name: 'Zoho', logo: zohoImg, scale: 1 },
    { name: 'Wipro', logo: wiproImg, scale: 1 },
    { name: 'HCL', logo: hclImg, scale: 1 },
    { name: 'Accenture', logo: accentureImg, scale: 1 },
    { name: 'Hexaware', logo: hexawareImg, scale: 1 },
    { name: 'Ardhas', logo: ardhasImg, scale: 1.2 },
    { name: 'Integra', logo: integraImg, scale: 1.6 },
    { name: 'Omega', logo: omegaImg, scale: 1.6 },
];

const ClientMarquee = () => {
    return (
        <div className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Our Candidates Have Got Placed In The Following Companies
                </h3>
                <div className="w-24 h-1 bg-brand-blue mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap py-10">
                    {/* First Loop */}
                    {clients.map((client, index) => (
                        <div key={index} className="mx-8 md:mx-12 min-w-[120px] md:min-w-[160px] flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300">
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{ transform: `scale(${client.scale || 1})` }}
                                className="h-20 md:h-24 w-auto object-contain mix-blend-multiply"
                            />
                        </div>
                    ))}
                    {/* Second Loop for Seamless Scroll */}
                    {clients.map((client, index) => (
                        <div key={`duplicate-${index}`} className="mx-8 md:mx-12 min-w-[120px] md:min-w-[160px] flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300">
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{ transform: `scale(${client.scale || 1})` }}
                                className="h-20 md:h-24 w-auto object-contain mix-blend-multiply"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fades */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ClientMarquee;
