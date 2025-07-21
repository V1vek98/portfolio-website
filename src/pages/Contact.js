import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vspatel360@gmail.com',
      link: 'mailto:vspatel360@gmail.com',
      description: 'Send me an email anytime',
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (480) 233-8735',
      link: 'tel:+14802338735',
      description: 'Available during normal business hours',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Augusta, GA',
      link: '#',
      description: 'Open to remote, on-site and relocation opportunities',
      color: 'bg-purple-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vspatel360/',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Connect with me professionally'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
      description: 'Check out my repositories'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:vspatel360@gmail.com',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Send me a direct message'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">Get In Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 px-4">
            Ready to discuss your next data project? I'd love to hear from you. 
            Let's explore how we can turn your data into actionable insights.
          </p>
        </motion.div>

        {/* Contact Information Grid - Stack on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <motion.a
                  href={info.link}
                  className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-4 sm:p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-accent/20 dark:hover:border-accent/20 h-full min-h-[180px] sm:min-h-[220px]"
                >
                  <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full justify-center">
                    <motion.div 
                      className={`${info.color} text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon size={20} className="sm:hidden" />
                      <Icon size={24} className="hidden sm:block" />
                    </motion.div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-accent font-medium text-sm sm:text-base mb-2 group-hover:text-blue-700 transition-colors duration-300 break-all">
                        {info.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 transition-colors duration-300"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Connect Online
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Let's connect and explore opportunities together
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 sm:p-6 rounded-lg text-center transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center space-y-2 sm:space-y-3 group min-h-touch`}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={24} className="sm:hidden" />
                      <Icon size={28} className="hidden sm:block" />
                    </motion.div>
                    <div>
                      <span className="text-sm sm:text-base font-semibold block">{social.name}</span>
                      <span className="text-xs sm:text-sm opacity-90 mt-1 block">{social.description}</span>
                    </div>
                    <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 sm:hidden" />
                    <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/5 to-blue-600/5 dark:from-accent/10 dark:to-blue-600/10 rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              Ready to Start Your Project?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto transition-colors duration-300 px-4">
              Whether you need data analysis, machine learning models, or business intelligence solutions, 
              I'm here to help turn your data challenges into opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <motion.a
                href="mailto:vspatel360@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-h-touch w-full sm:w-auto"
              >
                <Mail size={18} className="sm:hidden" />
                <Mail size={20} className="hidden sm:block" />
                Send Email
              </motion.a>
              <motion.a
                href="/Vivek Patel Resume.pdf"
                download="Vivek_Patel_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl min-h-touch w-full sm:w-auto"
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 