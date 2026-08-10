import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { servicesData } from '../data/services';
import { HexBadge } from './HexBadge';

interface ServicesCardsProps {
  limit?: number;
  showTitle?: boolean;
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ limit, showTitle = true }) => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-subtle)' }} id="our-services" className="services-section">
      <div className="container">
        {showTitle && (
          <div className="services-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Speciality Care
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
              Our 5 Core Orthopedic Services
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              From rapid 24/7 Home X-Ray Diagnostics to computer-assisted joint replacements and keyhole endoscopic spine surgery across Mumbai.
            </p>
          </div>
        )}

        <div className="grid-3 services-grid" style={{ gap: '2rem' }}>
          {displayServices.map((service) => {
            const isFlipped = !!flippedCards[service.id];

            return (
              <div key={service.id} className="service-flip-card-wrapper">
                <div className={`service-flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  
                  {/* FRONT SIDE */}
                  <div className="service-card-front">
                    {/* Hexagon Badge & Emergency Pill */}
                    <div className="service-card-badge-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <HexBadge iconName={service.iconName} size={54} active />
                      {service.id === 'home-x-ray' && (
                        <span className="emergency-pill" style={{ fontSize: '0.75rem', fontWeight: 800, backgroundColor: '#fee2e2', color: '#dc2626', padding: '0.25rem 0.65rem', borderRadius: '12px' }}>
                          🚨 24/7 Emergency Home Service
                        </span>
                      )}
                    </div>

                    <h3 className="heading-md service-card-title" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                      {service.title}
                    </h3>

                    <p className="service-card-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {service.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div className="service-card-highlights" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        Key Highlights:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {service.keyHighlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                            <CheckCircle2 size={14} color="var(--navy-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Action to Flip Card */}
                    <div className="service-card-actions" style={{ marginTop: 'auto' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFlip(service.id);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: 'var(--blue-brand)',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          transition: 'gap 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.gap = '0.55rem'}
                        onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                      >
                        <span>View Service Details</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* BACK SIDE (Detailed View) */}
                  <div className="service-card-back">
                    <div>
                      {/* Top Header Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-brand)', backgroundColor: 'var(--blue-soft)', padding: '0.25rem 0.65rem', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Clinical Overview
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFlip(service.id);
                          }}
                          className="service-back-flip-btn"
                          title="Back to summary"
                        >
                          <ArrowLeft size={14} /> Back
                        </button>
                      </div>

                      {/* Title */}
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                        {service.title}
                      </h3>

                      {/* Detailed Description */}
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
                        {service.fullDesc}
                      </p>

                      {/* What Service Includes / Key Features */}
                      <div style={{ marginBottom: '1.1rem' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          What This Service Includes:
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.83rem', color: 'var(--text-secondary)', padding: 0 }}>
                          {service.keyHighlights.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.4 }}>
                              <CheckCircle2 size={14} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Availability Information */}
                      <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.8rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                          <MapPin size={14} color="var(--blue-brand)" /> Service Availability:
                        </div>
                        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {service.id === 'home-x-ray' ? (
                            <span>🚨 24 Hours / 7 Days Mobile Doorstep Dispatch across Borivali, Kandivali, Malad, Goregaon & Andheri.</span>
                          ) : (
                            <span>🏥 Available across all 5 SOS OPD Centres (Borivali, Kandivali, Malad, Goregaon & Andheri).</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Back Button */}
                    <div style={{ paddingTop: '0.75rem' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFlip(service.id);
                        }}
                        className="service-back-flip-btn"
                        style={{ width: 'fit-content' }}
                      >
                        <ArrowLeft size={14} /> Back to Summary
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .services-section {
            padding: 2.5rem 0 !important;
          }
          .services-header {
            margin-bottom: 2rem !important;
          }
          .services-grid {
            gap: 1.25rem !important;
          }
          .emergency-pill {
            font-size: 0.7rem !important;
            padding: 0.2rem 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
