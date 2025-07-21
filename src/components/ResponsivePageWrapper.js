import React from 'react';
import { motion } from 'framer-motion';

const ResponsivePageWrapper = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen w-full ${className}`}
    >
      {/* Main content container with responsive padding */}
      <div className="
        px-4 sm:px-6 lg:px-8
        py-8 sm:py-12 lg:py-20
        max-w-[100vw] overflow-x-hidden
      ">
        {/* Inner container with max width for large screens */}
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default ResponsivePageWrapper; 