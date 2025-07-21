import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, TrendingUp, Target, BarChart3, X, Calendar, Award, Zap, Github } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Automated Content Generation & Analysis Pipeline',
      category: 'Machine Learning',
      description: 'Developed a comprehensive pipeline that leverages a OpenAI APIs to automatically generate high-quality articles from a given set of topics. The system then enriches the content by performing several layers of machine learning-powered analysis, including summarization, keyword extraction, sentiment analysis, and clickbait classification.',
      technologies: ['OpenAI API', 'Scikit-learn', 'Flair', 'Spacy', 'NLTK', 'Pandas', 'NumPy', 'Yake'],
      image: '/api/placeholder/400/250',
      impact: 'Scaled article production by over 100x',
      metrics: ['10,000+ Articles/Day', '94% Classification Accuracy', 'Auto Review System'],
      demo: '#',
      github: 'https://github.com',
      details: [
        'Used the OpenAI API to generate article titles and body content based on selected topics',
        'Implemented a custom logistic regression model with Scikit-learn to classify the generated titles for click-bait potential',
        'Integrated the Flair and Spacy libraries to perform sentiment analysis and generate concise article summaries',
        'Automated the extraction of keywords, locations, and NSFW content before saving the final output'
      ],
      timeline: '3 months',
      challenges: [
        'Ensuring generated content was coherent, relevant, and engaging for readers',
        'Building an accurate classification model to distinguish between standard and "click-bait" headlines',
        'Integrating multiple disparate NLP analysis tools into a single, seamless workflow'
      ],
      solutions: [
        'Utilized OpenAI\'s text-davinci-002 model with carefully engineered prompts to guide high-quality text generation',
        'Trained a logistic regression classifier on a labeled dataset, using TF-IDF and part-of-speech tagging for feature engineering',
        'Developed a modular pipeline in Python, where each analysis step (e.g., summarization, sentiment analysis) functioned as an independent stage'
      ],
      outcomes: [
        'Deployed a system capable of generating complete articles with titles, sub-headlines, and summaries',
        'Enriched each article with valuable metadata, including sentiment scores, keywords, and read-time estimates',
        'Delivered a final structured dataset containing all generated content and its corresponding analytics in an Excel file'
      ]
    },
    {
      id: 2,
      title: 'Automated Hotel Performance Reporting & BI Dashboard',
      category: 'Visualization',
      description: 'Engineered a fully autonomous data pipeline to replace manual daily reporting. The system automatically ingests hotel performance PDFs from email, uses advanced OCR and regex to intelligently extract transactional and statistical data, and transforms it into a clean, structured format. The processed data is then channeled into an interactive Power BI dashboard, providing real-time insights into key business metrics.',
      technologies: ['Python', 'PyTesseract', 'PyMuPDF', 'Pandas', 'NumPy', 'Power Automate', 'Power BI', 'Regex'],
      image: '/api/placeholder/400/250',
      impact: 'Reduced daily reporting time by 100%',
      metrics: ['20+ PDF Reports Daily', '<1 Min Processing Time', '99.8% Extraction Accuracy'],
      demo: '#',
      github: 'https://github.com',
      details: [
        'Automated the daily retrieval of hotel audit PDFs from email attachments using a scheduled flow',
        'The script identifies and isolates pages containing "Final Transaction Closeout" and "Hotel Statistics," converting them into images for analysis',
        'Applied Optical Character Recognition (OCR) and advanced regex to parse the images, extracting financial data and operational metrics into a structured format',
        'The system cleans, transforms, and appends the new data to a central CSV file, which serves as a direct data source for the live Power BI dashboard'
      ],
      timeline: '5 weeks',
      challenges: [
        'Extracting data accurately from PDF reports with inconsistent layouts and multi-page tables',
        'Parsing complex financial figures, including negative values represented in parentheses',
        'Building a resilient, fully automated pipeline that could handle daily execution and potential errors without supervision'
      ],
      solutions: [
        'Developed a dynamic PDF processing module that first converts relevant pages to high-DPI images and then uses OCR to extract text for parsing',
        'Engineered robust regex patterns and data cleaning functions to precisely capture and standardize all required metrics and financial data',
        'Utilized Microsoft Power Automate to monitor an inbox for new report emails and trigger the Python script, with integrated logging for seamless monitoring and troubleshooting'
      ],
      outcomes: [
        'Deployed a zero-touch automation solution that runs daily, extracting data from all hotel audit PDFs',
        'Produced a clean, unpivoted dataset of hotel transactions and statistics, perfectly structured for analytics',
        'Delivered a comprehensive Power BI dashboard visualizing key performance indicators, revenue streams, and daily activity across all properties'
      ]
    },
    {
      id: 3,
      title: 'Hotel Intelligence Hub - Data Analytics Platform',
      category: 'Analytics',
      description: 'Developed a comprehensive web-based analytics platform for hotel industry data analysis, featuring automated data loading, intelligent classification systems, and interactive visualizations. The application processes complex hotel datasets and provides real-time insights into property performance, market positioning, and operational metrics.',
      technologies: ['React', 'Material-UI', 'JavaScript ES6+', 'CSV Processing', 'Google Maps API', 'Responsive Design'],
      image: '/api/placeholder/400/250',
      impact: 'Streamlined hotel data analysis workflow by 85%',
      metrics: ['85% Workflow Improvement', '10MB+ File Processing', '100% Mobile Responsive'],
      demo: '#',
      github: 'https://github.com',
      details: [
        'Built a modern React-based web application with Material-UI components for professional hotel data analysis',
        'Implemented automatic CSV file detection and loading system that processes hotel datasets on startup',
        'Developed intelligent hotel classification algorithm using room count and PRO/CORE status with visual feedback',
        'Created responsive interface with advanced filtering, search capabilities, and Google Maps integration for location analysis'
      ],
      timeline: '2 months',
      challenges: [
        'Processing large CSV files (10MB+) efficiently in the browser without performance degradation',
        'Creating an intuitive user interface that works seamlessly across desktop and mobile devices',
        'Implementing robust error handling for various CSV formats and data inconsistencies'
      ],
      solutions: [
        'Utilized Papa Parse library for efficient CSV processing with streaming capabilities and memory optimization',
        'Implemented Material-UI\'s responsive grid system with custom breakpoints and touch-friendly interactions',
        'Built comprehensive validation system with graceful error recovery and user-friendly error messages'
      ],
              outcomes: [
          'Delivered a production-ready application capable of processing hotel datasets with 1000+ properties instantly',
          'Implemented advanced data visualization features including interactive maps, dynamic filtering, and real-time classification updates',
          'Reduced manual data analysis time from hours to minutes with automated insights and classification features'
        ]
    },
    {
      id: 4,
      title: 'Advanced AI Image Generation Studio',
      category: 'Machine Learning',
      description: 'Built a comprehensive ComfyUI-powered image generation platform that orchestrates multiple state-of-the-art AI models including Flux, Stable Diffusion XL, and ControlNet. The system features advanced workflow automation, batch processing capabilities, and intelligent model switching to optimize output quality and generation speed.',
      technologies: ['ComfyUI', 'Flux.1', 'Stable Diffusion XL', 'ControlNet', 'Python', 'PyTorch', 'CUDA', 'Custom Nodes'],
      image: '/api/placeholder/400/250',
      impact: 'Created 25+ custom workflows for different use cases and artistic styles',
      metrics: ['1000+ Images Generated', '10+ AI Models Integrated', '25+ Custom Workflows'],
      demo: '#',
      github: 'https://github.com',
      details: [
        'Integrated cutting-edge models including Flux.1-dev, SDXL, and specialized ControlNet variants for precise image control',
        'Developed custom ComfyUI workflows with advanced sampling techniques, multi-pass refinement, and intelligent upscaling',
        'Built automated batch processing system capable of generating hundreds of images with consistent style and quality',
        'Implemented dynamic model switching based on prompt analysis and desired output characteristics'
      ],
      timeline: '8 months',
      challenges: [
        'Managing GPU memory efficiently across multiple large AI models (8GB+ each)',
        'Optimizing inference speed while maintaining high-quality outputs',
        'Creating consistent workflows that work reliably across different model architectures'
      ],
      solutions: [
        'Implemented intelligent model loading/unloading system to maximize GPU utilization without memory overflow',
        'Developed custom sampling schedulers and optimized inference pipelines reducing generation time by 40%',
        'Created modular workflow templates with automatic parameter adjustment based on model capabilities'
      ],
      outcomes: [
        'Successfully deployed production-ready image generation pipeline capable of handling diverse creative requests',
        'Achieved consistent high-quality outputs across photorealistic, artistic, and technical illustration styles',
        'Built comprehensive library of 25+ specialized workflows for different use cases and artistic styles'
      ]
    },
    {
      id: 5,
      title: 'Local DeepSeek LLM Deployment & Optimization',
      category: 'Machine Learning',
      description: 'Set up and optimized DeepSeek LLM for local inference, exploring the capabilities of running large language models on consumer hardware. Built a simple API wrapper and experimented with various optimization techniques to maximize performance within GPU memory constraints.',
      technologies: ['DeepSeek-R1', 'Python', 'Ollama', 'FastAPI', 'CUDA', 'Transformers'],
      image: '/api/placeholder/400/250',
      impact: 'Successfully ran 70B parameter model locally with good performance',
      metrics: ['70B Parameters', '20-30s Response Time', 'Local Privacy'],
      demo: '#',
      github: 'https://github.com',
      details: [
        'Downloaded and configured DeepSeek-R1 model for local inference using Ollama and direct PyTorch implementations',
        'Experimented with different quantization levels (4-bit, 8-bit) to fit the model within available GPU memory',
        'Built a simple FastAPI wrapper to interact with the model through HTTP requests for easier testing',
        'Tested various prompt engineering techniques and compared performance against cloud-based alternatives'
      ],
      timeline: '2 weeks',
      challenges: [
        'Working within GPU memory limitations while maintaining reasonable inference speed',
        'Understanding model quantization trade-offs between speed, memory usage, and output quality',
        'Setting up the proper CUDA environment and dependencies for optimal local performance'
      ],
      solutions: [
        'Used Ollama for simplified model management and automatic optimization based on available hardware',
        'Implemented 4-bit quantization which reduced memory usage significantly while preserving most output quality',
        'Created a basic API interface that made it easy to test different prompts and compare results'
      ],
      outcomes: [
        'Successfully deployed DeepSeek locally with consistent 20-30 second response times for most queries',
        'Gained hands-on experience with LLM deployment, quantization techniques, and local inference optimization',
        'Built a foundation for future local AI projects and understanding of the trade-offs in self-hosted LLM solutions'
      ]
    }
  ];

  const categories = ['All', 'Machine Learning', 'Visualization', 'Analytics'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">My Projects</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 px-4">
            Explore my portfolio of data science projects that have driven real business impact 
            through advanced analytics, machine learning, and data visualization.
          </p>
        </motion.div>

        {/* Filter Buttons - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Filter size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors min-h-touch ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - Mobile Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group relative"
            >
              {/* Project Image */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center transition-colors duration-300 relative">
                <div className="text-center">
                  <div className="bg-accent text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    {project.category === 'Machine Learning' && <TrendingUp size={24} className="sm:hidden" />}
                    {project.category === 'Visualization' && <BarChart3 size={24} className="sm:hidden" />}
                    {project.category === 'Analytics' && <Target size={24} className="sm:hidden" />}
                    {project.category === 'Machine Learning' && <TrendingUp size={28} className="hidden sm:block" />}
                    {project.category === 'Visualization' && <BarChart3 size={28} className="hidden sm:block" />}
                    {project.category === 'Analytics' && <Target size={28} className="hidden sm:block" />}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">{project.category}</span>
                </div>
                
                {/* Hover Overlay with View Details Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-accent px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2 transform opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </motion.button>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Project Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-accent line-clamp-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">{project.description}</p>

                {/* Impact Badge */}
                <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 inline-block transition-colors duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/50">
                  {project.impact}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {project.metrics.slice(0, 2).map((metric, index) => (
                    <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Technologies - Show less on mobile */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors"
                    >
                      <Github size={14} />
                    </motion.a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View details
                    </span>
                    <ExternalLink 
                      size={16} 
                      className="text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1" 
                    />
                  </div>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">Interested in Working Together?</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto transition-colors duration-300 px-4">
            I'm always excited to take on new challenges and help businesses unlock the power of their data.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block min-h-touch"
          >
            Start a Project
          </motion.a>
        </motion.div>

        {/* Project Detail Modal - Mobile Optimized */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl my-8 max-h-[calc(100vh-4rem)] overflow-y-auto"
              >
                {/* Modal Header - Mobile Friendly */}
<div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 sm:p-6 flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <div className="bg-accent text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        {selectedProject.category === 'Machine Learning' && <TrendingUp size={20} className="sm:hidden" />}
                        {selectedProject.category === 'Visualization' && <BarChart3 size={20} className="sm:hidden" />}
                        {selectedProject.category === 'Analytics' && <Target size={20} className="sm:hidden" />}
                        {selectedProject.category === 'Machine Learning' && <TrendingUp size={24} className="hidden sm:block" />}
                        {selectedProject.category === 'Visualization' && <BarChart3 size={24} className="hidden sm:block" />}
                        {selectedProject.category === 'Analytics' && <Target size={24} className="hidden sm:block" />}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                        <span className="text-accent font-medium text-sm sm:text-base">{selectedProject.category}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gray-800 dark:bg-gray-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors text-sm sm:text-base font-medium"
                      >
                        <Github size={16} sm={18} />
                        View Code
                      </motion.a>
                      {selectedProject.demo !== '#' && (
                        <motion.a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-accent text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
                        >
                          <ExternalLink size={16} sm={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
                  >
                    <X size={20} sm={24} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Modal Content - Mobile Optimized */}
                <div className="p-4 sm:p-6">
                  {/* Project Stats - Mobile Stack */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="text-blue-600 dark:text-blue-400" size={20} sm={24} />
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Timeline</p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{selectedProject.timeline}</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="text-green-600 dark:text-green-400" size={20} sm={24} />
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Impact</p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{selectedProject.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Key Metrics - Mobile Scroll */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6 sm:mb-8"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Zap className="text-accent" size={18} sm={20} />
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {selectedProject.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 text-center flex items-center justify-center"
                        >
                          <p className="text-sm sm:text-lg font-bold text-accent">{metric}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies - Mobile Wrap */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6 sm:mb-8"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Project Journey - Mobile Stack */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Challenges */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 sm:p-6"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-red-800 dark:text-red-400 mb-4">Challenges</h4>
                      <ul className="space-y-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                            {challenge}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Solutions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-blue-800 dark:text-blue-400 mb-4">Solutions</h4>
                      <ul className="space-y-3">
                        {selectedProject.solutions.map((solution, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                            {solution}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Outcomes */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 sm:p-6"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-green-800 dark:text-green-400 mb-4">Outcomes</h4>
                      <ul className="space-y-3">
                        {selectedProject.outcomes.map((outcome, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3 + index * 0.1 }}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                            {outcome}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Project Details - Mobile Readable */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 sm:mt-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4">Project Implementation</h4>
                    <ul className="space-y-3">
                      {selectedProject.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                          className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects; 