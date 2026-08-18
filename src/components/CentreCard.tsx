import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { Centre } from '../data/centres';

interface CentreCardProps {
  centre: Centre;
}

export const CentreCard: React.FC<CentreCardProps> = ({ centre }) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'map'>('photo');
  const isOutreach = centre.type === 'outreach-clinic';

  return (
    <div
      className="centre-location-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        border: isOutreach ? '1.5px solid rgba(217, 119, 6, 0.3)' : '1px solid rgba(10, 31, 68, 0.06)',
        boxShadow: '0 8px 24px rgba(10, 31, 68, 0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 32px rgba(10, 31, 68, 0.1)';
        e.currentTarget.style.borderColor = isOutreach ? 'rgba(217, 119, 6, 0.6)' : 'rgba(2, 132, 199, 0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.06)';
        e.currentTarget.style.borderColor = isOutreach ? 'rgba(217, 119, 6, 0.3)' : 'rgba(10, 31, 68, 0.06)';
      }}
    >
      {/* Header: Photo or Map with Toggle */}
      <div style={{ position: 'relative', height: '190px', backgroundColor: 'var(--navy-dark)', overflow: 'hidden' }} className="centre-media-box">
        {activeTab === 'photo' ? (
          <img
            src={centre.photoUrl}
            alt={centre.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.style.background = isOutreach 
                  ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' 
                  : 'linear-gradient(135deg, #07152e 0%, #0a1f44 100%)';
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.92)'
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

        {/* Centre / Outreach Type Badge */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          backgroundColor: isOutreach ? '#d97706' : 'var(--navy-primary)',
          color: '#ffffff',
          padding: '0.3rem 0.75rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.74rem',
          fontWeight: 700,
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          {isOutreach ? '🏥 Outreach Clinic' : `📍 ${centre.area} Centre`}
        </div>

        {/* Status Tag */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          backgroundColor: isOutreach ? '#3b82f6' : '#22c55e',
          color: '#ffffff',
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.7rem',
          fontWeight: 800,
          boxShadow: 'var(--shadow-sm)'
        }}>
          {isOutreach ? '📅 By Appt' : '● Open Today'}
        </div>

        {/* Photo / Map Toggle Button Bar */}
        <div style={{
          position: 'absolute',
          bottom: '0.5rem',
          right: '0.5rem',
          display: 'flex',
          gap: '0.25rem',
          backgroundColor: 'rgba(10, 31, 68, 0.85)',
          backdropFilter: 'blur(4px)',
          padding: '0.2rem',
          borderRadius: 'var(--radius-pill)'
        }}>
          <button
            onClick={() => setActiveTab('photo')}
            style={{
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              fontSize: '0.7rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'photo' ? '#ffffff' : 'transparent',
              color: activeTab === 'photo' ? 'var(--navy-primary)' : '#ffffff'
            }}
          >
            📷 View
          </button>
          <button
            onClick={() => setActiveTab('map')}
            style={{
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              fontSize: '0.7rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'map' ? '#ffffff' : 'transparent',
              color: activeTab === 'map' ? 'var(--navy-primary)' : '#ffffff'
            }}
          >
            🗺️ Map
          </button>
        </div>
      </div>

      {/* Centre Details */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }} className="centre-card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '0.5rem' }}>
          <div>
            <h3 className="heading-sm" style={{ fontSize: '1.15rem', color: 'var(--navy-primary)', lineHeight: 1.3 }}>
              {centre.name}
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', backgroundColor: '#fef3c7', padding: '0.15rem 0.45rem', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, color: '#b45309', flexShrink: 0 }}>
            <Star size={12} fill="#b45309" color="#b45309" />
            <span>{centre.googleRating}</span>
          </div>
        </div>

        {/* Address & Landmark */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          <MapPin size={15} color="var(--navy-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
          <div>
            <span>{centre.address}</span>
            {centre.landmark && (
              <div style={{ fontSize: '0.76rem', color: 'var(--navy-primary)', fontWeight: 600, marginTop: '0.1rem' }}>
                Area: {centre.landmark}
              </div>
            )}
          </div>
        </div>

        {/* Timings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
          <Clock size={14} color="var(--navy-primary)" style={{ flexShrink: 0 }} />
          <span>{centre.timings}</span>
        </div>

        {/* Features Chips */}
        <div className="centre-features-row" style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {centre.features.slice(0, 3).map((feat, idx) => (
            <span 
              key={idx} 
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--navy-primary)',
                backgroundColor: 'var(--blue-soft)',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px'
              }}
            >
              ✓ {feat}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a
            href={`tel:${centre.phone}`}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', justifyContent: 'center', gap: '0.4rem' }}
          >
            <Phone size={14} /> Call {centre.area} Desk: {centre.phone}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .centre-card-body {
            padding: 1.25rem 1.1rem !important;
          }
          .centre-media-box {
            height: 160px !important;
          }
        }
      `}</style>
    </div>
  );
};
