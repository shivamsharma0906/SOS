import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GoogleIcon } from './GoogleIcon';
import { TrustIndexWidget } from './TrustIndexWidget';
import { googleReviewsSummary } from '../data/testimonials';

export const TestimonialCarousel: React.FC<{ showTitle?: boolean }> = ({ showTitle = true }) => {
  return (
    <section 
      style={{ 
        padding: '4.5rem 0', 
        color: 'var(--navy-primary)' 
      }}
      id="patient-reviews"
      className="testimonial-carousel-section section-tint"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {showTitle && (
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(10, 31, 68, 0.08)',
                padding: '0.3rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                boxShadow: '0 2px 8px rgba(10, 31, 68, 0.03)',
                marginBottom: '0.85rem'
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

        {/* Live Trustindex Google Reviews Widget */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <TrustIndexWidget widgetId="1525a98807b64976fa96ed4dc80" />
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
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
    </section>
  );
};
