import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Star, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { GoogleIcon } from './GoogleIcon';
import { ReviewCard } from './ReviewCard';
import { testimonialsData, googleReviewsSummary } from '../data/testimonials';

interface TestimonialCarouselProps {
  showTitle?: boolean;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ showTitle = true }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'knee' | 'spine-neck' | 'trauma-xray'>('all');

  // 6 Top Curated Reviews representing authentic patient spectrum
  const featuredIds = [
    'google-review-1', // Nirmal Shah - Knee Pain & Digital X-Ray
    'google-review-2', // Felixcia - Neck Pain & Shoulder Stiffness
    'google-review-4', // Trushna Parmar - Robotic Knee Consult
    'google-review-5', // Nitin Tiwari - In-House X-Ray & Counselling
    'google-review-6', // Nasima Khan - Emergency Fall & Digital X-Ray
    'google-review-13', // Prakash Nair - Senior Osteoarthritis (4-Star Real Review)
  ];

  const featuredReviews = testimonialsData.filter(r => featuredIds.includes(r.id));

  const filteredReviews = activeCategory === 'all'
    ? featuredReviews
    : testimonialsData.filter(r => r.category === activeCategory).slice(0, 6);

  return (
    <section 
      style={{ 
        padding: '5rem 0', 
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        color: 'var(--navy-primary)' 
      }}
      id="patient-reviews"
    >
      <div className="container">
        {/* ── 1. Section Header ── */}
        {showTitle && (
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                backgroundColor: '#ffffff', 
                padding: '0.35rem 0.95rem', 
                borderRadius: 'var(--radius-pill)', 
                marginBottom: '1rem', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: '1px solid #e2e8f0'
              }}
            >
              <GoogleIcon size={16} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#4b5563' }}>Verified Google Reviews</span>
              <span style={{ backgroundColor: '#10b981', color: '#ffffff', fontSize: '0.72rem', padding: '0.12rem 0.5rem', borderRadius: 'var(--radius-pill)', fontWeight: 800 }}>
                4.9 ★ (33 Reviews)
              </span>
            </div>

            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              What Our Patients <span style={{ color: 'var(--blue-brand)' }}>Say on Google</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.65 }}>
              Authentic patient feedback from verified consultations, robotic joint guidance, spine stiffness relief, and in-house digital X-rays at SOS Speciality Orthopedic Clinic.
            </p>
          </div>
        )}

        {/* ── 2. Google Business Trust & Rating Banner (Horizontal Hub) ── */}
        <div
          className="google-hub-banner"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid rgba(10, 31, 68, 0.08)',
            boxShadow: '0 8px 30px rgba(10, 31, 68, 0.04)',
            padding: '1.75rem 2rem',
            marginBottom: '2rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.3fr 1fr',
            gap: '1.75rem',
            alignItems: 'center'
          }}
        >
          {/* Column A: Google Clinic Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                flexShrink: 0
              }}
            >
              <GoogleIcon size={28} />
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Google Business Profile
                </span>
                <span style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', padding: '0.1rem 0.4rem', borderRadius: '9999px', fontSize: '0.66rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle2 size={10} /> Verified
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0, lineHeight: 1.3 }}>
                {googleReviewsSummary.placeName}
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.25rem' }}>
                <MapPin size={12} color="var(--blue-brand)" /> {googleReviewsSummary.location}
              </div>
            </div>
          </div>

          {/* Column B: Score & Authentic Rating Breakdown */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              borderLeft: '1px solid #f1f5f9',
              borderRight: '1px solid #f1f5f9'
            }}
            className="google-hub-middle"
          >
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--navy-primary)', lineHeight: 1 }}>
                4.9
              </div>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', marginTop: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0284c7', marginTop: '0.2rem' }}>
                33 reviews
              </div>
            </div>

            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem' }}>
                <span style={{ width: '38px', color: '#475569', fontWeight: 600 }}>5 star</span>
                <div style={{ flexGrow: 1, height: '7px', backgroundColor: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '91%', height: '100%', backgroundColor: '#f59e0b', borderRadius: '9999px' }} />
                </div>
                <span style={{ width: '20px', textAlign: 'right', color: '#64748b', fontWeight: 700 }}>30</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem' }}>
                <span style={{ width: '38px', color: '#475569', fontWeight: 600 }}>4 star</span>
                <div style={{ flexGrow: 1, height: '7px', backgroundColor: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '9%', height: '100%', backgroundColor: '#f59e0b', borderRadius: '9999px' }} />
                </div>
                <span style={{ width: '20px', textAlign: 'right', color: '#64748b', fontWeight: 700 }}>3</span>
              </div>

              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.1rem' }}>
                3, 2, 1 star: 0 reviews (100% positive sentiment)
              </div>
            </div>
          </div>

          {/* Column C: Action & Trust Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <a
              href={googleReviewsSummary.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{
                width: '100%',
                justifyContent: 'center',
                gap: '0.45rem',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.84rem',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)'
              }}
            >
              <GoogleIcon size={16} />
              <span>Write a Review on Google</span>
              <ExternalLink size={13} />
            </a>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#64748b' }}>
              <Sparkles size={12} color="#f59e0b" />
              <span>Direct feedback evaluated by SOS Surgeons</span>
            </div>
          </div>
        </div>

        {/* ── 3. Category Filter Tabs ── */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.75rem' }}>
          {[
            { id: 'all', label: 'All Featured (6)' },
            { id: 'knee', label: 'Knee & Robotic Replacement' },
            { id: 'spine-neck', label: 'Spine & Neck Relief' },
            { id: 'trauma-xray', label: 'In-House X-Ray & Trauma' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: activeCategory === tab.id ? 'var(--navy-primary)' : '#e2e8f0',
                cursor: 'pointer',
                backgroundColor: activeCategory === tab.id ? 'var(--navy-primary)' : '#ffffff',
                color: activeCategory === tab.id ? '#ffffff' : '#475569',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === tab.id ? '0 4px 12px rgba(10, 31, 68, 0.15)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── 4. Reviews Grid (Clean, Balanced 3-Column Layout with ZERO Empty Space) ── */}
        <div
          className="featured-reviews-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.25rem',
            alignItems: 'stretch'
          }}
        >
          {filteredReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* ── 5. Bottom Navigation & Conversion CTAs ── */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <a
            href={googleReviewsSummary.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ gap: '0.4rem', fontSize: '0.84rem' }}
          >
            <GoogleIcon size={15} /> Write a Review on Google <ExternalLink size={13} />
          </a>

          <Link
            to="/blog"
            className="btn btn-primary btn-sm"
            style={{ gap: '0.4rem', fontSize: '0.84rem' }}
          >
            Read Orthopedic Recovery Guides <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .google-hub-banner {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding: 1.5rem !important;
          }
          .google-hub-middle {
            border-left: none !important;
            border-right: none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 1px solid #f1f5f9 !important;
            border-bottom: 1px solid #f1f5f9 !important;
            padding-top: 1.25rem !important;
            padding-bottom: 1.25rem !important;
          }
          .featured-reviews-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .featured-reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
