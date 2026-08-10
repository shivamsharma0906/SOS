import React from 'react';
import { Activity, Bone, Disc, Shield, Zap, Sparkles } from 'lucide-react';

interface HexBadgeProps {
  iconName: 'xray' | 'bone' | 'joint' | 'spine' | 'sports';
  size?: number;
  active?: boolean;
}

export const HexBadge: React.FC<HexBadgeProps> = ({ iconName, size = 48, active = false }) => {
  const getIcon = () => {
    const iconSize = Math.round(size * 0.48);
    switch (iconName) {
      case 'xray':
        return <Activity size={iconSize} strokeWidth={2.2} color="#ffffff" />;
      case 'bone':
        return <Bone size={iconSize} strokeWidth={2.2} color="#ffffff" />;
      case 'joint':
        return <Disc size={iconSize} strokeWidth={2.2} color="#ffffff" />;
      case 'spine':
        return <Sparkles size={iconSize} strokeWidth={2.2} color="#ffffff" />;
      case 'sports':
        return <Zap size={iconSize} strokeWidth={2.2} color="#ffffff" />;
      default:
        return <Shield size={iconSize} strokeWidth={2.2} color="#ffffff" />;
    }
  };

  return (
    <div 
      className="hex-badge-container" 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        filter: active ? 'drop-shadow(0 6px 12px rgba(10,31,68,0.3))' : 'drop-shadow(0 2px 6px rgba(10,31,68,0.15))',
        transition: 'transform 0.25s ease, filter 0.25s ease'
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        width={size} 
        height={size} 
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Hexagon Path */}
        <polygon 
          points="50,3 93,25 93,75 50,97 7,75 7,25" 
          fill={active ? 'var(--navy-accent)' : 'var(--navy-primary)'} 
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
        />
      </svg>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {getIcon()}
      </div>
    </div>
  );
};
