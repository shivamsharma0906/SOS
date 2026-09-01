import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Phone, 
  Calendar, 
  ExternalLink, 
  Award, 
  Activity, 
  ChevronDown, 
  MessageSquare, 
  Sparkles,
  MapPin,
  HeartHandshake,
  HelpCircle,
  MessageCircle,
  CheckCircle2,
  Stethoscope,
  Clock
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { GoogleIcon } from '../components/GoogleIcon';
import { TrustIndexWidget } from '../components/TrustIndexWidget';
import { googleReviewsSummary } from '../data/testimonials';
import { BUSINESS_INFO } from '../config/business';

const reviewFaqs = [
  {
    category: 'OPD Consultations',
    q: 'How do specialist consultations work at SOS Orthopedic Clinic?',
    a: 'Every patient is directly evaluated by qualified consultant orthopedic surgeons. Consultations include thorough musculoskeletal examination, joint mobility testing, immediate digital X-ray review if required, and a conservative, patient-first recovery plan tailored to your lifestyle.'
  },
  {
    category: 'In-House Radiography',
    q: 'Can I get a digital X-ray done immediately during my consultation?',
    a: 'Yes. SOS Clinic in Kandivali West is equipped with in-house high-resolution digital X-ray systems. There are zero outside diagnostic referrals or waiting queues—your X-ray is captured and reviewed by the doctor on the spot within minutes.'
  },
  {
    category: 'Joint Replacement',
    q: 'Does SOS perform robotic knee replacements as well as conventional surgeries?',
    a: 'Yes. Our senior orthopedic surgeons specialize in both precision robotic-assisted knee replacement and conventional joint preservation techniques. We evaluate bone density, ligament balance, and joint wear to recommend the safest, most durable approach.'
  },
  {
    category: 'Spine & Neck Care',
    q: 'What treatments are available for neck stiffness and shoulder radiating pain?',
    a: 'For cervical stiffness, nerve compression, and pain radiating towards the shoulder, our doctors prioritize non-invasive protocols including targeted nerve anti-inflammatory therapy, posture correction, cervical decompression, and structured rehabilitation.'
  },
  {
    category: 'Emergency & Home Care',
    q: 'Is 24/7 Home X-Ray available across Mumbai for senior citizens?',
    a: 'Yes. Our portable digital X-ray units dispatch to homes across Borivali, Kandivali, Malad, Goregaon, and Andheri with rapid turnaround, providing hospital-grade bedside imaging for bedridden elders and slip-and-fall emergencies.'
  },
  {
    category: 'Patient Reviews',
    q: 'How can I submit my own review after visiting the clinic?',
    a: 'You can tap the "Write a Review on Google" button on this page to share your experience directly on our verified Google Business Profile for SOS Speciality Orthopedic Clinic in Kandivali West.'
  }
];

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Patient Reviews & 5.0★ Google Ratings | SOS Speciality Orthopedic Clinic"
        description="Explore 100% verified 5-star Google reviews for SOS Speciality Orthopedic Clinic in Kandivali West, Mumbai. Expert knee care, spine relief, robotic joint surgery, and in-house X-rays."
      />

      {/* ── 1. Hero Section ── */}
      <section 
        className="page-hero-section" 
        style={{ 
          position: 'relative', 
          background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)',
          padding: '4.5rem 0 3.5rem 0',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <MedicalCrossMotif size={55} top="12%" left="6%" opacity={0.04} />
        <MedicalCrossMotif size={65} bottom="12%" right="7%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            
            {/* Top Pill Badge */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                backgroundColor: '#ffffff', 
                color: 'var(--navy-primary)', 
                padding: '0.4rem 1.1rem', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.84rem', 
                fontWeight: 700, 
                border: '1px solid rgba(2, 132, 199, 0.2)', 
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.08)',
                marginBottom: '1.25rem'
              }}
            >
              <GoogleIcon size={18} />
              <span>Verified Google Reviews</span>
              <span style={{ 
                backgroundColor: '#10b981', 
                color: '#ffffff', 
                fontSize: '0.72rem', 
                padding: '0.15rem 0.55rem', 
                borderRadius: 'var(--radius-pill)', 
                fontWeight: 800 
              }}>
                5.0 ★★★★★
              </span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '1rem', lineHeight: 1.25 }}>
              Real Recovery Experiences, <br />
              <span style={{ color: 'var(--blue-brand)' }}>Direct From Our Patients</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2rem auto', fontSize: '1.08rem', lineHeight: 1.7 }}>
              Read authentic Google reviews from individuals and families who received spot-on diagnoses, robotic joint consultations, neck pain relief, and immediate digital X-ray diagnostics at SOS Speciality Orthopedic Clinic.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a 
                href={googleReviewsSummary.writeReviewUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-md"
                style={{ gap: '0.5rem', boxShadow: '0 4px 16px rgba(2, 132, 199, 0.3)' }}
              >
                <GoogleIcon size={18} /> Write a Review on Google <ExternalLink size={14} />
              </a>

              <Link to="/contact" className="btn btn-secondary btn-md" style={{ gap: '0.45rem' }}>
                <Calendar size={16} /> Book Doctor Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust Scorecard Banner ── */}
      <section style={{ padding: '0', marginTop: '-1.5rem', position: 'relative', zIndex: 3 }}>
        <div className="container">
          <div 
            style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: '0 12px 36px rgba(10, 31, 68, 0.08)',
              border: '1px solid rgba(10, 31, 68, 0.08)',
              padding: '1.75rem 2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              alignItems: 'center'
            }}
            className="review-metrics-bar"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  backgroundColor: '#f0fdf4', 
                  color: '#16a34a', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}
              >
                <GoogleIcon size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--navy-primary)', lineHeight: 1.1 }}>5.0 / 5.0</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Google Business Rating</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  backgroundColor: 'var(--blue-soft)', 
                  color: 'var(--blue-brand)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}
              >
                <Award size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--navy-primary)', lineHeight: 1.1 }}>100%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>5-Star Satisfaction Rate</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  backgroundColor: '#fef3c7', 
                  color: '#d97706', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}
              >
                <Activity size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--navy-primary)', lineHeight: 1.1 }}>In-House</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Instant Digital Radiography</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  backgroundColor: '#f5f3ff', 
                  color: '#7c3aed', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--navy-primary)', lineHeight: 1.1 }}>Kandivali W</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Mahavir Majesty Facility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Live Trustindex Google Reviews Widget ── */}
      <section style={{ padding: '4rem 0 4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Live Google Feedback Feed
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Verified Google <span style={{ color: 'var(--blue-brand)' }}>Patient Reviews</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Synchronized directly with our official Google Business Profile in Kandivali West, Mumbai.
            </p>
          </div>

          {/* Official Trustindex Live Widget */}
          <div 
            style={{ 
              maxWidth: '1040px', 
              margin: '0 auto', 
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(10, 31, 68, 0.08)',
              padding: '1.5rem',
              boxShadow: '0 4px 24px rgba(10, 31, 68, 0.04)',
              minHeight: '280px'
            }}
          >
            <TrustIndexWidget widgetId="1525a98807b64976fa96ed4dc80" />
          </div>
        </div>
      </section>

      {/* ── 4. Clinical Standards Highlight ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              The SOS Difference
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Why Patients Trust Our <span style={{ color: 'var(--blue-brand)' }}>Orthopedic Care</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Every aspect of our practice is built around accurate clinical evaluation, transparent guidance, and stress-free care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {[
              {
                icon: <Activity size={22} color="var(--blue-brand)" />,
                title: 'Spot-On Diagnosis & In-House X-Ray',
                desc: 'On-site digital X-rays and structured physical examinations help pinpoint bone and joint issues immediately without diagnostic delays.'
              },
              {
                icon: <Award size={22} color="#7c3aed" />,
                title: 'Robotic & Conventional Knee Surgery',
                desc: 'Comprehensive guidance on robotic-assisted joint replacement, cartilage preservation, and patient-specific rehabilitation protocols.'
              },
              {
                icon: <ShieldCheck size={22} color="#059669" />,
                title: 'Non-Surgical Spine & Neck Pain Relief',
                desc: 'Evidence-based conservative therapies, postural decompressive medicines, and targeted physiotherapy for radiating neck and back pain.'
              },
              {
                icon: <HeartHandshake size={22} color="#dc2626" />,
                title: 'Compassionate & Polite Staff',
                desc: 'Patients consistently praise our polite staff, spotless clinic hygiene, and ethical, doctor-led counselling with zero pushy procedures.'
              }
            ].map((card, i) => (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '2rem 1.75rem',
                  border: '1px solid rgba(10, 31, 68, 0.06)',
                  boxShadow: '0 4px 18px rgba(10, 31, 68, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div 
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '12px', 
                    backgroundColor: 'var(--bg-subtle)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Review Submission Guide ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div 
            style={{ 
              backgroundColor: 'var(--navy-primary)', 
              color: '#ffffff', 
              borderRadius: 'var(--radius-lg)', 
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: '0 16px 40px rgba(10, 31, 68, 0.15)'
            }}
            className="review-cta-card"
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(255, 255, 255, 0.12)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-pill)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '1rem' }}>
                <Sparkles size={14} color="#fbbc04" /> Patient Feedback Matters
              </div>

              <h2 className="heading-lg" style={{ color: '#ffffff', marginBottom: '0.85rem' }}>
                Have You Visited <span style={{ color: '#38bdf8' }}>SOS Orthopedic Clinic?</span>
              </h2>

              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Your feedback helps our surgical and clinical team continue to elevate patient care standards across Mumbai. Share your experience with our doctors, staff, and diagnosis.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={googleReviewsSummary.writeReviewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-md"
                  style={{ gap: '0.5rem', backgroundColor: '#ffffff', color: 'var(--navy-primary)', borderColor: '#ffffff' }}
                >
                  <GoogleIcon size={18} /> Leave a Google Review <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-md)', padding: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#34d399" /> How to Review on Google:
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>Tap "Leave a Google Review" to open our profile</li>
                <li>Rate your experience (1 to 5 stars)</li>
                <li>Mention your condition (Knee, Spine, X-Ray, etc.)</li>
                <li>Submit to help other patients make informed choices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Redesigned Premium FAQs Section ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-color)', position: 'relative' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                padding: '0.35rem 0.9rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                border: '1px solid rgba(2, 132, 199, 0.2)', 
                marginBottom: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <HelpCircle size={15} />
              <span>Patient Knowledge & FAQs</span>
            </div>

            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.25 }}>
              Frequently Asked Questions About <span style={{ color: 'var(--blue-brand)' }}>Consultations & Care</span>
            </h2>

            <p className="subhead" style={{ margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Everything you need to know about our specialist doctor OPDs, instant digital X-ray diagnostics, robotic surgery options, and clinic facilities.
            </p>
          </div>

          {/* 2-Column Responsive Layout */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.75fr', 
              gap: '2.5rem', 
              alignItems: 'start' 
            }}
            className="faq-interactive-grid"
          >
            {/* Left Side: Support & Fast Action Box */}
            <div 
              style={{ 
                position: 'sticky', 
                top: '100px',
                backgroundColor: '#ffffff', 
                borderRadius: 'var(--radius-lg)', 
                padding: '2.25rem',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 10px 30px rgba(10, 31, 68, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div 
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '12px', 
                    background: 'linear-gradient(135deg, var(--blue-soft) 0%, #e0f2fe 100%)', 
                    color: 'var(--blue-brand)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(2, 132, 199, 0.15)'
                  }}
                >
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                    Have a Specific Question?
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                    Doctors & Support Online
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Can't find the answer you are looking for? Contact our clinic desk directly for appointment availability, second opinions, or home X-ray dispatch.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="btn btn-primary btn-md"
                  style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
                >
                  <Phone size={16} /> Call Helpline: {BUSINESS_INFO.phone}
                </a>

                <a 
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Orthopedic%20Clinic,%20I%20have%20an%20enquiry%20regarding%20consultation`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md"
                  style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontSize: '0.88rem', backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', color: '#166534' }}
                >
                  <MessageSquare size={16} color="#16a34a" /> WhatsApp Consultation
                </a>

                <Link 
                  to="/contact" 
                  className="btn btn-secondary btn-md"
                  style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
                >
                  <Calendar size={16} /> Book OPD Slot
                </Link>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Clock size={14} color="var(--blue-brand)" /> Average response time: <strong>Under 15 minutes</strong>
              </div>
            </div>

            {/* Right Side: Redesigned Accordion List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {reviewFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const paddedIndex = String(index + 1).padStart(2, '0');

                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: 'var(--radius-md)',
                      border: isOpen 
                        ? '1px solid var(--blue-brand)' 
                        : '1px solid rgba(10, 31, 68, 0.08)',
                      boxShadow: isOpen 
                        ? '0 8px 24px rgba(2, 132, 199, 0.08)' 
                        : '0 2px 10px rgba(10, 31, 68, 0.02)',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        padding: '1.35rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        background: isOpen ? 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' : '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        {/* Number Badge */}
                        <div 
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: isOpen ? 'var(--blue-brand)' : 'var(--bg-subtle)',
                            color: isOpen ? '#ffffff' : 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            flexShrink: 0,
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {paddedIndex}
                        </div>

                        <div>
                          {/* Category Tag */}
                          <div 
                            style={{ 
                              fontSize: '0.7rem', 
                              fontWeight: 700, 
                              color: 'var(--blue-brand)', 
                              textTransform: 'uppercase', 
                              letterSpacing: '0.04em',
                              marginBottom: '0.25rem' 
                            }}
                          >
                            {faq.category}
                          </div>

                          <div 
                            style={{ 
                              fontSize: '1rem', 
                              fontWeight: 800, 
                              color: isOpen ? 'var(--blue-brand)' : 'var(--navy-primary)',
                              lineHeight: 1.4,
                              transition: 'color 0.2s ease'
                            }}
                          >
                            {faq.q}
                          </div>
                        </div>
                      </div>

                      {/* Circle Chevron Button */}
                      <div 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? 'var(--blue-soft)' : '#f1f5f9',
                          color: isOpen ? 'var(--blue-brand)' : 'var(--navy-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.25s ease'
                        }}
                      >
                        <ChevronDown
                          size={16}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease'
                          }}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div 
                        style={{ 
                          padding: '0 1.5rem 1.5rem 4.15rem', 
                          fontSize: '0.92rem', 
                          color: 'var(--text-secondary)', 
                          lineHeight: 1.7, 
                          borderTop: '1px solid #f1f5f9', 
                          paddingTop: '1rem',
                          backgroundColor: '#ffffff'
                        }}
                        className="faq-answer-body"
                      >
                        <p style={{ margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. Booking & Emergency Helpline CTA ── */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
            Ready for Compassionate Orthopedic Care?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Book an OPD consultation with our orthopedic specialists in Kandivali West, or request immediate doorstep Home X-Ray dispatch across Mumbai.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-md">
              <Calendar size={16} /> Book Clinic Appointment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-secondary btn-md" style={{ gap: '0.45rem' }}>
              <Phone size={15} /> Helpline: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .review-metrics-bar {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
            padding: 1.25rem !important;
          }
          .review-cta-card {
            grid-template-columns: 1fr !important;
            padding: 1.75rem 1.25rem !important;
          }
          .faq-interactive-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .faq-answer-body {
            padding-left: 1.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .review-metrics-bar {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Testimonials;
