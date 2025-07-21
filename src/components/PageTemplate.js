import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageTemplate Component
 * 
 * A reusable template for creating new pages with automatic mobile responsiveness.
 * Use this as a starting point for any new page in the application.
 * 
 * Usage:
 * import PageTemplate from '../components/PageTemplate';
 * 
 * const NewPage = () => {
 *   return (
 *     <PageTemplate 
 *       title="Page Title"
 *       description="Page description"
 *     >
 *       // Your page content here
 *     </PageTemplate>
 *   );
 * };
 */
const PageTemplate = ({ 
  title, 
  description, 
  children, 
  showHeader = true,
  className = '' 
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${className}`}
    >
      {/* Page content wrapper with responsive padding */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page header - responsive text sizing */}
          {showHeader && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              {title && (
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 px-4">
                  {description}
                </p>
              )}
            </motion.div>
          )}

          {/* Page content - automatically responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageTemplate; 