import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ContactChip } from '../components/ContactChip';
import { EnquiryForm } from '../components/EnquiryForm';
import { centresData } from '../data/centres';
import { FaWhatsapp } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact SOS Speciality Orthopedic Service | Phone & WhatsApp 7070706505"
        description="Contact SOS Speciality Orthopedic Service in Mumbai. Call or WhatsApp 7070706505. Book OPD appointments or 24/7 Home X-Ray in Borivali, Kandivali, Malad, Goregaon, Andheri."
      />

      <section style={{ backgroundColor: 'var(--navy-primary)', color: '#ffffff', padding: '4rem 0 3.5rem 0' }}>
        <div className="container text-center">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-pill)', fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Get in Touch
          </div>

          <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Contact SOS Speciality Orthopedic Service
          </h1>

          <p className="subhead" style={{ color: '#cbd5e1', margin: '0 auto', maxWidth: '720px' }}>
            We are available 24/7 for orthopedic emergencies, home X-ray imaging, and priority doctor consultations.
          </p>
        </div>
      </section>

      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'flex-start' }} className="contact-page-grid">
            {/* Contact Details */}
            <div>
              <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
                Helpline & Mail
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                Direct Emergency & Consultation Desk
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Whether you wish to consult our senior orthopedic surgeons or require immediate 24/7 Home X-Ray dispatch, connect with our central desk.
              </p>

              {/* Reused Contact Pill */}
              <div style={{ marginBottom: '2.5rem' }}>
                <ContactChip size="lg" />
              </div>

              {/* Direct Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <a href="tel:7070706505" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  <Phone size={20} /> Call Helpline: 7070706505
                </a>

                <a 
                  href="https://wa.me/917070706505?text=Hello%20SOS%20Orthopedic%20Service,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                >
                  <FaWhatsapp size={20} /> WhatsApp Instant Desk: 7070706505
                </a>
              </div>

              {/* Working Hours */}
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={18} /> Central Operational Hours
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div><strong>Monday - Saturday:</strong> 9:00 AM - 9:00 PM</div>
                  <div><strong>Sunday OPD:</strong> 10:00 AM - 2:00 PM</div>
                  <div style={{ color: '#dc2626', fontWeight: 700, marginTop: '0.3rem' }}>🚨 Home X-Ray Service: 24 Hours / 7 Days Active</div>
                </div>
              </div>
            </div>

            {/* Inline Enquiry Form */}
            <div>
              <EnquiryForm 
                title="Send an Enquiry"
                subtitle="Fill out the form below and our medical team will call you back within 15 minutes."
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-page-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 5 Centres Summary Grid */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Visit Any of Our 5 Mumbai Centres
          </h2>

          <div className="grid-5" style={{ gap: '1.25rem' }}>
            {centresData.map(c => (
              <div 
                key={c.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontWeight: 800, color: 'var(--navy-primary)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  📍 {c.area}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {c.address}
                </div>
                <a 
                  href={`tel:${c.phone}`} 
                  style={{ marginTop: 'auto', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <Phone size={13} /> {c.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
