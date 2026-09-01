import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Centre } from '../data/centres';

interface CentreCardProps {
  centre: Centre;
}

export const CentreCard: React.FC<CentreCardProps> = ({ centre }) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'map'>('photo');
  const isOutreach = centre.type === 'outreach-clinic';
  const isUpcoming = centre.status === 'opening-soon';

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(`${centre.name} ${centre.address}`)}`;

  return (
    <div
      className="centre-location-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: isOutreach ? '1.5px solid rgba(217, 119, 6, 0.25)' : '1px solid rgba(10, 31, 68, 0.08)',
        boxShadow: '0 6px 20px rgba(10, 31, 68, 0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 18px 38px rgba(10, 31, 68, 0.12)';
        e.currentTarget.style.borderColor = isOutreach ? 'rgba(217, 119, 6, 0.6)' : 'rgba(2, 132, 199, 0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(10, 31, 68, 0.05)';
        e.currentTarget.style.borderColor = isOutreach ? 'rgba(217, 119, 6, 0.25)' : 'rgba(10, 31, 68, 0.08)';
      }}
    >
      {/* ── 1. Header: Photo or Map with Interactive Toggle ── */}
      <div style={{ position: 'relative', height: '195px', backgroundColor: 'var(--navy-dark)', overflow: 'hidden' }} className="centre-media-box">
        {activeTab === 'photo' ? (
          <img
            src={centre.photoUrl}
            alt={`${centre.name} - Orthopedic Clinic & Diagnostic Facility in ${centre.area}, Mumbai`}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallbackTried) {
                target.dataset.fallbackTried = 'true';
                target.src = '/assets/centre-kandivali.png';
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.92)',
              display: 'block',
              transition: 'transform 0.4s ease'
            }}
            loading="lazy"
          />
        ) : (
          <iframe
            src={centre.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Google Map for SOS ${centre.name}`}
          />
        )}

        {/* Soft bottom vignette overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 46, 0.4) 0%, transparent 40%)', pointerEvents: 'none' }} />

        {/* Top-Left: Centre / Outreach Type Badge */}
        <div style={{
          position: 'absolute',
          top: '0.65rem',
          left: '0.65rem',
          backgroundColor: isOutreach ? 'rgba(217, 119, 6, 0.95)' : 'rgba(7, 21, 46, 0.88)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '0.25rem 0.65rem',
          borderRadius: '9999px',
          fontSize: '0.7rem',
          fontWeight: 800,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          zIndex: 2
        }}>
          <MapPin size={11} />
          <span>{isOutreach ? 'Outreach Clinic' : `${centre.area} Centre`}</span>
        </div>

        {/* Top-Right: Operational Status Badge */}
        <div style={{
          position: 'absolute',
          top: '0.65rem',
          right: '0.65rem',
          backgroundColor: isUpcoming ? 'rgba(217, 119, 6, 0.95)' : (isOutreach ? 'rgba(2, 132, 199, 0.95)' : 'rgba(7, 21, 46, 0.88)'),
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
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 2
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isUpcoming ? '#fbbf24' : '#22c55e', display: 'inline-block', boxShadow: `0 0 0 2px ${isUpcoming ? 'rgba(251, 191, 36, 0.35)' : 'rgba(34, 197, 94, 0.35)'}` }} />
          <span>{isUpcoming ? 'Opening Soon' : (isOutreach ? 'By Appointment' : 'OPD Open Today')}</span>
        </div>

        {/* Photo / Map Toggle Button Bar */}
        <div style={{
          position: 'absolute',
          bottom: '0.55rem',
          right: '0.55rem',
          display: 'flex',
          gap: '0.2rem',
          backgroundColor: 'rgba(7, 21, 46, 0.88)',
          backdropFilter: 'blur(8px)',
          padding: '0.2rem',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          zIndex: 2
        }}>
          <button
            onClick={() => setActiveTab('photo')}
            style={{
              padding: '0.2rem 0.55rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.68rem',
              fontWeight: 800,
              cursor: 'pointer',
              backgroundColor: activeTab === 'photo' ? '#ffffff' : 'transparent',
              color: activeTab === 'photo' ? 'var(--navy-primary)' : '#ffffff',
              transition: 'all 0.15s ease'
            }}
          >
            📷 Photo
          </button>
          <button
            onClick={() => setActiveTab('map')}
            style={{
              padding: '0.2rem 0.55rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.68rem',
              fontWeight: 800,
              cursor: 'pointer',
              backgroundColor: activeTab === 'map' ? '#ffffff' : 'transparent',
              color: activeTab === 'map' ? 'var(--navy-primary)' : '#ffffff',
              transition: 'all 0.15s ease'
            }}
          >
            🗺️ Map
          </button>
        </div>
      </div>

      {/* ── 2. Centre Details Body ── */}
      <div style={{ padding: '1.25rem 1.15rem 1.15rem 1.15rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }} className="centre-card-body">
        
        {/* Title & Google Rating Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '0.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-primary)', lineHeight: 1.25, fontWeight: 800, margin: '0 0 0.15rem 0' }}>
              {centre.name}
            </h3>
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--blue-brand)' }}>
              SOS {centre.area} Branch
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#fef3c7', border: '1px solid #fde68a', padding: '0.2rem 0.45rem', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800, color: '#b45309', flexShrink: 0 }}>
            <Star size={11} fill="#b45309" color="#b45309" />
            <span>{centre.googleRating % 1 === 0 ? `${centre.googleRating}.0` : centre.googleRating}</span>
            <span style={{ fontSize: '0.66rem', color: '#92400e', fontWeight: 600 }}>({centre.reviewsCount})</span>
          </div>
        </div>

        {/* Address & Landmark */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.45 }}>
          <MapPin size={13} color="var(--blue-brand)" style={{ marginTop: '3px', flexShrink: 0 }} />
          <div>
            <span>{centre.address}</span>
            {centre.landmark && (
              <div style={{ fontSize: '0.73rem', color: 'var(--navy-primary)', fontWeight: 700, marginTop: '0.1rem' }}>
                📍 Landmark: {centre.landmark}
              </div>
            )}
          </div>
        </div>

        {/* Timings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          <Clock size={12} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
          <span>{centre.timings}</span>
        </div>

        {/* Clinical Features Chips */}
        <div className="centre-features-row" style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {centre.features.slice(0, 3).map((feat, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--navy-primary)',
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                padding: '0.15rem 0.45rem',
                borderRadius: '5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem'
              }}
            >
              <CheckCircle2 size={10} color="var(--blue-brand)" /> {feat}
            </span>
          ))}
        </div>

        {/* ── 3. Dual Action Buttons ── */}
        <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.45rem' }}>
          <a
            href={`tel:${centre.phone}`}
            className="btn btn-primary btn-sm"
            style={{
              justifyContent: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              padding: '0.55rem 0.45rem',
              borderRadius: '9999px',
              fontWeight: 800
            }}
          >
            <Phone size={12} /> {isUpcoming ? 'Enquire Desk' : 'Call Desk'}
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{
              justifyContent: 'center',
              gap: '0.3rem',
              fontSize: '0.78rem',
              padding: '0.55rem 0.45rem',
              borderRadius: '9999px',
              fontWeight: 700
            }}
          >
            <ExternalLink size={12} /> Directions
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .centre-card-body {
            padding: 1.15rem 1rem !important;
          }
          .centre-media-box {
            height: 165px !important;
          }
        }
      `}</style>
    </div>
  );
};
