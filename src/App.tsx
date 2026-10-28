import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationBanner } from './components/ConsultationBanner';
import { WhatsAppFloatButton } from './components/WhatsAppFloatButton';
import { LocalBusinessSchema } from './components/LocalBusinessSchema';
import { Home } from './pages/Home';

// Route-level code splitting for non-home pages
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = React.lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Doctors = React.lazy(() => import('./pages/Doctors').then(m => ({ default: m.Doctors })));
const Centres = React.lazy(() => import('./pages/Centres').then(m => ({ default: m.Centres })));
const Blog = React.lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPostDetail = React.lazy(() => import('./pages/BlogPostDetail').then(m => ({ default: m.BlogPostDetail })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = React.lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Mentors = React.lazy(() => import('./pages/Mentors').then(m => ({ default: m.Mentors })));
const XRayAtHome = React.lazy(() => import('./pages/XRayAtHome').then(m => ({ default: m.XRayAtHome })));
const Physiotherapy = React.lazy(() => import('./pages/Physiotherapy').then(m => ({ default: m.Physiotherapy })));
const HomeServices = React.lazy(() => import('./pages/HomeServices').then(m => ({ default: m.HomeServices })));
const NotFound = React.lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <LocalBusinessSchema />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/x-ray-services-at-home" element={<XRayAtHome />} />
            <Route path="/x-ray-at-home" element={<XRayAtHome />} />
            <Route path="/physiotherapy" element={<Physiotherapy />} />
            <Route path="/home-services" element={<HomeServices />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/centres" element={<Centres />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/robotic-knee-replacement-recovery-mumbai" element={<Navigate to="/blog/robotic-knee-replacement-recovery-mumbai" replace />} />
            <Route path="/robotic-knee-replacement-surgery" element={<Navigate to="/blog/robotic-knee-replacement-surgery" replace />} />
            <Route path="/testimonials" element={<Navigate to="/blog" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <ConsultationBanner />
      <Footer />
      <WhatsAppFloatButton />
    </Router>
  );
};

export default App;
