import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  GraduationCap, 
  ArrowRight, 
  Stethoscope, 
  Globe, 
  Award, 
  Clock, 
  Activity, 
  CheckCircle2, 
  Phone, 
  Sparkles,
  BookOpen,
  Users
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MentorCard } from '../components/MentorCard';
import { mentorsData } from '../data/mentors';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { BUSINESS_INFO } from '../config/business';

export const Mentors: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Our Mentors & Surgical Faculty | SOS Speciality Orthopedic Clinic Mumbai"
        description="Distinguished academic mentors and senior surgical faculty providing clinical governance, cutting-edge surgical masterclasses, and quality oversight at SOS Speciality Orthopedic Clinic Mumbai."
        canonicalUrl={`${BUSINESS_INFO.website}/mentors`}
      />

      {/* ── 1. Hero Header & Academic Impact Ribbon ── */}
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
              <GraduationCap size={16} />
              <span>Academic Surgical Board & Clinical Governance</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Meet Our Surgical <span style={{ color: 'var(--blue-brand)' }}>Mentors & Faculty</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '740px', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Distinguished senior orthopedic surgeons, international fellowship alumni, and masterclass instructors providing ethical clinical governance, peer review, and surgical innovation across our 4 Mumbai centres.
            </p>
          </div>

          {/* Academic Impact Metrics Bar */}
          <div 
            className="mentors-stats-grid"
            style={{
              display: 'grid',
              marginTop: '2.5rem',
              maxWidth: '1060px',
              margin: '2.5rem auto 0 auto'
            }}
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Globe size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Global</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>UK, Swiss, German, US Trained</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>50+ Yrs</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Combined Mentorship</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Activity size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#16a34a', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Peer-Reviewed Protocols</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Zero-Delegation</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Direct Senior Surgeon Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Mentors Showcase Grid ── */}
      <section style={{ padding: '3.5rem 0 4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Section Subtitle & Filter Pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                Senior Academic Faculty
              </div>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                Surgical Mentors Panel ({mentorsData.length})
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
              <Link 
                to="/doctors" 
                className="btn btn-secondary btn-sm"
                style={{ gap: '0.4rem', fontWeight: 700 }}
              >
                <Users size={14} /> View Complete Doctors & OPD Roster
              </Link>
            </div>
          </div>

          {mentorsData.length > 0 ? (
            <div
              className="mentors-grid-4col"
              style={{ display: 'grid' }}
            >
              {mentorsData.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          ) : (
            /* Graceful On-Brand Empty State */
            <div
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '24px',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                padding: '3.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(10, 31, 68, 0.04)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  backgroundColor: 'var(--blue-soft)',
                  color: 'var(--blue-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  border: '1px solid rgba(2, 132, 199, 0.2)'
                }}
              >
                <GraduationCap size={32} />
              </div>

              <h2
                className="heading-lg"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--navy-primary)',
                  marginBottom: '0.75rem'
                }}
              >
                Mentor Profiles Coming Soon
              </h2>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  maxWidth: '520px',
                  margin: '0 auto 2rem auto'
                }}
              >
                We are currently preparing full academic dossiers, surgical fellowship records, and bios for our senior surgical mentor panel. Check back soon or consult our senior surgeons directly.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link
                  to="/doctors"
                  className="btn btn-primary"
                  style={{ gap: '0.5rem', padding: '0.75rem 1.4rem' }}
                >
                  <Stethoscope size={16} /> Consult Our Surgeons
                </Link>
                <Link
                  to="/about"
                  className="btn btn-secondary"
                  style={{ gap: '0.5rem', padding: '0.75rem 1.4rem' }}
                >
                  About SOS Excellence <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. Academic Governance & Mentorship Pillars ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 3rem auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                padding: '0.35rem 0.9rem', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                border: '1px solid rgba(2, 132, 199, 0.2)',
                marginBottom: '0.85rem', 
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <ShieldCheck size={15} /> Clinical Governance System
            </div>

            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              How Our Mentorship Framework <span style={{ color: 'var(--blue-brand)' }}>Elevates Patient Outcomes</span>
            </h2>

            <p className="subhead" style={{ margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Surgical mentorship at SOS isn't merely an honorary roster — it is an active clinical peer-review system embedded into daily patient care pathways.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.75rem',
              maxWidth: '1140px',
              margin: '0 auto'
            }}
          >
            <div style={{ backgroundColor: '#ffffff', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 6px 20px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                Evidence-Based Surgical Masterclasses
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Continuous integration of global techniques: endoscopic biportal spine decompressions, computer-assisted joint balancing, and advanced pediatric trauma fixation.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 6px 20px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                Multi-Surgeon Case Review Boards
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Complex orthopedic cases, revision arthroplasties, and challenging spine surgeries are collaboratively reviewed to ensure conservative care is exhausted before surgery.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 6px 20px rgba(10, 31, 68, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                Zero Junior Delegation Policy
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Every patient evaluation, treatment roadmap, and surgical procedure is conducted directly by seasoned consultant surgeons under strict clinical governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Second Opinion & Consultation Callout Banner ── */}
      <section style={{ padding: '3.5rem 0 4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #0a1f44 0%, #0369a1 100%)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              color: '#ffffff',
              boxShadow: '0 16px 40px rgba(10, 31, 68, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
            className="mentors-cta-banner"
          >
            <div style={{ maxWidth: '650px' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                backdropFilter: 'blur(8px)',
                padding: '0.3rem 0.8rem', 
                borderRadius: '9999px', 
                fontSize: '0.78rem', 
                fontWeight: 700, 
                marginBottom: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                <Award size={14} color="#fcd34d" />
                <span>Second Opinion & Advanced Surgical Care</span>
              </div>

              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, margin: '0 0 0.85rem 0', lineHeight: 1.25 }}>
                Seeking a Second Opinion on Spine, Joint, or Complex Trauma Surgery?
              </h2>

              <p style={{ fontSize: '0.96rem', color: '#e0f2fe', lineHeight: 1.6, margin: 0 }}>
                Bring your MRI, CT, and X-ray records for an exhaustive clinical review guided by our senior mentors and consultant surgeons across Kandivali, Malad, Borivali, and Goregaon.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '240px' }} className="mentors-cta-buttons">
              <Link 
                to="/doctors" 
                className="btn"
                style={{
                  backgroundColor: '#ffffff',
                  color: 'var(--navy-primary)',
                  fontWeight: 800,
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  gap: '0.5rem'
                }}
              >
                <Stethoscope size={16} /> Consult Our Surgeons
              </Link>

              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="btn"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontWeight: 700,
                  padding: '0.8rem 1.4rem',
                  borderRadius: '9999px',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  gap: '0.5rem'
                }}
              >
                <Phone size={15} /> Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .mentors-grid-4col {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          .mentors-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .mentors-cta-banner {
            padding: 2rem 1.25rem !important;
          }
          .mentors-cta-buttons {
            width: 100% !important;
          }
          .mentors-cta-buttons .btn {
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .mentors-grid-4col {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .mentors-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.65rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Mentors;
