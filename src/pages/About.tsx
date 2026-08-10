import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Award, Heart, Activity, CheckCircle2,
  Calendar, MapPin, Users, Star, Clock, ArrowRight, Zap
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BrandLogo } from '../components/BrandLogo';
import { ContactChip } from '../components/ContactChip';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { centresData } from '../data/centres';
import { FaWhatsapp } from 'react-icons/fa';

const pillars = [
  {
    icon: <ShieldCheck size={26} />,
    color: '#0284c7',
    bg: '#f0f7ff',
    title: 'Convenience-First Care',
    desc: 'Home X-Ray dispatch, online appointment scheduling, and express OPD consultation desks across 5 Mumbai locations.',
  },
  {
    icon: <Award size={26} />,
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'Sub-Specialist Expertise',
    desc: 'Dedicated specialist surgeons for Spine, Robotic Joint Replacement, Trauma, Sports Medicine & Rheumatology.',
  },
  {
    icon: <Activity size={26} />,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Minimally Invasive Focus',
    desc: 'Stitchless keyhole discectomy and arthroscopic repairs ensure minimal pain, smaller scars, and rapid recovery.',
  },
  {
    icon: <Heart size={26} />,
    color: '#dc2626',
    bg: '#fef2f2',
    title: 'Transparent Guidance',
    desc: 'Conservative, non-surgical protocols tried first. Surgery recommended only when medically essential.',
  },
];

