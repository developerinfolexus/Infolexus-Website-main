import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((letter, j) => (
              <motion.span variants={child} key={j} className="inline-block">
                {letter}
              </motion.span>
            ))}
          </span>
          {i < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

export default SplitText;
