import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Force scroll to top immediately on route change
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // Skips smooth scroll for immediate effect
        });
    }, [pathname]); // Only trigger on path change, ignores hash changes if needed

    return null;
};

export default ScrollToTop;
