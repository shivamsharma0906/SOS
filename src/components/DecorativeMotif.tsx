import React from 'react';

export const MedicalCrossMotif: React.FC<{ size?: number; top?: string; left?: string; right?: string; bottom?: string; opacity?: number }> = ({
  size = 40,
  top,
  left,
  right,
  bottom,
  opacity = 0.08
}) => {
  return (
    <div 
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path 
          d="M38 10 H62 V38 H90 V62 H62 V90 H38 V62 H10 V38 H38 Z" 
          stroke="var(--navy-primary)" 
          strokeWidth="6" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

export const BlobCurveAccent: React.FC<{ position: 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  if (position === 'top-right') {
    return (
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '380px',
          height: '240px',
          background: 'var(--navy-primary)',
          borderBottomLeftRadius: '100% 120%',
          opacity: 0.95,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    );
  }
  if (position === 'bottom-left') {
    return (
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '320px',
          height: '200px',
          background: 'var(--navy-accent)',
          borderTopRightRadius: '120% 100%',
          opacity: 0.95,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    );
  }
  return (
    <div 
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '340px',
        height: '220px',
        background: 'var(--navy-dark)',
        borderTopLeftRadius: '110% 90%',
        opacity: 0.95,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};
