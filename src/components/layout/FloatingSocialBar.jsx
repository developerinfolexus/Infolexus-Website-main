import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RiFacebookFill,
    RiTwitterXFill,
    RiLinkedinFill,
    RiInstagramFill,
    RiYoutubeFill,
    RiWhatsappLine,
    RiLinksFill,
    RiCloseLine,
    RiGlobalLine
} from 'react-icons/ri';
import { ChevronUp } from 'lucide-react';


const FloatingSocialBar = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // For Mobile
    const [isDesktopOpen, setIsDesktopOpen] = useState(false); // For Desktop non-home pages

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const socialLinks = [
        { icon: RiWhatsappLine, href: 'https://wa.me/919043919570', bg: 'bg-[#25D366]' },
        { icon: RiLinkedinFill, href: 'https://www.linkedin.com/company/infolexus-solutions/', bg: 'bg-[#0A66C2]' },
        { icon: RiInstagramFill, href: 'https://www.instagram.com/infolexus_solutions?igsh=MWxmOXFpanBseTJ2bA%3D%3D&utm_source=qr', bg: 'bg-[#E4405F]' },
        { icon: RiYoutubeFill, href: 'https://www.youtube.com/@Infolexus_solutions', bg: 'bg-[#FF0000]' },
    ];

    return (
        <div
            className="fixed right-4 bottom-6 z-50 flex flex-col items-center gap-3 pointer-events-auto"
            onMouseLeave={() => {
                setIsOpen(false);
                setIsDesktopOpen(false);
            }}
        >
            {/* Desktop View */}
            <div className="hidden lg:flex flex-col gap-3 items-center mb-2">
                {/* 
                    Logic:
                    - If HomePage: Always show links.
                    - If Not HomePage: Show links only if isDesktopOpen is true.
                */}
                <AnimatePresence>
                    {isDesktopOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-3 items-center"
                        >
                            {socialLinks.map((item, index) => (
                                <a
                                    key={`desktop-${index}`}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-10 h-10 ${item.bg} text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                                >
                                    <item.icon size={18} />
                                </a>
                            ))}

                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button for Desktop */}
                <button
                    onClick={() => setIsDesktopOpen(!isDesktopOpen)}
                    className="flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                    title={isDesktopOpen ? "Close" : "Show Social Links"}
                >
                    {isDesktopOpen ? <RiCloseLine size={24} /> : <RiGlobalLine size={24} />}
                </button>
            </div>

            {/* Mobile/Tablet: Toggleable Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex lg:hidden flex-col gap-3 items-center mb-2"
                    >
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center w-10 h-10 ${item.bg} text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                            >
                                <item.icon size={18} />
                            </a>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle / Social Button - Mobile/Tablet Only */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#020617] border border-white/20 text-white rounded-full shadow-2xl hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-300 group z-50 order-first"
            >
                {isOpen ? <RiCloseLine size={24} /> : <RiGlobalLine size={24} />}
            </button>

            {/* Back to Top Button - BELOW Hamburger */}
            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: -20 }}
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                    >
                        <ChevronUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingSocialBar;
