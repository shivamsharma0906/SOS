import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, Quote, Phone, User } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { testimonialsData } from '../data/testimonials';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

export const Testimonials: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Patient Reviews & Recovery Stories | SOS Speciality Orthopedic Service"
        description="Explore verified patient feedback and reviews from patients treated across our SOS Orthopedic Centre network in Kandivali, Malad, Borivali, and Goregaon."
      />

      {/* Hero Header */}
      <section className="page-hero-section">
        <MedicalCrossMotif size={50} top="10%" left="6%" opacity={0.04} />
        <MedicalCrossMotif size={60} bottom="10%" right="8%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              backgroundColor: 'var(--blue-soft)', 
              color: 'var(--blue-brand)', 
              padding: '0.3rem 0.85rem', 
              borderRadius: 'var(--radius-pill)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              border: '1px solid rgba(2, 132, 199, 0.2)', 
              marginBottom: '0.85rem', 
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Patient Stories & Reviews
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', maxWidth: '800px', margin: '0 auto 0.85rem auto' }}>
            Recovery Experiences from Our Patients
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.05rem' }}>
            Real patient testimonials from specialist consultations, keyhole arthroscopic procedures, spine care, and joint replacements across SOS centres.
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <TestimonialCarousel showTitle={false} />

      {/* Full Grid of Reviews */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
              All Verified Patient Feedback
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
              Authentic reviews submitted by patients receiving care across Kandivali, Malad, Borivali, and Goregaon clinics.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  border: '1px solid rgba(10, 31, 68, 0.06)',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 31, 68, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.06)';
                }}
              >
                {/* Watermark Quote Icon */}
                <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'rgba(2, 132, 199, 0.08)', pointerEvents: 'none' }}>
                  <Quote size={54} />
                </div>

                {/* Rating Stars & Centre Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} color="#f59e0b" fill="#f59e0b" />
                    ))}
                  </div>

                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--blue-brand)', backgroundColor: 'var(--blue-soft)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                    {item.location}
                  </span>
                </div>

                {/* Review Text */}
                <p style={{ fontSize: '0.92rem', color: 'var(--navy-primary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                  "{item.comment}"
                </p>

                {/* Patient Profile */}
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', position: 'relative', zIndex: 2 }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--blue-soft)', color: 'var(--navy-primary)', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid rgba(2, 132, 199, 0.25)' }}>
                    {item.patientName ? item.patientName.charAt(0) : <User size={18} />}
                  </div>

                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--navy-primary)', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>{item.patientName}</span>
                      {item.age && <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>({item.age} yrs)</span>}
                      {item.verified && <CheckCircle2 size={13} color="var(--blue-brand)" />}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                      Treated for {item.treatment} &bull; Dr. {item.doctorName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--bg-subtle)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 className="heading-md" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
            Experience Expert Orthopedic Care
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Consult our specialist orthopedic surgeons for evidence-based treatments and personalized rehabilitation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-md">
              Contact SOS Centres & Doctors
            </Link>
            <a href="tel:7070706505" className="btn btn-secondary btn-md" style={{ gap: '0.45rem' }}>
              <Phone size={15} /> 24/7 Helpline: 7070706505
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
