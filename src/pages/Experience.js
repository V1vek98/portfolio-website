import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp, Users, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Data Analyst',
      company: 'FEV Tutor',
      location: 'New York, NY',
      period: 'Oct 22 - Jan 25',
      type: 'Full-time',
      description: 'Leading data analytics initiatives across multiple business units, developing machine learning models, and creating executive-level dashboards.',
      achievements: [
        'Led a team of data analysts to develop automated reporting using PowerBI for internal stakeholders and clients',
        'Contributed to AI-driven initiatives to streamline quality assurance workflows and significantly enhance product quality',
        'Designed and implemented data warehouses and database schemas, unifying data across multiple systems such as Salesforce, UserPilot and other third-party providers',
        'Reduced manual reporting by 90% through Python scripting, SQL queries, PowerBI and Tableau Dashboards while boosting user engagement by 80%',
        'Spearheaded research collaborations with Stanford University and the National Student Support Accelerator (NSSA), conducting advanced analyses from research trials',
        'Guided product roadmaps for data-driven solutions, identifying new revenue opportunities, optimising costs and enhancing the scalability of core products'
      ],
      technologies: ['Python', 'SQL', 'Oracle', 'PostgreSQL', 'PowerBI', 'Tableau', 'UserPilot', 'Salesforce'],
      highlights: [
        { metric: '90%', description: 'Manual Reporting Reduction' },
        { metric: '80%', description: 'User Engagement Increase' },
        { metric: '95%', description: 'Data Warehouse Implementation' }
      ]
    },
    {
      id: 2,
      title: 'NLP Analyst',
      company: 'PetThinQ',
      location: 'London, UK',
      period: 'Mar 21 - Oct 22',
      type: 'Full-time',
      description: 'Developed comprehensive data solutions for clients in retail and e-commerce, specializing in customer behavior analysis and market research.',
      achievements: [
        'Extracted and cleansed data using Python libraries (Requests, Beautiful Soup, and Selenium)',
        'Utilised NLTK, spaCy, and regular expressions for comprehensive textual data preprocessing, optimising datasets for downstream analytics',
        'Performed advanced topic modelling to categorise large datasets, enabling targeted and strategic analyses',
        'Conducted exploratory data analysis to identify patterns and trends, informing key decision-making processes',
        'Implemented and fine-tuned RoBERTa models for topic classification of review data, boosting accuracy and efficiency',
        'Built multiple interactive Tableau dashboards, providing dynamic data visualisations and facilitating actionable stakeholder insights'
      ],
      technologies: ['Python', 'SQL', 'NLTK', 'Tableau', 'OctoParse', 'SEMRush'],
      highlights: [
        { metric: '95%', description: 'Fine-tuned Model Accuracy' },
        { metric: '1,000,000+', description: 'Reviews Scraped & Analyzed' },
        { metric: '7', description: 'Detailed Dashboards Created' }
      ]
    },
    {
      id: 3,
      title: 'Assistant Manager',
      company: 'Squires Food & Wine',
      location: 'London, UK',
      period: 'Dec 19 - Mar 21',
      type: 'Full-time',
      description: 'Assistant manager focused on maintaining smooth store operations and ensuring exceptional customer satisfaction in a fast-paced retail environment.',
      achievements: [
        'Led and oversaw a team of grocery store employees while maintaining excellent customer service',
        'Managed purchasing of goods and products for sale in a retail setting',
        'Demonstrated strong organizational skills and attention to detail in daily operations',
        'Resolved customer complaints and conflicts in a professional manner',
        'Handled multiple responsibilities including stocking shelves, price adjustments, deliveries, and cash register operations'
      ],
      technologies: ['Point of Sale Systems', 'Inventory Management', 'Customer Service'],
      highlights: [
        { metric: '5', description: 'Team Members Led' },
        { metric: '18 months', description: 'Team Leadership Experience' },
        { metric: '6', description: 'Core Operational Functions Managed' }
      ]
    },
    {
      id: 4,
      title: 'Computer Repair/Software Specialist',
      company: 'IT Specialists',
      location: 'London, UK',
      period: 'Jun 16 - Aug 18',
      type: 'Full-time',
      description: 'Experienced IT specialist with a proven track record in resolving complex technical issues and providing comprehensive customer support.',
      achievements: [
        'Gained more than two years of experience with invoicing and accounting software (QuickBooks)',
        'Provided daily customer support both in person and over the phone',
        'Demonstrated ability to work effectively under pressure in customer service environments',
        'Troubleshot and resolved a wide variety of computer hardware and software issues',
        'Successfully negotiated long-term software and hardware maintenance contracts with local companies'
      ],
      technologies: ['QuickBooks', 'Computer Hardware', 'Software Troubleshooting', 'Customer Support'],
      highlights: [
        { metric: '500+', description: 'Technical Tickets Resolved' },
        { metric: '95%', description: 'Customer Satisfaction' },
        { metric: '2+ years', description: 'QuickBooks Experience' }
      ]
    }
  ];

  const skills = [
    { name: 'Programming', items: ['Python', 'SQL', 'R'] },
    { name: 'Tools & Platforms', items: ['Power BI', 'Tableau', 'Oracle', 'PostgreSQL', 'UserPilot', 'Salesforce'] },
    { name: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Statistical Modeling'] },
    { name: 'Databases', items: ['Oracle', 'PostgreSQL'] }
  ];

  const education = [
    {
      degree: 'Bachelor of Science, Mathematics',
      school: 'University of Portsmouth, England',
      year: '2019',
      Grade: 'Upper Second Class',
      highlights: ['Swimming Society Treasurer', 'Water Polo Society Treasurer']
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">Professional Experience</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 px-4">
            A journey through my career in data analytics, showcasing growth, achievements, 
            and the impact I've made across various organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Experience Timeline - Full width on mobile, 2/3 on desktop */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Timeline Line - Hidden on mobile */}
              <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative sm:pl-12 pb-8 sm:pb-12"
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden sm:flex absolute left-0 top-2 w-8 h-8 bg-accent rounded-full items-center justify-center">
                    <Building size={16} className="text-white" />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
                          <span className="font-semibold text-accent">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 transition-colors duration-300">{exp.description}</p>

                    {/* Highlights - Stack on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg transition-colors duration-300">
                          <div className="text-xl sm:text-2xl font-bold text-accent">{highlight.metric}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">{highlight.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 transition-colors duration-300">
                        <Award size={16} className="text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar - Stack below on mobile */}
          <div className="space-y-6 sm:space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-300">
                <TrendingUp size={18} sm={20} className="text-accent" />
                Technical Skills
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">{skillGroup.name}</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 dark:bg-blue-900/30 text-accent px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 transition-colors duration-300">
                <Users size={18} sm={20} className="text-accent" />
                Education
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent pl-3 sm:pl-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white transition-colors duration-300">{edu.degree}</h4>
                    <p className="text-accent font-medium text-sm">{edu.school}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">Graduated {edu.year} • Grade: {edu.Grade}</p>
                    <div className="flex flex-wrap gap-1">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 