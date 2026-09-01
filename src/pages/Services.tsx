import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Phone, Stethoscope, Users, Calendar, Activity, Zap, Clock, Sparkles, Award
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HexBadge } from '../components/HexBadge';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { AppointmentModal } from '../components/AppointmentModal';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { BUSINESS_INFO } from '../config/business';

const serviceImages: Record<string, string> = {
  'joint-replacement': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  'acl-ligament': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  'spine-care': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
  'sports-injury': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
  'pediatric-trauma': 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
  'home-x-ray': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
};

export const Services: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = servicesData.filter(service => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'joint') return service.id === 'joint-replacement';
    if (filterCategory === 'sports') return service.id === 'acl-ligament' || service.id === 'sports-injury';
    if (filterCategory === 'spine') return service.id === 'spine-care';
    if (filterCategory === 'pediatric') return service.id === 'pediatric-trauma';
    if (filterCategory === 'xray') return service.id === 'home-x-ray';
    return true;
  });

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Our Orthopedic Specialities & Clinical Pathways | SOS Mumbai"
        description="Explore SOS Speciality Orthopedic divisions: Joint Replacement, Keyhole ACL Repair, Spine Care, Sports Injuries, Pediatric Trauma, and 24/7 Home X-Ray Diagnostics across Mumbai."
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
              <ShieldCheck size={16} />
              <span>Sub-Speciality Clinical Divisions</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Specialized <span style={{ color: 'var(--blue-brand)' }}>Orthopedic Divisions</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '720px', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Surgeon-led joint replacement, keyhole ligament reconstruction, spine care, and 24/7 doorstep Home X-Ray diagnostics delivered across our Mumbai centre network.
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
            className="services-stats-grid"
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Stethoscope size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>6 Units</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Clinical Specialities</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.15rem', borderRadius: '14px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16a34a', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Surgeon-Led OPDs</div>
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
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Protocol</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.15rem' }}>Joint Preservation 1st</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Filter & Specialities Grid ── */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          
          {/* Interactive Speciality Filters */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setFilterCategory('all')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterCategory === 'all' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterCategory === 'all' ? 'var(--navy-primary)' : '#ffffff',
                color: filterCategory === 'all' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              All Specialities ({servicesData.length})
            </button>

            <button
              onClick={() => setFilterCategory('joint')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterCategory === 'joint' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterCategory === 'joint' ? 'var(--navy-primary)' : '#ffffff',
                color: filterCategory === 'joint' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              🦴 Joint Replacement
            </button>

            <button
              onClick={() => setFilterCategory('sports')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterCategory === 'sports' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterCategory === 'sports' ? 'var(--navy-primary)' : '#ffffff',
                color: filterCategory === 'sports' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              🏃 ACL & Sports Injuries
            </button>

            <button
              onClick={() => setFilterCategory('spine')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterCategory === 'spine' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterCategory === 'spine' ? 'var(--navy-primary)' : '#ffffff',
                color: filterCategory === 'spine' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              🩺 Spine & Sciatica
            </button>

            <button
              onClick={() => setFilterCategory('pediatric')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterCategory === 'pediatric' ? 'var(--navy-primary)' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterCategory === 'pediatric' ? 'var(--navy-primary)' : '#ffffff',
                color: filterCategory === 'pediatric' ? '#ffffff' : 'var(--navy-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              👶 Pediatric Trauma
            </button>

            <button
              onClick={() => setFilterCategory('xray')}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: filterCategory === 'xray' ? '#dc2626' : 'var(--border-color)',
                cursor: 'pointer',
                backgroundColor: filterCategory === 'xray' ? '#dc2626' : '#ffffff',
                color: filterCategory === 'xray' ? '#ffffff' : '#dc2626',
                transition: 'all 0.2s ease'
              }}
            >
              🚐 24/7 Home X-Ray
            </button>
          </div>

          {/* Specialities Grid */}
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2rem'
            }}
            className="services-clean-grid"
          >
            {filteredServices.map((service) => {
              const isHomeXray = service.id === 'home-x-ray';
              const doctors = doctorsData.filter(d => service.relevantDoctorIds.includes(d.id));

              return (
                <div
                  key={service.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: isHomeXray ? '1.5px solid rgba(220, 38, 38, 0.3)' : '1px solid rgba(10, 31, 68, 0.08)',
                    boxShadow: '0 8px 24px rgba(10, 31, 68, 0.05)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 18px 38px rgba(10, 31, 68, 0.1)';
                    e.currentTarget.style.borderColor = isHomeXray ? 'rgba(220, 38, 38, 0.6)' : 'rgba(2, 132, 199, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.05)';
                    e.currentTarget.style.borderColor = isHomeXray ? 'rgba(220, 38, 38, 0.3)' : 'rgba(10, 31, 68, 0.08)';
                  }}
                >
                  {/* Photo Header with Category Badge */}
                  <div style={{ position: 'relative', height: '190px', overflow: 'hidden', backgroundColor: 'var(--navy-dark)' }}>
                    <img 
                      src={serviceImages[service.id] || serviceImages['joint-replacement']} 
                      alt={`${service.title} - Advanced Orthopedic Care and Clinical Pathway at SOS Speciality Orthopedic Clinic Mumbai`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 46, 0.9) 0%, rgba(7, 21, 46, 0.25) 60%, transparent 100%)' }} />

                    {/* Top Status Tag */}
                    <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', zIndex: 2 }}>
                      {isHomeXray ? (
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: '#dc2626', color: '#ffffff', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                          🚨 24/7 Home Service
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, backgroundColor: 'rgba(10, 31, 68, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(255,255,255,0.2)' }}>
                          Specialist Division
                        </span>
                      )}
                    </div>

                    {/* Icon Badge Overlay */}
                    <div style={{ position: 'absolute', bottom: '0.85rem', left: '1rem', right: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem', zIndex: 2 }}>
                      <HexBadge iconName={service.iconName} size={42} active />
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 2px 6px rgba(0,0,0,0.5)', lineHeight: 1.2 }}>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.15rem' }}>
                      {service.shortDesc}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                        Clinical Highlights:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        {service.keyHighlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.35 }}>
                            <CheckCircle2 size={14} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Doctors Available */}
                    {doctors.length > 0 && (
                      <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        <Stethoscope size={13} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
                        <span style={{ fontWeight: 700, color: 'var(--navy-primary)' }}>Surgeons:</span>
                        <span style={{ color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {doctors.map(d => d.name).join(', ')}
                        </span>
                      </div>
                    )}

                    {/* Dual Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.5rem', marginTop: 'auto' }}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn btn-secondary btn-sm"
                        style={{ width: '100%', justifyContent: 'center', gap: '0.35rem', fontSize: '0.8rem', padding: '0.55rem 0.65rem' }}
                      >
                        <span>View Pathway</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        onClick={() => handleBookService(service.id)}
                        className="btn btn-primary btn-sm"
                        style={{ width: '100%', justifyContent: 'center', gap: '0.3rem', fontSize: '0.8rem', padding: '0.55rem 0.65rem' }}
                      >
                        <Calendar size={13} />
                        <span>Book OPD</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. The 4-Step Clinical Care Standard ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Standard of Clinical Care
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
              The 4-Step <span style={{ color: 'var(--blue-brand)' }}>Treatment Pathway</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
              A structured, evidence-based roadmap ensuring accurate diagnosis, conservative joint preservation, and guided recovery.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1.5rem',
              maxWidth: '1160px',
              margin: '0 auto'
            }}
          >
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontSize: '1.5rem', fontWeight: 900, color: 'rgba(2, 132, 199, 0.2)' }}>01</div>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Stethoscope size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Clinical Assessment
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                High-resolution digital X-rays and comprehensive physical evaluation directly by consulting surgeons.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontSize: '1.5rem', fontWeight: 900, color: 'rgba(2, 132, 199, 0.2)' }}>02</div>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Preservation Priority
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Targeted physical therapy, postural ergonomics, and biological joint preservation therapies evaluated first.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontSize: '1.5rem', fontWeight: 900, color: 'rgba(2, 132, 199, 0.2)' }}>03</div>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Activity size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Precision Intervention
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                When surgery is necessary, keyhole arthroscopy and robotic alignment techniques minimize tissue trauma.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.5rem', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontSize: '1.5rem', fontWeight: 900, color: 'rgba(2, 132, 199, 0.2)' }}>04</div>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Clock size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.45rem' }}>
                Guided Recovery
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                Dedicated post-operative mobilization protocols, home exercise pathways, and regular follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Emergency 24/7 Home X-Ray Dispatch Banner ── */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #07152e 0%, #0a1f44 60%, #0369a1 100%)',
              color: '#ffffff', 
              borderRadius: '20px', 
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.75rem',
              boxShadow: '0 16px 40px rgba(10, 31, 68, 0.16)'
            }}
            className="services-cta-banner"
          >
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.76rem', fontWeight: 800, marginBottom: '0.65rem', textTransform: 'uppercase' }}>
                🚨 24/7 Doorstep Diagnostic Dispatch
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.25 }}>
                Need an Emergency Home X-Ray for an Elderly Patient?
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                Certified mobile digital X-ray units dispatched within <strong>20–30 minutes</strong> directly to your home across Kandivali, Malad, Borivali, and Goregaon centres.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} className="services-cta-buttons">
              <button
                onClick={() => handleBookService('home-x-ray')}
                className="btn btn-primary btn-lg"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.96rem' }}
              >
                <Calendar size={18} /> Book Home X-Ray
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
        onClose={() => {
          setIsModalOpen(false);
          setSelectedServiceId(undefined);
        }}
        defaultService={selectedServiceId}
      />

      <style>{`
        @media (max-width: 900px) {
          .services-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
        @media (max-width: 768px) {
          .services-cta-banner {
            padding: 1.75rem 1.25rem !important;
            border-radius: 16px !important;
          }
          .services-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .services-cta-buttons .btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 520px) {
          .services-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
          .services-clean-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
