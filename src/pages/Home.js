import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Database, BarChart3, Brain, Code } from 'lucide-react';

const Home = () => {
  const skills = [
    { name: 'Python', icon: Code, level: 80, color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', barColor: 'bg-blue-500' },
    { name: 'SQL', icon: Database, level: 85, color: 'bg-red-500', textColor: 'text-red-600 dark:text-red-400', barColor: 'bg-red-500' },
    { name: 'Data Visualization', icon: BarChart3, level: 90, color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', barColor: 'bg-yellow-500' },
    { name: 'Machine Learning', icon: Brain, level: 70, color: 'bg-green-500', textColor: 'text-green-600 dark:text-green-400', barColor: 'bg-green-500' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/Vivek Patel LinkedIn Profile Pic.jpg" 
                  alt="Vivek Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300"
            >
              Senior Data Analyst
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto transition-colors duration-300 px-4"
            >
              Transforming complex data into actionable insights that drive business growth. 
              Specialized in advanced analytics, machine learning, and data visualization.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-accent text-white px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors min-h-touch"
                >
                  View My Projects
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <motion.a
                href="/Vivek Patel Resume.pdf"
                download="Vivek Patel Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-accent text-accent px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-colors min-h-touch"
              >
                Download Resume
                <Download size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">About Me</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300 px-4">
            Senior Data Analyst adept at translating complex data into strategic growth.
            I leverage <span className="font-bold text-blue-600 dark:text-blue-400">Python</span>, <span className="font-bold text-blue-600 dark:text-blue-400">SQL</span>, <span className="font-bold text-blue-600 dark:text-blue-400">Power BI</span>, and <span className="font-bold text-blue-600 dark:text-blue-400">Tableau</span> to build highly effective automated solutions that significantly reduce manual reporting.
            With expertise in data warehousing, <span className="font-bold text-blue-600 dark:text-blue-400">AI</span>-driven product enhancements, and <span className="font-bold text-blue-600 dark:text-blue-400">NLP</span>, I guide data-informed product roadmaps and uncover new revenue opportunities.
            </p>
          </motion.div>

          {/* Skills Section - Responsive Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                >
                  <motion.div 
                    className={`${skill.color} text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -3, 3, -3, 0],
                      transition: { 
                        scale: { duration: 0.05, ease: "easeOut" },
                        rotate: { duration: 0.2, ease: "easeInOut" }
                      }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={28} className="hidden sm:block" />
                  </motion.div>
                  <h3 className={`text-base sm:text-lg font-semibold ${skill.textColor} mb-2 transition-colors duration-300`}>{skill.name}</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2 transition-colors duration-300">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`${skill.barColor} h-3 rounded-full`}
                    ></motion.div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{skill.level}%</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's collaborate to unlock the hidden insights in your data and drive your business forward.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-touch"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 