import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Award, Heart, Activity, CheckCircle2,
  Calendar, MapPin, Users, Star, Clock, ArrowRight, Stethoscope, Phone
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { AdvisoryCouncil } from '../components/AdvisoryCouncil';
import { centresData } from '../data/centres';

const pillars = [
  {
    icon: <ShieldCheck size={24} />,
    color: '#0284c7',
    bg: '#f0f7ff',
    title: 'Geriatric & Doorstep Care',
    desc: '24/7 portable digital Home X-ray dispatch and bedside care designed specifically to eliminate painful transit for elderly and bedridden patients.',
  },
  {
    icon: <Award size={24} />,
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'Surgeon-Led Specialisation',
    desc: 'Experienced consultant orthopedic surgeons for Joint Replacements, Keyhole Arthroscopy, Spine Decompression, and Pediatric Trauma Care.',
  },
  {
    icon: <Activity size={24} />,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Minimally Invasive Focus',
    desc: 'Advanced keyhole arthroscopic and endoscopic techniques engineered to reduce surgical trauma, minimize downtime, and accelerate recovery.',
  },
  {
    icon: <Heart size={24} />,
    color: '#dc2626',
    bg: '#fef2f2',
    title: 'Ethical, Conservative Care',
    desc: 'Conservative, non-operative therapies and joint preservation protocols are always explored first before recommending surgery.',
  },
];

