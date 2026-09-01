import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EnquiryForm } from '../components/EnquiryForm';
import { centresData } from '../data/centres';
import { BUSINESS_INFO } from '../config/business';
import { FaWhatsapp } from 'react-icons/fa';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const doctorFromUrl = searchParams.get('doctor') || '';
  const [selectedCentre, setSelectedCentre] = useState(centresData[0]?.id || '');

  const activeCentreData = centresData.find(c => c.id === selectedCentre) || centresData[0];

  return (
    <>
      <SEOHead
        title={`Contact ${BUSINESS_INFO.name} | 24/7 Helpline ${BUSINESS_INFO.phone}`}
        description={`Connect with ${BUSINESS_INFO.name} in Mumbai. Call ${BUSINESS_INFO.phone} for doctor consultations or 24/7 Home X-Ray dispatch across Kandivali, Malad, Borivali, and Goregaon.`}
      />

      {/* ── 1. Hero Header & Quick Contact Channels ── */}
      <section className="page-hero-section contact-hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <MedicalCrossMotif size={65} top="8%" left="4%" opacity={0.04} />
        <MedicalCrossMotif size={75} bottom="10%" right="5%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                padding: '0.35rem 0.95rem', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.82rem', 
                fontWeight: 700, 
                border: '1px solid rgba(2, 132, 199, 0.25)', 
                marginBottom: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em'
              }}
            >
              <ShieldCheck size={16} />
              <span>Direct Clinical Assistance</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Contact <span style={{ color: 'var(--blue-brand)' }}>SOS Orthopedic Clinic</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '680px', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Reach our central clinical desk 24/7 for orthopedic emergencies, priority surgeon appointments, or rapid at-home digital X-ray dispatch across Mumbai.
            </p>
          </div>

          {/* Quick Contact 3-Card Strip */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', 
              gap: '1rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
            className="contact-quick-strip"
          >
            {/* Helpline Card */}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              style={{
                backgroundColor: '#ffffff',
                padding: '1.15rem 1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              className="contact-quick-card"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--blue-brand)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 132, 199, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.04)';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>24/7 Helpline</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', whiteSpace: 'nowrap' }}>{BUSINESS_INFO.phone}</div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Orthopedic%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                padding: '1.15rem 1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              className="contact-quick-card"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#16a34a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(22, 163, 74, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.04)';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FaWhatsapp size={22} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>WhatsApp Support</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', whiteSpace: 'nowrap' }}>Instant Chat</div>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href={`mailto:${BUSINESS_INFO.email}`}
              style={{
                backgroundColor: '#ffffff',
                padding: '1.15rem 1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              className="contact-quick-card"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--blue-brand)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 132, 199, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.04)';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Official Desk</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--navy-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{BUSINESS_INFO.email}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Main Contact Grid (Details & Form) ── */}
      <section style={{ padding: '3.5rem 0 4rem 0', backgroundColor: '#ffffff' }} className="contact-main-section">
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.05fr 1.25fr', 
              gap: '3rem', 
              alignItems: 'flex-start' 
            }} 
            className="contact-layout-grid"
          >
            {/* Left Column: Operational Desk & Centres */}
            <div className="contact-info-col">
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  backgroundColor: 'var(--blue-soft)', 
                  color: 'var(--blue-brand)', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: 'var(--radius-pill)', 
                  fontSize: '0.78rem', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                <Clock size={14} />
                <span>Central Operations</span>
              </div>

              <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                Direct Emergency & <span style={{ color: 'var(--blue-brand)' }}>Consultation Desk</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Connect directly with our senior orthopedic coordination team for appointment bookings, doctor availability schedules, and immediate 24/7 doorstep X-ray dispatch.
              </p>

              {/* Hours & Availability Card */}
              <div 
                style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '1.5rem', 
                  borderRadius: '16px', 
                  border: '1px solid rgba(10, 31, 68, 0.08)',
                  boxShadow: '0 2px 10px rgba(10, 31, 68, 0.03)',
                  marginBottom: '1.75rem'
                }}
                className="contact-hours-box"
              >
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Clock size={17} color="var(--blue-brand)" /> Consultation & Dispatch Hours
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>Monday – Saturday:</span>
                    <strong style={{ color: 'var(--navy-primary)' }}>8:00 AM – 10:00 PM</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>Sunday Specialist OPD:</span>
                    <strong style={{ color: 'var(--navy-primary)' }}>10:00 AM – 2:00 PM</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#dc2626', fontWeight: 800, paddingTop: '0.25rem', fontSize: '0.84rem' }}>
                    <span>🚨 24/7 Mobile Home X-Ray Dispatch Active Everyday</span>
                  </div>
                </div>
              </div>

              {/* Interactive Centre Location Picker */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} color="var(--blue-brand)" /> Select a Centre for Address & Desk:
                </div>

                {/* Pill Selector */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.15rem' }} className="contact-centre-pills">
                  {centresData.map(c => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCentre(c.id)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-pill)',
                        border: selectedCentre === c.id ? '1.5px solid var(--navy-primary)' : '1px solid var(--border-color)',
                        backgroundColor: selectedCentre === c.id ? 'var(--navy-primary)' : '#ffffff',
                        color: selectedCentre === c.id ? '#ffffff' : 'var(--navy-primary)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      📍 {c.area} {c.type === 'outreach-clinic' ? '(Outreach)' : ''}
                    </button>
                  ))}
                </div>

                {/* Active Selected Centre Details */}
                {activeCentreData && (
                  <div 
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(10, 31, 68, 0.1)',
                      borderRadius: '16px',
                      padding: '1.35rem',
                      boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)'
                    }}
                    className="contact-selected-centre-card"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                        {activeCentreData.name}
                      </h4>
                      {activeCentreData.status === 'opening-soon' ? (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#fef3c7', color: '#b45309', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                          🚧 Opening Soon
                        </span>
                      ) : activeCentreData.type === 'outreach-clinic' ? (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#e0f2fe', color: '#0369a1', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                          Outreach Clinic
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                          ● Open Today
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {activeCentreData.address}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }} className="contact-selected-centre-actions">
                      <a 
                        href={`tel:${activeCentreData.phone}`}
                        className="btn btn-primary btn-sm"
                        style={{ justifyContent: 'center', gap: '0.35rem', fontSize: '0.8rem', padding: '0.5rem' }}
                      >
                        <Phone size={13} /> Call Desk
                      </a>

                      <a 
                        href={`https://wa.me/${activeCentreData.whatsapp}?text=Hello%20SOS%20${activeCentreData.area}%20Desk,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                        style={{ justifyContent: 'center', gap: '0.35rem', fontSize: '0.8rem', padding: '0.5rem' }}
                      >
                        <FaWhatsapp size={14} /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Inline Priority Consultation Form */}
            <div className="contact-form-col" id="book-consultation">
              <EnquiryForm 
                defaultDoctor={doctorFromUrl}
                title="Book Priority Consultation"
                subtitle="Fill out the form and our central desk will confirm your appointment within 15 minutes."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 4 Centres Network Overview Strip ── */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }} className="contact-centres-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Mumbai Locations
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.85rem', color: 'var(--navy-primary)' }}>
              Our Centres & <span style={{ color: 'var(--blue-brand)' }}>Outreach Clinics</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Specialist consultation facilities equipped with diagnostic X-ray units and emergency support.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '1.25rem' 
            }}
            className="centres-overview-grid"
          >
            {centresData.map(centre => (
              <div
                key={centre.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: centre.type === 'outreach-clinic' ? '1.5px solid rgba(217, 119, 6, 0.3)' : '1px solid rgba(10, 31, 68, 0.08)',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(10, 31, 68, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.04)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                    📍 {centre.area}
                  </h3>
                  {centre.type === 'outreach-clinic' ? (
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#fef3c7', color: '#b45309', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                      Outreach
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#f0f9ff', color: '#0369a1', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                      Centre
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.15rem' }}>
                  {centre.address}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <a 
                    href={`tel:${centre.phone}`}
                    style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Phone size={13} color="var(--blue-brand)" /> {centre.phone}
                  </a>

                  <a 
                    href={`https://wa.me/${centre.whatsapp}?text=Hello%20SOS%20${centre.area}%20Desk,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <FaWhatsapp size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-hero-section {
            padding: 2.25rem 0 1.75rem 0 !important;
          }

          .contact-main-section, .contact-centres-section {
            padding: 2rem 0 !important;
          }

          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .contact-quick-strip {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
          }

          .contact-quick-card {
            padding: 0.85rem 1rem !important;
          }

          .contact-info-col {
            padding: 0 !important;
          }

          .contact-hours-box {
            padding: 1.15rem 1rem !important;
            border-radius: 14px !important;
          }

          .contact-selected-centre-card {
            padding: 1.15rem 1rem !important;
            border-radius: 14px !important;
          }

          .centres-overview-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-selected-centre-actions {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
