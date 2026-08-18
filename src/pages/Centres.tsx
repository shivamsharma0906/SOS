import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CentreCard } from '../components/CentreCard';
import { centresData } from '../data/centres';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { MapPin } from 'lucide-react';

export const Centres: React.FC = () => {
  const centreAreas = centresData.map(c => c.area).join(', ');
  const fullCentresCount = centresData.filter(c => c.type === 'centre').length;
  const outreachCount = centresData.filter(c => c.type === 'outreach-clinic').length;

  return (
    <>
      <SEOHead
        title={`Orthopedic Centres & Outreach Clinics | ${centreAreas} | SOS`}
        description={`Find your nearest SOS Speciality Orthopedic Service centre or outreach clinic: ${centreAreas}. Specialist OPD consultations, digital X-ray diagnostics, and care.`}
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
            <MapPin size={15} />
            <span>{centresData.length} Locations ({fullCentresCount} Full Centres &bull; {outreachCount} Outreach Clinic)</span>
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', maxWidth: '800px', margin: '0 auto 0.85rem auto' }}>
            SOS Orthopedic Centres & Outreach Clinics
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.05rem' }}>
            Modern diagnostic imaging, express specialist OPD consultations, and digital X-ray services across {centreAreas}.
          </p>
        </div>
      </section>

      {/* Responsive Auto-Fill Grid */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {centresData.map(centre => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
