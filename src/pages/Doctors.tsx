import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { DoctorCard } from '../components/DoctorCard';
import { doctorsData } from '../data/doctors';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { ShieldCheck, Baby, Users } from 'lucide-react';

export const Doctors: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'pediatric-trauma' | string>('all');

  const filteredDoctors = doctorsData.filter(doc => {
    if (filterMode === 'all') return true;
    if (filterMode === 'pediatric-trauma') return doc.pediatricTraumaCare === true;
    return doc.specialization.toLowerCase().includes(filterMode.toLowerCase());
  });

  return (
    <>
      <SEOHead
        title="Our Orthopedic Doctors | SOS Speciality Orthopedic Service"
        description="Meet the consulting orthopedic surgeons at SOS Speciality Orthopedic Service. Experienced consultants in Joint Replacement, Spine Care, Pediatric Trauma, and Sports Injuries."
      />

      {/* Hero Header */}
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
            <span>Consultant Orthopedic Surgeons</span>
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', maxWidth: '800px', margin: '0 auto 0.85rem auto' }}>
            Meet Our Orthopedic Specialists
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.05rem' }}>
            Experienced orthopedic consultants providing patient-first clinical care for joint replacements, spine issues, sports injuries, and pediatric trauma.
          </p>
        </div>
      </section>

      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Specialty Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setFilterMode('all')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'all' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'all' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'all' ? '#ffffff' : 'var(--navy-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Users size={14} /> All Surgeons ({doctorsData.length})
            </button>

            <button
              onClick={() => setFilterMode('pediatric-trauma')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'pediatric-trauma' ? '#0284c7' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'pediatric-trauma' ? '#0284c7' : '#ffffff',
                color: filterMode === 'pediatric-trauma' ? '#ffffff' : '#0284c7',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Baby size={14} /> Pediatric & Trauma
            </button>

            <button
              onClick={() => setFilterMode('joint')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'joint' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'joint' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'joint' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              Joint Replacement
            </button>

            <button
              onClick={() => setFilterMode('spine')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'spine' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'spine' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'spine' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              Spine Specialists
            </button>
          </div>

          {/* Doctors Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
