import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Phone, Calendar, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { WhySOS } from '../components/WhySOS';
import { ServicesCards } from '../components/ServicesCards';
import { DoctorCard } from '../components/DoctorCard';
import { CentreCard } from '../components/CentreCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { AppointmentModal } from '../components/AppointmentModal';
import { doctorsData } from '../data/doctors';
import { centresData } from '../data/centres';
import { InfoVideo } from '../components/InfoVideo';
import { BUSINESS_INFO } from '../config/business';

const homeFAQs = [
  {
    q: "What conditions are treated at SOS Speciality Orthopedic Clinic?",
    a: "We specialize in comprehensive musculoskeletal care, including robotic joint replacement (knee and hip), arthroscopic ACL and meniscus repairs, minimally invasive spine decompression for sciatica and disc herniations, sports injury rehabilitation, pediatric fractures, and complex trauma reconstruction."
  },
  {
    q: "How quickly can a Home X-Ray technician arrive at my home in Mumbai?",
    a: "Our mobile digital radiography team operates 24/7 with a 20–30 minute emergency dispatch window across Western Mumbai, including Kandivali, Borivali, Malad, Goregaon, and neighboring areas. Reports are verified and transmitted digitally to senior orthopedic surgeons immediately."
  },
  {
    q: "Which clinic locations are available for in-person doctor consultations?",
    a: "SOS Speciality Orthopedic Clinic operates fully equipped consultation centres and outreach clinics across Kandivali West, Borivali West, Malad West, and Goregaon West. Each location offers specialist OPD timings, digital diagnostic reviews, and cast/dressing care."
  },
  {
    q: "Does joint pain or back pain always require surgery?",
    a: "No. At SOS, we follow an evidence-based conservative care philosophy. Over 85% of orthopedic conditions—including early knee osteoarthritis, postural back pain, and tendon sprains—are successfully managed with targeted physiotherapy, lifestyle ergonomic modifications, and guided joint preservation protocols before any surgical intervention is considered."
  },
  {
    q: "How do I schedule an appointment with a senior orthopedic surgeon?",
    a: "You can book directly by calling our 24/7 central desk at 093211 44580, contacting us on WhatsApp, or clicking the 'Book Appointment' button on this website to select your preferred doctor, clinic location, and consultation time."
  }
];

export const Home: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <>
      <SEOHead
        title="Orthopedic Clinic in Mumbai | SOS Speciality"
        description="SOS Orthopedic Clinic in Mumbai offers expert care for bone, joint, spine and sports injuries, with consultations and 24/7 home X-ray services."
        canonicalUrl={`${BUSINESS_INFO.website}/`}
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
                Our <span style={{ color: 'var(--blue-brand)' }}>Doctors</span>
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
            className="doctors-grid-3col"
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {doctorsData.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor} 
                onSelectDoctor={() => {
                  setSelectedDoctor(doctor.name);
                  setIsAppointmentOpen(true);
                }}
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

      {/* 5. Home X-Ray Services Section Header & Info */}
      <section style={{ padding: '4rem 0 1rem 0' }} id="home-xray-services" className="section-tint">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              24/7 Mobile Radiography
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.85rem', color: 'var(--navy-primary)' }}>
              Home X-ray <span style={{ color: 'var(--blue-brand)' }}>Services</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Hospital-grade portable digital radiography dispatched directly to your residence within 20–30 minutes across Mumbai. Zero transit pain for elderly and acute fracture patients.
            </p>
          </div>
        </div>
      </section>

      {/* Informational Video Component */}
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
              Our Clinic <span style={{ color: 'var(--blue-brand)' }}>Locations</span>
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

      {/* 8. Frequently Asked Questions */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }} id="faqs">
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Patient Support
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '0.85rem', color: 'var(--navy-primary)' }}>
              Frequently Asked <span style={{ color: 'var(--blue-brand)' }}>Questions</span>
            </h2>
            <p className="subhead" style={{ margin: '0 auto', color: 'var(--text-secondary)' }}>
              Clear clinical answers regarding consultations, joint preservation protocols, and 24/7 home diagnostic services.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {homeFAQs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 4px 16px rgba(10, 31, 68, 0.06)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={20} 
                      color="#0284c7" 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.25s ease',
                        flexShrink: 0
                      }} 
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', backgroundColor: '#f8fafc', color: '#475569', fontSize: '0.98rem', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Book an Appointment CTA Section */}
      <section style={{ padding: '4.5rem 0', background: 'linear-gradient(135deg, #07152e 0%, #0a2550 100%)', color: '#ffffff' }} id="book-appointment">
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            Direct Clinical Assistance
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', color: '#ffffff' }}>
            Book an <span style={{ color: '#38bdf8' }}>Appointment</span>
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            Schedule an in-clinic consultation at our Kandivali, Borivali, Malad, or Goregaon centres, or request emergency 24/7 doorstep digital X-ray dispatch across Mumbai.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setIsAppointmentOpen(true)}
              className="btn btn-primary btn-lg" 
              style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem', backgroundColor: '#0284c7', borderColor: '#0284c7', cursor: 'pointer' }}
            >
              Schedule Consultation
            </button>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="btn btn-secondary btn-lg" 
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Phone size={18} color="#38bdf8" />
              Call 24/7: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultDoctor={selectedDoctor}
      />
    </>
  );
};

export default Home;
