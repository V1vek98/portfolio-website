export const personalInfo = {
  name: 'Vivek Patel',
  title: 'Operations Analyst',
  tagline: 'Building data-driven solutions that transform business operations',
  email: 'vspatel360@gmail.com',
  phone: '+1 (480) 233-8735',
  location: 'Augusta, GA',
  linkedin: 'https://www.linkedin.com/in/vspatel360/',
  github: 'https://github.com',
  resumePath: '/Vivek Patel Resume.pdf',
  profileImage: '/Vivek Patel LinkedIn Profile Pic.jpg',
  bio: `Senior Data Analyst adept at translating complex data into strategic growth. I leverage Python, SQL, Power BI, and Tableau to build highly effective automated solutions that significantly reduce manual reporting. With expertise in data warehousing, AI-driven product enhancements, and NLP, I guide data-informed product roadmaps and uncover new revenue opportunities.`,
};

export const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '', label: 'Industries' },
  { value: 1, suffix: '', label: 'BSc Mathematics', isText: true, displayValue: 'BSc' },
];

export const experiences = [
  {
    id: 1,
    title: 'Operations Analyst',
    company: 'KSB GIW',
    location: 'Augusta, GA',
    period: 'Sep 2025 - Present',
    description: 'Revamping analytics infrastructure and building AI-driven automation to streamline operations and decision-making.',
    achievements: [
      'Revamping analytics infrastructure by replacing legacy manual reporting with automated Python Flask dashboards and scheduled data pipelines',
      'Built secure web dashboards with user authentication and JWT token-based access control for role-specific data views',
      'Built statistical forecasting models for product usage and demand planning, reducing operational over-inventory by 10%',
      'Developing AI agents and embedded AI workflows to automate repetitive operational tasks and streamline decision-making processes',
    ],
    technologies: ['Python', 'Flask', 'SQL', 'JWT', 'AI Agents', 'Power BI'],
    metrics: [
      { value: '10%', label: 'Inventory Reduction' },
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer (Contract)',
    company: 'NorthStarHosp',
    location: 'Remote',
    period: 'Feb 2025 - Sep 2025',
    description: 'Built a full-stack hotel analytics platform with executive, financial, and operational dashboards and fully automated nightly audit pipelines.',
    achievements: [
      'Built a full-stack hotel analytics platform (React, TypeScript, Python) with executive, financial, and operational dashboards',
      'Fully automated the nightly audit pipeline end-to-end, from Gmail API ingestion and PDF parsing with PyPDF2/pandas to CSV output',
      'Designed interactive Recharts/Mantine UI dashboards with KPI cards, revenue heatmaps, occupancy trends, and multi-property comparison views',
      'Implemented role-based authentication with property-level access controls',
    ],
    technologies: ['React', 'TypeScript', 'Python', 'PyPDF2', 'Pandas', 'Recharts', 'Mantine UI'],
    metrics: [
      { value: '100%', label: 'Manual Entry Eliminated' },
      { value: '3', label: 'Hotel Properties' },
    ],
  },
  {
    id: 3,
    title: 'Senior Data Analyst',
    company: 'FEV Tutor',
    location: 'New York, NY',
    period: 'Oct 2022 - Jan 2025',
    description: 'Leading data analytics initiatives across multiple business units, developing machine learning models, and creating executive-level dashboards.',
    achievements: [
      'Led a team of data analysts to develop automated reporting using PowerBI for internal stakeholders and clients',
      'Contributed to AI-driven initiatives to streamline quality assurance workflows and significantly enhance product quality',
      'Designed and implemented data warehouses and database schemas, unifying data across multiple systems such as Salesforce, UserPilot and other third-party providers',
      'Reduced manual reporting by 90% through Python scripting, SQL queries, PowerBI and Tableau Dashboards while boosting user engagement by 80%',
      'Spearheaded research collaborations with Stanford University and the National Student Support Accelerator (NSSA)',
      'Guided product roadmaps for data-driven solutions, identifying new revenue opportunities and enhancing scalability',
    ],
    technologies: ['Python', 'SQL', 'Oracle', 'PostgreSQL', 'PowerBI', 'Tableau', 'UserPilot', 'Salesforce'],
    metrics: [
      { value: '90%', label: 'Manual Reporting Reduction' },
      { value: '80%', label: 'User Engagement Increase' },
    ],
  },
  {
    id: 4,
    title: 'NLP Analyst',
    company: 'PetThinQ',
    location: 'London, UK',
    period: 'Mar 2021 - Oct 2022',
    description: 'Developed comprehensive data solutions for clients in retail and e-commerce, specializing in NLP and customer behavior analysis.',
    achievements: [
      'Extracted and cleansed data using Python libraries (Requests, Beautiful Soup, and Selenium)',
      'Utilised NLTK, spaCy, and regular expressions for comprehensive textual data preprocessing',
      'Performed advanced topic modelling to categorise large datasets for strategic analyses',
      'Implemented and fine-tuned RoBERTa models for topic classification, boosting accuracy and efficiency',
      'Built multiple interactive Tableau dashboards providing actionable stakeholder insights',
    ],
    technologies: ['Python', 'SQL', 'NLTK', 'spaCy', 'Tableau', 'OctoParse', 'SEMRush'],
    metrics: [
      { value: '95%', label: 'Model Accuracy' },
      { value: '1M+', label: 'Reviews Analyzed' },
    ],
  },
  {
    id: 5,
    title: 'Assistant Manager',
    company: 'Squires Food & Wine',
    location: 'London, UK',
    period: 'Dec 2019 - Mar 2021',
    description: 'Led team operations and maintained exceptional customer satisfaction in a fast-paced retail environment.',
    achievements: [
      'Led and oversaw a team of grocery store employees while maintaining excellent customer service',
      'Managed purchasing of goods and products for sale in a retail setting',
      'Resolved customer complaints and conflicts in a professional manner',
    ],
    technologies: ['POS Systems', 'Inventory Management', 'Team Leadership'],
    metrics: [
      { value: '5', label: 'Team Members Led' },
    ],
  },
  {
    id: 6,
    title: 'Computer Repair / Software Specialist',
    company: 'IT Specialists',
    location: 'London, UK',
    period: 'Jun 2016 - Aug 2018',
    description: 'Resolved complex technical issues and provided comprehensive customer support for hardware and software.',
    achievements: [
      'Gained more than two years of experience with invoicing and accounting software (QuickBooks)',
      'Troubleshot and resolved a wide variety of computer hardware and software issues',
      'Successfully negotiated long-term software and hardware maintenance contracts',
    ],
    technologies: ['QuickBooks', 'Hardware Repair', 'Software Troubleshooting'],
    metrics: [
      { value: '500+', label: 'Tickets Resolved' },
      { value: '95%', label: 'Customer Satisfaction' },
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science, Mathematics',
  school: 'University of Portsmouth, England',
  year: '2019',
  grade: 'Upper Second Class',
  highlights: ['Swimming Society Treasurer', 'Water Polo Society Treasurer'],
};

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'R', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React', 'Node.js', 'FastAPI', 'Pandas', 'Scikit-learn', 'TensorFlow'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Power BI', 'Tableau', 'PostgreSQL', 'Oracle', 'Excel', 'Recharts'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure DevOps', 'Git', 'Docker', 'Power Automate', 'Salesforce'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Automated Content Generation Pipeline',
    category: 'ML',
    description: 'Comprehensive pipeline leveraging OpenAI APIs to automatically generate high-quality articles with ML-powered analysis including summarization, sentiment analysis, and clickbait classification.',
    technologies: ['OpenAI API', 'Scikit-learn', 'Flair', 'spaCy', 'NLTK', 'Pandas'],
    impact: 'Scaled article production by over 100x',
    metrics: ['10,000+ Articles/Day', '94% Classification Accuracy', 'Auto Review System'],
    github: 'https://github.com',
    featured: true,
    details: [
      'Used OpenAI API to generate article titles and body content based on selected topics',
      'Implemented a custom logistic regression model with Scikit-learn for click-bait classification',
      'Integrated Flair and spaCy for sentiment analysis and article summarization',
      'Automated keyword extraction, location detection, and NSFW content filtering',
    ],
  },
  {
    id: 2,
    title: 'Hotel Performance Reporting & BI Dashboard',
    category: 'Visualization',
    description: 'Fully autonomous data pipeline replacing manual daily reporting. Ingests hotel performance PDFs, uses OCR and regex for data extraction, and channels into interactive Power BI dashboards.',
    technologies: ['Python', 'PyTesseract', 'PyMuPDF', 'Power Automate', 'Power BI', 'Regex'],
    impact: 'Reduced daily reporting time by 100%',
    metrics: ['20+ PDF Reports Daily', '<1 Min Processing', '99.8% Accuracy'],
    github: 'https://github.com',
    featured: false,
    details: [
      'Automated daily retrieval of hotel audit PDFs from email attachments',
      'Applied OCR and advanced regex to parse images into structured financial data',
      'Built live Power BI dashboard visualizing KPIs, revenue streams, and daily activity',
    ],
  },
  {
    id: 3,
    title: 'Hotel Intelligence Hub',
    category: 'Analytics',
    description: 'Comprehensive web-based analytics platform for hotel industry data, featuring automated data loading, intelligent classification, and interactive visualizations.',
    technologies: ['React', 'Material-UI', 'JavaScript', 'CSV Processing', 'Google Maps API'],
    impact: 'Streamlined hotel data analysis workflow by 85%',
    metrics: ['85% Workflow Improvement', '10MB+ File Processing', '100% Responsive'],
    github: 'https://github.com',
    featured: false,
    details: [
      'Built React-based web application with Material-UI for professional hotel data analysis',
      'Implemented automatic CSV detection and loading with intelligent hotel classification',
      'Created responsive interface with advanced filtering and Google Maps integration',
    ],
  },
  {
    id: 4,
    title: 'AI Image Generation Studio',
    category: 'ML',
    description: 'ComfyUI-powered image generation platform orchestrating multiple AI models including Flux, SDXL, and ControlNet with advanced workflow automation and batch processing.',
    technologies: ['ComfyUI', 'Flux.1', 'SDXL', 'ControlNet', 'Python', 'PyTorch', 'CUDA'],
    impact: '25+ custom workflows created',
    metrics: ['1000+ Images Generated', '10+ AI Models', '25+ Workflows'],
    github: 'https://github.com',
    featured: false,
    details: [
      'Integrated cutting-edge models including Flux.1-dev, SDXL, and ControlNet variants',
      'Developed custom workflows with advanced sampling and intelligent upscaling',
      'Built automated batch processing for hundreds of images with consistent quality',
    ],
  },
  {
    id: 5,
    title: 'Local DeepSeek LLM Deployment',
    category: 'ML',
    description: 'Set up and optimized DeepSeek LLM for local inference on consumer hardware with API wrapper and quantization optimizations.',
    technologies: ['DeepSeek-R1', 'Python', 'Ollama', 'FastAPI', 'CUDA', 'Transformers'],
    impact: 'Successfully ran 70B parameter model locally',
    metrics: ['70B Parameters', '20-30s Response Time', 'Local Privacy'],
    github: 'https://github.com',
    featured: false,
    details: [
      'Configured DeepSeek-R1 for local inference using Ollama and direct PyTorch',
      'Implemented 4-bit quantization reducing memory usage while preserving quality',
      'Built FastAPI wrapper for HTTP-based interaction and testing',
    ],
  },
];

export const projectCategories = ['All', 'ML', 'Visualization', 'Analytics'];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Dashboards', href: '/dashboards', isRoute: true },
];
