import React, { useState } from 'react';
import { X, Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO } from '../config/business';

export const WhatsAppFloatButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = `91${BUSINESS_INFO.phone}`;
  const prefilledMessage = encodeURIComponent(
    `Hello ${BUSINESS_INFO.name}! I would like to book a consultation / enquire about your services.`
  );

  return (
    <>
      {/* Right Edge Fixed Social Media Bar (Desktop only) */}
      <div 
        className="fixed-social-media-bar"
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 995,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          alignItems: 'flex-end'
        }}
      >
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61592799181133"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50% 0 0 50%',
            backgroundColor: '#1877F2',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '-2px 4px 12px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            textDecoration: 'none'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateX(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
          title="SOS on Facebook"
        >
          <Facebook size={20} fill="#ffffff" color="#1877F2" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sosorthopaedics/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50% 0 0 50%',
            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '-2px 4px 12px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            textDecoration: 'none'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateX(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
          title="SOS on Instagram"
        >
          <Instagram size={20} color="#ffffff" />
        </a>
      </div>

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <div 
        className="whatsapp-float-container"
        style={{
          position: 'fixed',
          bottom: '1.8rem',
          right: '1.8rem',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem'
        }}
      >
        {/* Tooltip badge (Desktop only) */}
        {showTooltip && (
          <div 
            className="whatsapp-tooltip-badge"
            style={{
              backgroundColor: 'var(--navy-primary)',
              color: '#ffffff',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              maxWidth: '220px',
              animation: 'fadeInUp 0.4s ease'
            }}
          >
            <span>Need quick doctor advice? Chat on WhatsApp!</span>
            <button 
              onClick={() => setShowTooltip(false)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: 0 }}
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* WhatsApp Floating Circle */}
        <a
          href={`https://wa.me/${phone}?text=${prefilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with SOS Orthopedic on WhatsApp"
          className="pulse-glow whatsapp-floating-circle"
          style={{
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            backgroundColor: '#128c7e',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(18, 140, 126, 0.4)',
            transition: 'transform 0.25s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaWhatsapp size={30} className="whatsapp-floating-svg" />
        </a>
      </div>

      <style>{`
        @media (max-width: 767px) {
          /* Hide fixed side social bar on mobile to prevent blocking readable content */
          .fixed-social-media-bar {
            display: none !important;
          }
          /* Hide the WhatsApp tooltip badge on mobile */
          .whatsapp-tooltip-badge {
            display: none !important;
          }
          /* Position floating WhatsApp button comfortably in bottom thumb zone */
          .whatsapp-float-container {
            bottom: 20px !important;
            right: 16px !important;
          }
          .whatsapp-floating-circle {
            width: 52px !important;
            height: 52px !important;
          }
          .whatsapp-floating-svg {
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </>
  );
};