const stats = [
  { value: '10,000+', label: 'Patients Treated', icon: <Users size={20} /> },
  { value: '4 Centres', label: 'Network Locations', icon: <MapPin size={20} /> },
  { value: '50+ Yrs', label: 'Council Experience', icon: <Clock size={20} /> },
  { value: '4.9★', label: 'Patient Rating', icon: <Star size={20} /> },
];

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About SOS Speciality Orthopedic Service | Geriatric & Specialized Orthopedic Care"
        description="SOS was founded by practicing orthopedic surgeons to provide accessible, patient-first musculoskeletal care, joint preservation, and 24/7 doorstep diagnostics."
      />

      {/* ── 1. Hero Header ── */}
      <section className="page-hero-section">
        <MedicalCrossMotif size={50} top="10%" left="6%" opacity={0.04} />
        <MedicalCrossMotif size={60} bottom="10%" right="8%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.85rem',
              backgroundColor: 'var(--blue-soft)',
              color: 'var(--blue-brand)',
              fontWeight: 700,
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
            }}
          >
            <ShieldCheck size={15} />
            <span>Our Founding Vision & Values</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '0.85rem', maxWidth: '820px', margin: '0 auto 0.85rem auto' }}>
            Accessible, Surgeon-Led <span style={{ color: 'var(--blue-brand)' }}>Orthopedic Care</span>
          </h1>

          <p className="subhead" style={{ margin: '0 auto 2rem auto', maxWidth: '700px', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Created by orthopedic surgeons to bridge care-access gaps for senior citizens and active individuals — combining surgical precision, joint preservation, and 24/7 doorstep diagnostics.
          </p>

          {/* Clean Stats Pill Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              maxWidth: '860px',
              margin: '0 auto',
            }}
            className="stats-grid"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(10, 31, 68, 0.06)',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--blue-soft)',
                    color: 'var(--blue-brand)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Our Mission & Story (Clean 2-Column Grid with generous padding & polished copy) ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }} className="about-story-section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            {/* Story Text Block */}
            <div className="about-story-text" style={{ padding: '0.5rem 0' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'var(--blue-soft)',
                  color: 'var(--blue-brand)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                <Heart size={14} />
                <span>Our Clinical Philosophy</span>
              </div>

              <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Built on Clinical Empathy & Surgical Excellence
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                SOS was founded by practicing orthopedic surgeons who recognized a critical challenge: senior citizens with fractures and chronic pain face unbearable hardship traveling to imaging centers.
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                We pioneered our <strong>24/7 Mobile Digital X-Ray & Dressing service</strong> to bring certified diagnostic care directly to the bedside, supported by specialist OPD centres across Mumbai.
              </p>

              {/* Core Commitments Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }} className="about-commitments-list">
                {[
                  '14-Hour Daily Surgeon Availability (8 AM – 10 PM)',
                  'Non-Surgical Joint Preservation Explored First',
                  'Minimally Invasive Keyhole & Joint Replacement Care',
                  '20–30 Minute Doorstep Emergency X-Ray Response',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--navy-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="about-hero-cta">
                <Link to="/doctors" className="btn btn-primary btn-md">
                  <Stethoscope size={16} /> Meet Our Doctors
                </Link>
                <Link to="/centres" className="btn btn-secondary btn-md">
                  <MapPin size={16} /> Find Nearest Centre
                </Link>
              </div>
            </div>

            {/* Visual Column: Clinical Atmosphere */}
            <div className="about-visual-col" style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 48px rgba(10, 31, 68, 0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900"
                  alt="SOS Clinical Consulting Facility"
                  style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
                  className="about-story-img"
                />
              </div>

              {/* Overlay Stat Pill */}
              <div
                className="desktop-only"
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  left: '-1.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.75rem',
                  boxShadow: '0 12px 32px rgba(10, 31, 68, 0.12)',
                  border: '1px solid rgba(10, 31, 68, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)' }}>100% Ethical Protocol</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Non-Surgical Preservation First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Four Core Pillars of Care ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }} className="about-pillars-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }} className="about-pillars-header">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#ffffff',
                color: 'var(--blue-brand)',
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1px solid var(--border-color)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              <Activity size={15} />
              <span>Core Clinical Pillars</span>
            </div>

            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              How We Deliver Orthopedic Excellence
            </h2>

            <p className="subhead" style={{ margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              From initial bedside triage to complex joint reconstructions, our clinical pathways ensure precision, safety, and rapid patient recovery.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
            className="pillars-grid"
          >
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="pillar-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid rgba(10, 31, 68, 0.07)',
                  boxShadow: '0 4px 20px rgba(10, 31, 68, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 31, 68, 0.09)';
                  e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 31, 68, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.07)';
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: p.bg,
                    color: p.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  {p.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Senior Advisory Council Component ── */}
      <AdvisoryCouncil />

      {/* ── 5. Centre Network & Outreach Strip ── */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <h2 className="heading-md" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Serving Patients Across Mumbai
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              Specialist OPD facilities, digital X-rays, and 24/7 doorstep diagnostics at every centre.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {centresData.map(c => (
              <Link
                key={c.id}
                to="/centres"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--navy-primary)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <MapPin size={15} color="var(--blue-brand)" />
                <span>{c.area} {c.type === 'outreach-clinic' ? '(Outreach)' : 'Centre'}</span>
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }} className="about-cta-group">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Calendar size={18} /> Schedule a Consultation
            </Link>
            <a href="tel:7070706505" className="btn btn-secondary btn-lg">
              <Phone size={18} /> Call 7070706505
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-section, .about-pillars-section {
            padding: 2.25rem 0 !important;
          }

          .about-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.75rem !important;
          }

          .about-story-text {
            padding: 0 0.5rem !important;
          }

          .about-story-text .heading-lg {
            font-size: 1.45rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.85rem !important;
          }

          .about-story-text p {
            font-size: 0.92rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1rem !important;
          }

          .about-commitments-list {
            gap: 0.65rem !important;
            margin-bottom: 1.5rem !important;
          }

          .about-commitments-list div {
            font-size: 0.84rem !important;
            line-height: 1.4 !important;
          }

          .about-story-img {
            height: 220px !important;
            border-radius: 16px !important;
          }

          .about-cta-group, .about-hero-cta {
            flex-direction: column !important;
            gap: 0.65rem !important;
          }

          .about-cta-group .btn, .about-hero-cta .btn {
            width: 100% !important;
            min-height: 48px !important;
            justify-content: center !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }

          .pillar-card {
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </>
  );
};
