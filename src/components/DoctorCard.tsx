import React, { useState } from 'react';
import { Award, MapPin, Clock, ChevronDown, ChevronUp, ArrowRight, Calendar } from 'lucide-react';
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
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(10, 31, 68, 0.06)',
        boxShadow: '0 8px 24px rgba(10, 31, 68, 0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 31, 68, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.06)';
        e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.06)';
      }}
    >
      {/* Doctor Image Header */}
      <div style={{ position: 'relative', height: '240px', backgroundColor: 'var(--navy-dark)', overflow: 'hidden' }}>
        <img
          src={doctor.photoUrl}
          alt={doctor.name}
          onError={(e) => {
            e.currentTarget.src = '/assets/doctor-1.jpg';
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            opacity: 0.92
          }}
          loading="lazy"
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(7, 21, 46, 0.95), transparent)',
          padding: '1.25rem 1.25rem 0.75rem 1.25rem'
        }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: '#ffffff',
            backgroundColor: 'var(--navy-accent)',
            padding: '0.25rem 0.65rem',
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {doctor.specialization}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 className="heading-sm" style={{ fontSize: '1.3rem', marginBottom: '0.2rem', color: 'var(--navy-primary)' }}>
          {doctor.name}
        </h3>
        <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
          {doctor.title}
        </p>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.4 }}>
          🎓 {doctor.qualifications}
        </p>

        {/* Badges: Experience & Registration */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy-primary)', backgroundColor: 'var(--blue-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)' }}>
            <Award size={13} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> {doctor.experienceYears}+ Years Exp.
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)' }}>
            Reg: {doctor.registrationNumber}
          </span>
        </div>

        {/* Bio summary */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          {doctor.bio}
        </p>

        {/* Expandable Key Expertise */}
        {isExpanded && (
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>Core Surgical Expertise:</div>
            <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {doctor.expertiseList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', gap: '0.4rem' }}
            >
              <Calendar size={14} /> Request Consultation with {doctor.name.split(' ')[1]}
            </button>
          </div>
        )}

        {/* Centres & Timings */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <MapPin size={14} color="var(--navy-primary)" /> Available at SOS Centres:
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
            {doctor.centresAvailable.map(centre => (
              <span key={centre} style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-primary)', backgroundColor: 'var(--blue-soft)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                {centre}
              </span>
            ))}
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={13} /> {doctor.schedule}
          </div>
        </div>

        {/* Action Button: View Profile */}
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0.65rem 1rem',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--border-color)',
              backgroundColor: '#ffffff',
              color: 'var(--navy-primary)',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{isExpanded ? 'Hide Credentials' : 'View Profile & Expertise'}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ArrowRight size={16} color="var(--blue-brand)" />}
          </button>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDoctor={doctor.id}
      />
    </div>
  );
};
