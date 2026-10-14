import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationBanner } from './components/ConsultationBanner';
import { WhatsAppFloatButton } from './components/WhatsAppFloatButton';
import { LocalBusinessSchema } from './components/LocalBusinessSchema';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Doctors } from './pages/Doctors';
import { Centres } from './pages/Centres';
import { Blog } from './pages/Blog';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Mentors } from './pages/Mentors';
import { XRayAtHome } from './pages/XRayAtHome';
import { Physiotherapy } from './pages/Physiotherapy';
import { HomeServices } from './pages/HomeServices';
import { NotFound } from './pages/NotFound';

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
          <Route path="/testimonials" element={<Navigate to="/blog" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ConsultationBanner />
      <Footer />
      <WhatsAppFloatButton />
    </Router>
  );
};

export default App;
