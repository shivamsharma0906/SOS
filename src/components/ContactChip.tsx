import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

interface ContactChipProps {
  phone?: string;
  email?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ContactChip: React.FC<ContactChipProps> = ({
  phone = BUSINESS_INFO.phone,
  email = BUSINESS_INFO.email,
  className = '',
  size = 'md'
}) => {
  const padding = size === 'sm' ? '0.35rem 0.9rem' : size === 'lg' ? '0.75rem 1.6rem' : '0.5rem 1.25rem';
  const fontSize = size === 'sm' ? '0.82rem' : size === 'lg' ? '1.05rem' : '0.92rem';
  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

  return (
    <>
      <div 
        className={`contact-chip desktop-only ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: size === 'sm' ? '0.75rem' : '1.1rem',
          padding,
          backgroundColor: '#ffffff',
          border: '1.5px solid rgba(10, 31, 68, 0.25)',
          borderRadius: '9999px',
          boxShadow: '0 2px 8px rgba(10, 31, 68, 0.08)'
        }}
      >
        <a 
          href={`tel:${phone}`} 
          className="contact-chip-item"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize,
            fontWeight: 700,
            color: 'var(--navy-primary)',
            transition: 'color 0.2s ease'
          }}
          title="Call SOS Helpline"
        >
          <div style={{
            width: iconSize + 8,
            height: iconSize + 8,
            borderRadius: '50%',
            backgroundColor: 'var(--blue-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--navy-primary)'
          }}>
            <Phone size={iconSize} />
          </div>
          <span>{phone}</span>
        </a>

        <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(10, 31, 68, 0.2)' }} />

        <a 
          href={`mailto:${email}`} 
          className="contact-chip-item"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize,
            fontWeight: 600,
            color: 'var(--navy-primary)',
            transition: 'color 0.2s ease'
          }}
          title="Email SOS Official"
        >
          <div style={{
            width: iconSize + 8,
            height: iconSize + 8,
            borderRadius: '50%',
            backgroundColor: 'var(--blue-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--navy-primary)'
          }}>
            <Mail size={iconSize} />
          </div>
          <span>{email}</span>
        </a>
      </div>

      <div 
        className={`contact-chip mobile-only ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '0.65rem',
          padding: '0.8rem 1.1rem',
          backgroundColor: '#ffffff',
          border: '1.5px solid rgba(10, 31, 68, 0.25)',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(10, 31, 68, 0.08)',
          width: '100%',
          maxWidth: '340px'
        }}
      >
        <a 
          href={`tel:${phone}`} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--navy-primary)'
          }}
        >
          <div style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'var(--blue-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Phone size={13} />
          </div>
          <span>Call Support: {phone}</span>
        </a>

        <div style={{ height: '1px', backgroundColor: 'rgba(10, 31, 68, 0.1)' }} />

        <a 
          href={`mailto:${email}`} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--navy-primary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'var(--blue-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={13} />
          </div>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{email}</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .contact-chip.desktop-only { display: none !important; }
          .contact-chip.mobile-only { display: flex !important; }
        }
        @media (min-width: 577px) {
          .contact-chip.desktop-only { display: inline-flex !important; }
          .contact-chip.mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
};
