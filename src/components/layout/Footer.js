import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../config/data';

const Footer = () => (
  <footer className="py-8 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-content-tertiary">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-content-tertiary hover:text-content-primary transition-colors">
          <Github size={18} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-content-tertiary hover:text-content-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-content-tertiary hover:text-content-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
