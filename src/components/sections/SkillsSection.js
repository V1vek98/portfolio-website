import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import BackgroundDecoration from '../ui/BackgroundDecoration';
import FloatingShapes from '../ui/FloatingShapes';
import { skillCategories } from '../../config/data';
import { ease } from '../../utils/animations';

const SkillsSection = () => {
  return (
    <Section id="skills" variant="subtle">
      <BackgroundDecoration variant="red-yellow" />
      <FloatingShapes />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold mb-4">
            <GradientText>Skills & Technologies</GradientText>
          </h2>
          <p className="text-body text-content-secondary max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease }}
            >
              <GlassCard className="h-full">
                <h3 className="text-sm font-semibold text-content-primary mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, ease }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 15px rgba(66, 133, 244, 0.3)',
                      }}
                      className="px-3 py-1.5 text-sm rounded-full bg-accent/10 text-accent border border-accent/20 cursor-default transition-colors hover:bg-accent/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SkillsSection;
