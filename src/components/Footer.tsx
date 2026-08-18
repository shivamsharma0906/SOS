import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Youtube, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { centresData } from '../data/centres';
import { FaWhatsapp } from 'react-icons/fa';

const XLogoIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
                href="tel:7070706505" 
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
                <span>7070706505</span>
              </a>
              <div style={{ fontSize: '0.74rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                24/7 Emergency & Home Visit Helpline
              </div>
              <a 
                href="mailto:officialsosortho@gmail.com" 
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
                <span>officialsosortho@gmail.com</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.25rem' }}>
              <a href="https://facebook.com/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Facebook size={17} />
              </a>
              <a href="https://x.com/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <XLogoIcon size={15} />
              </a>
              <a href="https://instagram.com/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Instagram size={17} />
              </a>
              <a href="https://youtube.com/c/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Youtube size={17} />
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
                      color: '#94a3b8', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      transition: 'all 0.2s ease' 
                    }} 
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }} 
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={12} style={{ opacity: 0.5 }} />
                    {link.name}
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
                      color: '#94a3b8', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      transition: 'all 0.2s ease' 
                    }} 
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }} 
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={12} style={{ opacity: 0.5 }} />
                    {spec.name}
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
              href="tel:7070706505" 
              className="btn btn-emergency btn-sm"
              style={{ fontSize: '0.82rem', padding: '0.6rem 0.5rem', gap: '0.35rem', justifyContent: 'center' }}
            >
              <Phone size={14} /> 7070706505
            </a>
            <a 
              href="https://wa.me/917070706505?text=Hello%20SOS%20Orthopedic%20Service,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
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
                <li><Link to="/about" style={{ color: '#cbd5e1' }}>About SOS</Link></li>
                <li><Link to="/services" style={{ color: '#cbd5e1' }}>All Services</Link></li>
                <li><Link to="/doctors" style={{ color: '#cbd5e1' }}>Surgeons</Link></li>
                <li><Link to="/centres" style={{ color: '#cbd5e1' }}>Centres</Link></li>
                <li><Link to="/testimonials" style={{ color: '#cbd5e1' }}>Patient Reviews</Link></li>
                <li><Link to="/contact" style={{ color: '#cbd5e1' }}>Book OPD</Link></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                Specialities
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
                <li><Link to="/services/joint-replacement" style={{ color: '#cbd5e1' }}>Joint Replacement</Link></li>
                <li><Link to="/services/acl-ligament" style={{ color: '#cbd5e1' }}>ACL & Ligament</Link></li>
                <li><Link to="/services/spine-care" style={{ color: '#cbd5e1' }}>Spine & Sciatica</Link></li>
                <li><Link to="/services/sports-injury" style={{ color: '#cbd5e1' }}>Sports Injury</Link></li>
                <li><Link to="/services/pediatric-trauma" style={{ color: '#cbd5e1' }}>Pediatric Trauma</Link></li>
                <li><Link to="/services/home-x-ray" style={{ color: '#cbd5e1' }}>Home X-Ray</Link></li>
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
            <a href="https://facebook.com/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Facebook size={18} />
            </a>
            <a href="https://x.com/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <XLogoIcon size={16} />
            </a>
            <a href="https://instagram.com/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com/c/officialsosortho" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* ── 3. Bottom Legal & Copyright Bar ── */}
        <div className="footer-bottom-bar">
          <span>© Copyright {currentYear} <strong>SOS Speciality Orthopedic Service</strong>.</span>
          
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
