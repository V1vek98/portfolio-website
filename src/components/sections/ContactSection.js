import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import GradientText from '../ui/GradientText';
import { personalInfo } from '../../config/data';
import { ease } from '../../utils/animations';

const ContactSection = () => {
  const contactItems = [
    { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\D/g, '')}` },
    { icon: MapPin, label: personalInfo.location, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, external: true },
    { icon: Github, label: 'GitHub', href: personalInfo.github, external: true },
  ];

  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold mb-4">
            Get In <GradientText>Touch</GradientText>
          </h2>
          <p className="text-body text-content-secondary max-w-2xl mx-auto">
            Ready to discuss your next data project? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-5 p-5 glass-card rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Icon size={24} className="text-accent" />
                </div>
                <span className="text-lg text-content-secondary group-hover:text-content-primary transition-colors">
                  {item.label}
                </span>
              </a>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactSection;
