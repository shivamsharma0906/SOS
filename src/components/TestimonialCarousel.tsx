import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const TestimonialCarousel: React.FC<{ showTitle?: boolean }> = ({ showTitle = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section 
      style={{ padding: '5rem 0', backgroundColor: 'var(--bg-subtle)', color: 'var(--navy-primary)', position: 'relative', overflow: 'hidden' }}
      id="patient-reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {showTitle && (
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Verified Patient Feedback
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>
              What Our Patients Say About SOS
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '0 auto' }}>
              Real stories from patients treated at our Borivali, Kandivali, Malad, Goregaon & Andheri centres.
            </p>
          </div>
        )}

        {/* Testimonial Card Display */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 3rem',
              border: '1px solid rgba(10, 31, 68, 0.05)',
              boxShadow: '0 12px 36px rgba(10, 31, 68, 0.05)',
              position: 'relative'
            }}
          >
            <Quote size={48} color="rgba(2, 132, 199, 0.08)" style={{ position: 'absolute', top: '2rem', right: '2.5rem' }} />

            {/* Star Rating */}
            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Comment */}
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2.5rem' }}>
              "{current.comment}"
            </p>

            {/* Author info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                  {current.patientName}, <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{current.age} yrs</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--blue-brand)', marginTop: '0.3rem', fontWeight: 700 }}>
                  Treatment: {current.treatment} ({current.location})
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.15rem', fontWeight: 500 }}>
                  Consultant: {current.doctorName}
                </div>
              </div>

              {current.verified && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: '#16a34a', backgroundColor: '#dcfce7', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-pill)', fontWeight: 700 }}>
                  <CheckCircle2 size={14} /> Verified Patient Review ({current.date})
                </div>
              )}
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                color: 'var(--navy-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(10, 31, 68, 0.04)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Pagination Indicators */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentIndex ? '24px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: idx === currentIndex ? 'var(--blue-brand)' : 'rgba(10, 31, 68, 0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                color: 'var(--navy-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(10, 31, 68, 0.04)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
