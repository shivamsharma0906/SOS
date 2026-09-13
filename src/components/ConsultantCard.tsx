import React, { useState } from 'react';
import { Doctor } from '../data/doctors';
import { 
  Award, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Stethoscope, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ConsultantCardProps {
  doctor: Doctor;
  onSelectDoctor?: (docId: string) => void;
}

export const ConsultantCard: React.FC<ConsultantCardProps> = ({ doctor, onSelectDoctor }) => {
  const [imgError, setImgError] = useState(false);
  const [showAllCredentials, setShowAllCredentials] = useState(false);

  const handleBookConsultation = () => {
    if (onSelectDoctor) {
      onSelectDoctor(doctor.id);
    } else {
      const formEl = document.getElementById('enquiry');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Extract initials for fallback avatar
  const initials = doctor.name
    .replace(/^Dr\.\s+/i, '')
    .split(' ')
    .map(n => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

  const displayedFellowships = showAllCredentials 
    ? doctor.fellowships 
    : doctor.fellowships?.slice(0, 2);

  return (
    <div 
      className="consultant-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid rgba(10, 31, 68, 0.09)',
        boxShadow: '0 8px 30px rgba(10, 31, 68, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 45px rgba(2, 132, 199, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(10, 31, 68, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.09)';
      }}
    >
      {/* ── 1. Media Portrait Frame with Executive Overlay ── */}
      <div 
        style={{ 
          position: 'relative', 
          height: '270px', 
          backgroundColor: '#f1f5f9', 
          overflow: 'hidden' 
        }} 
        className="consultant-card-media"
      >
        {!imgError ? (
          <img
            src={doctor.photoUrl}
            alt={`${doctor.name}, ${doctor.title} - ${doctor.specialization}`}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 10%',
              display: 'block',
              transition: 'transform 0.5s ease'
            }}
            loading="lazy"
          />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'linear-gradient(135deg, #0a1f44 0%, #0284c7 100%)', 
            color: '#ffffff' 
          }}>
            <Stethoscope size={40} color="#93c5fd" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{initials}</span>
            <span style={{ fontSize: '0.82rem', color: '#e0f2fe' }}>{doctor.name}</span>
          </div>
        )}

        {/* Soft elegant gradient vignette at bottom */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, rgba(7, 21, 46, 0.5) 0%, rgba(7, 21, 46, 0.1) 40%, transparent 70%)', 
            pointerEvents: 'none' 
          }} 
        />

        {/* Bottom-Left: Super-Specialist Honor Badge (Separated from top to eliminate overlap) */}
        {doctor.honorBadge && (
          <div style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '0.85rem',
            background: 'linear-gradient(135deg, rgba(10, 31, 68, 0.94) 0%, rgba(2, 132, 199, 0.95) 100%)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            padding: '0.32rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em',
            zIndex: 2,
            maxWidth: 'calc(100% - 1.7rem)'
          }}>
            <Award size={13} color="#fcd34d" style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doctor.honorBadge}</span>
          </div>
        )}

        {/* Top-Right: Appointment Live Status */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          backgroundColor: 'rgba(7, 21, 46, 0.88)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '0.28rem 0.65rem',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          zIndex: 2
        }}>
          <span style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            backgroundColor: '#22c55e', 
            display: 'inline-block', 
            boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.4)' 
          }} />
          <span>By Appointment</span>
        </div>
      </div>

      {/* ── 2. Card Content Body ── */}
      <div 
        style={{ 
          padding: '1.4rem 1.35rem', 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1,
          gap: '0.85rem'
        }}
        className="consultant-card-body"
      >
        {/* Name & Title */}
        <div>
          <div style={{ 
            fontSize: '0.74rem', 
            fontWeight: 800, 
            color: 'var(--blue-brand)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em',
            marginBottom: '0.2rem'
          }}>
            {doctor.title}
          </div>
          <h3 style={{ 
            fontSize: '1.3rem', 
            fontWeight: 800, 
            color: 'var(--navy-primary)', 
            lineHeight: 1.25, 
            margin: 0 
          }}>
            {doctor.name}
          </h3>
        </div>

        {/* Specialization Badge */}
        <div 
          style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: '10px',
            padding: '0.45rem 0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem'
          }}
        >
          <div style={{
            width: '22px',
            height: '22px',
            borderRadius: '6px',
            backgroundColor: '#0284c7',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Stethoscope size={13} />
          </div>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0369a1', lineHeight: 1.25 }}>
            {doctor.specialization}
          </span>
        </div>

        {/* Structured Credentials & International Fellowships (Desktop Full) */}
        <div 
          className="desktop-only"
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.55rem'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ 
              fontSize: '0.72rem', 
              fontWeight: 800, 
              color: '#475569', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <Globe size={13} color="var(--blue-brand)" />
              <span>International Fellowships & Degrees</span>
            </div>
            <span style={{ 
              fontSize: '0.68rem', 
              fontWeight: 700, 
              color: '#0284c7', 
              backgroundColor: '#e0f2fe', 
              padding: '0.1rem 0.45rem', 
              borderRadius: '9999px' 
            }}>
              Verified
            </span>
          </div>

          {/* Primary Degrees Chips */}
          {doctor.degrees && doctor.degrees.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {doctor.degrees.map((deg, idx) => (
                <span 
                  key={idx}
                  style={{
                    fontSize: '0.71rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  🎓 {deg}
                </span>
              ))}
            </div>
          )}

          {/* Fellowships List */}
          {displayedFellowships && displayedFellowships.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.2rem' }}>
              {displayedFellowships.map((fellowship, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.35rem', 
                    fontSize: '0.75rem', 
                    color: '#334155',
                    lineHeight: 1.35
                  }}
                >
                  <Sparkles size={12} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>{fellowship}</strong></span>
                </div>
              ))}
            </div>
          )}

          {/* Expand/Collapse Toggle if more than 2 fellowships */}
          {doctor.fellowships && doctor.fellowships.length > 2 && (
            <button
              onClick={() => setShowAllCredentials(!showAllCredentials)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.25rem 0 0 0',
                color: 'var(--blue-brand)',
                fontSize: '0.73rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <span>{showAllCredentials ? 'Show Fewer Credentials' : `+ View ${doctor.fellowships.length - 2} More International Accreditations`}</span>
              {showAllCredentials ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          )}
        </div>

        {/* Compact 1-line Credential Tag for Mobile */}
        <div 
          className="mobile-flex" 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '0.35rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            padding: '0.32rem 0.6rem',
            borderRadius: '8px',
            fontSize: '0.73rem',
            color: '#1e293b',
            fontWeight: 700
          }}
        >
          <Award size={13} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {doctor.degrees && doctor.degrees.length > 0 ? doctor.degrees.slice(0, 2).join(' • ') : 'FRCS (England) • MCh (UK)'}
          </span>
        </div>

        {/* Short Bio (Desktop Only) */}
        <p 
          className="desktop-only"
          style={{ 
            fontSize: '0.84rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.5, 
            margin: 0 
          }}
        >
          {doctor.bio}
        </p>

        {/* Key Expertise / Surgical Procedures (Desktop Full) */}
        <div className="desktop-only">
          <div style={{ 
            fontSize: '0.7rem', 
            fontWeight: 800, 
            color: 'var(--navy-primary)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.04em',
            marginBottom: '0.4rem'
          }}>
            Key Clinical Specializations:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {doctor.expertiseList.map((item, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '0.73rem',
                  fontWeight: 600,
                  color: '#0369a1',
                  backgroundColor: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  padding: '0.22rem 0.55rem',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <CheckCircle2 size={11} color="#0284c7" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Compact Clinical Focus for Mobile (Top 2 tags) */}
        <div className="mobile-flex" style={{ display: 'none', flexWrap: 'wrap', gap: '0.3rem' }}>
          {doctor.expertiseList.slice(0, 2).map((item, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.71rem',
                fontWeight: 700,
                color: '#0369a1',
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                padding: '0.18rem 0.48rem',
                borderRadius: '5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <CheckCircle2 size={11} color="#0284c7" />
              {item}
            </span>
          ))}
        </div>

        {/* Centres & Timings Strip (Desktop Full) */}
        <div 
          className="desktop-only"
          style={{ 
            paddingTop: '0.75rem', 
            borderTop: '1px solid #f1f5f9', 
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem'
          }}
        >
          <div style={{ 
            fontSize: '0.73rem', 
            fontWeight: 700, 
            color: 'var(--navy-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.35rem' 
          }}>
            <MapPin size={13} color="var(--blue-brand)" />
            <span>Available Across All 4 SOS Centres:</span>
          </div>

          <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
            {doctor.centresAvailable.map(centre => (
              <span 
                key={centre} 
                style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  color: '#334155', 
                  backgroundColor: '#f1f5f9', 
                  padding: '0.15rem 0.5rem', 
                  borderRadius: '5px', 
                  border: '1px solid #e2e8f0' 
                }}
              >
                {centre}
              </span>
            ))}
          </div>

          <div style={{ 
            fontSize: '0.73rem', 
            color: 'var(--text-secondary)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.3rem',
            marginTop: '0.1rem'
          }}>
            <Clock size={12} color="var(--blue-brand)" />
            <span>{doctor.schedule}</span>
          </div>
        </div>

        {/* Compact Centres & Timings for Mobile (1 clean line) */}
        <div 
          className="mobile-flex" 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            fontSize: '0.73rem', 
            color: '#475569', 
            fontWeight: 600,
            marginTop: 'auto',
            paddingTop: '0.4rem',
            borderTop: '1px solid #f1f5f9'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <MapPin size={12} color="var(--blue-brand)" />
            <span>All 4 Centres</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={12} color="var(--blue-brand)" />
            <span>By Appointment</span>
          </div>
        </div>

        {/* ── 3. Primary CTA Button ── */}
        <div style={{ marginTop: '0.35rem' }}>
          <button
            onClick={handleBookConsultation}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.65rem 1rem',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.86rem',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)',
              transition: 'all 0.2s ease'
            }}
          >
            <Calendar size={15} />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .consultant-card-media {
            width: 100% !important;
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
            min-height: 280px !important;
          }
          .consultant-card-body {
            padding: 1rem 0.95rem !important;
            gap: 0.55rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ConsultantCard;
