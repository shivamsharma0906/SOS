import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData, Testimonial } from '../data/testimonials';

export const TestimonialCarousel: React.FC<{ showTitle?: boolean }> = ({ showTitle = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonialsData.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  if (testimonialsData.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current: Testimonial = testimonialsData[currentIndex] || testimonialsData[0];

  return (
    <section 
      style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', color: 'var(--navy-primary)', position: 'relative', overflow: 'hidden' }}
      id="patient-reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="testimonial-carousel-section"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {showTitle && (
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Patient Feedback
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              What Our Patients Say About SOS
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Verified feedback and recovery experiences from patients treated across our centre network.
            </p>
          </div>
        )}

        {/* Testimonial Card Display */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          <div 
            className="testimonial-card-box"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2.5rem',
              border: '1px solid rgba(10, 31, 68, 0.06)',
              boxShadow: '0 8px 24px rgba(10, 31, 68, 0.04)',
              position: 'relative'
            }}
          >
            <Quote size={40} color="rgba(2, 132, 199, 0.08)" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} />

            {/* Star Rating Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--blue-brand)',
                backgroundColor: 'var(--blue-soft)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(2, 132, 199, 0.15)'
              }}>
                Verified Experience
              </span>
            </div>

            {/* Comment */}
            <p className="testimonial-comment-text" style={{ fontSize: '1.08rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2rem' }}>
              "{current.comment}"
            </p>

            {/* Author info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                  {current.patientName}, <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{current.age} yrs</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--blue-brand)', marginTop: '0.25rem', fontWeight: 700 }}>
                  Treatment: {current.treatment} ({current.location})
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem', fontWeight: 500 }}>
                  Consultant: {current.doctorName}
                </div>
              </div>

              {current.verified && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#16a34a', backgroundColor: '#dcfce7', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', fontWeight: 700 }}>
                  <CheckCircle2 size={13} /> Verified
                </div>
              )}
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          {testimonialsData.length > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', marginTop: '2rem' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-color)',
                  color: 'var(--navy-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(10, 31, 68, 0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Pagination Indicators */}
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: idx === currentIndex ? '22px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
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
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-color)',
                  color: 'var(--navy-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(10, 31, 68, 0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-card-box {
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
          }
          .testimonial-comment-text {
            font-size: 0.95rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
