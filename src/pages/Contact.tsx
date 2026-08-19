import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EnquiryForm } from '../components/EnquiryForm';
import { centresData } from '../data/centres';
import { FaWhatsapp } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [selectedCentre, setSelectedCentre] = useState(centresData[0]?.id || '');

  const activeCentreData = centresData.find(c => c.id === selectedCentre) || centresData[0];

  return (
    <>
      <SEOHead
        title="Contact SOS Speciality Orthopedic Service | 24/7 Helpline 7070706505"
        description="Connect with SOS Speciality Orthopedic Service in Mumbai. Call 7070706505 for doctor consultations or 24/7 Home X-Ray dispatch across Kandivali, Malad, Borivali, and Goregaon."
      />

      {/* ── 1. Hero Header ── */}
      <section className="page-hero-section contact-hero-section">
        <div className="container">
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.45rem', 
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
            <span>Direct Medical Assistance</span>
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', maxWidth: '820px', margin: '0 auto 0.85rem auto' }}>
            Contact <span style={{ color: 'var(--blue-brand)' }}>SOS Orthopedic Service</span>
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2rem auto', maxWidth: '680px', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Reach our central clinical desk 24/7 for orthopedic emergencies, priority surgeon appointments, or rapid at-home digital X-ray dispatch.
          </p>

          {/* Quick Contact 3-Card Strip */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1.25rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}
            className="contact-quick-strip"
          >
            {/* Helpline Card */}
            <a 
              href="tel:7070706505"
              style={{
                backgroundColor: '#ffffff',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--blue-brand)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>24/7 Helpline</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)' }}>7070706505</div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/917070706505?text=Hello%20SOS%20Orthopedic%20Service,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#16a34a';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FaWhatsapp size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>WhatsApp Desk</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)' }}>Instant Chat</div>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:officialsosortho@gmail.com"
              style={{
                backgroundColor: '#ffffff',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--blue-brand)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Official Mail</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--navy-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>officialsosortho@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Main Contact Grid (Details & Form) ── */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }} className="contact-main-section">
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.1fr 1.3fr', 
              gap: '3.5rem', 
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

              <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Direct Emergency & Consultation Desk
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Connect directly with our senior orthopedic coordination team for appointment bookings, doctor availability schedules, and immediate 24/7 doorstep X-ray dispatch.
              </p>

              {/* Hours & Availability Card */}
              <div 
                style={{ 
                  backgroundColor: 'var(--bg-subtle)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-lg)', 
                  border: '1px solid var(--border-color)',
                  marginBottom: '2rem'
                }}
                className="contact-hours-box"
              >
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Clock size={18} color="var(--blue-brand)" /> Consultation & Dispatch Hours
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>Monday – Saturday:</span>
                    <strong style={{ color: 'var(--navy-primary)' }}>8:00 AM – 10:00 PM</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>Sunday Specialist OPD:</span>
                    <strong style={{ color: 'var(--navy-primary)' }}>10:00 AM – 2:00 PM</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#dc2626', fontWeight: 800, paddingTop: '0.25rem' }}>
                    <span>🚨 24/7 Mobile Home X-Ray Dispatch Active Everyday</span>
                  </div>
                </div>
              </div>

              {/* Interactive Centre Location Picker */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} color="var(--blue-brand)" /> Select a Centre for Address & Contact:
                </div>

                {/* Pill Selector */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {centresData.map(c => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCentre(c.id)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-pill)',
                        border: selectedCentre === c.id ? '1.5px solid var(--blue-brand)' : '1px solid var(--border-color)',
                        backgroundColor: selectedCentre === c.id ? 'var(--blue-brand)' : '#ffffff',
                        color: selectedCentre === c.id ? '#ffffff' : 'var(--navy-primary)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {c.area} {c.type === 'outreach-clinic' ? '(Outreach)' : c.status === 'opening-soon' ? '(Opening Soon)' : ''}
                    </button>
                  ))}
                </div>

                {/* Active Selected Centre Details */}
                {activeCentreData && (
                  <div 
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(10, 31, 68, 0.1)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.5rem',
                      boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)'
                    }}
                    className="contact-selected-centre-card"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                        {activeCentreData.name}
                      </h4>
                      {activeCentreData.status === 'opening-soon' ? (
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#fef3c7', color: '#b45309', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          🚧 Opening Soon
                        </span>
                      ) : activeCentreData.type === 'outreach-clinic' ? (
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#e0f2fe', color: '#0369a1', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          Outreach Clinic
                        </span>
                      ) : null}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {activeCentreData.address}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                      <a 
                        href={`tel:${activeCentreData.phone}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--blue-brand)', fontWeight: 700, fontSize: '0.88rem' }}
                      >
                        <Phone size={14} /> Call: {activeCentreData.phone}
                      </a>

                      <a 
                        href={`https://wa.me/${activeCentreData.whatsapp}?text=Hello%20SOS%20${activeCentreData.area}%20Desk,%20I%20would%20like%20to%20enquire%20about%20a%20doctor%20consultation.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#16a34a', fontWeight: 700, fontSize: '0.88rem' }}
                      >
                        <FaWhatsapp size={15} /> WhatsApp Desk
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Inline Priority Consultation Form */}
            <div className="contact-form-col">
              <EnquiryForm 
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
            <h2 className="heading-lg" style={{ marginBottom: '0.85rem' }}>
              Our Centres & Outreach Clinics
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Specialist consultation facilities equipped with diagnostic X-ray units and emergency support.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '1.5rem' 
            }}
            className="centres-overview-grid"
          >
            {centresData.map(centre => (
              <div
                key={centre.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 1.5rem',
                  border: centre.type === 'outreach-clinic' ? '1.5px solid rgba(217, 119, 6, 0.3)' : '1px solid rgba(10, 31, 68, 0.07)',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(10, 31, 68, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.03)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                    📍 {centre.area}
                  </h3>
                  {centre.type === 'outreach-clinic' && (
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: '#fef3c7', color: '#b45309', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                      Outreach
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {centre.address}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a 
                    href={`tel:${centre.phone}`}
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Phone size={13} color="var(--blue-brand)" /> {centre.phone}
                  </a>

                  <a 
                    href={`https://wa.me/${centre.whatsapp}?text=Hello%20SOS%20${centre.area}%20Desk,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.82rem', fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
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
          .contact-main-section, .contact-centres-section {
            padding: 2.25rem 0 !important;
          }

          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .contact-quick-strip {
            gap: 0.75rem !important;
          }

          .contact-info-col {
            padding: 0 0.25rem !important;
          }

          .contact-hours-box {
            padding: 1.25rem !important;
            border-radius: 16px !important;
          }

          .contact-selected-centre-card {
            padding: 1.25rem !important;
            border-radius: 16px !important;
          }

          .centres-overview-grid {
            gap: 1rem !important;
          }
        }
      `}</style>
    </>
  );
};
