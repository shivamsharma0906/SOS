import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { WhySOS } from '../components/WhySOS';
import { ServicesCards } from '../components/ServicesCards';
import { DoctorCard } from '../components/DoctorCard';
import { CentreCard } from '../components/CentreCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { EnquiryForm } from '../components/EnquiryForm';
import { doctorsData } from '../data/doctors';
import { centresData } from '../data/centres';
import { InfoVideo } from '../components/InfoVideo';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SOS Speciality Orthopedic Service | Complete Orthopedic Care"
        description="SOS Speciality Orthopedic Service: 24/7 Home X-Ray, Bone, Joint, Spine & Sports Injury care across Kandivali, Nanded, Ambernath, and Murbad. 20-30 min emergency dispatch."
      />

      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Why SOS Clinical Standards & Emergency Access */}
      <WhySOS />

      {/* 3. Core Speciality Units */}
      <ServicesCards />

      {/* 4. Consulting Orthopedic Specialists */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }} id="our-doctors">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
                Medical Leadership
              </div>
              <h2 className="heading-lg">
                Meet Our Orthopedic Specialists
              </h2>
            </div>

            <Link to="/doctors" className="btn btn-secondary btn-sm" style={{ gap: '0.4rem' }}>
              View All Surgeon Profiles <ArrowRight size={15} />
            </Link>
          </div>

          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {doctorsData.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Informational Video Section */}
      <InfoVideo />

      {/* 6. Patient Recovery Stories */}
      <TestimonialCarousel />

      {/* 7. Centre Network Overview */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }} id="our-centres">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Locations & Outreach
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.85rem' }}>
              Our Centres & Outreach Clinics
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Specialist OPD consultations, digital X-ray diagnostics, and treatment facilities across {centresData.map(c => c.area).join(', ')}.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {centresData.map((centre) => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/centres" className="btn btn-secondary btn-lg" style={{ gap: '0.5rem' }}>
              Explore All Centres & Facilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Priority Consultation Booking */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }} id="book-consultation">
        <div className="container container-narrow">
          <EnquiryForm
            title="Book Your Priority Orthopedic Consultation"
            subtitle="Schedule an appointment at your nearest SOS Centre or request a 24/7 Home X-Ray visit."
          />
        </div>
      </section>
    </>
  );
};
