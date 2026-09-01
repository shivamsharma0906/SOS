import React, { useState } from 'react';
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
  const [selectedDoctorForForm, setSelectedDoctorForForm] = useState('');

  return (
    <>
      <SEOHead
        title="SOS Speciality Orthopedic Clinic | Complete Orthopedic Care"
        description="SOS Speciality Orthopedic Clinic: 24/7 Home X-Ray, Bone, Joint, Spine & Sports Injury care across Kandivali, Malad, Borivali, and Goregaon. 20-30 min emergency dispatch."
      />

      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Why SOS Clinical Standards & Emergency Access */}
      <WhySOS />

      {/* 3. Core Speciality Units */}
      <ServicesCards />

      {/* 4. Consulting Orthopedic Specialists */}
      <section style={{ padding: '4.5rem 0' }} id="our-doctors" className="section-light">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
                Medical Leadership
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '0.5rem', color: 'var(--navy-primary)' }}>
                Consulting Orthopedic <span style={{ color: 'var(--blue-brand)' }}>Specialists</span>
              </h2>
              <p className="subhead" style={{ margin: 0 }}>
                Direct consultation with experienced orthopedic surgeons specializing in joint replacement, spine care, and trauma.
              </p>
            </div>
            <Link to="/doctors" className="btn btn-secondary btn-md desktop-only" style={{ gap: '0.45rem' }}>
              View All Doctors <ArrowRight size={16} />
            </Link>
          </div>

          <div 
            className="doctors-grid-4col"
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '1.25rem'
            }}
          >
            {doctorsData.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor} 
                onSelectDoctor={(docId) => setSelectedDoctorForForm(docId)}
              />
            ))}
          </div>

          <div className="mobile-only" style={{ textAlign: 'center', marginTop: '1.75rem', display: 'none' }}>
            <Link to="/doctors" className="btn btn-secondary btn-md" style={{ width: '100%', justifyContent: 'center', gap: '0.45rem' }}>
              View All Specialist Doctors <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Informational Video Section */}
      <InfoVideo />

      {/* 6. Patient Recovery Stories */}
      <TestimonialCarousel />

      {/* 7. Centre Network Overview */}
      <section style={{ padding: '4.5rem 0' }} id="our-centres" className="section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Locations & Outreach
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.85rem', color: 'var(--navy-primary)' }}>
              Our Centres & <span style={{ color: 'var(--blue-brand)' }}>Outreach Clinics</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Advanced orthopedic consultation facilities and 24/7 digital X-ray dispatch network across Mumbai.
            </p>
          </div>

          <div 
            className="centres-grid-4col"
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '1.25rem'
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

      {/* 8. Priority Consultation Booking (Original Form Destination) */}
      <section style={{ padding: '4.5rem 0' }} id="book-consultation" className="section-tint">
        <div className="container container-narrow">
          <EnquiryForm
            defaultDoctor={selectedDoctorForForm}
            title="Book Your Priority Orthopedic Consultation"
            subtitle="Schedule an appointment at your nearest SOS Centre or request a 24/7 Home X-Ray visit."
          />
        </div>
      </section>
    </>
  );
};

export default Home;
