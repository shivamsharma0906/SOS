import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { servicesData, Service } from '../data/services';
import { HexBadge } from './HexBadge';
import { AppointmentModal } from './AppointmentModal';

interface ServicesCardsProps {
  limit?: number;
  showTitle?: boolean;
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ limit, showTitle = true }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="service-card-item"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1px solid rgba(10, 31, 68, 0.06)',
                boxShadow: '0 8px 24px rgba(10, 31, 68, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
              {/* Hexagon Badge */}
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

              {/* Actions */}
              <div className="service-card-actions" style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    setSelectedService(service.id);
                    setIsModalOpen(true);
                  }}
                  className="btn btn-primary btn-sm service-book-btn"
                  style={{ width: '100%' }}
                >
                  <Calendar size={14} /> Book Service
                </button>

                {service.id === 'home-x-ray' && (
                  <a
                    href="tel:7070706505"
                    className="btn btn-secondary btn-sm service-call-btn"
                    style={{ padding: '0.5rem' }}
                    title="Call Home X-Ray Helpline"
                  >
                    <Phone size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
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
          .service-card-item {
            padding: 1.35rem 1.25rem !important;
            border-radius: var(--radius-md) !important;
            box-shadow: 0 4px 16px rgba(10, 31, 68, 0.05) !important;
          }
          .service-card-badge-row {
            margin-bottom: 0.85rem !important;
          }
          .service-card-title {
            font-size: 1.2rem !important;
            margin-bottom: 0.5rem !important;
          }
          .service-card-desc {
            font-size: 0.88rem !important;
            margin-bottom: 1rem !important;
          }
          .service-card-highlights {
            padding-top: 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .service-book-btn {
            height: 46px !important;
            font-size: 0.92rem !important;
          }
          .service-call-btn {
            height: 46px !important;
            width: 46px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .emergency-pill {
            font-size: 0.7rem !important;
            padding: 0.2rem 0.5rem !important;
          }
        }
      `}</style>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={selectedService || undefined}
      />
    </section>
  );
};