const stats = [
  { value: '10,000+', label: 'Patients Treated', icon: <Users size={22} /> },
  { value: '5', label: 'Premium Centres', icon: <MapPin size={22} /> },
  { value: '15+', label: 'Years Experience', icon: <Clock size={22} /> },
  { value: '4.9★', label: 'Patient Rating', icon: <Star size={22} /> },
];

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About SOS Speciality Orthopedic Service | Complete Orthopedic Care"
        description="Learn about SOS Speciality Orthopedic Service - Patient-first orthopedic care for bone, joint, spine & sports injuries across 5 Mumbai centres."
      />

      {/* ── Hero Header ── */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-subtle) 100%)',
          padding: '5rem 0 4rem 0',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div className="bg-blob-top-right" />
        <MedicalCrossMotif size={65} top="18%" left="6%" opacity={0.05} />
        <MedicalCrossMotif size={80} bottom="10%" right="8%" opacity={0.04} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              backgroundColor: 'var(--blue-soft)',
              color: 'var(--blue-brand)',
              fontWeight: 700,
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
          >
            <ShieldCheck size={16} />
            <span>About SOS Orthopedic</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.25rem', maxWidth: '800px', margin: '0 auto 1.25rem auto' }}>
            Complete Orthopedic Care{' '}
            <span style={{ color: 'var(--blue-brand)' }}>Designed Around You</span>
          </h1>

          <p className="subhead" style={{ margin: '0 auto 2.5rem auto', maxWidth: '680px' }}>
            SOS Speciality Orthopedic Service is established on a single principle: providing rapid, compassionate, and surgical excellence for every patient suffering from joint, spine, bone, or athletic pain.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Calendar size={18} /> Book Consultation
            </Link>
            <a
              href="https://wa.me/917070706505?text=Hello%20SOS%20Orthopedic,%20I%20want%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Counter Row ── */}
      <section style={{ backgroundColor: 'var(--navy-primary)', padding: '2.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
            }}
            className="stats-grid"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 2rem',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    padding: '0.65rem',
                    borderRadius: '12px',
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.12); }
          }
          @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Brand Story Section ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-story-grid">

            {/* Left: Story */}
            <div>
              <div className="badge-tag" style={{ marginBottom: '1rem' }}>
                Brand Story & Philosophy
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
                Your Trusted Destination for <span style={{ color: 'var(--blue-brand)' }}>Pain-Free Living</span>
              </h2>

              <blockquote
                style={{
                  borderLeft: '4px solid var(--blue-brand)',
                  paddingLeft: '1.25rem',
                  margin: '0 0 1.5rem 0',
                  fontStyle: 'italic',
                  color: 'var(--navy-primary)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  backgroundColor: 'var(--blue-soft)',
                  padding: '1rem 1.25rem',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                }}
              >
                "SOS positions itself as a trusted destination for complete orthopedic care, offering expert treatment for bone, joint, spine, and sports injuries with patient-first, convenience-focused service."
              </blockquote>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Whether you require non-surgical physical therapy for chronic knee stiffness, minimally invasive keyhole discectomy for severe sciatica, or urgent doorstep 24/7 digital X-Ray imaging for a frail senior family member, SOS brings state-of-the-art orthopedics to your neighborhood.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'Patient-first approach to every diagnosis and treatment decision',
                  'State-of-the-art diagnostic equipment at all 5 centres',
                  '24/7 emergency Home X-Ray service across Mumbai suburbs',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <ContactChip size="md" />
            </div>

            {/* Right: Brand Identity Panel */}
            <div style={{ position: 'relative' }}>
              {/* Background accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-16px',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, var(--blue-soft) 0%, #e0f2fe 100%)',
                  borderRadius: 'var(--radius-lg)',
                  transform: 'rotate(2deg)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem',
                  boxShadow: '0 20px 40px rgba(10, 31, 68, 0.1)',
                  border: '1px solid rgba(10, 31, 68, 0.07)',
                }}
              >
                <BrandLogo variant="full" size="lg" />

                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: '5 Modern Centres', value: 'Borivali, Kandivali, Malad, Goregaon, Andheri', icon: <MapPin size={18} color="var(--blue-brand)" /> },
                    { label: '24/7 Mobile Diagnostics', value: 'Certified Home X-Ray Division', icon: <Zap size={18} color="#dc2626" /> },
                    { label: 'Senior Surgeons', value: 'Over 15+ years in robotic & keyhole procedures', icon: <Award size={18} color="#7c3aed" /> },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(10, 31, 68, 0.05)',
                      }}
                    >
                      <div style={{ flexShrink: 0, marginTop: '1px' }}>{item.icon}</div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--navy-primary)', fontSize: '0.9rem' }}>{item.label}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '0.1rem' }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-story-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Why Choose SOS - 4 Pillars ── */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>Our Core Commitments</div>
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
              Why Patients Choose SOS
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Built around four core healthcare commitments that place patient comfort and clinical outcomes first.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(10, 31, 68, 0.06)',
                  boxShadow: '0 8px 24px rgba(10, 31, 68, 0.05)',
                  transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 31, 68, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.05)';
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: p.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: p.color,
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--navy-primary)' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Promise Banner ── */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--navy-primary) 0%, var(--navy-accent) 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <MedicalCrossMotif size={100} top="-20px" right="5%" opacity={0.05} />
            <MedicalCrossMotif size={60} bottom="-10px" left="10%" opacity={0.04} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(56,189,248,0.15)',
                  color: '#38bdf8',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                }}
              >
                Our Promise to Every Patient
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                We Won't Rest Until You're Walking Without Pain
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '1rem' }}>
                Every SOS patient receives a personalised treatment plan, transparent pricing, and a dedicated clinical team. We combine cutting-edge technology with genuine human care.
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/contact" className="btn" style={{ backgroundColor: '#ffffff', color: 'var(--navy-primary)', fontWeight: 700 }}>
                <Calendar size={18} /> Book Consultation
              </Link>
              <a
                href="tel:7070706505"
                className="btn"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)', fontWeight: 600 }}
              >
                <Calendar size={18} style={{ opacity: 0 }} />
                📞 Call: 7070706505
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations Grid ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>Mumbai Locations</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
            5 Fully Equipped Centres Across Mumbai Suburbs
          </h2>
          <p className="subhead" style={{ margin: '0 auto 2.5rem auto' }}>
            Conveniently located so expert orthopedic care is always close to home.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {centresData.map(c => (
              <Link
                key={c.id}
                to="/centres"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.4rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: '#ffffff',
                  color: 'var(--navy-primary)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(10, 31, 68, 0.1)',
                  boxShadow: '0 4px 12px rgba(10, 31, 68, 0.06)',
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 20px rgba(10, 31, 68, 0.12)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(10, 31, 68, 0.06)';
                }}
              >
                <MapPin size={16} color="var(--blue-brand)" /> {c.area} Centre
              </Link>
            ))}
          </div>

          <Link to="/centres" className="btn btn-primary btn-lg" style={{ gap: '0.5rem' }}>
            Explore All 5 Centres & Map Directions <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};
