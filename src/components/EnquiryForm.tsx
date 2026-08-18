import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Calendar, MapPin, User, Mail, Sparkles, Stethoscope, Clock, ShieldCheck, X } from 'lucide-react';
import { centresData } from '../data/centres';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';

interface EnquiryFormProps {
  defaultService?: string;
  defaultCentre?: string;
  defaultDoctor?: string;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultService = '',
  defaultCentre = '',
  defaultDoctor = '',
  onSuccess,
  title = 'Book Your Priority Orthopedic Consultation',
  subtitle = 'Schedule an appointment at your nearest SOS Centre or request a 24/7 Home X-Ray visit.',
  isModal = false,
  onClose
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService || servicesData[0]?.id || '',
    centre: defaultCentre || centresData[0]?.id || '',
    doctor: defaultDoctor || '',
    preferredDate: '',
    message: '',
    honeypot: '' // Spam filter
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      console.warn('Spam detected via honeypot');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate serverless endpoint delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="consultation-card-wrapper animate-fade-in" style={{ borderRadius: isModal ? '24px' : undefined }}>
        <div className="consultation-header-banner" style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)', padding: isModal ? '1.75rem 1.75rem 1.25rem 1.75rem' : undefined, textAlign: 'center' }}>
          {isModal && onClose && (
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#ffffff',
                transition: 'background 0.2s ease',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>
          )}
          <div className="consultation-header-badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.25)', borderColor: 'rgba(74, 222, 128, 0.4)', color: '#86efac', margin: '0 auto 0.75rem auto' }}>
            <CheckCircle2 size={14} />
            <span>Appointment Request Received</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', textAlign: 'center' }}>
            Thank You, {formData.fullName}!
          </h3>
          <p style={{ color: '#bbf7d0', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            Our medical desk at SOS has received your request. We will reach out to you at <strong>{formData.phone}</strong> shortly to confirm your consultation timing.
          </p>
        </div>

        <div className="consultation-form-body" style={{ textAlign: 'center', padding: isModal ? '1.5rem' : undefined }}>
          <div style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: '#166534', letterSpacing: '0.05em' }}>
                🚨 Immediate Assistance Required?
              </span>
              <span style={{ fontSize: '0.88rem', color: '#15803d' }}>
                Call our direct medical emergency hotline:
              </span>
            </div>
            <a 
              href="tel:7070706505" 
              className="btn btn-primary"
              style={{ background: '#16a34a', borderColor: '#16a34a', padding: '0.6rem 1.25rem', fontSize: '0.92rem' }}
            >
              <Phone size={15} /> Call 7070706505
            </a>
          </div>

          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                service: servicesData[0]?.id || '',
                centre: centresData[0]?.id || '',
                doctor: '',
                preferredDate: '',
                message: '',
                honeypot: ''
              });
            }}
            className="btn btn-secondary btn-md"
          >
            Book Another Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="consultation-card-wrapper animate-fade-in" style={{ borderRadius: isModal ? '24px' : undefined }}>
      {/* Top Banner Header (Centered without phone number) */}
      <div className="consultation-header-banner" style={{ padding: isModal ? '1.4rem 1.5rem 1.1rem 1.5rem' : undefined, textAlign: 'center' }}>
        {isModal && onClose && (
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
          >
            <X size={18} />
          </button>
        )}

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <div className="consultation-header-badge" style={{ margin: '0 auto 0.75rem auto' }}>
            <Sparkles size={13} />
            <span>Priority Consultation Desk</span>
          </div>

          <h3 className="consultation-header-title" style={{ fontSize: isModal ? '1.35rem' : '1.7rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.25, textAlign: 'center', margin: '0 auto 0.4rem auto' }}>
            {title}
          </h3>

          <p className="consultation-header-sub" style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, maxWidth: '580px', margin: '0 auto', textAlign: 'center' }}>
            {subtitle}
          </p>
        </div>

        {/* Feature Micro-Badges Bar */}
        <div className="consultation-perks-bar" style={{ justifyContent: 'center' }}>
          <div className="consultation-perk-item">
            <CheckCircle2 size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <span>4 SOS Centres</span>
          </div>
          <div className="consultation-perk-item">
            <Clock size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <span>Zero Wait-Time OPD</span>
          </div>
          <div className="consultation-perk-item">
            <Stethoscope size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <span>Senior Surgeon Care</span>
          </div>
          <div className="consultation-perk-item">
            <ShieldCheck size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <span>Home X-Ray Available</span>
          </div>
        </div>
      </div>

      {/* Form Content Body */}
      <form onSubmit={handleSubmit} className="consultation-form-body" style={{ padding: isModal ? '1.5rem 1.5rem 1.5rem 1.5rem' : undefined }}>
        {/* Anti-spam honeypot */}
        <input 
          type="text" 
          name="website_url" 
          value={formData.honeypot} 
          onChange={e => setFormData({ ...formData, honeypot: e.target.value })} 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off" 
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          {/* Grid Row 1: Full Name & Mobile Phone */}
          <div className="grid-2" style={{ gap: '1.15rem' }}>
            {/* Full Name */}
            <div>
              <label className="consultation-field-label">
                Full Name *
              </label>
              <div className="consultation-input-wrapper">
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="consultation-input-field"
                  style={{ borderColor: errors.fullName ? '#ef4444' : undefined }}
                />
                <User size={18} className="consultation-input-icon" />
              </div>
              {errors.fullName && (
                <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block', fontWeight: 600 }}>
                  ⚠️ {errors.fullName}
                </span>
              )}
            </div>

            {/* Mobile Phone */}
            <div>
              <label className="consultation-field-label">
                Mobile Phone *
              </label>
              <div className="consultation-input-wrapper">
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="consultation-input-field"
                  style={{ borderColor: errors.phone ? '#ef4444' : undefined }}
                />
                <Phone size={18} className="consultation-input-icon" />
              </div>
              {errors.phone && (
                <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block', fontWeight: 600 }}>
                  ⚠️ {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Grid Row 2: Service & Centre */}
          <div className="grid-2" style={{ gap: '1.15rem' }}>
            {/* Service Selection */}
            <div>
              <label className="consultation-field-label">
                Speciality Service / Condition
              </label>
              <div className="consultation-input-wrapper">
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  className="consultation-input-field consultation-select-field"
                >
                  {servicesData.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
                <Stethoscope size={18} className="consultation-input-icon" />
              </div>
            </div>

            {/* Preferred Mumbai Centre */}
            <div>
              <label className="consultation-field-label">
                Preferred Centre Location
              </label>
              <div className="consultation-input-wrapper">
                <select
                  value={formData.centre}
                  onChange={e => setFormData({ ...formData, centre: e.target.value })}
                  className="consultation-input-field consultation-select-field"
                >
                  {centresData.map(c => (
                    <option key={c.id} value={c.id}>{c.area} Centre ({c.landmark})</option>
                  ))}
                </select>
                <MapPin size={18} className="consultation-input-icon" />
              </div>
            </div>
          </div>

          {/* Grid Row 3: Doctor Choice & Preferred Date */}
          <div className="grid-2" style={{ gap: '1.15rem' }}>
            {/* Doctor Selection (Optional) */}
            <div>
              <label className="consultation-field-label">
                Select Senior Surgeon (Optional)
              </label>
              <div className="consultation-input-wrapper">
                <select
                  value={formData.doctor}
                  onChange={e => setFormData({ ...formData, doctor: e.target.value })}
                  className="consultation-input-field consultation-select-field"
                >
                  <option value="">Any Available Senior Specialist</option>
                  {doctorsData.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.specialization.split('&')[0]})</option>
                  ))}
                </select>
                <User size={18} className="consultation-input-icon" />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="consultation-field-label">
                Preferred Visit Date
              </label>
              <div className="consultation-input-wrapper">
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="consultation-input-field"
                  style={{ paddingLeft: '2.75rem' }}
                />
                <Calendar size={18} className="consultation-input-icon" />
              </div>
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="consultation-field-label">
              Email Address <span style={{ fontWeight: 400, color: '#64748b' }}>(Optional)</span>
            </label>
            <div className="consultation-input-wrapper">
              <input
                type="email"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="consultation-input-field"
                style={{ borderColor: errors.email ? '#ef4444' : undefined }}
              />
              <Mail size={18} className="consultation-input-icon" />
            </div>
            {errors.email && (
              <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block', fontWeight: 600 }}>
                ⚠️ {errors.email}
              </span>
            )}
          </div>

          {/* Symptoms / Details */}
          <div>
            <label className="consultation-field-label">
              Symptoms / Medical Requirement
            </label>
            <textarea
              rows={3}
              placeholder="Describe joint pain, spine condition, fracture, or request for 24/7 Home X-Ray..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="consultation-textarea-field"
            />
          </div>

          {/* Action Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="consultation-submit-btn"
              style={{ opacity: isSubmitting ? 0.75 : 1 }}
            >
              {isSubmitting ? (
                <>Reserving Priority Appointment...</>
              ) : (
                <>
                  Confirm Priority Consultation <Send size={17} />
                </>
              )}
            </button>
          </div>

          {/* Footer Lock Assurance */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', color: '#64748b', fontSize: '0.78rem', marginTop: '0.2rem' }}>
            <ShieldCheck size={15} style={{ color: '#0284c7', flexShrink: 0 }} />
            <span>100% Confidential • Instant Call Back Within 15 Minutes</span>
          </div>
        </div>
      </form>

      <style>{`
        @media (max-width: 768px) {
          .consultation-header-banner {
            padding: 1.5rem 1.25rem 1.15rem 1.25rem !important;
            border-radius: 16px 16px 0 0 !important;
            text-align: center !important;
          }

          .consultation-header-title {
            font-size: 1.3rem !important;
            line-height: 1.25 !important;
            text-align: center !important;
          }

          .consultation-header-sub {
            font-size: 0.82rem !important;
            text-align: center !important;
          }

          .consultation-perks-bar {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.65rem 0.5rem !important;
            margin-top: 1rem !important;
            padding-top: 0.85rem !important;
            justify-content: center !important;
          }

          .consultation-perk-item {
            font-size: 0.76rem !important;
            gap: 0.35rem !important;
            justify-content: center !important;
          }

          .consultation-form-body {
            padding: 1.35rem 1.25rem !important;
            border-radius: 0 0 16px 16px !important;
          }

          .consultation-submit-btn {
            min-height: 48px !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </div>
  );
};
