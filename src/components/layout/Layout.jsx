import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import FloatingSocialBar from './FloatingSocialBar';

const Layout = ({ children }) => {
    const location = useLocation();
    // Hide footer on /services page
    const hideFooter = location.pathname === '/services';

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            {!hideFooter && <Footer />}
            <FloatingSocialBar />
        </div>
    );
};

export default Layout;
