import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import GradientText from '../ui/GradientText';
import AnimatedCounter from '../ui/AnimatedCounter';
import { personalInfo, stats } from '../../config/data';
import { staggerItem, ease } from '../../utils/animations';

const AboutSection = () => {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-accent opacity-60 blur-sm" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200"
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="text-h1 font-bold mb-6">
              About <GradientText>Me</GradientText>
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-10">
              {personalInfo.bio}
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...staggerItem}
                  transition={{ ...staggerItem.animate.transition, delay: 0.2 + i * 0.1 }}
                  whileInView="animate"
                  initial="initial"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.isText ? (
                      stat.displayValue
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-xs text-content-tertiary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
