import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight,
  ShieldCheck, AlertCircle, Clock, Stethoscope, ChevronRight, Phone,
  HelpCircle, ChevronDown, ChevronUp, FileText, Activity, BookOpen
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { DoctorCard } from '../components/DoctorCard';
import { AppointmentModal } from '../components/AppointmentModal';
import { HexBadge } from '../components/HexBadge';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { BUSINESS_INFO } from '../config/business';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // If slug is home-x-ray, redirect to primary URL
  if (slug === 'home-x-ray') {
    return <Navigate to="/x-ray-services-at-home" replace />;
  }

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
  const conditionsList = service.conditions || [];
  const faqsList = service.faqs || [];

  const pageTitle = service.metaTitle || `${service.title} in Mumbai | SOS Clinic`;
  const pageDescription = service.metaDescription || `${service.shortDesc} Step-by-step treatment pathway, symptoms, and consulting orthopedic surgeons at SOS.`;
  const pageH1 = service.h1 || service.title;

  // Dynamic JSON-LD structured data for MedicalWebPage, Breadcrumbs, and FAQs
  useEffect(() => {
    const schemas: any[] = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": `${BUSINESS_INFO.website}/services/${service.slug}#webpage`,
        "url": `${BUSINESS_INFO.website}/services/${service.slug}`,
        "name": pageTitle,
        "headline": pageH1,
        "description": pageDescription,
        "inLanguage": "en-IN",
        "publisher": {
          "@type": "Organization",
          "name": BUSINESS_INFO.name,
          "url": BUSINESS_INFO.website,
          "logo": {
            "@type": "ImageObject",
            "url": `${BUSINESS_INFO.website}/assets/video-poster.jpg`
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${BUSINESS_INFO.website}/services/${service.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BUSINESS_INFO.website
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${BUSINESS_INFO.website}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `${BUSINESS_INFO.website}/services/${service.slug}`
          }
        ]
      }
    ];

    if (faqsList.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${BUSINESS_INFO.website}/services/${service.slug}#faq`,
        "mainEntity": faqsList.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [service, pageTitle, pageH1, pageDescription, faqsList]);

  // Related blog articles mapping
  const relatedBlogs: { [key: string]: { title: string; slug: string; desc: string }[] } = {
    'spine-care': [
      {
        title: 'Why Is Back Pain Becoming Common Among Young Adults?',
        slug: 'back-pain-in-young-adults',
        desc: 'Ergonomic factors, disc strain, and core weakness contributing to modern lumbar spine issues.'
      }
    ],
    'joint-replacement': [
      {
        title: 'Robotic Knee Replacement Surgery Guide',
        slug: 'robotic-knee-replacement-surgery',
        desc: 'Comprehensive clinical guide to sub-millimeter robotic precision and joint preservation.'
      },
      {
        title: 'Robotic Knee Replacement Recovery in Mumbai',
        slug: 'robotic-knee-replacement-recovery-mumbai',
        desc: 'Phased recovery milestones, early ambulation, and physiotherapy protocols.'
      }
    ],
    'sports-injury': [
      {
        title: 'Ankle Sprain vs. Ankle Fracture: Clinical Differences',
        slug: 'ankle-sprain-vs-ankle-fracture',
        desc: 'Diagnostic signs, ligament vs bone injury identification, and emergency care.'
      }
    ],
    'acl-ligament': [
      {
        title: 'Ankle Sprain vs. Ankle Fracture: Clinical Differences',
        slug: 'ankle-sprain-vs-ankle-fracture',
        desc: 'Ligament tear evaluation, acute joint effusion, and athlete return-to-sport guidelines.'
      }
    ]
  };

  const blogsForThisService = relatedBlogs[service.slug] || [];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`${BUSINESS_INFO.website}/services/${service.slug}`}
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
                <span>Specialized Clinical Pathway</span>
              </div>

              <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.2 }}>
                {pageH1}
              </h1>

              <p className="subhead" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.65 }}>
                {service.fullDesc}
              </p>

              {/* Clean Helpline Link & CTA */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }} className="service-cta-group">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <Stethoscope size={16} />
                  <span>Book Specialist OPD</span>
                </button>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="btn btn-secondary"
                  style={{ gap: '0.5rem' }}
                >
                  <Phone size={16} />
                  <span>24/7 Helpline: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Overview Highlights Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.75rem',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 30px rgba(10, 31, 68, 0.06)',
                position: 'relative',
              }}
              className="service-overview-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <HexBadge size={40} iconName={service.iconName} />
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                    Clinical Highlights
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--blue-brand)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Surgeon-Led Standards
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {service.conditionOverview}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.keyHighlights.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} color="var(--blue-brand)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--navy-primary)', fontWeight: 600 }}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Deep-Dive Section */}
      {conditionsList.length > 0 && (
        <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '2.75rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                Targeted Pathology &amp; Relief
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
                Conditions We Diagnose &amp; <span style={{ color: 'var(--blue-brand)' }}>Treat</span>
              </h2>
              <p className="subhead">
                Evidence-based diagnostic criteria, non-surgical joint preservation protocols, and precision surgical solutions.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {conditionsList.map((cond, idx) => (
                <div
                  key={idx}
                  id={cond.slug}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(10, 31, 68, 0.1)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem 1.75rem',
                    boxShadow: '0 4px 20px rgba(10, 31, 68, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--blue-brand)', backgroundColor: 'var(--blue-soft)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                      <Activity size={14} />
                      <span>Clinical Profile #{idx + 1}</span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {cond.name}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {cond.overview}
                    </p>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--navy-primary)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Typical Symptoms &amp; Warning Signs:
                      </strong>
                      <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {cond.symptoms.map((s, i) => (
                          <li key={i} style={{ marginBottom: '0.25rem' }}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--navy-primary)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Underlying Causes:
                      </strong>
                      <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {cond.causes.map((c, i) => (
                          <li key={i} style={{ marginBottom: '0.25rem' }}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem 1.15rem', borderRadius: '8px', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.25rem' }}>Diagnostic Standard:</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cond.diagnosis}</div>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--navy-primary)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Evidence-Based Treatment Options:
                      </strong>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {cond.treatments.map((t, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                            <CheckCircle2 size={15} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderLeft: '3px solid #dc2626', backgroundColor: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '4px', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.2rem' }}>When to Seek Urgent Consultation:</div>
                      <div style={{ fontSize: '0.82rem', color: '#991b1b', lineHeight: 1.45 }}>{cond.whenToConsult}</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                  >
                    Consult Doctor for {cond.name.split('(')[0].trim()}
                  </button>
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
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
                The 4-Step <span style={{ color: 'var(--blue-brand)' }}>Treatment Pathway</span>
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
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem', color: 'var(--navy-primary)' }}>
                Consulting Surgeons for <span style={{ color: 'var(--blue-brand)' }}>{service.title}</span>
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

      {/* Related Clinical Guides & Blog Articles */}
      {blogsForThisService.length > 0 && (
        <section style={{ padding: '3rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '2rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                Patient Education
              </div>
              <h2 className="heading-md" style={{ color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
                Related Clinical Guides &amp; <span style={{ color: 'var(--blue-brand)' }}>Recovery Articles</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Deepen your understanding of your symptoms, surgical techniques, and rehabilitation timelines.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '850px', margin: '0 auto' }}>
              {blogsForThisService.map((b, idx) => (
                <Link
                  key={idx}
                  to={`/blog/${b.slug}`}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 8px rgba(10, 31, 68, 0.03)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(10, 31, 68, 0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(10, 31, 68, 0.03)';
                  }}
                >
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--blue-brand)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      <BookOpen size={14} />
                      <span>Clinical Guide</span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                      {b.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {b.desc}
                    </p>
                  </div>
                  <div style={{ color: 'var(--blue-brand)', fontWeight: 700, fontSize: '0.85rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Read Full Article &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Patient FAQs Section */}
      {faqsList.length > 0 && (
        <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }} id="faqs">
          <div className="container" style={{ maxWidth: '850px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                Questions &amp; Answers
              </div>
              <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
                Frequently Asked <span style={{ color: 'var(--blue-brand)' }}>Questions</span>
              </h2>
              <p className="subhead">
                Clinical answers to common questions regarding {service.title} at SOS Orthopedic Clinic.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {faqsList.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        padding: '1.15rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        gap: '1rem'
                      }}
                    >
                      <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                        {faq.question}
                      </span>
                      <span style={{ color: 'var(--blue-brand)', flexShrink: 0 }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
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
            {servicesData.filter(s => s.id !== service.id && s.id !== 'home-x-ray').map(other => (
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
