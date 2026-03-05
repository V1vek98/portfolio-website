import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../config/data';

const Footer = () => (
  <footer className="bg-surface-tertiary">
    <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-content-tertiary">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-content-tertiary hover:text-accent transition-colors hover:drop-shadow-[0_0_6px_rgba(66,133,244,0.4)]">
          <Github size={18} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-content-tertiary hover:text-accent transition-colors hover:drop-shadow-[0_0_6px_rgba(66,133,244,0.4)]">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-content-tertiary hover:text-accent transition-colors hover:drop-shadow-[0_0_6px_rgba(66,133,244,0.4)]">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
