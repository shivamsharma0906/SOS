import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, MapPin, Clock, ChevronUp, ChevronDown, Calendar, Baby, Stethoscope, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  onSelectDoctor?: (doctorId: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onSelectDoctor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  // Fallback initial avatar if image fails to load
  const initials = doctor.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('');

  const handleBookConsultation = () => {
    if (onSelectDoctor) {
      onSelectDoctor(doctor.id);
    }
    const element = document.getElementById('book-consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/contact?doctor=${doctor.id}#book-consultation`);
    }
  };

  return (
    <div
      className="hospital-doctor-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid rgba(10, 31, 68, 0.08)',
        boxShadow: '0 4px 20px rgba(10, 31, 68, 0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 18px 38px rgba(10, 31, 68, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 31, 68, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
      }}
    >
      {/* ── 1. Doctor Portrait Frame (Clean, Unblocked) ── */}
      <div style={{ position: 'relative', height: '240px', backgroundColor: '#f8fafc', overflow: 'hidden' }} className="doctor-card-media">
        {!imgError ? (
          <img
            src={doctor.photoUrl}
            alt={`${doctor.name}, ${doctor.title} specializing in ${doctor.specialization} at SOS Speciality Orthopedic Clinic`}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 12%',
              display: 'block',
              transition: 'transform 0.4s ease'
            }}
            loading="lazy"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a1f44 0%, #0284c7 100%)', color: '#ffffff' }}>
            <Stethoscope size={36} color="#93c5fd" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '1.4rem', fontWeight: 800 }}>{initials}</span>
            <span style={{ fontSize: '0.78rem', color: '#e0f2fe' }}>{doctor.name}</span>
          </div>
        )}

        {/* Soft bottom vignette overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 46, 0.25) 0%, transparent 40%)', pointerEvents: 'none' }} />

        {/* Top-Right: OPD Available Live Indicator */}
        <div style={{
          position: 'absolute',
          top: '0.65rem',
          right: '0.65rem',
          backgroundColor: 'rgba(7, 21, 46, 0.88)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '0.25rem 0.65rem',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 2
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.35)' }} />
          <span>OPD Available</span>
        </div>

        {/* Top-Left: Pediatric/Trauma Pill */}
        {doctor.pediatricTraumaCare && (
          <div style={{
            position: 'absolute',
            top: '0.65rem',
            left: '0.65rem',
            backgroundColor: 'rgba(2, 132, 199, 0.95)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            padding: '0.25rem 0.65rem',
            borderRadius: '9999px',
            fontSize: '0.68rem',
            fontWeight: 800,
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            zIndex: 2
          }}>
            <Baby size={12} />
            <span>Pediatric Specialist</span>
          </div>
        )}
      </div>

      {/* ── 2. Doctor Details Body ── */}
      <div style={{ padding: '1.25rem 1.15rem 1.15rem 1.15rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }} className="doctor-card-body">
        
        {/* Doctor Name & Title */}
        <div style={{ marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.22rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1.25, margin: '0 0 0.15rem 0' }}>
            {doctor.name}
          </h3>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {doctor.title}
          </div>
        </div>

        {/* Prominent Specialization Box (Legible, Un-truncated) */}
        <div 
          style={{
            backgroundColor: '#f0f7ff',
            border: '1px solid #bae6fd',
            borderRadius: '8px',
            padding: '0.35rem 0.6rem',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Stethoscope size={13} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0369a1', lineHeight: 1.25 }}>
            {doctor.specialization}
          </span>
        </div>

        {/* Qualifications & Experience Tag Strip */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0369a1', backgroundColor: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <Award size={12} /> {doctor.experienceYears}+ Yrs Exp
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#475569', backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            🎓 {doctor.qualifications}
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#16a34a', backgroundColor: '#dcfce7', padding: '0.2rem 0.5rem', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
            <ShieldCheck size={12} /> Verified
          </span>
        </div>

        {/* Bio Snippet */}
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.85rem 0', flexGrow: 1 }}>
          {doctor.bio}
        </p>

        {/* Expandable Key Clinical Focus / Procedures */}
        {isExpanded && (
          <div className="animate-fade-in" style={{ padding: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', marginBottom: '0.85rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 800, fontSize: '0.72rem', color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
              Key Clinical Procedures:
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.65rem 0', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {doctor.expertiseList.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem', lineHeight: 1.35 }}>
                  <CheckCircle2 size={12} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Centres & Timings Strip */}
        <div style={{ paddingTop: '0.65rem', borderTop: '1px solid #f1f5f9', marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <MapPin size={12} color="var(--blue-brand)" /> SOS Centres:
          </div>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
            {doctor.centresAvailable.map(centre => (
              <span key={centre} style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--navy-primary)', backgroundColor: '#f1f5f9', padding: '0.12rem 0.45rem', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                {centre}
              </span>
            ))}
          </div>

          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={11} color="var(--blue-brand)" /> {doctor.schedule}
          </div>
        </div>

        {/* ── 3. Action Buttons ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: 'auto' }}>
          {/* Primary Action: Direct to Original EnquiryForm */}
          <button
            onClick={handleBookConsultation}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.6rem 0.85rem',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.84rem',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.28)'
            }}
          >
            <Calendar size={14} /> Book Consultation
          </button>

          {/* Secondary Action: View Procedures */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0.4rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#334155',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <span>{isExpanded ? 'Hide Procedures' : 'View Key Procedures'}</span>
            {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} color="var(--blue-brand)" />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .doctor-card-media {
            height: 220px !important;
          }
          .doctor-card-body {
            padding: 1.15rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorCard;
