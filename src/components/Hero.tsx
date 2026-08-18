import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ShieldCheck, Activity, CheckCircle2, Star, Stethoscope } from 'lucide-react';
import { MedicalCrossMotif } from './DecorativeMotif';
import { AppointmentModal } from './AppointmentModal';
import { servicesData } from '../data/services';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-subtle) 100%)',
        padding: '5rem 0 6rem 0',
        overflow: 'hidden',
        color: 'var(--navy-primary)',
        borderBottom: '1px solid var(--border-color)'
      }}
      className="hero-section"
    >
      {/* Background Motifs (hidden on mobile via CSS) */}
      <MedicalCrossMotif size={65} top="15%" left="8%" opacity={0.06} />
      <MedicalCrossMotif size={50} top="65%" left="42%" opacity={0.04} />
      <MedicalCrossMotif size={80} bottom="10%" right="12%" opacity={0.05} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Copy & Actions */}
          <div className="animate-fade-in hero-copy-col">
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                padding: '0.35rem 0.9rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                fontWeight: 700, 
                fontSize: '0.82rem', 
                borderRadius: 'var(--radius-pill)', 
                border: '1px solid rgba(2, 132, 199, 0.2)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                marginBottom: '1.25rem' 
              }}
              className="hero-badge"
            >
              <ShieldCheck size={15} />
              <span>Complete Orthopedic Care</span>
            </div>

            <h1 className="heading-xl hero-title" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Relief for Bone, Joint, <br className="hidden-mobile" />
              <span style={{ color: 'var(--blue-brand)', position: 'relative' }}>
                Spine & Sports Injuries
              </span>
            </h1>

            {/* Subhead with consistent natural text flow */}
            <p 
              className="hero-subhead"
              style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '1.5rem', 
                lineHeight: 1.65, 
                fontSize: '1.05rem',
                textAlign: 'left'
              }}
            >
              Consultant orthopedic surgeon OPDs, joint preservation care, and 24/7 doorstep Home X-Ray diagnostics across Mumbai centres.
            </p>

            {/* Micro Trust Badges */}
            <div 
              className="hero-trust-badges"
              style={{ 
                display: 'flex', 
                gap: '0.75rem 1.25rem', 
                flexWrap: 'wrap', 
                marginBottom: '2rem', 
                fontSize: '0.88rem', 
                color: 'var(--navy-primary)',
                fontWeight: 700 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--blue-brand)" />
                <span>24/7 Home X-Ray</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--blue-brand)" />
                <span>4 Centre Locations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--blue-brand)" />
                <span>Zero Wait-Time OPD</span>
              </div>
            </div>

            {/* CTA Buttons: Professional Pair */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} /> Book Appointment
              </button>

              <Link 
                to="/services"
                className="btn btn-secondary btn-lg"
                style={{ gap: '0.45rem' }}
              >
                <Stethoscope size={18} /> Explore Specialities
              </Link>
            </div>
          </div>

          {/* Right Column: Visual with Glassmorphism badges (Desktop only floating badges) */}
          <div className="hero-visual-col" style={{ position: 'relative' }}>
            
            {/* Main Image with Soft Glow */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900"
                alt="SOS Orthopedic Specialist Consultation"
                style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center 20%' }}
                className="hero-main-img"
              />
            </div>

            {/* Floating Glass Panel: Core Services (Desktop only) */}
            <div 
              className="glass-panel-light animate-float-up desktop-only"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.5rem',
                padding: '1.25rem 1.75rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 12px 32px rgba(10, 31, 68, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                zIndex: 4
              }}
            >
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--blue-soft)',
                  color: 'var(--blue-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Activity size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)' }}>10,000+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Patients Treated</div>
              </div>
            </div>

            {/* Floating Rating Badge (Desktop only) */}
            <div 
              className="glass-panel-light animate-float-down desktop-only"
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 8px 24px rgba(10, 31, 68, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                zIndex: 4
              }}
            >
              <div style={{ display: 'flex', color: '#eab308' }}>
                <Star size={16} fill="#eab308" />
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--navy-primary)' }}>4.9/5</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>(500+ Reviews)</span>
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
        @media (max-width: 992px) {
          .hero-section {
            padding: 2rem 0 2.5rem 0 !important;
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
          }

          .hero-cta-group {
            flex-direction: column !important;
            gap: 0.65rem !important;
          }

          .hero-cta-group .btn {
            width: 100% !important;
            min-height: 48px !important;
            justify-content: center !important;
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
