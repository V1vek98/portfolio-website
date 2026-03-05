import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ children, className = '', as: Tag = 'span', animate = true }) => {
  const Component = animate ? motion[Tag] || motion.span : Tag;

  return (
    <Component
      className={`text-gradient ${className}`}
      {...(animate ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, delay: 0.3 },
      } : {})}
    >
      {children}
    </Component>
  );
};

export default GradientText;
