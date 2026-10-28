import React, { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';
import { BUSINESS_INFO } from '../config/business';

export const ConsultationBanner: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <>
      <section className="editorial-consultation-banner" aria-label="Consult Our Orthopedic Specialists">
        <div className="container">
          <div className="consultation-banner-wrapper">
            <div className="consultation-banner-content">
              <span className="consultation-eyebrow">
                PERSONALIZED CLINICAL EVALUATION
              </span>
              <h2 className="consultation-heading">
                Consult Our Orthopedic Specialists
              </h2>
              <p className="consultation-copy">
                Schedule an in-clinic OPD consultation across our Mumbai centres or request an independent second opinion on your MRI, CT, and X-ray reports with our senior surgical team.
              </p>

              <div className="consultation-actions-row">
                <button
                  type="button"
                  onClick={() => setIsAppointmentOpen(true)}
                  className="btn btn-primary btn-lg"
                  style={{ gap: '0.5rem', backgroundColor: '#ffffff', color: 'var(--navy-primary)' }}
                >
                  <Calendar size={18} /> Book an Appointment
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="btn btn-secondary btn-lg"
                  style={{ gap: '0.5rem', borderColor: 'rgba(255, 255, 255, 0.4)', color: '#ffffff', backgroundColor: 'transparent' }}
                >
                  <Phone size={18} /> Call Now: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="consultation-banner-image-wrap">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/clinic-kandivali-480w.webp 480w, /assets/clinic-kandivali.webp 768w"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <img 
                  src="/assets/clinic-kandivali.webp" 
                  alt="SOS Speciality Orthopedic Clinic Mumbai - Kandivali West" 
                  className="consultation-clinic-img"
                  style={{ objectPosition: 'center 15%' }}
                  loading="lazy"
                  decoding="async"
                  width={768}
                  height={1024}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultService="General Orthopedic Care"
      />
    </>
  );
};

export default ConsultationBanner;
