import React, { useState } from 'react';
import { Phone, CheckCircle2, Calendar, ShieldCheck, Activity } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HexBadge } from '../components/HexBadge';
import { ServicesCards } from '../components/ServicesCards';
import { ConditionsGrid } from '../components/ConditionsGrid';
import { servicesData } from '../data/services';
import { AppointmentModal } from '../components/AppointmentModal';
import { FaWhatsapp } from 'react-icons/fa';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

export const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Our Services | Home X-Ray, Bone, Joint, Spine & Sports Injury | SOS Ortho"
        description="Comprehensive orthopedic services across 5 Mumbai locations: 24/7 Home X-Ray Service, Bone Care, Joint Replacement, Keyhole Spine Care, and Sports Injury Rehabilitation."
      />

      {/* Hero Header (Light Mode) */}
      <section 
        style={{ 
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-subtle) 100%)',
          padding: '5rem 0 4rem 0',
          overflow: 'hidden',
          color: 'var(--navy-primary)',
          borderBottom: '1px solid var(--border-color)',
          textAlign: 'center'
        }}
      >
        <div className="bg-blob-top-right" />
        <MedicalCrossMotif size={65} top="15%" left="8%" opacity={0.06} />
        <MedicalCrossMotif size={80} bottom="10%" right="10%" opacity={0.05} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              backgroundColor: 'var(--blue-soft)', 
              color: 'var(--blue-brand)', 
              padding: '0.35rem 0.9rem', 
              borderRadius: 'var(--radius-pill)', 
              fontSize: '0.82rem', 
              fontWeight: 700, 
              border: '1px solid rgba(2, 132, 199, 0.2)',
              marginBottom: '1.25rem', 
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            5 Core Specialities
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', maxWidth: '800px', margin: '0 auto 1.25rem auto' }}>
            Complete Orthopedic Medical Services
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.1rem' }}>
            From 24/7 mobile digital Home X-Ray imaging to precision keyhole surgeries and joint replacements across Mumbai.
          </p>
        </div>
      </section>

      {/* Main 5 Core Services Grid */}
      <ServicesCards showTitle={false} />

      {/* Detailed Service Deep Dive Sections */}
      <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {servicesData.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '3.5rem',
                alignItems: 'stretch',
                padding: '3rem',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(10, 31, 68, 0.04)',
                boxShadow: '0 8px 30px rgba(10, 31, 68, 0.03)'
              }}
              className="service-detail-row"
            >
              {/* Left Column: Description & Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <HexBadge iconName={service.iconName} size={60} active />
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Speciality Unit 0{idx + 1}
                      </span>
                      <h2 className="heading-md" style={{ fontSize: '1.8rem', color: 'var(--navy-primary)', marginTop: '0.15rem' }}>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {service.fullDesc}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Clinical Highlights:
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {service.keyHighlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                          <CheckCircle2 size={16} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <button
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      setIsModalOpen(true);
                    }}
                    className="btn btn-primary"
                  >
                    <Calendar size={18} /> Book {service.title} Consultation
                  </button>
                </div>
              </div>

              {/* Right Column: Symptoms Card */}
              <div 
                style={{ 
                  backgroundColor: '#ffffff', 
                  padding: '2.25rem', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid rgba(10, 31, 68, 0.05)',
                  boxShadow: '0 12px 28px rgba(10, 31, 68, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    backgroundColor: 'rgba(239, 68, 68, 0.08)', 
                    color: '#ef4444', 
                    padding: '0.3rem 0.75rem', 
                    borderRadius: 'var(--radius-pill)', 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    marginBottom: '1rem' 
                  }}
                >
                  Clinical Watch
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.65rem' }}>
                  When to Seek Consultation:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)', padding: 0, margin: 0 }}>
                  {service.symptoms.map((symptom, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1, marginTop: '-2px' }}>•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .service-detail-row {
              grid-template-columns: 1fr !important;
              padding: 2rem !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* Conditions Matrix */}
      <ConditionsGrid />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedServiceId}
      />
    </>
  );
};
