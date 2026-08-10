import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { centresData } from '../data/centres';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: '#07152e', 
        color: '#ffffff', 
        paddingTop: '4.5rem', 
        paddingBottom: '2rem',
        borderTop: '4px solid var(--blue-brand)',
        width: '100%'
      }}
    >
      <div className="container">
        {/* Main Footer Directory Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Column 1: Brand Info & Helpline Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <BrandLogo variant="light" size="md" />


            {/* Helpline Card */}
            <div 
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
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
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                24/7 Emergency & General Helpline
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
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Quick Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', padding: 0, margin: 0 }}>
              {[
                { name: 'About SOS & Mission', path: '/about' },
                { name: 'Our 5 Core Services', path: '/services' },
                { name: 'Our Orthopedic Doctors', path: '/doctors' },
                { name: '5 Mumbai Centres', path: '/centres' },
                { name: 'Patient Reviews & Stories', path: '/testimonials' },
                { name: 'Book Consultation / Contact', path: '/contact' }
              ].map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: '#94a3b8', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      transition: 'all 0.25s ease' 
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
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Orthopedic Specialties
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', padding: 0, margin: 0 }}>
              {[
                { name: 'Home X-Ray Service', path: '/services#home-x-ray' },
                { name: 'Bone Care & Fractures', path: '/services#bone-care' },
                { name: 'Joint Care & Replacement', path: '/services#joint-care' },
                { name: 'Spine Care & Sciatica', path: '/services#spine-care' },
                { name: 'Sports Injury & Arthroscopy', path: '/services#sports-injury' }
              ].map(spec => (
                <li key={spec.path}>
                  <Link 
                    to={spec.path} 
                    style={{ 
                      color: '#94a3b8', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      transition: 'all 0.25s ease' 
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

          {/* Column 4: 5 Centres in Mumbai */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Our Mumbai Centres
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {centresData.map(centre => (
                <div key={centre.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <MapPin size={15} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.9rem' }}>{centre.area} Centre</strong>
                    <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block', marginTop: '0.15rem' }}>{centre.landmark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div 
          style={{
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <span>© Copyright {currentYear} <strong>SOS Speciality Orthopedic Service</strong>. All Rights Reserved.</span>
          
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link 
              to="/privacy-policy" 
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link 
              to="/terms" 
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-locations-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 1023px) and (min-width: 640px) {
          .footer-locations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .footer-locations-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
