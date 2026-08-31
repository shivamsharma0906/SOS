import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'full', size = 'md' }) => {
  const isLight = variant === 'light';

  const scaleFactor = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;

  if (variant === 'compact') {
    return (
      <div 
        className="brand-logo-compact" 
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.6rem',
          transform: `scale(${scaleFactor})`,
          transformOrigin: 'left center'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: isLight ? '#ffffff' : 'var(--navy-primary)',
          letterSpacing: '0.05em'
        }}>
          <span>S</span>
          <span style={{ color: isLight ? 'rgba(255,255,255,0.4)' : '#cbd5e1', fontWeight: 300 }}>|</span>
          <span>O</span>
          <span style={{ color: isLight ? 'rgba(255,255,255,0.4)' : '#cbd5e1', fontWeight: 300 }}>|</span>
          <span>S</span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1.1
        }}>
          <span style={{
            fontSize: '0.9rem',
            fontWeight: 800,
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.12em',
            color: isLight ? '#ffffff' : 'var(--navy-primary)'
          }}>SPECIALITY</span>
          <span style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: isLight ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)'
          }}>ORTHOPEDIC CLINIC</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`brand-logo-full ${isLight ? 'is-light' : ''}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0.2rem 0',
        userSelect: 'none',
        transform: `scale(${scaleFactor})`,
        transformOrigin: 'center center'
      }}
    >
      {/* Top S | O | S Lockup */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        fontFamily: 'var(--font-serif)',
        fontSize: '2rem',
        fontWeight: 700,
        color: isLight ? '#ffffff' : 'var(--navy-primary)',
        lineHeight: 1
      }}>
        {/* First S with dots */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>S</span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', marginTop: '-4px', opacity: 0.85 }}>...</span>
        </div>

        <span style={{ color: isLight ? 'rgba(255,255,255,0.3)' : 'rgba(10,31,68,0.25)', fontWeight: 300, fontSize: '2.2rem' }}>|</span>

        {/* Middle O with dashes */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>O</span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', marginTop: '-4px', opacity: 0.85 }}>---</span>
        </div>

        <span style={{ color: isLight ? 'rgba(255,255,255,0.3)' : 'rgba(10,31,68,0.25)', fontWeight: 300, fontSize: '2.2rem' }}>|</span>

        {/* Second S with dots */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>S</span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', marginTop: '-4px', opacity: 0.85 }}>...</span>
        </div>
      </div>

      {/* SPECIALITY Title */}
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.4rem',
        fontWeight: 700,
        letterSpacing: '0.28em',
        color: isLight ? '#ffffff' : 'var(--navy-primary)',
        marginTop: '0.25rem',
        textTransform: 'uppercase'
      }}>
        SPECIALITY
      </div>

      {/* — ORTHOPEDIC CLINIC — */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.2em',
        color: isLight ? 'rgba(255,255,255,0.85)' : '#64748b',
        textTransform: 'uppercase',
        marginTop: '0.15rem'
      }}>
        <span style={{ height: '1px', width: '16px', backgroundColor: isLight ? 'rgba(255,255,255,0.4)' : '#94a3b8' }}></span>
        <span>ORTHOPEDIC CLINIC</span>
        <span style={{ height: '1px', width: '16px', backgroundColor: isLight ? 'rgba(255,255,255,0.4)' : '#94a3b8' }}></span>
      </div>

      {/* — COMPLETE ORTHOPEDIC CARE — */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        letterSpacing: '0.22em',
        color: isLight ? '#bae6fd' : 'var(--navy-primary)',
        textTransform: 'uppercase',
        marginTop: '0.2rem',
        borderTop: `1px solid ${isLight ? 'rgba(255,255,255,0.2)' : 'rgba(10,31,68,0.15)'}`,
        borderBottom: `1px solid ${isLight ? 'rgba(255,255,255,0.2)' : 'rgba(10,31,68,0.15)'}`,
        padding: '0.15rem 0.6rem'
      }}>
        <span>COMPLETE ORTHOPEDIC CARE</span>
      </div>
    </div>
  );
};
