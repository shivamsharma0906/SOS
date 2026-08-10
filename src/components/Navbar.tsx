import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { AppointmentModal } from './AppointmentModal';
import { FaWhatsapp } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About SOS', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Centres', path: '/centres' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Top Header Bar with Helpline & Centres */}
      <div 
        className="top-header-bar"
        style={{
          backgroundColor: 'var(--navy-dark)',
          color: '#ffffff',
          fontSize: '0.82rem',
          padding: '0.45rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="container top-header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div className="top-header-centres" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={13} color="#38bdf8" style={{ flexShrink: 0 }} /> 
            <span>5 Centres in Mumbai: <strong>Borivali | Kandivali | Malad | Goregaon | Andheri</strong></span>
          </div>

          <div className="top-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href="tel:7070706505" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 600 }}
            >
              <Phone size={13} color="#38bdf8" /> <span>24/7 Helpline: <strong>7070706505</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
          backdropFilter: 'blur(10px)',
          boxShadow: isScrolled ? '0 4px 20px rgba(10, 31, 68, 0.08)' : '0 2px 10px rgba(10, 31, 68, 0.04)',
          transition: 'all 0.3s ease',
          padding: '0.6rem 0'
        }}
        className="main-navbar-header"
      >
        <div className="container navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Brand Logo */}
          <Link to="/" aria-label="SOS Speciality Orthopedic Service Home" style={{ display: 'flex', alignItems: 'center' }}>
            <BrandLogo variant="compact" size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--navy-primary)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.3rem 0',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--navy-primary)',
                        borderRadius: '2px'
                      }} 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }} className="desktop-actions">
            <a 
              href="tel:7070706505" 
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.4rem', whiteSpace: 'nowrap' }}
            >
              <Phone size={14} /> 7070706505
            </a>

            <button 
              onClick={() => setIsModalOpen(true)} 
              className="btn btn-primary btn-sm"
              style={{ gap: '0.4rem', whiteSpace: 'nowrap' }}
            >
              <Calendar size={14} /> Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--navy-primary)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <BrandLogo variant="compact" size="md" />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', padding: '0.5rem', color: 'var(--navy-primary)' }}
            >
              <X size={28} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: location.pathname === link.path ? 'var(--navy-primary)' : 'var(--text-secondary)',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: 'auto' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <Calendar size={18} /> Book Appointment
            </button>

            <a 
              href="tel:7070706505"
              className="btn btn-secondary btn-lg"
              style={{ width: '100%' }}
            >
              <Phone size={18} /> Call 7070706505
            </a>

            <a 
              href="https://wa.me/917070706505?text=Hello%20SOS%20Orthopedic%20Service,%20I%20would%20like%20to%20enquire%20about%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
            >
              <FaWhatsapp size={20} /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      )}

      {/* Responsive Style Overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 767px) {
          .top-header-bar {
            padding: 0.6rem 0.5rem !important;
          }
          .top-header-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 0.5rem !important;
          }
          .top-header-centres {
            display: none !important;
          }
          .top-header-actions {
            width: 100% !important;
            justify-content: center !important;
            gap: 1.25rem !important;
            font-size: 12px !important;
          }
          .main-navbar-header {
            height: 64px !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
          }
          .navbar-container {
            padding: 0 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .mobile-toggle {
            min-width: 44px !important;
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* Booking Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
