import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, Calendar } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { testimonialsData } from '../data/testimonials';
import { AppointmentModal } from '../components/AppointmentModal';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

export const Testimonials: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Patient Reviews & Ratings | SOS Speciality Orthopedic Service Mumbai"
        description="Read verified patient reviews for knee replacement, endoscopic spine surgery, ACL rehab, and 24/7 Home X-Ray service across Mumbai."
      />

      {/* Hero Header (Light Mode) */}
      <section 
        style={{ 
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-subtle) 100%)',
          padding: '5rem 0 4rem 0',
          overflow: 'hidden',
          color: 'var(--navy-primary)',
          borderBottom: '1px solid var(--border-color)',
          textAlign: 'center'
        }}
      >
        <div className="bg-blob-top-right" />
        <MedicalCrossMotif size={65} top="15%" left="8%" opacity={0.06} />
        <MedicalCrossMotif size={80} bottom="10%" right="10%" opacity={0.05} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              backgroundColor: 'var(--blue-soft)', 
              color: 'var(--blue-brand)', 
              padding: '0.35rem 0.9rem', 
              borderRadius: 'var(--radius-pill)', 
              fontSize: '0.82rem', 
              fontWeight: 700, 
              border: '1px solid rgba(2, 132, 199, 0.2)',
              marginBottom: '1.25rem', 
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Patient Stories
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', maxWidth: '800px', margin: '0 auto 1.25rem auto' }}>
            Real Recovery Stories from Real Patients
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.1rem' }}>
            Over 10,000+ patients across Borivali, Kandivali, Malad, Goregaon, and Andheri have restored their pain-free mobility with SOS.
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <TestimonialCarousel showTitle={false} />

      {/* Full Grid of Reviews */}
      <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            Verified Patient Testimonials
          </h2>

          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  border: '1px solid rgba(10, 31, 68, 0.05)',
                  boxShadow: '0 8px 24px rgba(10, 31, 68, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 31, 68, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 31, 68, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.05)';
                }}
              >
                {/* Decorative Quote Icon */}
                <div style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', opacity: 0.05, color: 'var(--navy-primary)' }}>
                  <Quote size={40} fill="currentColor" />
                </div>

                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1, position: 'relative', zIndex: 2 }}>
                  "{item.comment}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', position: 'relative', zIndex: 2 }}>
                  <div style={{ fontWeight: 800, color: 'var(--navy-primary)', fontSize: '1.02rem' }}>
                    {item.patientName} <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>({item.age} yrs)</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--blue-brand)', fontWeight: 700, marginTop: '0.3rem' }}>
                    📍 {item.location} • {item.treatment}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.15rem', fontWeight: 500 }}>
                    Consulting Surgeon: {item.doctorName}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-lg">
              <Calendar size={18} /> Book Your Appointment Today
            </button>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
