import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CentreCard } from '../components/CentreCard';
import { centresData } from '../data/centres';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { MapPin } from 'lucide-react';

export const Centres: React.FC = () => {
  return (
    <>
      <SEOHead
        title="5 Orthopedic Centres in Mumbai | Borivali, Kandivali, Malad, Goregaon, Andheri | SOS"
        description="Find your nearest SOS Speciality Orthopedic Service centre in Mumbai: Borivali West, Kandivali West, Malad West, Goregaon West, and Andheri West. Addresses, maps & timings."
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
            <MapPin size={16} />
            <span>5 Mumbai Suburb Locations</span>
          </div>

          <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '1.25rem', maxWidth: '800px', margin: '0 auto 1.25rem auto' }}>
            SOS Orthopedic Centres & Clinics
          </h1>

          <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '720px', fontSize: '1.1rem' }}>
            State-of-the-art diagnostic imaging, express OPD consultations, and digital X-ray desks in Borivali, Kandivali, Malad, Goregaon, and Andheri.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {centresData.map(centre => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
