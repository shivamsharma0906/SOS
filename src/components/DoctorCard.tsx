import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, MapPin, Clock, Calendar, Baby, Stethoscope, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  onSelectDoctor?: (doctorId: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onSelectDoctor }) => {
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  // Extract initials for fallback avatar
  const initials = doctor.name
    .replace(/^Dr\.\s+/i, '')
    .split(' ')
    .map(n => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

  const handleBookConsultation = () => {
    if (onSelectDoctor) {
      onSelectDoctor(doctor.id);
    } else {
      const element = document.getElementById('book-consultation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/contact?doctor=${doctor.id}#book-consultation`);
      }
    }
  };

  // Determine specialty badge for bottom-left of photo
  const getPhotoBadge = () => {
    if (doctor.pediatricTraumaCare) {
      return {
        icon: <Baby size={12} />,
        text: 'Pediatric & Trauma Specialist',
        bg: 'linear-gradient(135deg, rgba(2, 132, 199, 0.94) 0%, rgba(3, 105, 161, 0.94) 100%)'
      };
    }
    if (doctor.specialization.toLowerCase().includes('spine')) {
      return {
        icon: <Zap size={12} />,
        text: 'Endoscopic Spine Specialist',
        bg: 'linear-gradient(135deg, rgba(124, 58, 237, 0.94) 0%, rgba(109, 40, 217, 0.94) 100%)'
      };
    }
    if (doctor.specialization.toLowerCase().includes('sports')) {
      return {
        icon: <Award size={12} />,
        text: 'Sports Medicine & Arthroscopy',
        bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.94) 0%, rgba(5, 150, 105, 0.94) 100%)'
      };
    }
    return {
      icon: <Award size={12} />,
      text: 'Senior Joint Surgeon',
      bg: 'linear-gradient(135deg, rgba(10, 31, 68, 0.94) 0%, rgba(2, 132, 199, 0.94) 100%)'
    };
  };

  const photoBadge = getPhotoBadge();

  return (
    <div
      className="hospital-doctor-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid rgba(10, 31, 68, 0.09)',
        boxShadow: '0 8px 30px rgba(10, 31, 68, 0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
      {/* ── 1. Doctor Portrait Frame with Gradient Vignette ── */}
      <div 
        style={{ 
          position: 'relative', 
          height: '260px', 
          backgroundColor: '#f1f5f9', 
          overflow: 'hidden' 
        }} 
        className="doctor-card-media"
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
              objectPosition: 'center 12%',
              display: 'block',
              transition: 'transform 0.5s ease'
            }}
            loading="lazy"
          />
        ) : (
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'linear-gradient(135deg, #0a1f44 0%, #0284c7 100%)', 
              color: '#ffffff' 
            }}
          >
            <Stethoscope size={38} color="#93c5fd" style={{ marginBottom: '0.4rem' }} />
            <span style={{ fontSize: '1.45rem', fontWeight: 800 }}>{initials || 'SOS'}</span>
            <span style={{ fontSize: '0.8rem', color: '#e0f2fe' }}>{doctor.name}</span>
          </div>
        )}

        {/* Soft elegant gradient vignette at bottom */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, rgba(7, 21, 46, 0.5) 0%, rgba(7, 21, 46, 0.1) 35%, transparent 65%)', 
            pointerEvents: 'none' 
          }} 
        />

        {/* Top-Right: OPD Available Live Indicator */}
        <div 
          style={{
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
          }}
        >
          <span 
            style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              backgroundColor: '#22c55e', 
              display: 'inline-block', 
              boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.4)' 
            }} 
          />
          <span>OPD Available</span>
        </div>

        {/* Bottom-Left: Specialty Badge on Vignette (No overlap!) */}
        <div 
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '0.85rem',
            background: photoBadge.bg,
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.71rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
            letterSpacing: '0.02em',
            zIndex: 2,
            maxWidth: 'calc(100% - 1.7rem)'
          }}
        >
          {photoBadge.icon}
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{photoBadge.text}</span>
        </div>
      </div>

      {/* ── 2. Doctor Details Body ── */}
      <div 
        style={{ 
          padding: '1.35rem 1.25rem', 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1,
          gap: '0.75rem'
        }} 
        className="doctor-card-body"
      >
        {/* Name & Title */}
        <div>
          <div 
            style={{ 
              fontSize: '0.74rem', 
              fontWeight: 800, 
              color: 'var(--blue-brand)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              marginBottom: '0.2rem'
            }}
          >
            {doctor.title}
          </div>
          <h3 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 800, 
              color: 'var(--navy-primary)', 
              lineHeight: 1.25, 
              margin: 0 
            }}
          >
            {doctor.name}
          </h3>
        </div>

        {/* Specialization Badge */}
        <div 
          style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: '10px',
            padding: '0.45rem 0.7rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem'
          }}
        >
          <div 
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '6px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Stethoscope size={13} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0369a1', lineHeight: 1.25 }}>
            {doctor.specialization}
          </span>
        </div>

        {/* Qualifications & Experience Tag Strip */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {doctor.experienceYears > 0 && (
            <span 
              style={{ 
                fontSize: '0.71rem', 
                fontWeight: 700, 
                color: '#0369a1', 
                backgroundColor: '#e0f2fe', 
                padding: '0.2rem 0.5rem', 
                borderRadius: '6px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.25rem' 
              }}
            >
              <Award size={12} /> {doctor.experienceYears}+ Yrs Exp
            </span>
          )}
          <span 
            style={{ 
              fontSize: '0.71rem', 
              fontWeight: 600, 
              color: '#475569', 
              backgroundColor: '#f8fafc', 
              padding: '0.2rem 0.5rem', 
              borderRadius: '6px', 
              border: '1px solid #e2e8f0' 
            }}
          >
            🎓 {doctor.qualifications}
          </span>
          <span 
            style={{ 
              fontSize: '0.71rem', 
              fontWeight: 700, 
              color: '#16a34a', 
              backgroundColor: '#dcfce7', 
              padding: '0.2rem 0.5rem', 
              borderRadius: '6px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.2rem' 
            }}
          >
            <ShieldCheck size={12} /> Verified Surgeon
          </span>
        </div>

        {/* Bio Snippet (Desktop Only) */}
        <p 
          className="desktop-only"
          style={{ 
            fontSize: '0.83rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.55, 
            margin: 0, 
            flexGrow: 1 
          }}
        >
          {doctor.bio}
        </p>

        {/* Key Clinical Focus Pills (Desktop Full) */}
        <div className="desktop-only">
          <div 
            style={{ 
              fontSize: '0.68rem', 
              fontWeight: 800, 
              color: 'var(--navy-primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.04em',
              marginBottom: '0.35rem'
            }}
          >
            Key Surgical Focus:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
            {doctor.expertiseList.slice(0, 3).map((item, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '0.71rem',
                  fontWeight: 600,
                  color: '#0369a1',
                  backgroundColor: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  padding: '0.18rem 0.5rem',
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
        </div>

        {/* Compact Clinical Focus on Mobile (Top 2 tags) */}
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
            paddingTop: '0.7rem', 
            borderTop: '1px solid #f1f5f9', 
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}
        >
          <div 
            style={{ 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              color: 'var(--navy-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.3rem' 
            }}
          >
            <MapPin size={12} color="var(--blue-brand)" />
            <span>SOS Centres Available:</span>
          </div>

          <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
            {doctor.centresAvailable.length > 0 ? (
              doctor.centresAvailable.map(centre => (
                <span 
                  key={centre} 
                  style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    color: '#334155', 
                    backgroundColor: '#f1f5f9', 
                    padding: '0.14rem 0.48rem', 
                    borderRadius: '5px', 
                    border: '1px solid #e2e8f0' 
                  }}
                >
                  {centre}
                </span>
              ))
            ) : (
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                All SOS Centres (By Appointment)
              </span>
            )}
          </div>

          <div 
            style={{ 
              fontSize: '0.72rem', 
              color: 'var(--text-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.3rem',
              marginTop: '0.1rem'
            }}
          >
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
            <span>Direct OPD</span>
          </div>
        </div>

        {/* ── 3. Action Button ── */}
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
              fontSize: '0.85rem',
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
          .doctor-card-media {
            width: 100% !important;
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
            min-height: 280px !important;
          }
          .doctor-card-body {
            padding: 1rem 0.95rem !important;
            gap: 0.55rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorCard;
