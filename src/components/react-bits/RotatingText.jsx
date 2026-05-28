import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({ mainText, prefix, words }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="flex flex-col items-start text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            <span className="text-white drop-shadow-md">
                {mainText}
            </span>
            <div className="flex items-center gap-2 md:gap-4 mt-1 md:mt-2">
                <span className="text-slate-300 font-light">
                    {prefix}
                </span>
                <div className="relative h-[1.3em] w-[350px] md:w-[800px] overflow-visible flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={words[index]}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 whitespace-nowrap pb-1 font-extrabold"
                        >
                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default RotatingText;
