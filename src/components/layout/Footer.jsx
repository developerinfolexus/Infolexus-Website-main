import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';
import footerLogo from '../../assets/lnfolexus_4k_WALLPAPER_WITHOUT_CAPTION___1_-removebg-preview.png';
import TermsModal from './TermsModal';

const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <footer className="bg-[#081A4A]/95 pt-20 pb-10 font-sans border-t border-slate-900 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="w-full px-4 md:px-4 relative z-10">

                <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-12 lg:gap-12 mb-16">

                    {/* Brand Column (Span 4) */}
                    <div className="col-span-2 lg:col-span-3 flex flex-col items-start pr-0">
                        <Link to="/" className="inline-block mb-8">
                            <img
                                src={footerLogo}
                                alt="Infolexus"
                                className="h-10 md:h-14 w-auto object-contain object-left"
                            />
                        </Link>
                        <div className="md:pl-12">
                            <p className="text-slate-400 leading-relaxed mb-8">
                                Infolexus is a premier technology partner  delivering innovative IT solutions and strategic workforce management to global enterprises.<br />
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/company/infolexus-solutions/" },
                                    { icon: RiTwitterXFill, href: "https://x.com/InfolexusOff" },
                                    { icon: Facebook, href: "https://www.facebook.com/share/1DZN16dGP2/?mibextid=wwXIfr" },
                                    { icon: Instagram, href: "https://www.instagram.com/infolexus_solutions?igsh=MWxmOXFpanBseTJ2bA%3D%3D&utm_source=qr" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links Column (Span 2) */}
                    <div className="col-span-1 lg:col-span-2 lg:pl-10">
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/technologies" className="hover:text-blue-400 transition-colors">Technologies</Link></li>
                            <li><Link to="/clients" className="hover:text-blue-400 transition-colors">Clients</Link></li>
                            <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column (Span 3) - Moved Left */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col lg:items-center">
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-xs md:text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                                <span>Infolexus Solutions,<br />63/54-55, Dhamu Nagar,<br /> Puliyakulam,<br /> Coimbatore- 641045</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-500 shrink-0 mt-1" />
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:sales@infolexus.com" className="hover:text-white transition-colors">sales@infolexus.com</a>
                                    <a href="mailto:support@infolexus.com" className="hover:text-white transition-colors">support@infolexus.com</a>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <a href="tel:+919043919570" className="hover:text-white transition-colors">+91 90439 19570</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map Column (Span 3) - Added Right */}
                    <div className="col-span-2 lg:col-span-3 flex flex-col lg:items-center">
                        <h4 className="text-white font-bold mb-6">Location</h4>
                        <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.347263595567!2d76.9889976757065!3d11.006997092116035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859eb03584a43%3A0x32befeb42d4f385a!2sInfolexus%20Solutions!5e0!3m2!1sen!2sin!4v1713437292323!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Infolexus Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <button
                            onClick={() => setIsTermsOpen(true)}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            Terms of Service
                        </button>
                    </div>
                </div>
            </div>

            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        </footer>
    );
};

export default Footer;