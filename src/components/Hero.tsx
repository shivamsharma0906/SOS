import React, { useState } from 'react';
import { Calendar, ShieldCheck, MapPin, Activity, CheckCircle2, Star } from 'lucide-react';
import { ContactChip } from './ContactChip';
import { MedicalCrossMotif } from './DecorativeMotif';
import { AppointmentModal } from './AppointmentModal';
import { servicesData } from '../data/services';
import { centresData } from '../data/centres';
import { FaWhatsapp } from 'react-icons/fa';

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
    >
      {/* Background Motifs */}
      <div className="bg-blob-top-right" />
      <div className="bg-blob-bottom-left" />
      <MedicalCrossMotif size={65} top="15%" left="8%" opacity={0.06} />
      <MedicalCrossMotif size={50} top="65%" left="42%" opacity={0.04} />
      <MedicalCrossMotif size={80} bottom="10%" right="12%" opacity={0.05} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Premium Light Mode Copy */}
          <div className="animate-fade-in">
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.4rem 1rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                fontWeight: 700, 
                fontSize: '0.85rem', 
                borderRadius: 'var(--radius-pill)', 
                border: '1px solid rgba(2, 132, 199, 0.2)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                marginBottom: '1.5rem' 
              }}
            >
              <ShieldCheck size={16} />
              <span>S | O | S — Complete Orthopedic Care</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Premium Relief for <br />
              <span style={{ color: 'var(--blue-brand)', position: 'relative' }}>
                Bone, Joint, Spine
                <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: 0, zIndex: -1, opacity: 0.3 }}>
                  <path d="M0,10 Q50,0 100,10" stroke="var(--blue-brand)" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span> & Sports Injuries
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '1.1rem' }}>
              SOS Speciality Orthopedic Service is Mumbai’s trusted destination for complete orthopedic wellness, delivering expert doctor consultations, keyhole surgery, and <strong>24/7 Home X-Ray Services</strong> right at your doorstep.
            </p>

            {/* Pill Contact Chip */}
            <div style={{ marginBottom: '2.5rem' }}>
              <ContactChip size="md" />
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={20} /> Book Appointment
              </button>

              <a 
                href="https://wa.me/917070706505?text=Hello%20SOS%20Orthopedic%20Service,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <FaWhatsapp size={20} /> WhatsApp Enquiry
              </a>
            </div>
          </div>

          {/* Right Column: Premium Light Glassmorphism */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Image with Soft Glow */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900"
                alt="SOS Orthopedic Specialist Consultation"
                style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center 20%' }}
              />
            </div>

            {/* Floating Glass Panel: Core Services */}
            <div 
              className="glass-panel-light animate-float-up"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                width: '320px',
                zIndex: 10
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', fontFamily: 'var(--font-serif)' }}>
                  Our Core Services
                </h3>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ffffff', backgroundColor: 'var(--blue-brand)', padding: '0.2rem 0.5rem', borderRadius: '12px' }}>
                  5 Specialities
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {servicesData.map(s => (
                  <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ backgroundColor: 'var(--blue-soft)', padding: '0.3rem', borderRadius: '8px' }}>
                      <Activity size={16} color="var(--blue-brand)" />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy-primary)' }}>{s.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Pill: Trust Badge */}
            <div 
              className="glass-panel-light animate-float-down"
              style={{
                position: 'absolute',
                top: '2rem',
                right: '-1.5rem',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 10
              }}
            >
              <div style={{ backgroundColor: '#f59e0b', borderRadius: '50%', padding: '0.4rem', boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)' }}>
                <Star size={18} color="#ffffff" fill="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>10,000+</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Patients Treated</div>
              </div>
            </div>

            {/* Floating Pill: 24/7 Home X-Ray */}
            <div 
              className="glass-panel-light animate-float-up"
              style={{
                position: 'absolute',
                bottom: '4rem',
                right: '-1rem',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 10,
                animationDelay: '1s'
              }}
            >
              <div style={{ backgroundColor: '#ef4444', borderRadius: '50%', padding: '0.4rem', boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)' }}>
                <Activity size={18} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>24/7 Mobile</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Home X-Ray Service</div>
              </div>
          </div>
        </div>
      </div>
    </div>
      <style>{`
        @media (max-width: 767px) {
          section {
            padding: 28px 20px 32px 20px !important;
            overflow: hidden !important;
          }

          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          /* Left column content ordering and sizing */
          .animate-fade-in {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 100%;
          }

          .animate-fade-in > div:first-child {
            align-self: flex-start;
            margin-bottom: 1rem !important;
            font-size: 0.75rem !important;
            padding: 0.35rem 0.85rem !important;
            max-width: 100%;
          }

          .heading-xl {
            font-size: clamp(30px, 8vw, 40px) !important;
            font-weight: 800 !important;
            line-height: 1.12 !important;
            margin-bottom: 1rem !important;
            word-break: break-word;
          }

          .subhead {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 1.5rem !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          /* Contact card container */
          .animate-fade-in > div:nth-child(4) {
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 1.5rem !important;
          }

          /* CTA Buttons */
          .animate-fade-in > div:nth-child(5) {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            width: 100% !important;
          }

          .animate-fade-in .btn {
            width: 100% !important;
            height: 54px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 1.05rem !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }

          /* Right column (Medical Image / Animation) - placed below CTA buttons */
          .hero-grid > div:last-child {
            width: 100% !important;
            max-width: 100% !important;
            position: relative !important;
            left: 0 !important;
            right: 0 !important;
            margin-top: 0.5rem !important;
          }

          .hero-grid > div:last-child > div:first-child {
            width: 100% !important;
            height: auto !important;
            max-height: 320px !important;
            border-radius: var(--radius-md) !important;
          }

          .hero-grid > div:last-child img {
            width: 100% !important;
            height: auto !important;
            max-height: 320px !important;
            object-fit: cover !important;
            object-position: center !important;
          }

          /* Hide floating absolute badges on mobile to prevent overflow */
          .glass-panel-light {
            display: none !important;
          }

          /* Scale and position background blobs safely */
          .bg-blob-top-right {
            width: 160px !important;
            height: 160px !important;
            top: -20px !important;
            right: -20px !important;
            opacity: 0.4 !important;
            z-index: 0 !important;
          }

          .bg-blob-bottom-left {
            width: 140px !important;
            height: 140px !important;
            bottom: -20px !important;
            left: -20px !important;
            opacity: 0.4 !important;
            z-index: 0 !important;
          }
        }
      `}</style>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
