import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Activity, Award, ArrowRight, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { ServicesCards } from '../components/ServicesCards';
import { ConditionsGrid } from '../components/ConditionsGrid';
import { DoctorCard } from '../components/DoctorCard';
import { CentreCard } from '../components/CentreCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { EnquiryForm } from '../components/EnquiryForm';
import { HexBadge } from '../components/HexBadge';
import { doctorsData } from '../data/doctors';
import { centresData } from '../data/centres';
import { FaWhatsapp } from 'react-icons/fa';
import { InfoVideo } from '../components/InfoVideo';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SOS Speciality Orthopedic Service | Complete Orthopedic Care Mumbai"
        description="SOS Speciality Orthopedic Service - Complete Orthopedic Care across Borivali, Kandivali, Malad, Goregaon, and Andheri. 24/7 Home X-Ray, Bone, Joint, Spine & Sports Injury care."
      />

      {/* Hero Banner */}
      <Hero />

      {/* Special Feature Highlight: 24/7 Home X-Ray Service */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '2.5rem',
              alignItems: 'center',
              backgroundColor: 'var(--blue-soft)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(2, 132, 199, 0.1)'
            }}
            className="xray-banner-grid"
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#fee2e2', color: '#dc2626', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(220, 38, 38, 0.15)' }}>
                🚨 Emergency & Bedridden Patient Care
              </div>

              <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>
                Need an X-Ray at Home in Mumbai?
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                SOS brings certified high-frequency digital radiograph machines directly to your house across <strong>Borivali, Kandivali, Malad, Goregaon, and Andheri</strong>. Save bedridden senior citizens and trauma victims the pain of hospital transport.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.92rem', color: 'var(--navy-primary)', marginBottom: '1.75rem', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="var(--blue-brand)" /> Instant Digital Preview
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="var(--blue-brand)" /> Senior Radiologist Report
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="var(--blue-brand)" /> Certified Technicians
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:7070706505" className="btn btn-primary">
                  <Phone size={18} /> Book Home X-Ray: 7070706505
                </a>
                <a
                  href="https://wa.me/917070706505?text=Hello%20SOS,%20I%20need%20a%20Home%20X-Ray%20service%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp size={18} /> WhatsApp Booking
                </a>
              </div>
            </div>

            <div
              className="glass-panel-light"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <HexBadge iconName="xray" size={72} active />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--navy-primary)' }}>
                Rapid Doorstep Dispatch
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Our mobile technician teams are stationed across the 5 western suburbs for fast response.
              </p>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--blue-brand)' }}>
                Available 24 Hours / 7 Days
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .xray-banner-grid {
              grid-template-columns: 1fr !important;
              padding: 1.5rem 1.25rem !important;
            }
          }
          @media (max-width: 767px) {
            .xray-banner-grid > div:first-child > div:first-child {
              max-width: 100% !important;
              white-space: normal !important;
              font-size: 0.72rem !important;
              line-height: 1.3 !important;
              padding: 0.4rem 0.75rem !important;
            }
            .xray-banner-grid .btn {
              width: 100% !important;
              white-space: normal !important;
              text-align: center !important;
              justify-content: center !important;
              font-size: 0.92rem !important;
              height: auto !important;
              min-height: 48px !important;
              padding: 0.65rem 1rem !important;
            }
          }
        `}</style>
      </section>

      {/* Services Grid Section */}
      <ServicesCards />

      {/* Conditions Treated Section */}
      <ConditionsGrid />

      {/* Our Doctors Showcase */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-subtle)' }} id="our-doctors">
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
              View All 5 Doctor Profiles <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {doctorsData.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Informational Video Section */}
      <InfoVideo />

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 5 Confirmed Centres Overview */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }} id="our-centres">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Mumbai Locations
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
              Our 5 Speciality Centres
            </h2>
            <p className="subhead" style={{ margin: '0 auto' }}>
              Conveniently located across Borivali, Kandivali, Malad, Goregaon, and Andheri with state-of-the-art diagnostic facilities and expert OPD consultations.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {centresData.slice(0, 3).map((centre) => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/centres" className="btn btn-secondary btn-lg" style={{ gap: '0.5rem' }}>
              Explore All 5 Centres & Map Directions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Appointment Booking Form Section */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }} id="book-consultation">
        <div className="container container-narrow">
          <EnquiryForm
            title="Book Your Priority Orthopedic Consultation"
            subtitle="Fill in your details to schedule an appointment at your nearest Mumbai SOS Centre or request a Home X-Ray visit."
          />
        </div>
      </section>
    </>
  );
};
