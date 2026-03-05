import React from 'react';
import { motion } from 'framer-motion';

const variantClasses = {
  white: 'bg-surface-primary',
  subtle: 'bg-surface-secondary',
};

const Section = ({ children, id, className = '', fullHeight = false, variant = 'white' }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
    className={`relative overflow-hidden ${variantClasses[variant] || ''} ${fullHeight ? 'min-h-screen' : ''} py-20 md:py-32 ${className}`}
  >
    {children}
  </motion.section>
);

export default Section;
