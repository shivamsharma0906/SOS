import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { DoctorCard } from '../components/DoctorCard';
import { doctorsData } from '../data/doctors';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { ShieldCheck } from 'lucide-react';

export const Doctors: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  const specialties = ['All', 'Joint Care & Knee/Hip Replacement', 'Spine Care & Minimally Invasive Spine Surgery', 'Sports Injury & Keyhole Arthroscopic Repair', 'Bone Care & Complex Fracture Reconstruction', 'Osteoporosis, Arthritis & Home Ortho Care'];

  const filteredDoctors = doctorsData.filter(doc => {
    if (selectedSpecialty === 'All') return true;
    return doc.specialization === selectedSpecialty;
  });

  return (
    <>
      <SEOHead
        title="Our Orthopedic Doctors | SOS Speciality Orthopedic Service Mumbai"
        description="Meet the 5 senior orthopedic specialists at SOS Speciality Orthopedic Service. Senior surgeons in Robotic Joint Replacement, Endoscopic Spine, Trauma & Sports Medicine."
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
            <ShieldCheck size={16} />
            <span>Medical Specialists</span>
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', maxWidth: '800px', margin: '0 auto 1.25rem auto' }}>
            Senior Orthopedic & Joint Surgeons
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.1rem' }}>
            Experienced consultants across Borivali, Kandivali, Malad, Goregaon, and Andheri centres.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Specialty Filter */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
            {specialties.map(spec => {
              const isActive = selectedSpecialty === spec;
              return (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(2, 132, 199, 0.2)' : 'var(--border-color)',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--blue-soft)' : '#ffffff',
                    color: isActive ? 'var(--blue-brand)' : 'var(--text-secondary)',
                    boxShadow: isActive ? '0 4px 12px rgba(2, 132, 199, 0.1)' : '0 2px 4px rgba(10, 31, 68, 0.02)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                      e.currentTarget.style.color = 'var(--navy-primary)';
                      e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.15)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }
                  }}
                >
                  {spec === 'All' ? 'All Specialists' : spec.split('&')[0].trim()}
                </button>
              );
            })}
          </div>

          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
