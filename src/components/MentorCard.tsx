import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Stethoscope, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { Mentor } from '../data/mentors';

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback initial avatar if image fails to load
  const initials = mentor.name
    .replace(/^Dr\.\s+/i, '')
    .split(' ')
    .map(n => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');

  // Extract individual qualification highlights cleanly
  const qualList = mentor.qualifications
    .split(/[,;]/)
    .map(q => q.trim())
    .filter(Boolean);

  const primaryQuals = qualList.slice(0, 3);
  const remainingCount = qualList.length - 3;

  return (
    <div
      className="hospital-mentor-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid rgba(10, 31, 68, 0.09)',
        boxShadow: '0 6px 24px rgba(10, 31, 68, 0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 18px 40px rgba(2, 132, 199, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(10, 31, 68, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.09)';
      }}
    >
      {/* ── 1. Mentor Portrait Frame with Academic Crest ── */}
      <div 
        style={{ 
          position: 'relative', 
          height: '245px', 
          backgroundColor: '#0a1f44', 
          overflow: 'hidden' 
        }} 
        className="mentor-card-media"
      >
        {!imgError && mentor.photoUrl ? (
          <img
            src={mentor.photoUrl}
            alt={`${mentor.name}, ${mentor.title}`}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              display: 'block',
              transition: 'transform 0.4s ease'
            }}
            loading="lazy"
          />
        ) : (
          /* Prestigious Academic Medical Seal Fallback */
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'radial-gradient(circle at 50% 30%, #0369a1 0%, #0a1f44 100%)', 
              color: '#ffffff',
              padding: '1.5rem',
              position: 'relative'
            }}
          >
            {/* Subtle background crest accent */}
            <div 
              style={{
                position: 'absolute',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 255, 255, 0.15)',
                pointerEvents: 'none'
              }}
            />

            <div 
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.65rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <GraduationCap size={28} color="#93c5fd" />
            </div>

            <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              {initials || 'SOS'}
            </span>
            <span style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
              Faculty & Mentor
            </span>
          </div>
        )}

        {/* Soft bottom vignette overlay */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, rgba(7, 21, 46, 0.4) 0%, transparent 50%)', 
            pointerEvents: 'none' 
          }} 
        />

        {/* Top-Right: Academic Status Badge */}
        <div style={{
          position: 'absolute',
          top: '0.7rem',
          right: '0.7rem',
          backgroundColor: 'rgba(7, 21, 46, 0.88)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '0.28rem 0.7rem',
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
          <ShieldCheck size={12} color="#38bdf8" />
          <span>Surgical Faculty</span>
        </div>

        {/* Bottom-Left: Global Fellowship Tag (matching DoctorCard & ConsultantCard layout) */}
        <div style={{
          position: 'absolute',
          bottom: '0.85rem',
          left: '0.85rem',
          background: 'linear-gradient(135deg, rgba(10, 31, 68, 0.94) 0%, rgba(2, 132, 199, 0.95) 100%)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '0.3rem 0.72rem',
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
        }}>
          <Globe size={12} color="#38bdf8" style={{ flexShrink: 0 }} />
          <span>Global Fellow</span>
        </div>
      </div>

      {/* ── 2. Mentor Details Body ── */}
      <div 
        style={{ 
          padding: '1.35rem 1.25rem', 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1,
          gap: '0.75rem'
        }} 
        className="mentor-card-body"
      >
        {/* Mentor Name & Title */}
        <div>
          <h3 style={{ 
            fontSize: '1.24rem', 
            fontWeight: 800, 
            color: 'var(--navy-primary)', 
            lineHeight: 1.25, 
            margin: '0 0 0.2rem 0' 
          }}>
            {mentor.name}
          </h3>
          <div style={{ 
            fontSize: '0.76rem', 
            fontWeight: 700, 
            color: 'var(--blue-brand)', 
            lineHeight: 1.35 
          }}>
            {mentor.title}
          </div>
        </div>

        {/* Qualifications Pill Box */}
        <div 
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '0.65rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem'
          }}
        >
          <div style={{ 
            fontSize: '0.68rem', 
            fontWeight: 800, 
            color: '#475569', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <Award size={12} color="var(--blue-brand)" />
            <span>Key Credentials & Fellowships:</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
            {primaryQuals.map((qual, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  padding: '0.18rem 0.45rem',
                  borderRadius: '5px'
                }}
              >
                {qual}
              </span>
            ))}
            {remainingCount > 0 && (
              <span 
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--blue-brand)',
                  backgroundColor: '#e0f2fe',
                  padding: '0.18rem 0.45rem',
                  borderRadius: '5px'
                }}
              >
                +{remainingCount} more
              </span>
            )}
          </div>
        </div>

        {/* Bio Snippet */}
        <p style={{ 
          fontSize: '0.83rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.55, 
          margin: 0, 
          flexGrow: 1 
        }}>
          {mentor.bio}
        </p>

        {/* Action Link: View Profile & Consult */}
        <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
          <Link
            to="/doctors"
            className="btn btn-secondary"
            style={{
              width: '100%',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.6rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              backgroundColor: '#f0f9ff',
              color: '#0369a1',
              border: '1px solid #bae6fd',
              transition: 'all 0.2s ease'
            }}
          >
            <Stethoscope size={13} />
            <span>View Doctor Profile & OPD</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mentor-card-media {
            width: 100% !important;
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
            min-height: 280px !important;
          }
          .mentor-card-body {
            padding: 1.15rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MentorCard;
