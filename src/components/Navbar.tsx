import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { AppointmentModal } from './AppointmentModal';
import { centresData } from '../data/centres';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navHeight, setNavHeight] = useState<number>(0);

  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isVisibleRef = useRef(true);
  const isScrolledRef = useRef(false);
  const ticking = useRef(false);
  const location = useLocation();

  // Measure navbar height dynamically to prevent layout shifting
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.offsetHeight);
      }
    };

    updateHeight();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && navbarRef.current) {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(navbarRef.current);
    }

    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Efficient Chrome mobile-style scroll listener with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);
          const prevScrollY = lastScrollY.current;

          // Update shadow & background styling when scrolled past 20px
          const nextScrolled = currentScrollY > 20;
          if (isScrolledRef.current !== nextScrolled) {
            isScrolledRef.current = nextScrolled;
            setIsScrolled(nextScrolled);
          }

          // 1. Always visible at the very top of the page (or during rubber-band bouncing)
          if (currentScrollY <= 10) {
            if (!isVisibleRef.current) {
              isVisibleRef.current = true;
              setIsVisible(true);
            }
          }
          // 2. Keep visible if mobile drawer is currently open
          else if (mobileMenuOpen) {
            if (!isVisibleRef.current) {
              isVisibleRef.current = true;
              setIsVisible(true);
            }
          }
          // 3. Scroll Down -> Smoothly hide navbar
          else if (currentScrollY > prevScrollY && currentScrollY > 60) {
            if (isVisibleRef.current) {
              isVisibleRef.current = false;
              setIsVisible(false);
            }
          }
          // 4. Scroll Up even slightly -> Smoothly reveal navbar
          else if (currentScrollY < prevScrollY) {
            if (!isVisibleRef.current) {
              isVisibleRef.current = true;
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Reset navbar to visible and close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    isVisibleRef.current = true;
    setIsVisible(true);
    lastScrollY.current = 0;
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
      {/* Fixed Navbar Wrapper with Smooth GPU-accelerated Transform */}
      <div
        ref={navbarRef}
        className={`navbar-fixed-wrapper ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
      >
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
              <span>Centres & Clinics: <strong>{centresData.map(c => c.area).join(' | ')}</strong></span>
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

        {/* Main Navbar Header */}
        <header 
          style={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
            backdropFilter: 'blur(10px)',
            boxShadow: isScrolled ? '0 4px 20px rgba(10, 31, 68, 0.08)' : '0 2px 10px rgba(10, 31, 68, 0.04)',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            padding: '0.6rem 0'
          }}
          className="main-navbar-header"
        >
          <div className="container navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            {/* Brand Logo */}
            <Link to="/" aria-label="SOS Speciality Orthopedic Clinic Home" style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>

      {/* Spacer in document flow to prevent layout shift */}
      <div 
        className="navbar-spacer" 
        style={{ 
          height: navHeight > 0 ? `${navHeight}px` : undefined,
          minHeight: navHeight === 0 ? '90px' : undefined,
          width: '100%',
          flexShrink: 0,
          pointerEvents: 'none',
          visibility: 'hidden'
        }} 
        aria-hidden="true" 
      />

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

          {/* Clean Pair of Actions for Mobile Drawer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
              className="btn btn-primary btn-md"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} /> Book Appointment
            </button>

            <a 
              href="tel:7070706505"
              className="btn btn-secondary btn-md"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} /> 24/7 Helpline: 7070706505
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
            padding: 0.4rem 0 !important;
          }
          .navbar-spacer {
            min-height: 72px !important;
          }
        }
      `}</style>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
