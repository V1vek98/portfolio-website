import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const letters = text.split('');

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: delay + i * 0.03,
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
