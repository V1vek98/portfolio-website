import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import Container from '../layout/Container';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import Modal from '../ui/Modal';
import BackgroundDecoration from '../ui/BackgroundDecoration';
import { projects, projectCategories } from '../../config/data';
import { ease } from '../../utils/animations';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects">
      <BackgroundDecoration variant="blue-green" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <h2 className="text-h1 font-bold mb-4">
            <GradientText>Projects</GradientText>
          </h2>
          <p className="text-body text-content-secondary max-w-2xl mx-auto">
            Data science projects driving real business impact
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25'
                  : 'glass text-content-secondary hover:text-content-primary hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <GlassCard
                  className="h-full cursor-pointer group relative overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                      {project.category}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full hover:bg-black/5 transition-colors"
                      >
                        <Github size={14} className="text-content-secondary" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-content-primary mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-sm text-content-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact badge */}
                  <div className="px-3 py-1.5 rounded-lg bg-green-50 text-google-green text-xs font-medium inline-block mb-4">
                    {project.impact}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-content-tertiary">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-content-tertiary self-center">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-6">
                    <span className="text-sm text-content-primary font-medium flex items-center gap-1">
                      View Details <ExternalLink size={14} />
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dashboard CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mt-16"
        >
          <GlassCard className="inline-block px-8 py-6 cursor-pointer" onClick={() => navigate('/dashboards')}>
            <p className="text-content-secondary mb-3">Want to see interactive dashboards?</p>
            <span className="text-gradient font-bold text-lg flex items-center gap-2 justify-center">
              View Dashboard Showcase <ArrowRight size={18} />
            </span>
          </GlassCard>
        </motion.div>

        {/* Project Modal */}
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {selectedProject && (
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  {selectedProject.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-content-primary mb-3">{selectedProject.title}</h2>
              <p className="text-content-secondary mb-6">{selectedProject.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="glass-card p-4 text-center">
                    <p className="text-sm font-bold text-accent">{metric}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-content-primary mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-content-primary mb-3">Implementation</h4>
                <ul className="space-y-2">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-content-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
