import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GoogleIcon } from './GoogleIcon';
import { GoogleRatingSummaryCard } from './GoogleRatingSummaryCard';
import { ReviewCard } from './ReviewCard';
import { testimonialsData, googleReviewsSummary } from '../data/testimonials';

export const TestimonialCarousel: React.FC<{ showTitle?: boolean }> = ({ showTitle = true }) => {
  // 3 Curated Featured Reviews:
  // 1. Nirmal Shah (Knee Pain Diagnosis & Digital X-Ray)
  // 2. Felixcia (Neck Pain & Shoulder Stiffness Relief with Owner Response)
  // 3. Trushna Parmar (Robotic & Conventional Knee Replacement with Owner Response & Photo)
  const featuredReviews = testimonialsData.filter(r => 
    ['google-review-1', 'google-review-2', 'google-review-4'].includes(r.id)
  );

  return (
    <section 
      style={{ 
        padding: '4.5rem 0', 
        color: 'var(--navy-primary)' 
      }}
      id="patient-reviews"
    >
      <div className="container">
        {showTitle && (
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.5rem auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                backgroundColor: '#ffffff', 
                padding: '0.35rem 0.9rem', 
                borderRadius: 'var(--radius-pill)', 
                marginBottom: '1rem', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: '1px solid var(--border-color)'
              }}
            >
              <GoogleIcon size={16} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#4b5563' }}>Verified Google Reviews</span>
              <span style={{ backgroundColor: '#10b981', color: '#ffffff', fontSize: '0.72rem', padding: '0.1rem 0.45rem', borderRadius: 'var(--radius-pill)', fontWeight: 800 }}>
                5.0 ★
              </span>
            </div>

            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              What Our Patients <span style={{ color: 'var(--blue-brand)' }}>Say on Google</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Real patient reviews for knee care, robotic consultations, in-house X-rays, and spine stiffness relief at SOS Orthopedic Clinic.
            </p>
          </div>
        )}

        {/* ── First-Party On-Brand Reviews Showcase ── */}
        <div
          className="featured-reviews-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '320px repeat(3, minmax(0, 1fr))',
            gap: '1.25rem',
            alignItems: 'stretch'
          }}
        >
          {/* Summary Card */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <GoogleRatingSummaryCard style={{ height: '100%' }} />
          </div>

          {/* 3 Featured Reviews */}
          {featuredReviews.map(review => (
            <div key={review.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Action Links */}
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
            to="/testimonials"
            className="btn btn-primary btn-sm"
            style={{ gap: '0.4rem', fontSize: '0.84rem' }}
          >
            Explore All Patient Stories <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .featured-reviews-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 768px) {
          .featured-reviews-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
