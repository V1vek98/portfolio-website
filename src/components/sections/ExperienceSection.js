import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { experiences, education } from '../../config/data';
import { ease } from '../../utils/animations';

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <Section id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold mb-4">
            <GradientText>Experience</GradientText>
          </h2>
          <p className="text-body text-content-secondary max-w-2xl mx-auto">
            A journey through my career in data analytics and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-green to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
              className={`relative pl-12 md:pl-0 mb-12 ${
                index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-accent border-4 border-white z-10" />

              <GlassCard
                className="cursor-pointer"
                onClick={() => toggle(exp.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-content-primary">{exp.title}</h3>
                    <p className="text-gradient font-semibold text-sm">{exp.company}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="text-content-tertiary" />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-content-tertiary mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>

                <p className="text-sm text-content-secondary mb-4">{exp.description}</p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {exp.metrics && (
                  <div className="flex flex-wrap gap-4 mt-3">
                    {exp.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-gradient">{m.value}</div>
                        <div className="text-xs text-content-tertiary">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expanded achievements */}
                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-content-primary mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((a, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-content-secondary">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative pl-12 md:pl-[52%]"
          >
            <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-accent border-4 border-white z-10" />
            <GlassCard>
              <h3 className="text-lg font-bold text-content-primary mb-1">{education.degree}</h3>
              <p className="text-gradient font-semibold text-sm mb-2">{education.school}</p>
              <p className="text-xs text-content-tertiary mb-3">Graduated {education.year} • {education.grade}</p>
              <div className="flex flex-wrap gap-2">
                {education.highlights.map((h) => (
                  <span key={h} className="px-2 py-1 text-xs rounded-full bg-green-50 text-google-green border border-green-200">
                    {h}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
