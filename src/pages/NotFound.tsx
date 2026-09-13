import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MedicalCrossMotif } from '../components/DecorativeMotif';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead title="Page Not Found | SOS Speciality Orthopedic Clinic" noIndex={true} />

      <section
        className="page-hero-section"
        style={{
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '5rem 0'
        }}
      >
        <MedicalCrossMotif size={70} top="12%" left="6%" opacity={0.04} />
        <MedicalCrossMotif size={85} bottom="15%" right="6%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '640px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: 'var(--blue-soft)',
              color: 'var(--blue-brand)',
              padding: '0.35rem 0.95rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.82rem',
              fontWeight: 700,
              border: '1px solid rgba(2, 132, 199, 0.25)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <AlertTriangle size={15} />
            <span>404 Error</span>
          </div>

          <h1
            className="heading-xl"
            style={{
              color: 'var(--navy-primary)',
              marginBottom: '1rem',
              lineHeight: 1.15
            }}
          >
            Page <span style={{ color: 'var(--blue-brand)' }}>Not Found</span>
          </h1>

          <p
            className="subhead"
            style={{
              color: 'var(--text-secondary)',
              margin: '0 auto 2.25rem auto',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}
          >
            The page you are looking for might have been moved, renamed, or does not exist. Please return to the homepage to find clinic details, specialist doctors, and orthopedic care services.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link
              to="/"
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem' }}
            >
              <Home size={18} /> Back to Home
            </Link>
            <Link
              to="/doctors"
              className="btn btn-secondary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem' }}
            >
              View Specialists <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
