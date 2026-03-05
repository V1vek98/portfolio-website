import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import SaaSAnalytics from '../components/dashboards/SaaSAnalytics';
import HotelPerformance from '../components/dashboards/HotelPerformance';
import SupplyChainOps from '../components/dashboards/SupplyChainOps';
import NLPAnalytics from '../components/dashboards/NLPAnalytics';

const tabs = [
  { id: 'saas', label: 'SaaS Analytics', component: SaaSAnalytics },
  { id: 'hotel', label: 'Hotel Performance', component: HotelPerformance },
  { id: 'supply', label: 'Supply Chain', component: SupplyChainOps },
  { id: 'nlp', label: 'AI / NLP', component: NLPAnalytics },
];

const DashboardShowcase = () => {
  const [activeTab, setActiveTab] = useState('saas');
  const navigate = useNavigate();

  const ActiveDashboard = tabs.find((t) => t.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text-primary)] pt-20 pb-16 relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <Container>
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-content-secondary hover:text-content-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </motion.button>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-h1 font-bold mb-4">
            <span className="text-gradient">Dashboard Showcase</span>
          </h1>
          <p className="text-body text-content-secondary max-w-2xl mx-auto">
            Interactive data visualizations demonstrating analytics expertise across multiple industries
          </p>
        </motion.div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex glass-card rounded-xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 rounded-lg text-sm font-medium transition-colors z-10"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="dashboard-tab-indicator"
                    className="absolute inset-0 bg-gradient-accent rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${
                  activeTab === tab.id ? 'text-white' : 'text-content-secondary hover:text-content-primary'
                }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {ActiveDashboard && <ActiveDashboard />}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default DashboardShowcase;
