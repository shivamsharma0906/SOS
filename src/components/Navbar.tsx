import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { AppointmentModal } from './AppointmentModal';
import { centresData } from '../data/centres';
import { BUSINESS_INFO } from '../config/business';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'Speciality Units', path: '/services', desc: 'Joint Replacement, Spine & Sports Care' },
        { name: 'X-Ray Services at Home', path: '/x-ray-services-at-home', desc: '24/7 Rapid Doorstep Digital Radiography' },
        { name: 'Physiotherapy & Rehab', path: '/physiotherapy', desc: 'Surgeon-Guided In-Clinic & Home Recovery' },
        { name: 'Home Healthcare Services', path: '/home-services', desc: 'Doctor Bedside OPD, Nursing & Diagnostics' }
      ]
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Centres', path: '/centres' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Slim Sticky Mobile-Only Helpline Bar (Visible at all times while scrolling, ~36-38px height) */}
      <div 
        className="mobile-sticky-helpline-bar"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '38px',
          backgroundColor: '#07152e',
          borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
          color: '#ffffff',
          zIndex: 1005,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            padding: '0 1rem',
            height: '100%',
            width: '100%'
          }}
        >
          <Phone size={13} color="#38bdf8" />
          <span>24/7 Helpline: <strong style={{ color: '#38bdf8' }}>{BUSINESS_INFO.phone}</strong></span>
        </a>
      </div>

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
        {/* Top Header Bar with Helpline & Centres (Desktop) */}
        <div 
          className="top-header-bar"
          style={{
            width: '100%',
            backgroundColor: 'var(--navy-dark)',
            color: '#ffffff',
            fontSize: '0.82rem',
            padding: '0.45rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="container top-header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div className="top-header-centres" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
              <MapPin size={13} color="#38bdf8" style={{ flexShrink: 0 }} /> 
              <span>Centres & Clinics: <strong>{centresData.map(c => c.area).join(' | ')}</strong></span>
            </div>

            <div className="top-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}
              >
                <Phone size={13} color="#38bdf8" /> <span>24/7 Helpline: <strong>{BUSINESS_INFO.phone}</strong></span>
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
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              aria-label="SOS Speciality Orthopedic Clinic Home" 
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <BrandLogo variant="compact" size="md" />
            </Link>

            {/* Desktop Nav Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }} className="desktop-nav">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.subLinks && link.subLinks.some(s => location.pathname === s.path));
                
                if (link.subLinks) {
                  return (
                    <div 
                      key={link.path}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? 'var(--navy-primary)' : 'var(--text-secondary)',
                          position: 'relative',
                          padding: '0.35rem 0',
                          whiteSpace: 'nowrap',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={13} style={{ opacity: 0.7, transition: 'transform 0.2s', transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
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

                      {/* Dropdown Card */}
                      {servicesDropdownOpen && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '-15px',
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            boxShadow: '0 16px 36px rgba(10, 31, 68, 0.12)',
                            border: '1px solid rgba(10, 31, 68, 0.08)',
                            padding: '0.65rem',
                            minWidth: '290px',
                            zIndex: 1050,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem'
                          }}
                        >
                          {link.subLinks.map(sub => (
                            <Link 
                              key={sub.path} 
                              to={sub.path}
                              onClick={() => setServicesDropdownOpen(false)}
                              style={{
                                padding: '0.6rem 0.85rem',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.15rem',
                                transition: 'all 0.15s ease'
                              }}
                              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--blue-soft)'}
                              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--navy-primary)' }}>{sub.name}</span>
                              <span style={{ fontSize: '0.73rem', color: 'var(--text-secondary)' }}>{sub.desc}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--navy-primary)' : 'var(--text-secondary)',
                      position: 'relative',
                      padding: '0.35rem 0',
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
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: location.pathname === link.path ? 'var(--navy-primary)' : 'var(--text-secondary)',
                    paddingBottom: '0.4rem',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.name}</span>
                  {location.pathname === link.path && <span style={{ color: 'var(--blue-brand)', fontSize: '0.8rem' }}>●</span>}
                </Link>

                {link.subLinks && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingLeft: '0.85rem', marginBottom: '0.5rem' }}>
                    {link.subLinks.map(sub => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: location.pathname === sub.path ? 700 : 500,
                          color: location.pathname === sub.path ? 'var(--blue-brand)' : 'var(--text-secondary)',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '8px',
                          backgroundColor: location.pathname === sub.path ? 'var(--blue-soft)' : '#f8fafc',
                          border: '1px solid rgba(10, 31, 68, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>{sub.name}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--blue-brand)' }}>&rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
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
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn btn-secondary btn-md"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} /> 24/7 Helpline: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}

      {/* Responsive Style Overrides */}
      <style>{`
        @media (min-width: 769px) {
          .top-header-bar {
            display: block !important;
            width: 100% !important;
          }
          .mobile-sticky-helpline-bar {
            display: none !important;
          }
        }
        @media (max-width: 1024px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .top-header-bar {
            display: none !important;
          }
          .mobile-sticky-helpline-bar {
            display: flex !important;
          }
          .navbar-fixed-wrapper {
            top: 38px !important;
          }
          .main-navbar-header {
            padding: 0.4rem 0 !important;
          }
          .navbar-spacer {
            min-height: 88px !important;
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

export default Navbar;
