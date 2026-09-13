import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { DoctorCard } from '../components/DoctorCard';
import { ConsultantCard } from '../components/ConsultantCard';
import { AppointmentModal } from '../components/AppointmentModal';
import { doctorsData } from '../data/doctors';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { BUSINESS_INFO } from '../config/business';
import { ShieldCheck, Baby, Users, Award, Clock, Activity, CheckCircle2, Phone, Calendar, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';

export const Doctors: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'pediatric-trauma' | string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState<string | undefined>(undefined);

  const filteredDoctors = doctorsData.filter(doc => {
    if (filterMode === 'all') return true;
    if (filterMode === 'pediatric-trauma') return doc.pediatricTraumaCare === true;
    if (filterMode === 'sports') return doc.specialization.toLowerCase().includes('sports') || doc.expertiseList.some(e => e.toLowerCase().includes('sports') || e.toLowerCase().includes('acl'));
    const mode = filterMode.toLowerCase();
    return doc.specialization.toLowerCase().includes(mode) || doc.expertiseList.some(e => e.toLowerCase().includes(mode));
  });

  const seniorDoctors = filteredDoctors.filter(doc => doc.category !== 'consultant');
  const consultantDoctors = filteredDoctors.filter(doc => doc.category === 'consultant');

  const handleSelectDoctor = (docId: string) => {
    setSelectedDoctorForModal(docId);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Our Orthopedic Doctors | SOS Speciality Orthopedic Clinic Mumbai"
        description="Consult experienced orthopedic surgeons at SOS Speciality Orthopedic Clinic. Specialists in Robotic Joint Replacement, Spine Care, Pediatric Trauma, and Sports Arthroscopy across Mumbai."
        canonicalUrl={`${BUSINESS_INFO.website}/doctors`}
      />

      {/* ── 1. Hero Header & Trust Metrics Strip ── */}
      <section className="page-hero-section" style={{ padding: '3.5rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <MedicalCrossMotif size={65} top="8%" left="4%" opacity={0.04} />
        <MedicalCrossMotif size={75} bottom="10%" right="5%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
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
              <ShieldCheck size={16} />
              <span>Medical Board & Senior Consultants</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Meet Our Orthopedic <span style={{ color: 'var(--blue-brand)' }}>Specialists</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '720px', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Experienced consultant orthopedic surgeons providing patient-first clinical care for joint reconstruction, spine decompression, sports injuries, and pediatric trauma across Mumbai centres.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '1rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
            className="doctor-stats-grid"
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>{doctorsData.length} Senior</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Consultant Surgeons</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>50+ Yrs</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Combined Experience</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Activity size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16a34a', lineHeight: 1 }}>10,000+</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Patients Consulted</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Sparkles size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Zero-Wait</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Direct Surgeon OPD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Filter & Doctors Grid Section ── */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Specialty Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setFilterMode('all')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'all' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'all' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'all' ? '#ffffff' : 'var(--navy-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Users size={14} /> All Surgeons ({doctorsData.length})
            </button>

            <button
              onClick={() => setFilterMode('joint')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'joint' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'joint' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'joint' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              🦴 Joint Replacement
            </button>

            <button
              onClick={() => setFilterMode('spine')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'spine' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'spine' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'spine' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              🩺 Spine Specialists
            </button>

            <button
              onClick={() => setFilterMode('pediatric-trauma')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'pediatric-trauma' ? '#0284c7' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'pediatric-trauma' ? '#0284c7' : '#ffffff',
                color: filterMode === 'pediatric-trauma' ? '#ffffff' : '#0284c7',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Baby size={14} /> Pediatric & Trauma
            </button>

            <button
              onClick={() => setFilterMode('sports')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterMode === 'sports' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterMode === 'sports' ? 'var(--navy-primary)' : '#ffffff',
                color: filterMode === 'sports' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              🏃 Sports Medicine & ACL
            </button>
          </div>

          {/* ── Senior Consultants Section (Executive Redesign) ── */}
          {seniorDoctors.length > 0 && (
            <div style={{ marginBottom: consultantDoctors.length > 0 ? '5rem' : '0' }}>
              <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
                <div 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.45rem', 
                    backgroundColor: 'var(--blue-soft)', 
                    color: 'var(--blue-brand)', 
                    padding: '0.35rem 0.95rem', 
                    borderRadius: 'var(--radius-pill)', 
                    fontSize: '0.8rem', 
                    fontWeight: 800, 
                    border: '1px solid rgba(2, 132, 199, 0.25)', 
                    marginBottom: '0.85rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.06em' 
                  }}
                >
                  <Award size={15} /> Core Surgical Faculty & Direct OPD
                </div>

                <h2 style={{ fontSize: '2.15rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0 0 0.85rem 0', lineHeight: 1.25 }}>
                  Senior Consultant <span style={{ color: 'var(--blue-brand)' }}>Surgeons</span>
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, margin: '0 auto', maxWidth: '720px' }}>
                  Our senior surgeons manage routine outpatient consultations, acute fracture care, and specialized joint & spine surgeries across all 4 SOS Mumbai clinics.
                </p>
              </div>

              <div 
                className="doctors-grid-4col"
                style={{ display: 'grid' }}
              >
                {seniorDoctors.map((doctor) => (
                  <DoctorCard 
                    key={doctor.id} 
                    doctor={doctor} 
                    onSelectDoctor={handleSelectDoctor}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Our Consultants Section (Executive Redesign) ── */}
          {consultantDoctors.length > 0 && (
            <div 
              id="our-consultants" 
              className="consultants-section-wrapper"
              style={{ 
                marginTop: seniorDoctors.length > 0 ? '4rem' : '0',
                background: 'linear-gradient(180deg, #f8fafc 0%, #f0f7ff 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(2, 132, 199, 0.18)',
                boxShadow: '0 12px 36px rgba(10, 31, 68, 0.04)',
                position: 'relative'
              }}
            >
              {/* Top Section Header */}
              <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
                <div 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.45rem', 
                    backgroundColor: 'rgba(2, 132, 199, 0.1)', 
                    color: 'var(--blue-brand)', 
                    padding: '0.35rem 0.95rem', 
                    borderRadius: 'var(--radius-pill)', 
                    fontSize: '0.8rem', 
                    fontWeight: 800, 
                    border: '1px solid rgba(2, 132, 199, 0.25)', 
                    marginBottom: '0.85rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.06em' 
                  }}
                >
                  <Award size={15} /> Super-Specialist Advisory & Visiting Panel
                </div>
                
                <h2 style={{ fontSize: '2.15rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0 0 0.85rem 0', lineHeight: 1.25 }}>
                  Our <span style={{ color: 'var(--blue-brand)' }}>Consultants</span>
                </h2>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, margin: '0 auto', maxWidth: '720px' }}>
                  Distinguished super-specialist orthopedic surgeons bringing international surgical fellowships from the United Kingdom, Germany, South Korea, and Italy, advanced robotic joint replacements, and complex trauma reconstructions directly to SOS patients across Mumbai.
                </p>
              </div>

              {/* Symmetrical 3-Column Consultants Grid */}
              <div 
                className="consultants-grid-3col"
                style={{ display: 'grid' }}
              >
                {consultantDoctors.map((doctor) => (
                  <ConsultantCard 
                    key={doctor.id} 
                    doctor={doctor} 
                    onSelectDoctor={handleSelectDoctor}
                  />
                ))}
              </div>

              {/* Bottom Second Opinion Advisory Callout */}
              <div 
                style={{
                  marginTop: '2.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid rgba(2, 132, 199, 0.2)',
                  padding: '1.35rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)'
                }}
                className="consultants-footer-cta"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--blue-soft)',
                    color: 'var(--blue-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Stethoscope size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--navy-primary)' }}>
                      Need a Second Opinion for Complex Joint Replacement or Revision Surgery?
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      Bring your X-rays and MRI scans for a dedicated evaluation by our super-specialist surgical panel.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                  <button
                    onClick={() => handleSelectDoctor(consultantDoctors[0]?.id || '')}
                    className="btn btn-primary btn-sm"
                    style={{ gap: '0.35rem', fontWeight: 800 }}
                  >
                    Schedule Prior Appointment <ArrowRight size={14} />
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="btn btn-secondary btn-sm"
                    style={{ gap: '0.35rem', fontWeight: 700 }}
                  >
                    <Phone size={13} /> {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Empty Filter State */}
          {seniorDoctors.length === 0 && consultantDoctors.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-secondary)' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: 600 }}>No specialists found matching this filter.</p>
              <button onClick={() => setFilterMode('all')} className="btn btn-secondary btn-sm" style={{ marginTop: '0.75rem' }}>
                View All Surgeons
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. Clinical Governance & Why Consult SOS Specialists ── */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Clinical Excellence
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
              Our Clinical <span style={{ color: 'var(--blue-brand)' }}>Governance Standards</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Every patient at SOS is consulted directly by senior surgeons under rigorous ethical protocols.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
                Direct Senior Consultation
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                No delegation to junior doctors or resident staff. All evaluations and surgical roadmaps are handled directly by seasoned consultants.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
                Conservative & Non-Surgical 1st
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Targeted physical therapy, postural ergonomics, and joint preservation are exhaustively prioritized before recommending any operative intervention.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Stethoscope size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
                Multidisciplinary Surgical Board
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Complex trauma reconstructions and revision joint surgeries are peer-reviewed across our surgical team for optimal patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>


      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDoctorForModal(undefined);
        }}
        defaultDoctor={selectedDoctorForModal}
      />

      <style>{`
        @media (max-width: 1100px) {
          .doctors-grid-4col {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .consultants-grid-3col {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 900px) {
          .doctor-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .consultants-pillars-strip,
          .senior-doctors-pillars-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .consultants-section-wrapper {
            padding: 2rem 1.25rem !important;
            border-radius: 18px !important;
            margin-top: 2.5rem !important;
          }
          .consultants-grid-3col {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .consultants-footer-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1.25rem 1rem !important;
          }
          .consultants-footer-cta > div:last-child {
            width: 100% !important;
            flex-direction: column !important;
          }
          .consultants-footer-cta > div:last-child .btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 640px) {
          .doctors-grid-4col {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 520px) {
          .doctor-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Doctors;
