import React, { useState } from 'react';
import { Award, MapPin, Clock, ChevronUp, ArrowRight, Calendar, Baby } from 'lucide-react';
import { Doctor } from '../data/doctors';
import { AppointmentModal } from './AppointmentModal';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="doctor-profile-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        border: doctor.pediatricTraumaCare ? '1.5px solid rgba(2, 132, 199, 0.3)' : '1px solid rgba(10, 31, 68, 0.06)',
        boxShadow: '0 8px 24px rgba(10, 31, 68, 0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 31, 68, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.06)';
        e.currentTarget.style.borderColor = doctor.pediatricTraumaCare ? 'rgba(2, 132, 199, 0.3)' : 'rgba(10, 31, 68, 0.06)';
      }}
    >
      {/* Doctor Image Header with clear face framing */}
      <div style={{ position: 'relative', height: '240px', backgroundColor: '#f1f5f9', overflow: 'hidden' }} className="doctor-img-box">
        <img
          src={doctor.photoUrl}
          alt={doctor.name}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.parentElement) {
              e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #07152e 0%, #0a1f44 50%, #0369a1 100%)';
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 15%',
            display: 'block'
          }}
          loading="lazy"
        />

        {/* Pediatric/Trauma Care Highlight Pill */}
        {doctor.pediatricTraumaCare && (
          <div style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            backgroundColor: '#0284c7',
            color: '#ffffff',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.74rem',
            fontWeight: 800,
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            zIndex: 2
          }}>
            <Baby size={14} />
            <span>Pediatric & Trauma Specialist</span>
          </div>
        )}

        {/* Specialization Pill */}
        <div style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '0.75rem',
          zIndex: 2
        }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#ffffff',
            backgroundColor: 'rgba(7, 21, 46, 0.85)',
            backdropFilter: 'blur(4px)',
            padding: '0.3rem 0.7rem',
            borderRadius: 'var(--radius-pill)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            {doctor.specialization}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }} className="doctor-card-body">
        <h3 className="heading-sm" style={{ fontSize: '1.25rem', marginBottom: '0.2rem', color: 'var(--navy-primary)' }}>
          {doctor.name}
        </h3>
        <p style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
          {doctor.title}
        </p>

        {/* Desktop Qualifications Line */}
        <p className="doctor-qual-text desktop-only" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.85rem', lineHeight: 1.4 }}>
          🎓 {doctor.qualifications}
        </p>

        {/* Badges: Experience & Registration */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-primary)', backgroundColor: 'var(--blue-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)' }}>
            <Award size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> {doctor.experienceYears}+ Yrs Exp.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.25rem 0.55rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)' }}>
            {doctor.registrationNumber}
          </span>
        </div>

        {/* Desktop Bio summary */}
        <p className="doctor-bio-text desktop-only" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          {doctor.bio}
        </p>

        {/* Expandable Details with Clean Vertical Flow */}
        {isExpanded && (
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.84rem' }}>
            {/* Mobile Qualifications & Bio Summary */}
            <div className="mobile-only" style={{ marginBottom: '0.85rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                Qualifications:
              </div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.45rem', fontWeight: 600 }}>
                🎓 {doctor.qualifications}
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, fontSize: '0.84rem' }}>
                {doctor.bio}
              </p>
            </div>

            <div style={{ fontWeight: 800, fontSize: '0.76rem', color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              Clinical & Surgical Focus:
            </div>
            <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
              {doctor.expertiseList.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.25rem' }}>{item}</li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', gap: '0.35rem' }}
            >
              <Calendar size={14} /> Request Consultation
            </button>
          </div>
        )}

        {/* Centres & Timings */}
        <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <MapPin size={13} color="var(--navy-primary)" /> Available at SOS Centres:
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.45rem' }}>
            {doctor.centresAvailable.map(centre => (
              <span key={centre} style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--navy-primary)', backgroundColor: 'var(--blue-soft)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                {centre}
              </span>
            ))}
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={12} /> {doctor.schedule}
          </div>
        </div>

        {/* Action Button: View Profile */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0.55rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--border-color)',
              backgroundColor: '#ffffff',
              color: 'var(--navy-primary)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{isExpanded ? 'Hide Details' : 'View Profile & Focus'}</span>
            {isExpanded ? <ChevronUp size={15} /> : <ArrowRight size={15} color="var(--blue-brand)" />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .doctor-card-body {
            padding: 1.25rem 1.1rem !important;
          }
          .doctor-img-box {
            height: 230px !important;
          }
        }
      `}</style>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDoctor={doctor.id}
      />
    </div>
  );
};
