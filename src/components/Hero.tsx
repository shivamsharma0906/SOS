import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ShieldCheck, Activity, CheckCircle2, Star, Stethoscope, Phone, Clock, MapPin, Zap } from 'lucide-react';
import { MedicalCrossMotif } from './DecorativeMotif';
import { AppointmentModal } from './AppointmentModal';
import { GoogleIcon } from './GoogleIcon';
import { servicesData } from '../data/services';
import { BUSINESS_INFO } from '../config/business';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f6fc 50%, #e8f1fa 100%)',
        overflow: 'hidden',
        color: 'var(--navy-primary)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 108px)',
        padding: '2.5rem 0'
      }}
      className="hero-section"
    >
      {/* Ambient Radial Background Accents */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10, 31, 68, 0.06) 0%, rgba(10, 31, 68, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Decorative Medical Cross Motifs */}
      <MedicalCrossMotif size={75} top="10%" left="3%" opacity={0.05} />
      <MedicalCrossMotif size={60} top="75%" left="48%" opacity={0.04} />
      <MedicalCrossMotif size={90} bottom="8%" right="4%" opacity={0.06} />

      {/* Full-Screen Fluid Container */}
      <div className="hero-wide-container" style={{ position: 'relative', zIndex: 2, width: '100%', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* ── Left Column: Copy & Actions ── */}
          <div className="animate-fade-in hero-copy-col">
            
            {/* Top Badge (Single icon + single concise text line) */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                padding: '0.35rem 0.95rem', 
                backgroundColor: 'rgba(2, 132, 199, 0.08)', 
                color: 'var(--blue-brand)', 
                fontWeight: 700, 
                fontSize: '0.82rem', 
                borderRadius: 'var(--radius-pill)', 
                border: '1px solid rgba(2, 132, 199, 0.25)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.06)'
              }}
              className="hero-badge"
            >
              <ShieldCheck size={16} />
              <span>Speciality Orthopedic Clinic &bull; Mumbai</span>
            </div>

            {/* Expansive Headline */}
            <h1 className="hero-title" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', lineHeight: 1.15, fontWeight: 800 }}>
              Relief for Bone, Joint, <br className="hidden-mobile" />
              <span style={{ 
                background: 'linear-gradient(135deg, var(--navy-primary) 0%, var(--blue-brand) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative'
              }}>
                Spine & Sports Injuries
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="hero-subhead"
              style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '1.75rem', 
                lineHeight: 1.65, 
                fontSize: '1.12rem',
                maxWidth: '680px',
                textAlign: 'left'
              }}
            >
              Consultant orthopedic surgeon OPDs, joint preservation care, and 24/7 doorstep Home X-Ray diagnostics across Mumbai centres.
            </p>

            {/* Micro Trust Feature Badges */}
            <div 
              className="hero-trust-badges"
              style={{ 
                display: 'flex', 
                gap: '0.75rem 1.5rem', 
                flexWrap: 'wrap', 
                marginBottom: '2.25rem', 
                fontSize: '0.92rem', 
                color: 'var(--navy-primary)',
                fontWeight: 700 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 2px 6px rgba(10, 31, 68, 0.04)' }}>
                <CheckCircle2 size={17} color="var(--blue-brand)" />
                <span>24/7 Home X-Ray</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 2px 6px rgba(10, 31, 68, 0.04)' }}>
                <CheckCircle2 size={17} color="var(--blue-brand)" />
                <span>4 Centre Locations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 2px 6px rgba(10, 31, 68, 0.04)' }}>
                <CheckCircle2 size={17} color="var(--blue-brand)" />
                <span>Zero Wait-Time OPD</span>
              </div>
            </div>

            {/* CTA Buttons Group */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ padding: '0.9rem 2rem', fontSize: '1.02rem', boxShadow: '0 8px 24px rgba(2, 132, 199, 0.35)' }}
              >
                <Calendar size={20} /> Book Appointment
              </button>

              <Link 
                to="/services"
                className="btn btn-secondary btn-lg"
                style={{ padding: '0.9rem 1.85rem', fontSize: '1.02rem', gap: '0.5rem', backgroundColor: '#ffffff' }}
              >
                <Stethoscope size={20} /> Explore Specialities
              </Link>
            </div>

            {/* Mobile-Only Compact Social Proof Row (Plain text + icons, no blur/glass effect, visually muted) */}
            <div 
              className="hero-mobile-social-proof mobile-flex"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginTop: '0.75rem',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                lineHeight: 1.2
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Activity size={14} color="var(--blue-brand)" />
                <span>10,000+ Treated</span>
              </div>
              <span style={{ color: '#94a3b8' }}>•</span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Star size={13} fill="#f59e0b" color="#f59e0b" />
                <span><strong>5.0★</strong> Google Reviews</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Grand Visual with 2 High-End Floating Glass Badges ── */}
          <div className="hero-visual-col" style={{ position: 'relative' }}>
            
            {/* Main Visual Frame with Soft Glow & Depth */}
            <div 
              style={{ 
                position: 'relative', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                boxShadow: '0 24px 60px rgba(10, 31, 68, 0.18)',
                border: '4px solid #ffffff'
              }}
              className="hero-image-frame"
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                alt="Senior Orthopedic Surgeon examining patient mobility and joint health at SOS Speciality Orthopedic Clinic Mumbai"
                style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                className="hero-main-img"
                loading="eager"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 46, 0.35) 0%, transparent 40%)' }} />
            </div>

            {/* Floating Glass Panel: Patients Treated (Bottom Left) */}
            <div 
              className="glass-panel-light animate-float-up desktop-only"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.75rem',
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 16px 40px rgba(10, 31, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                zIndex: 4
              }}
            >
              <div 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--blue-soft)',
                  color: 'var(--blue-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Activity size={26} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1.1 }}>10,000+</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Patients Treated</div>
              </div>
            </div>

            {/* Floating Rating Badge (Top Right) */}
            <div 
              className="glass-panel-light animate-float-down desktop-only"
              style={{
                position: 'absolute',
                top: '-1.25rem',
                right: '-1.25rem',
                padding: '0.75rem 1.35rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 12px 32px rgba(10, 31, 68, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                zIndex: 4
              }}
            >
              <GoogleIcon size={20} />
              <div style={{ display: 'flex', color: '#fbbc04' }}>
                <Star size={16} fill="#fbbc04" />
              </div>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy-primary)' }}>5.0</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>(10 Google Reviews)</span>
            </div>

          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={servicesData[0]?.id} 
      />

      <style>{`
        .hero-wide-container {
          max-width: 1560px;
          padding: 0 clamp(1.5rem, 4vw, 4rem);
        }

        .hero-title {
          font-size: clamp(2.35rem, 3.8vw, 3.75rem);
          letter-spacing: -0.02em;
        }

        @media (min-width: 1400px) {
          .hero-main-img {
            height: 600px !important;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            min-height: auto !important;
            padding: 2rem 0 2.5rem 0 !important;
          }

          .hero-wide-container {
            padding: 0 1.5rem !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .hero-copy-col {
            text-align: left !important;
          }

          .hero-badge {
            margin-bottom: 0.85rem !important;
          }

          .hero-title {
            font-size: 1.85rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0.85rem !important;
          }

          .hero-subhead {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.25rem !important;
          }

          .hero-trust-badges {
            flex-direction: column !important;
            gap: 0.5rem !important;
            margin-bottom: 1.5rem !important;
          }

          .hero-trust-badges div {
            font-size: 0.84rem !important;
            background: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }

          .hero-cta-group {
            flex-direction: column !important;
            gap: 0.65rem !important;
            margin-bottom: 0 !important;
          }

          .hero-cta-group .btn {
            width: 100% !important;
            min-height: 48px !important;
            justify-content: center !important;
            padding: 0.75rem 1.5rem !important;
          }

          .hero-metrics-strip {
            display: none !important;
          }

          .hero-mobile-social-proof {
            display: flex !important;
          }

          .hero-image-frame {
            border: none !important;
            padding: 0 !important;
            border-radius: 16px !important;
            box-shadow: 0 6px 20px rgba(10, 31, 68, 0.08) !important;
          }

          .hero-main-img {
            height: 240px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
