import React from 'react';
import { Award, ShieldCheck, GraduationCap, UserCheck } from 'lucide-react';

export interface AdvisoryMember {
  id: string;
  name: string;
  credentialLine: string;
  experienceYears?: number;
  bio: string;
  photoUrl?: string;
}

export const advisoryCouncilData: AdvisoryMember[] = [
  {
    id: 'advisory-1',
    name: 'Senior Advisory Surgeon 1',
    credentialLine: 'Senior Consultant & Orthopedic Advisor',
    experienceYears: 20,
    bio: 'Distinguished veteran orthopedic surgeon providing clinical governance, geriatric care pathways, and surgical oversight.',
    photoUrl: '/assets/advisory-1.jpg'
  },
  {
    id: 'advisory-2',
    name: 'Senior Advisory Surgeon 2',
    credentialLine: 'Emeritus Professor of Orthopedics & Joint Care',
    experienceYears: 18,
    bio: 'Pioneering surgical mentor advising on complex reconstructive techniques, quality assurance, and ethical clinical practice.',
    photoUrl: '/assets/advisory-2.jpg'
  },
  {
    id: 'advisory-3',
    name: 'Senior Advisory Surgeon 3',
    credentialLine: 'Director of Orthopedic Quality & Geriatric Care',
    experienceYears: 16,
    bio: 'Leader in geriatric musculoskeletal health, fall-prevention frameworks, and accessible community orthopedic outreach.',
    photoUrl: '/assets/advisory-3.jpg'
  }
];

export const AdvisoryCouncil: React.FC = () => {
  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }} id="advisory-council">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
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
              marginBottom: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <ShieldCheck size={16} />
            <span>Clinical Leadership & Governance</span>
          </div>

          <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
            Medical <span style={{ color: 'var(--blue-brand)' }}>Advisory Council</span>
          </h2>

          <p className="subhead" style={{ margin: '0 auto', fontSize: '1.02rem', color: 'var(--text-secondary)' }}>
            SOS is guided by a distinguished advisory council bringing a <strong>combined surgical experience of more than 50 years</strong> to ensure the highest standards of patient care and ethical practice.
          </p>
        </div>

        {/* Advisory Member Cards Grid */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
          className="advisory-grid"
        >
          {advisoryCouncilData.map((member) => (
            <div
              key={member.id}
              className="advisory-card"
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(10, 31, 68, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
              }}
            >
              {/* Top Header Row with Icon & Experience */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-brand)'
                }}>
                  <UserCheck size={20} />
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'var(--navy-primary)',
                  backgroundColor: '#ffffff',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-color)'
                }}>
                  <Award size={12} color="var(--blue-brand)" />
                  <span>50+ Yrs Combined</span>
                </div>
              </div>

              {/* Name & Credentials */}
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                {member.name}
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--blue-brand)', fontWeight: 700, marginBottom: '0.85rem' }}>
                <GraduationCap size={14} style={{ flexShrink: 0 }} />
                <span>{member.credentialLine}</span>
              </div>

              {/* Bio */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginTop: 'auto', margin: 0 }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .advisory-card {
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
