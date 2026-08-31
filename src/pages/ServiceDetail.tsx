import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight,
  ShieldCheck, AlertCircle, Clock, Stethoscope, ChevronRight, Phone
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { DoctorCard } from '../components/DoctorCard';
import { AppointmentModal } from '../components/AppointmentModal';
import { HexBadge } from '../components/HexBadge';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Match by slug or id
  const service = servicesData.find(s => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find linked specialist doctors
  const relevantDoctors = doctorsData.filter(d => 
    service.relevantDoctorIds && service.relevantDoctorIds.includes(d.id)
  );

  const symptomsList = service.symptoms || [];
  const pathwayStepsList = service.steps || [];

  return (
    <>
      <SEOHead
        title={`${service.title} | SOS Speciality Orthopedic Clinic`}
        description={`${service.shortDesc} Step-by-step treatment pathway, symptoms, and consulting orthopedic surgeons at SOS.`}
      />

      {/* Breadcrumb Bar */}
      <div style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-color)', padding: '0.6rem 0', fontSize: '0.82rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
          <Link to="/" style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/services" style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>Services</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--blue-brand)', fontWeight: 700 }}>{service.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-subtle) 100%)',
          padding: '2.5rem 0 2rem 0',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-color)',
        }}
        className="service-detail-hero"
      >
        <MedicalCrossMotif size={50} top="10%" left="6%" opacity={0.04} />
        <MedicalCrossMotif size={60} bottom="10%" right="8%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="service-hero-grid">
            <div>
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
                <span>Specialized Condition Pathway</span>
              </div>

              <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.2 }}>
                {service.title}
              </h1>

              <p className="subhead" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.65 }}>
                {service.fullDesc}
              </p>

              {/* Clean Helpline Link */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }} className="service-cta-group">
                <a
                  href="tel:7070706505"
                  className="btn btn-secondary btn-md"
                  style={{ gap: '0.45rem' }}
                >
                  <Phone size={15} /> 24/7 Clinical Helpline: 7070706505
                </a>
              </div>
            </div>

            {/* Right Card: Condition Overview & Hex Badge */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 16px 36px rgba(10, 31, 68, 0.08)',
                position: 'relative'
              }}
              className="service-overview-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <HexBadge iconName={service.iconName} size={54} active />
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Clinical Overview
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0.2rem 0 0 0' }}>
                    Condition Assessment
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {service.conditionOverview}
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.15rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                  Key Highlights:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {(service.keyHighlights || []).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms & Who Needs Care */}
      {symptomsList.length > 0 && (
        <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }} className="service-symptoms-section">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                Recognizing the Signs
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
                When Should You Consult a Specialist?
              </h2>
              <p className="subhead">
                Early intervention prevents chronic joint degeneration, cartilage loss, and progressive instability.
              </p>
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem',
                maxWidth: '1000px',
                margin: '0 auto 2.5rem auto'
              }}
              className="symptoms-grid"
            >
              {symptomsList.map((symptom, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.35rem',
                    border: '1px solid rgba(10, 31, 68, 0.06)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    boxShadow: '0 2px 10px rgba(10, 31, 68, 0.03)'
                  }}
                >
                  <div style={{ backgroundColor: '#fee2e2', borderRadius: '50%', padding: '0.35rem', color: '#dc2626', flexShrink: 0, marginTop: '2px' }}>
                    <AlertCircle size={17} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                      Symptom Indicator #{idx + 1}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {symptom}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step-by-Step Treatment Pathway */}
      {pathwayStepsList.length > 0 && (
        <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--bg-subtle)' }} className="service-pathway-section">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                Standard of Care
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
                The 4-Step Treatment Pathway
              </h2>
              <p className="subhead">
                A structured, evidence-based roadmap ensuring accurate diagnosis, conservative joint preservation, and guided recovery.
              </p>
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                gap: '1.75rem',
                position: 'relative'
              }}
              className="pathway-grid"
            >
              {pathwayStepsList.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem 1.5rem',
                    border: '1px solid rgba(10, 31, 68, 0.07)',
                    boxShadow: '0 8px 24px rgba(10, 31, 68, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Step Number Flag */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'var(--blue-soft)',
                    color: 'var(--blue-brand)',
                    fontWeight: 900,
                    fontSize: '1.3rem',
                    padding: '0.35rem 0.85rem',
                    borderBottomLeftRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    0{step.stepNumber || idx + 1}
                  </div>

                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Stethoscope size={20} />
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Relevant Doctors */}
      {relevantDoctors.length > 0 && (
        <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }} className="service-doctors-section" id="consulting-doctors">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                Specialist Surgeons
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
                Consulting Surgeons for {service.title}
              </h2>
              <p className="subhead">
                Schedule a consultation with our senior orthopedic surgeons specializing in this clinical domain.
              </p>
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '2rem',
                maxWidth: relevantDoctors.length === 1 ? '450px' : '900px',
                margin: '0 auto'
              }}
            >
              {relevantDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse Other Services */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
              Other Speciality Clinical Units
            </h3>
            <Link to="/services" style={{ color: 'var(--blue-brand)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.85rem' }}>
            {servicesData.filter(s => s.id !== service.id).map(other => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem',
                  border: '1px solid rgba(10, 31, 68, 0.08)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(10, 31, 68, 0.03)'
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--navy-primary)', fontSize: '0.92rem' }}>{other.title}</span>
                <ArrowRight size={15} color="var(--blue-brand)" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-detail-hero, .service-symptoms-section, .service-pathway-section, .service-doctors-section {
            padding: 1.5rem 0 1.25rem 0 !important;
          }
          .service-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .service-overview-card {
            padding: 1.35rem 1.15rem !important;
            border-radius: 16px !important;
          }
          .service-cta-group {
            flex-direction: column !important;
            gap: 0.65rem !important;
          }
          .service-cta-group .btn {
            width: 100% !important;
            min-height: 48px !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={service.id} 
      />
    </>
  );
};

export default ServiceDetail;
