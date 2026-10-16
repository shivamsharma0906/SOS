import React from 'react';
import { Star, ExternalLink, MapPin, CheckCircle2 } from 'lucide-react';
import { GoogleIcon } from './GoogleIcon';
import { googleReviewsSummary } from '../data/testimonials';

interface GoogleRatingSummaryCardProps {
  style?: React.CSSProperties;
}

export const GoogleRatingSummaryCard: React.FC<GoogleRatingSummaryCardProps> = ({ style }) => {
  return (
    <div
      className="google-rating-summary-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid rgba(10, 31, 68, 0.09)',
        boxShadow: '0 8px 30px rgba(10, 31, 68, 0.05)',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        ...style
      }}
    >
      {/* ── 1. Google Business Header ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem', gap: '0.65rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              flexShrink: 0
            }}
          >
            <GoogleIcon size={24} />
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Google Business Profile
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0.1rem 0 0 0', lineHeight: 1.25, wordBreak: 'break-word' }}>
              {googleReviewsSummary.placeName}
            </h3>
            <div style={{ fontSize: '0.74rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.2rem' }}>
              <MapPin size={11} color="var(--blue-brand)" /> {googleReviewsSummary.location}
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          padding: '0.25rem 0.65rem',
          borderRadius: '9999px',
          fontSize: '0.72rem',
          fontWeight: 800,
          color: '#16a34a',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>
          <CheckCircle2 size={12} />
          <span>Verified 4.5+</span>
        </div>
      </div>

      {/* ── 2. Rating Score & Big Stars ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--navy-primary)', lineHeight: 1 }}>
            4.5+
          </div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', marginTop: '0.25rem' }}>
            out of 5.0
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flexGrow: 1 }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
            4.5+★ Top-Rated Patient Experience
          </div>
          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
            Based on authentic patient reviews on Google
          </div>
        </div>
      </div>

      {/* ── 3. Patient Trust Highlights ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', backgroundColor: '#f8fafc', padding: '0.95rem 1.1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.76rem', color: '#334155', fontWeight: 700 }}>
          <CheckCircle2 size={14} color="#16a34a" />
          <span>Consistent 4.5+ Patient Satisfaction</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.76rem', color: '#475569', fontWeight: 600 }}>
          <CheckCircle2 size={14} color="#16a34a" />
          <span>Direct Consultant Orthopedic Evaluations</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.76rem', color: '#475569', fontWeight: 600 }}>
          <CheckCircle2 size={14} color="#16a34a" />
          <span>In-House Immediate Digital Radiography</span>
        </div>
      </div>

      {/* ── 4. Write a Review CTA ── */}
      <a
        href={googleReviewsSummary.writeReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{
          width: '100%',
          justifyContent: 'center',
          gap: '0.45rem',
          padding: '0.7rem 1rem',
          borderRadius: '9999px',
          fontWeight: 800,
          fontSize: '0.86rem',
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          boxShadow: '0 4px 14px rgba(2, 132, 199, 0.28)'
        }}
      >
        <GoogleIcon size={16} />
        <span>Write a Review on Google</span>
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default GoogleRatingSummaryCard;
