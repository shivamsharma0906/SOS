import React, { useState } from 'react';
import { Clock, Zap, Home, ShieldCheck, Phone, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface AdvantageCard {
  id: string;
  icon: React.ReactNode;
  tag: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  highlights: string[];
}

const advantages: AdvantageCard[] = [
  {
    id: 'opd-access',
    icon: <Clock size={22} color="var(--blue-brand)" />,
    tag: 'Daily OPD Access',
    metric: '8 AM – 10 PM',
    metricLabel: '14-Hour Daily Surgeon OPD',
    title: 'Extended Surgeon Availability',
    description: 'Direct consultant orthopedic surgeon consultations, same-day follow-ups, and scheduled OPD across our centre network.',
    highlights: ['Minimal clinic wait times', 'Direct senior doctor consultation', 'Sunday OPD slots available']
  },
  {
    id: 'rapid-response',
    icon: <Zap size={22} color="#0284c7" />,
    tag: 'Rapid Triage',
    metric: '20–30 Min',
    metricLabel: 'Emergency Mobile Response',
    title: 'Rapid Trauma & Fracture Response',
    description: 'Fast-track clinical triage and emergency specialist response for acute limb trauma, dislocations, and sports injuries.',
    highlights: ['Immediate fracture triage', 'Acute pain relief protocols', 'Direct doctor guidance']
  },
  {
    id: 'home-suite',
    icon: <Home size={22} color="#059669" />,
    tag: 'Doorstep Care',
    metric: '24/7 At-Home',
    metricLabel: 'Digital X-Ray & Dressing',
    title: 'Complete Doorstep Medical Suite',
    description: 'Certified technicians arrive at your residence with high-frequency portable digital X-rays and bedside casting care.',
    highlights: ['Zero transit pain for seniors', 'Instant digital radiograph reports', 'Safe bedside examination']
  },
  {
    id: 'ethical-care',
    icon: <ShieldCheck size={22} color="#7c3aed" />,
    tag: 'Ethical Protocol',
    metric: 'Non-Surgical 1st',
    metricLabel: 'Joint Preservation Priority',
    title: 'Evidence-Based Conservative Care',
    description: 'Targeted physical rehabilitation, posture correction, and joint preservation protocols prioritized before surgical advice.',
    highlights: ['Preservation-first mindset', 'Transparent surgical indications', 'Comprehensive recovery plan']
  }
];

export const WhySOS: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section 
      style={{ 
        padding: '4.5rem 0', 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative'
      }} 
      id="why-sos"
      className="why-sos-section"
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }} className="why-sos-header">
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              backgroundColor: 'var(--blue-soft)', 
              color: 'var(--blue-brand)', 
              padding: '0.35rem 0.9rem', 
              borderRadius: 'var(--radius-pill)', 
              fontSize: '0.82rem', 
              fontWeight: 700, 
              border: '1px solid rgba(2, 132, 199, 0.2)', 
              marginBottom: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <ShieldCheck size={15} />
            <span>Why Choose SOS</span>
          </div>

          <h2 className="heading-lg why-sos-title" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
            A Modern Standard for Specialized Orthopedic Care
          </h2>

          <p className="subhead why-sos-subhead" style={{ margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Bridging the gap between clinic consultations and emergency home care with ethical, surgeon-led clinical pathways.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
          className="why-sos-grid"
        >
          {advantages.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid rgba(10, 31, 68, 0.08)',
                  boxShadow: '0 4px 20px rgba(10, 31, 68, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  position: 'relative'
                }}
                className="why-sos-card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 31, 68, 0.09)';
                  e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 31, 68, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.08)';
                }}
              >
                {/* Metric Strip */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--blue-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1.1 }}>{item.metric}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{item.metricLabel}</div>
                  </div>
                </div>

                {/* Tag */}
                <div style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: 'var(--blue-brand)',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem'
                }}>
                  {item.tag}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>

                {/* Desktop Highlights List */}
                <div className="desktop-only" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    {item.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <CheckCircle2 size={14} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Expandable Highlights Toggle */}
                <div className="mobile-only" style={{ display: 'none', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '0.2rem 0',
                      color: 'var(--blue-brand)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                    className="why-sos-mobile-toggle"
                  >
                    <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isExpanded && (
                    <ul style={{ listStyle: 'none', padding: '0.65rem 0 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {item.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <CheckCircle2 size={13} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 24/7 Emergency & Doorstep Diagnostics Banner */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #07152e 0%, #0a1f44 60%, #0369a1 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            boxShadow: '0 16px 40px rgba(10, 31, 68, 0.16)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="emergency-access-banner"
        >
          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 2 }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#fca5a5',
                padding: '0.3rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <span>🚨 24/7 Emergency & Doorstep Diagnostics</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }} className="emergency-title">
              Need an Emergency Home X-Ray or Doctor Visit?
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }} className="emergency-desc">
              Certified mobile digital X-ray units dispatched within <strong>20–30 minutes</strong> for elderly patients and acute fall cases across Kandivali, Malad, Borivali, and Goregaon.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} className="emergency-cta-group">
            <a 
              href="tel:7070706505" 
              className="btn btn-emergency btn-lg"
              style={{ whiteSpace: 'nowrap', gap: '0.45rem', justifyContent: 'center' }}
            >
              <Phone size={18} /> Call 24/7 Hotline: 7070706505
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-sos-section {
            padding: 2.25rem 0 !important;
          }

          .why-sos-header {
            margin-bottom: 1.5rem !important;
            padding: 0 0.5rem !important;
          }

          .why-sos-title {
            font-size: 1.45rem !important;
            line-height: 1.25 !important;
          }

          .why-sos-subhead {
            font-size: 0.92rem !important;
            line-height: 1.55 !important;
          }

          .why-sos-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-bottom: 2rem !important;
          }

          .why-sos-card {
            padding: 1.4rem 1.25rem !important;
            border-radius: 16px !important;
          }

          .emergency-access-banner {
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }

          .emergency-title {
            font-size: 1.25rem !important;
          }

          .emergency-desc {
            font-size: 0.86rem !important;
          }

          .emergency-cta-group {
            width: 100% !important;
          }

          .emergency-cta-group .btn {
            width: 100% !important;
            min-height: 48px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
