import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { CentreCard } from '../components/CentreCard';
import { AppointmentModal } from '../components/AppointmentModal';
import { centresData } from '../data/centres';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { BUSINESS_INFO } from '../config/business';
import { MapPin, Phone, ShieldCheck, Clock, Star, Zap, Building2, Accessibility, FileText, Calendar } from 'lucide-react';

export const Centres: React.FC = () => {
  const [filterArea, setFilterArea] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const centreAreas = centresData.map(c => c.area).join(', ');
  const fullCentresCount = centresData.filter(c => c.type === 'centre').length;
  const outreachCount = centresData.filter(c => c.type === 'outreach-clinic').length;

  const filteredCentres = centresData.filter(centre => {
    if (filterArea === 'all') return true;
    return centre.area.toLowerCase() === filterArea.toLowerCase();
  });

  return (
    <>
      <SEOHead
        title={`Orthopedic Centres & Outreach Clinics | ${centreAreas} | SOS Mumbai`}
        description={`Find your nearest SOS Speciality Orthopedic Clinic centre or outreach clinic: ${centreAreas}. Specialist OPD consultations, digital X-ray diagnostics, and 24/7 Home X-Ray care.`}
      />

      {/* ── 1. Hero Header & Trust Metrics Strip ── */}
      <section className="page-hero-section" style={{ padding: '3.5rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <MedicalCrossMotif size={65} top="8%" left="4%" opacity={0.04} />
        <MedicalCrossMotif size={75} bottom="10%" right="5%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                padding: '0.35rem 0.95rem', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.82rem', 
                fontWeight: 700, 
                border: '1px solid rgba(2, 132, 199, 0.25)', 
                marginBottom: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em'
              }}
            >
              <MapPin size={16} />
              <span>{centresData.length} Locations ({fullCentresCount} Full Centres &bull; {outreachCount} Outreach Clinic)</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Our Centres & <span style={{ color: 'var(--blue-brand)' }}>Outreach Network</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '720px', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Modern consultation suites, advanced digital radiography, and 24/7 doorstep emergency X-ray dispatch network spanning {centreAreas}.
            </p>
          </div>

          {/* Clinical Capability 4-Pill Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '1rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
            className="centres-stats-grid"
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>{centresData.length} Hubs</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Across Mumbai</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#dc2626', lineHeight: 1 }}>24/7</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Home X-Ray Fleet</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fef3c7', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Star size={20} fill="#b45309" />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#b45309', lineHeight: 1 }}>5.0★</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>5-Star Google Rating</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>20-30m</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Rapid Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Filter & Centres Grid ── */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Location Filter Pills */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setFilterArea('all')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterArea === 'all' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterArea === 'all' ? 'var(--navy-primary)' : '#ffffff',
                color: filterArea === 'all' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              All Locations ({centresData.length})
            </button>

            {centresData.map(centre => (
              <button
                key={centre.id}
                onClick={() => setFilterArea(centre.area)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  border: '1.5px solid',
                  borderColor: filterArea === centre.area ? 'var(--navy-primary)' : 'var(--border-color)',
                  cursor: 'pointer',
                  backgroundColor: filterArea === centre.area ? 'var(--navy-primary)' : '#ffffff',
                  color: filterArea === centre.area ? '#ffffff' : 'var(--navy-primary)',
                  transition: 'all 0.2s ease'
                }}
              >
                📍 {centre.area} {centre.type === 'outreach-clinic' ? '(Outreach)' : 'Centre'}
              </button>
            ))}
          </div>

          {/* Centres Grid */}
          <div 
            className="centres-grid-4col"
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '1.25rem'
            }}
          >
            {filteredCentres.map(centre => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Centre Facility Standards & Infrastructure ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Facility Standards
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
              World-Class Diagnostic & <span style={{ color: 'var(--blue-brand)' }}>OPD Infrastructure</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Designed for patient comfort, rapid clinical evaluations, and seamless digital diagnostics across all locations.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem',
              maxWidth: '1160px',
              margin: '0 auto'
            }}
          >
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Zap size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                On-Site Digital Radiography
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Low-radiation digital X-ray units providing immediate high-resolution imaging to consulting orthopedic surgeons.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Accessibility size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Wheelchair Accessibility
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Barrier-free entry, wide consultation doors, and dedicated clinical attendant assistance for senior citizens.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <FileText size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Unified Digital Records
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Patient consultation notes and radiographic scans are synced across all branches for seamless multi-centre care.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Sterile Procedure Suites
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Clean minor treatment rooms for intra-articular joint injections, cast applications, and trauma dressing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Booking Prompt CTA Banner ── */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #07152e 0%, #0a1f44 60%, #0369a1 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.75rem',
              boxShadow: '0 16px 40px rgba(10, 31, 68, 0.16)'
            }}
            className="centres-cta-banner"
          >
            <div style={{ maxWidth: '640px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.25 }}>
                Visit Your Nearest SOS Centre or Request Home X-Ray
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Direct senior surgeon appointments available daily across Kandivali, Malad, Borivali, and Goregaon centres.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} className="centres-cta-buttons">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.96rem' }}
              >
                <Calendar size={18} /> Book Centre Consultation
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-secondary btn-lg"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.96rem', backgroundColor: '#ffffff' }}
              >
                <Phone size={18} /> Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style>{`
        @media (max-width: 900px) {
          .centres-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
        @media (max-width: 768px) {
          .centres-cta-banner {
            padding: 1.75rem 1.25rem !important;
            border-radius: 16px !important;
          }
          .centres-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .centres-cta-buttons .btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 520px) {
          .centres-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Centres;
