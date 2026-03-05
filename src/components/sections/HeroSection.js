import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import GradientText from '../ui/GradientText';
import ScrollIndicator from '../ui/ScrollIndicator';
import ParticleField from '../ui/ParticleField';
import MagneticButton from '../ui/MagneticButton';
import { personalInfo } from '../../config/data';

const HeroSection = () => {
  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            left: '10%',
            top: '20%',
            background: 'radial-gradient(circle, rgba(66,133,244,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            right: '5%',
            top: '10%',
            background: 'radial-gradient(circle, rgba(52,168,83,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 450,
            height: 450,
            left: '50%',
            bottom: '10%',
            background: 'radial-gradient(circle, rgba(251,188,5,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 35, -25, 0], y: [0, -30, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, var(--bg-secondary) 100%)',
        }}
      />

      {/* Particle Background */}
      <div className="absolute inset-0">
        <ParticleField count={50} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-display font-bold mb-6 leading-[1.1]">
            <AnimatedText text={personalInfo.name} className="text-content-primary" />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <GradientText as="h2" className="text-h2 font-semibold mb-6">
              {personalInfo.title}
            </GradientText>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-body text-content-secondary max-w-2xl mx-auto mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton
              onClick={scrollToWork}
              className="btn-primary inline-flex items-center gap-2 text-base"
            >
              View My Work
              <ArrowRight size={18} />
            </MagneticButton>

            <MagneticButton
              href={personalInfo.resumePath}
              download="Vivek_Patel_Resume.pdf"
              className="btn-outline inline-flex items-center gap-2 text-base"
            >
              Download Resume
              <Download size={18} />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
