import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import HomePage from './pages/HomePage';

const DashboardShowcase = lazy(() => import('./pages/DashboardShowcase'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] noise-overlay">
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboards" element={<DashboardShowcase />} />
            </Routes>
          </PageTransition>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
