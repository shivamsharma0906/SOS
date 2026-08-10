import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Calendar } from 'lucide-react';
import { Centre } from '../data/centres';
import { AppointmentModal } from './AppointmentModal';
import { FaWhatsapp } from 'react-icons/fa';

interface CentreCardProps {
  centre: Centre;
}

export const CentreCard: React.FC<CentreCardProps> = ({ centre }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'photo' | 'map'>('photo');

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
      {/* Header: Photo or Map with Toggle */}
      <div style={{ position: 'relative', height: '210px', backgroundColor: 'var(--navy-dark)', overflow: 'hidden' }}>
        {activeTab === 'photo' ? (
          <img
            src={centre.photoUrl}
            alt={centre.name}
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

        {/* Location Badge */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          backgroundColor: 'var(--navy-primary)',
          color: '#ffffff',
          padding: '0.35rem 0.8rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.78rem',
          fontWeight: 700,
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem'
        }}>
          📍 {centre.area} Centre
        </div>

        {/* Open Status Tag */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          backgroundColor: '#22c55e',
          color: '#ffffff',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.72rem',
          fontWeight: 800,
          boxShadow: 'var(--shadow-sm)'
        }}>
          ● Open Now
        </div>

        {/* Photo / Map Toggle Button Bar */}
        <div style={{
          position: 'absolute',
          bottom: '0.6rem',
          right: '0.6rem',
          display: 'flex',
          gap: '0.3rem',
          backgroundColor: 'rgba(10, 31, 68, 0.85)',
          backdropFilter: 'blur(4px)',
          padding: '0.25rem',
          borderRadius: 'var(--radius-pill)'
        }}>
          <button
            onClick={() => setActiveTab('photo')}
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'photo' ? '#ffffff' : 'transparent',
              color: activeTab === 'photo' ? 'var(--navy-primary)' : '#ffffff'
            }}
          >
            📷 Clinic View
          </button>
          <button
            onClick={() => setActiveTab('map')}
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: activeTab === 'map' ? '#ffffff' : 'transparent',
              color: activeTab === 'map' ? 'var(--navy-primary)' : '#ffffff'
            }}
          >
            🗺️ Map View
          </button>
        </div>
      </div>

      {/* Centre Details */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
          <h3 className="heading-sm" style={{ fontSize: '1.25rem', color: 'var(--navy-primary)' }}>
            {centre.name}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', backgroundColor: '#fef3c7', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#b45309' }}>
            <Star size={13} fill="#b45309" color="#b45309" />
            <span>{centre.googleRating} ({centre.reviewsCount})</span>
          </div>
        </div>

        {/* Address & Landmark */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
          <MapPin size={16} color="var(--navy-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
          <div>
            <span>{centre.address}</span>
            <div style={{ fontSize: '0.8rem', color: 'var(--navy-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
              Ref: {centre.landmark}
            </div>
          </div>
        </div>

        {/* Timings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
          <Clock size={16} color="var(--navy-primary)" style={{ flexShrink: 0 }} />
          <span>{centre.timings}</span>
        </div>

        {/* Features Chips */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {centre.features.map((feat, idx) => (
            <span 
              key={idx} 
              style={{
                fontSize: '0.76rem',
                fontWeight: 600,
                color: 'var(--navy-primary)',
                backgroundColor: 'var(--blue-soft)',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px'
              }}
            >
              ✓ {feat}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <Calendar size={15} /> Book Appointment at {centre.area}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', fontSize: '0.8rem', fontWeight: 600 }}>
            <a
              href={`tel:${centre.phone}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--navy-primary)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--blue-brand)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--navy-primary)'}
            >
              <Phone size={13} color="var(--blue-brand)" /> Call Clinic
            </a>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <a
              href={`https://wa.me/${centre.whatsapp}?text=Hello%20SOS%20${centre.area}%20Centre,%20I%20would%20like%20to%20enquire%20about%20a%20doctor%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#16a34a', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <FaWhatsapp size={13} /> Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCentre={centre.id}
      />
    </div>
  );
};
