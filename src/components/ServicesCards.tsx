import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '../data/services';
import { HexBadge } from './HexBadge';
import { AppointmentModal } from './AppointmentModal';

interface ServicesCardsProps {
  limit?: number;
  showTitle?: boolean;
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ limit, showTitle = true }) => {
  const [activeFlippedId, setActiveFlippedId] = useState<string | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const toggleFlip = (id: string) => {
    setActiveFlippedId(prev => (prev === id ? null : id));
  };

  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section style={{ padding: '4.5rem 0' }} id="our-services" className="services-section section-tint">
      <div className="container">
        {showTitle && (
          <div className="services-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.75rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Speciality Clinical Units
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
              Our Orthopedic <span style={{ color: 'var(--blue-brand)' }}>Specialities</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Surgeon-led joint replacement, ACL ligament reconstruction, spine care, and 24/7 Home X-Ray diagnostics across Mumbai.
            </p>
          </div>
        )}

        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
          className="services-grid"
        >
          {displayServices.map((service, index) => {
            const isFlipped = activeFlippedId === service.id;
            const isHiddenOnMobile = !showAllMobile && index >= 3;

            return (
              <div 
                key={service.id} 
                className={`service-flip-card-wrapper ${isHiddenOnMobile ? 'mobile-hidden-card' : ''}`} 
                style={{ height: '460px' }}
              >
                <div className={`service-flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  
                  {/* FRONT SIDE */}
                  <div 
                    className="service-card-front" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      padding: '1.5rem 1.35rem 1.65rem 1.35rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 20px rgba(10, 31, 68, 0.05)',
                      border: service.id === 'home-x-ray' ? '1.5px solid rgba(220, 38, 38, 0.25)' : '1px solid rgba(10, 31, 68, 0.08)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Hexagon Badge & Emergency Pill */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                      <HexBadge iconName={service.iconName} size={48} active />
                      {service.id === 'home-x-ray' ? (
                        <span style={{ fontSize: '0.74rem', fontWeight: 800, backgroundColor: '#fee2e2', color: '#dc2626', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)' }}>
                          🚨 24/7 Home Service
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Specialist Unit
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.22rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      {service.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {service.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div style={{ marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', marginBottom: '0.85rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                        Clinical Focus:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {service.keyHighlights.slice(0, 2).map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.35 }}>
                            <CheckCircle2 size={13} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons: Clean inside card */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto', paddingBottom: '0.25rem' }}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn btn-primary btn-sm"
                        style={{ flexGrow: 1, gap: '0.35rem', fontSize: '0.82rem', padding: '0.55rem 0.75rem', justifyContent: 'center' }}
                      >
                        <span>View Pathway</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFlip(service.id);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          color: 'var(--navy-primary)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          backgroundColor: '#ffffff',
                          border: '1.5px solid var(--border-color)',
                          borderRadius: 'var(--radius-pill)',
                          padding: '0.55rem 0.75rem',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <span>Details</span>
                      </button>
                    </div>
                  </div>

                  {/* BACK SIDE (Detailed View) */}
                  <div 
                    className="service-card-back" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      padding: '1.5rem 1.35rem 1.65rem 1.35rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 8px 24px rgba(10, 31, 68, 0.08)',
                      border: '1px solid rgba(10, 31, 68, 0.08)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Top Header Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', backgroundColor: 'var(--blue-soft)', padding: '0.2rem 0.6rem', borderRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Treatment Summary
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFlip(service.id);
                        }}
                        className="service-back-flip-btn"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          background: 'none',
                          border: '1px solid var(--border-color)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-pill)',
                          color: 'var(--navy-primary)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                        title="Back to summary"
                      >
                        <ArrowLeft size={13} /> Back
                      </button>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      {service.title}
                    </h3>

                    {/* Compact Description */}
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {service.shortDesc}
                    </p>

                    {/* Key Highlights */}
                    <div style={{ marginBottom: '0.85rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                        What This Unit Includes:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.82rem', color: 'var(--text-secondary)', padding: 0, margin: 0 }}>
                        {service.keyHighlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.35 }}>
                            <CheckCircle2 size={13} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Single Dedicated Pathway Button */}
                    <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', paddingBottom: '0.25rem' }}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn btn-primary btn-sm"
                        style={{ width: '100%', justifyContent: 'center', gap: '0.35rem', fontSize: '0.84rem', padding: '0.55rem 0.85rem' }}
                      >
                        <span>View Step-by-Step Pathway</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile "Show All Specialities" Progressive Disclosure Toggle */}
        {!limit && displayServices.length > 3 && (
          <div className="mobile-services-toggle-row mobile-only" style={{ display: 'none', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', justifyContent: 'center', gap: '0.4rem' }}
            >
              <span>{showAllMobile ? 'Show Fewer Specialities' : `View All ${displayServices.length} Specialities`}</span>
              {showAllMobile ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-section {
            padding: 2.25rem 0 !important;
          }

          .services-header {
            margin-bottom: 1.5rem !important;
            padding: 0 0.5rem !important;
          }

          .services-grid {
            gap: 1.25rem !important;
          }

          .service-flip-card-wrapper {
            height: 450px !important;
          }

          .service-card-front,
          .service-card-back {
            padding: 1.35rem 1.15rem 1.6rem 1.15rem !important;
          }

          .mobile-services-toggle-row {
            display: flex !important;
          }

          .mobile-hidden-card {
            display: none !important;
          }
        }
      `}</style>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
      />
    </section>
  );
};
