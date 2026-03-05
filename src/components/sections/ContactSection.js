import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section from '../layout/Section';
import Container from '../layout/Container';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { personalInfo } from '../../config/data';
import { ease } from '../../utils/animations';

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_id',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_id',
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'public_key'
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\D/g, '')}` },
    { icon: MapPin, label: personalInfo.location, href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', href: personalInfo.github },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="space-y-4 mb-8">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="text-content-secondary group-hover:text-content-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <Icon size={20} className="text-content-secondary group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <GlassCard hover={false}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-content-secondary mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-content-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-content-secondary mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-content-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-content-secondary mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-content-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-google-green text-sm"
                  >
                    <CheckCircle size={16} /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-google-red text-sm"
                  >
                    <AlertCircle size={16} /> Failed to send. Try emailing directly.
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
