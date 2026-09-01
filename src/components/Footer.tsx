import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { centresData } from '../data/centres';
import { BUSINESS_INFO } from '../config/business';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: '#07152e', 
        color: '#ffffff', 
        borderTop: '4px solid var(--blue-brand)',
        width: '100%',
        position: 'relative'
      }}
      className="site-footer"
    >
      <div className="container">
        {/* ── 1. Desktop 4-Column Directory (Hidden on Mobile) ── */}
        <div className="footer-desktop-grid">
          {/* Column 1: Brand Info & Helpline Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <BrandLogo variant="light" size="md" />

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
              Specialist orthopedic surgical care, joint preservation protocols, and 24/7 doorstep Home X-Ray diagnostics.
            </p>

            {/* Helpline Card */}
            <div 
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}
            >
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: '#ffffff', 
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
                onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
              >
                <Phone size={18} color="#38bdf8" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <div style={{ fontSize: '0.74rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                24/7 Emergency & Home Visit Helpline
              </div>
              <a 
                href={`mailto:${BUSINESS_INFO.email}`} 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: '#cbd5e1', 
                  fontSize: '0.82rem',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
                onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
              >
                <Mail size={14} color="#64748b" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.25rem' }}>
              <a href="https://www.facebook.com/profile.php?id=61592799181133" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Facebook size={17} />
              </a>
              <a href="https://www.instagram.com/sosorthopaedics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Instagram size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Quick Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', padding: 0, margin: 0 }}>
              {[
                { name: 'About SOS & Mission', path: '/about' },
                { name: 'Our Speciality Units', path: '/services' },
                { name: 'Orthopedic Surgeons', path: '/doctors' },
                { name: 'Centres & Outreach', path: '/centres' },
                { name: 'Patient Reviews', path: '/testimonials' },
                { name: 'Book Priority OPD', path: '/contact' }
              ].map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: '#cbd5e1', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.55rem', 
                      transition: 'all 0.2s ease',
                      fontSize: '0.88rem'
                    }} 
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#38bdf8';
                      e.currentTarget.style.transform = 'translateX(4px)';
                      const arrow = e.currentTarget.querySelector('.footer-link-arrow') as HTMLElement;
                      if (arrow) arrow.style.color = '#38bdf8';
                    }} 
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.transform = 'translateX(0)';
                      const arrow = e.currentTarget.querySelector('.footer-link-arrow') as HTMLElement;
                      if (arrow) arrow.style.color = '#64748b';
                    }}
                  >
                    <span className="footer-link-arrow" style={{ color: '#64748b', fontSize: '0.95rem', transition: 'color 0.2s ease', flexShrink: 0 }}>&rarr;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Speciality Care
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', padding: 0, margin: 0 }}>
              {[
                { name: 'Joint Replacement Care', path: '/services/joint-replacement' },
                { name: 'ACL & Ligament Repair', path: '/services/acl-ligament' },
                { name: 'Spine Care & Sciatica', path: '/services/spine-care' },
                { name: 'Sports Injury & Arthroscopy', path: '/services/sports-injury' },
                { name: 'Pediatric & Trauma Care', path: '/services/pediatric-trauma' },
                { name: '24/7 Home X-Ray Dispatch', path: '/services/home-x-ray' }
              ].map(spec => (
                <li key={spec.path}>
                  <Link 
                    to={spec.path} 
                    style={{ 
                      color: '#cbd5e1', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.55rem', 
                      transition: 'all 0.2s ease',
                      fontSize: '0.88rem'
                    }} 
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#38bdf8';
                      e.currentTarget.style.transform = 'translateX(4px)';
                      const arrow = e.currentTarget.querySelector('.footer-link-arrow') as HTMLElement;
                      if (arrow) arrow.style.color = '#38bdf8';
                    }} 
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.transform = 'translateX(0)';
                      const arrow = e.currentTarget.querySelector('.footer-link-arrow') as HTMLElement;
                      if (arrow) arrow.style.color = '#64748b';
                    }}
                  >
                    <span className="footer-link-arrow" style={{ color: '#64748b', fontSize: '0.95rem', transition: 'color 0.2s ease', flexShrink: 0 }}>&rarr;</span>
                    <span>{spec.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Centres in Mumbai */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Our Centre Network
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {centresData.map(centre => (
                <div key={centre.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.82rem' }}>
                  <MapPin size={15} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.88rem' }}>{centre.area} {centre.type === 'outreach-clinic' ? '(Outreach)' : 'Centre'}</strong>
                    <span style={{ color: '#64748b', fontSize: '0.76rem', display: 'block', marginTop: '0.1rem' }}>{centre.landmark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. Redesigned Mobile Compact Footer (Visible on <= 768px) ── */}
        <div className="footer-mobile-view">
          {/* Brand Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <BrandLogo variant="light" size="sm" />
            <p style={{ color: '#94a3b8', fontSize: '0.78rem', marginTop: '0.5rem', lineHeight: 1.5 }}>
              Complete Orthopedic Care &bull; 24/7 Doorstep Home Diagnostics
            </p>
          </div>

          {/* Quick Action Touch Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="btn btn-emergency btn-sm"
              style={{ fontSize: '0.82rem', padding: '0.6rem 0.5rem', gap: '0.35rem', justifyContent: 'center' }}
            >
              <Phone size={14} /> {BUSINESS_INFO.phone}
            </a>
            <a 
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Orthopedic%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ fontSize: '0.82rem', padding: '0.6rem 0.5rem', gap: '0.35rem', justifyContent: 'center' }}
            >
              <FaWhatsapp size={16} /> WhatsApp
            </a>
          </div>

          {/* 2-Column Compact Navigation Hub */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
                {[
                  { name: 'About SOS', path: '/about' },
                  { name: 'All Services', path: '/services' },
                  { name: 'Surgeons', path: '/doctors' },
                  { name: 'Centres', path: '/centres' },
                  { name: 'Patient Reviews', path: '/testimonials' },
                  { name: 'Book OPD', path: '/contact' }
                ].map(item => (
                  <li key={item.path}>
                    <Link to={item.path} style={{ color: '#cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>&rarr;</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                Specialities
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
                {[
                  { name: 'Joint Replacement', path: '/services/joint-replacement' },
                  { name: 'ACL & Ligament', path: '/services/acl-ligament' },
                  { name: 'Spine & Sciatica', path: '/services/spine-care' },
                  { name: 'Sports Injury', path: '/services/sports-injury' },
                  { name: 'Pediatric Trauma', path: '/services/pediatric-trauma' },
                  { name: 'Home X-Ray', path: '/services/home-x-ray' }
                ].map(item => (
                  <li key={item.path}>
                    <Link to={item.path} style={{ color: '#cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>&rarr;</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Centre Locations Strip */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
              📍 Our Centre Network
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              {centresData.map(c => (
                <Link
                  key={c.id}
                  to="/centres"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-pill)',
                    textDecoration: 'none'
                  }}
                >
                  {c.area} {c.type === 'outreach-clinic' ? '(Outreach)' : ''}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
            <a href="https://www.facebook.com/profile.php?id=61592799181133" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/sosorthopaedics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* ── 3. Bottom Legal & Copyright Bar ── */}
        <div className="footer-bottom-bar">
          <span>© Copyright {currentYear} <strong>{BUSINESS_INFO.name}</strong>.</span>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/privacy-policy" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>
              Privacy Policy
            </Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/terms" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          padding-top: 4.5rem;
          padding-bottom: 2rem;
        }

        .footer-desktop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 3rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-mobile-view {
          display: none;
        }

        .footer-bottom-bar {
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.82rem;
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .site-footer {
            padding-top: 2.25rem !important;
            padding-bottom: 1.5rem !important;
          }

          .footer-desktop-grid {
            display: none !important;
          }

          .footer-mobile-view {
            display: block !important;
          }

          .footer-bottom-bar {
            padding-top: 1.25rem !important;
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.5rem !important;
            font-size: 0.76rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
