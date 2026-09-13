import React, { useState } from 'react';
import { Star, ShieldCheck, Stethoscope, CornerDownRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Testimonial } from '../data/testimonials';
import { GoogleIcon } from './GoogleIcon';

interface ReviewCardProps {
  review: Testimonial;
}

const getAvatarTheme = (name: string) => {
  const themes = [
    { bg: '#e0f2fe', text: '#0284c7' }, // Ocean Blue
    { bg: '#dcfce7', text: '#16a34a' }, // Emerald
    { bg: '#f3e8ff', text: '#7c3aed' }, // Purple
    { bg: '#fef3c7', text: '#d97706' }, // Amber
    { bg: '#fee2e2', text: '#dc2626' }, // Rose
    { bg: '#ccfbf1', text: '#0d9488' }, // Teal
    { bg: '#e0e7ff', text: '#4338ca' }  // Indigo
  ];
  const charCode = name.charCodeAt(0) || 0;
  return themes[charCode % themes.length];
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = getAvatarTheme(review.patientName);
  const initial = review.patientName.charAt(0).toUpperCase() || 'P';

  const isLongComment = review.comment.length > 200;
  const displayComment = isLongComment && !isExpanded
    ? `${review.comment.slice(0, 195)}...`
    : review.comment;

  return (
    <div
      className="review-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        border: '1px solid rgba(10, 31, 68, 0.08)',
        boxShadow: '0 4px 18px rgba(10, 31, 68, 0.04)',
        padding: '1.45rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        height: '100%',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease',
        position: 'relative'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 14px 32px rgba(2, 132, 199, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(10, 31, 68, 0.04)';
        e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
      }}
    >
      {/* ── 1. Header: Avatar, Reviewer Info, Google Source ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Reviewer Initial Avatar */}
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: theme.bg,
              color: theme.text,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.15rem',
              flexShrink: 0,
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              border: `1px solid ${theme.text}25`
            }}
          >
            {initial}
          </div>

          <div>
            <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0, lineHeight: 1.25 }}>
              {review.patientName}
            </h4>
            
            {/* Star Rating + TimeAgo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={i < review.rating ? '#f59e0b' : 'none'}
                    color={i < review.rating ? '#f59e0b' : '#cbd5e1'}
                  />
                ))}
              </div>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>
                • {review.timeAgo}
              </span>
            </div>
          </div>
        </div>

        {/* Google Review Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            padding: '0.22rem 0.55rem',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#475569',
            flexShrink: 0
          }}
        >
          <GoogleIcon size={13} />
          <span>Google</span>
        </div>
      </div>

      {/* ── 2. Tag & Badges Strip ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
        {review.isLocalGuide && (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: '#b45309',
              backgroundColor: '#fef3c7',
              border: '1px solid #fde68a',
              padding: '0.15rem 0.5rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            ★ Local Guide
          </span>
        )}

        {review.hasPhotos && (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: '#0369a1',
              backgroundColor: '#e0f2fe',
              border: '1px solid #bae6fd',
              padding: '0.15rem 0.5rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            📷 {review.photosCount && review.photosCount > 1 ? `${review.photosCount} photos` : 'Photo'}
          </span>
        )}

        {review.verified && (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: '#15803d',
              backgroundColor: '#dcfce7',
              border: '1px solid #bbf7d0',
              padding: '0.15rem 0.5rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <ShieldCheck size={11} /> Verified
          </span>
        )}

        {/* Treatment Tag */}
        {review.treatment && (
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'var(--blue-brand)',
              backgroundColor: 'var(--blue-soft)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              padding: '0.18rem 0.55rem',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Stethoscope size={11} />
            {review.treatment}
          </span>
        )}
      </div>

      {/* ── 3. Review Comment ── */}
      <div style={{ flexGrow: 1 }}>
        <p style={{ 
          fontSize: '0.88rem', 
          color: '#334155', 
          lineHeight: 1.6, 
          margin: 0,
          fontStyle: 'normal'
        }}>
          "{displayComment}"
        </p>

        {isLongComment && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.3rem 0 0 0',
              color: 'var(--blue-brand)',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <span>{isExpanded ? 'Show less' : 'Read more'}</span>
            {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        )}
      </div>

      {/* ── 4. Nested Owner Response (if available) ── */}
      {review.ownerResponse && (
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderLeft: '3px solid var(--blue-brand)',
            borderRadius: '10px',
            padding: '0.85rem 0.95rem',
            fontSize: '0.8rem',
            lineHeight: 1.5,
            color: '#475569',
            marginTop: '0.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.35rem' }}>
            <div style={{ 
              fontWeight: 800, 
              color: 'var(--navy-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              fontSize: '0.74rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap'
            }}>
              <CornerDownRight size={13} color="var(--blue-brand)" /> Response from the owner
            </div>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {review.ownerResponse.timeAgo}
            </span>
          </div>
          <p style={{ margin: 0, color: '#475569', fontSize: '0.79rem' }}>
            {review.ownerResponse.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
