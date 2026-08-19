import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Phone, Stethoscope
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HexBadge } from '../components/HexBadge';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { AppointmentModal } from '../components/AppointmentModal';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

const serviceImages: Record<string, string> = {
  'joint-replacement': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  'acl-ligament': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  'spine-care': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
  'sports-injury': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
  'pediatric-trauma': 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
  'home-x-ray': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
};

export const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Our Orthopedic Specialities | SOS Speciality Orthopedic Service"
        description="Comprehensive orthopedic care: Joint Replacement, Keyhole ACL Repair, Spine Care, Sports Medicine, Pediatric Trauma, and 24/7 Home X-Ray Diagnostics."
      />

      {/* ── 1. Hero Header ── */}
      <section className="page-hero-section">
        <MedicalCrossMotif size={50} top="10%" left="6%" opacity={0.04} />
        <MedicalCrossMotif size={60} bottom="10%" right="8%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              backgroundColor: 'var(--blue-soft)', 
              color: 'var(--blue-brand)', 
              padding: '0.3rem 0.85rem', 
              borderRadius: 'var(--radius-pill)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              border: '1px solid rgba(2, 132, 199, 0.2)', 
              marginBottom: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em'
            }}
          >
            <ShieldCheck size={15} />
            <span>Specialized Clinical Divisions</span>
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', maxWidth: '820px', margin: '0 auto 0.85rem auto' }}>
            Our Orthopedic Specialities
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '700px', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Precision surgical expertise, non-invasive joint preservation, and 24/7 doorstep diagnostics delivered by consulting orthopedic surgeons across our centre network.
          </p>
        </div>
      </section>

      {/* ── 2. Specialities Grid ── */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem'
            }}
            className="services-clean-grid"
          >
            {servicesData.map((service) => {
              const isHomeXray = service.id === 'home-x-ray';
              const doctors = doctorsData.filter(d => service.relevantDoctorIds.includes(d.id));

              return (
                <div
                  key={service.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    border: isHomeXray ? '1.5px solid rgba(220, 38, 38, 0.25)' : '1px solid rgba(10, 31, 68, 0.08)',
                    boxShadow: '0 8px 24px rgba(10, 31, 68, 0.04)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 31, 68, 0.08)';
                    e.currentTarget.style.borderColor = isHomeXray ? 'rgba(220, 38, 38, 0.5)' : 'rgba(2, 132, 199, 0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.04)';
                    e.currentTarget.style.borderColor = isHomeXray ? 'rgba(220, 38, 38, 0.25)' : 'rgba(10, 31, 68, 0.08)';
                  }}
                >
                  {/* Photo Header with Category Badge */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: 'var(--navy-dark)' }}>
                    <img 
                      src={serviceImages[service.id] || serviceImages['joint-replacement']} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 46, 0.85) 0%, rgba(7, 21, 46, 0.2) 60%, transparent 100%)' }} />

                    {/* Top Status Tag */}
                    <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', zIndex: 2 }}>
                      {isHomeXray ? (
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#dc2626', color: '#ffffff', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                          🚨 24/7 Home Service
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, backgroundColor: 'rgba(10, 31, 68, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(255,255,255,0.2)' }}>
                          Specialist Unit
                        </span>
                      )}
                    </div>

                    {/* Icon Badge Overlay */}
                    <div style={{ position: 'absolute', bottom: '0.85rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem', zIndex: 2 }}>
                      <HexBadge iconName={service.iconName} size={40} active />
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                      {service.shortDesc}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                        Clinical Focus:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        {service.keyHighlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.35 }}>
                            <CheckCircle2 size={14} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Doctors Available */}
                    {doctors.length > 0 && (
                      <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', marginBottom: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        <Stethoscope size={13} color="var(--navy-primary)" />
                        <span style={{ fontWeight: 600, color: 'var(--navy-primary)' }}>Surgeons:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {doctors.map(d => d.name).join(', ')}
                        </span>
                      </div>
                    )}

                    {/* Single Clean Action Button */}
                    <div style={{ display: 'flex', marginTop: 'auto' }}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn btn-primary btn-sm"
                        style={{ width: '100%', justifyContent: 'center', gap: '0.35rem', fontSize: '0.84rem', padding: '0.55rem 0.85rem' }}
                      >
                        <span>View Step-by-Step Pathway</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. 24/7 Home X-Ray Dispatch Banner ── */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div 
            style={{ 
              backgroundColor: 'var(--navy-dark)', 
              color: '#ffffff', 
              borderRadius: 'var(--radius-lg)', 
              padding: '2.25rem 2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.75rem',
              boxShadow: '0 12px 36px rgba(10, 31, 68, 0.1)'
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.76rem', fontWeight: 800, marginBottom: '0.65rem', textTransform: 'uppercase' }}>
                🚨 24/7 Doorstep Diagnostic Dispatch
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                Need an Emergency Home X-Ray for an Elderly Patient?
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                Certified mobile digital X-ray units dispatched within <strong>20–30 minutes</strong> directly to your home across Kandivali, Malad, Borivali, and Goregaon centres.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="tel:7070706505" className="btn btn-emergency btn-md" style={{ gap: '0.45rem' }}>
                <Phone size={16} /> Call 24/7 Hotline: 7070706505
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedServiceId}
      />
    </>
  );
};
