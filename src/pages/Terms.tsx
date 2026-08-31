import React from 'react';
import { SEOHead } from '../components/SEOHead';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead title="Terms & Conditions | SOS Speciality Orthopedic Clinic" />
      <div className="container container-narrow" style={{ padding: '4rem 1.5rem', lineHeight: 1.7 }}>
        <h1 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Terms & Conditions</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Welcome to <strong>SOS Speciality Orthopedic Clinic</strong>. By accessing our website or booking services (including Home X-Ray and OPD consultations), you agree to comply with the following terms.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>1. Medical Consultation Disclaimer</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Information on this site is provided for educational and appointment scheduling purposes. It does not substitute for an in-person physical medical evaluation by a qualified orthopedic surgeon.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>2. Home X-Ray Service Booking</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Doorstep Home X-Ray dispatch is subject to technician availability and geographic coverage in Mumbai suburbs (Borivali, Kandivali, Malad, Goregaon, Andheri). Emergency cases requiring immediate life support should visit the nearest trauma emergency hospital.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>3. Contact & Helpline</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          For service queries, contact <strong>7070706505</strong> or email <strong>officialsosortho@gmail.com</strong>.
        </p>
      </div>
    </>
  );
};
