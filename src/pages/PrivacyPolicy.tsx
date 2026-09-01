import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../config/business';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead title={`Privacy Policy | ${BUSINESS_INFO.name}`} />
      <div className="container container-narrow" style={{ padding: '4rem 1.5rem', lineHeight: 1.7 }}>
        <h1 className="heading-lg" style={{ marginBottom: '1.5rem', color: 'var(--navy-primary)' }}>Privacy <span style={{ color: 'var(--blue-brand)' }}>Policy</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          At <strong>{BUSINESS_INFO.name}</strong>, accessible from our clinics across Mumbai (Borivali, Kandivali, Malad, Goregaon, Andheri) and online platforms, your privacy and medical data security are paramount.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>1. Patient Information Collected</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          We collect personal details such as full name, phone number, email address, preferred appointment date, medical history notes, and location details strictly for scheduling consultations, home X-ray dispatches, and clinical follow-ups.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>2. Use of Information</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Your contact information is never sold, leased, or shared with third-party advertisers. Information is accessed strictly by SOS medical desk staff and consulting orthopedic doctors.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>3. Contact Us</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          For privacy inquiries, reach out to us at <strong>{BUSINESS_INFO.email}</strong> or call <strong>{BUSINESS_INFO.phone}</strong>.
        </p>
      </div>
    </>
  );
};
