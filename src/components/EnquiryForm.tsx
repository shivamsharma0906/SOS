import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Calendar, MapPin, User, Mail, Sparkles, Stethoscope, Clock, ShieldCheck } from 'lucide-react';
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
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultService = '',
  defaultCentre = '',
  defaultDoctor = '',
  onSuccess,
  title = 'Book Your Priority Orthopedic Consultation',
  subtitle = 'Fill in your details to schedule an appointment at your nearest Mumbai SOS Centre or request a Home X-Ray visit.'
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
      <div className="consultation-card-wrapper animate-fade-in">
        <div className="consultation-header-banner" style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)' }}>
          <div className="consultation-header-badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.25)', borderColor: 'rgba(74, 222, 128, 0.4)', color: '#86efac' }}>
            <CheckCircle2 size={14} />
            <span>Appointment Request Received</span>
          </div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            Thank You, {formData.fullName}!
          </h3>
          <p style={{ color: '#bbf7d0', fontSize: '0.95rem', maxWidth: '600px' }}>
            Our medical desk at SOS has received your request. We will reach out to you at <strong>{formData.phone}</strong> shortly to confirm your consultation timing.
          </p>
        </div>

        <div className="consultation-form-body" style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#166534', letterSpacing: '0.05em' }}>
                🚨 Immediate Assistance Required?
              </span>
              <span style={{ fontSize: '0.9rem', color: '#15803d' }}>
                Call our direct medical emergency hotline:
              </span>
            </div>
            <a 
              href="tel:7070706505" 
              className="btn btn-primary"
              style={{ background: '#16a34a', borderColor: '#16a34a', padding: '0.65rem 1.4rem', fontSize: '0.95rem' }}
            >
              <Phone size={16} /> Call 7070706505
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
    <div className="consultation-card-wrapper animate-fade-in">
      {/* Top Banner Header */}
      <div className="consultation-header-banner">
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div className="consultation-header-badge">
              <Sparkles size={13} />
              <span>Priority Consultation Desk</span>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginTop: '0.4rem', lineHeight: 1.5, maxWidth: '620px' }}>
              {subtitle}
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            padding: '0.75rem 1.1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(2, 132, 199, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8'
            }}>
              <Phone size={20} />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#93c5fd', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                Helpline Desk
              </span>
              <a href="tel:7070706505" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', textDecoration: 'none' }}>
                7070706505
              </a>
            </div>
          </div>
        </div>

        {/* Feature Micro-Badges Bar */}
        <div className="consultation-perks-bar">
          <div className="consultation-perk-item">
            <CheckCircle2 size={16} style={{ color: '#38bdf8' }} />
            <span>5 Mumbai OPD Centres</span>
          </div>
          <div className="consultation-perk-item">
            <Clock size={16} style={{ color: '#38bdf8' }} />
            <span>Zero Wait-Time OPD</span>
          </div>
          <div className="consultation-perk-item">
            <Stethoscope size={16} style={{ color: '#38bdf8' }} />
            <span>Senior Surgeon Care</span>
          </div>
          <div className="consultation-perk-item">
            <ShieldCheck size={16} style={{ color: '#38bdf8' }} />
            <span>Home X-Ray Available</span>
          </div>
        </div>
      </div>

      {/* Form Content Body */}
      <form onSubmit={handleSubmit} className="consultation-form-body">
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Grid Row 1: Full Name & Mobile Phone */}
          <div className="grid-2" style={{ gap: '1.25rem' }}>
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

          {/* Grid Row 2: Service & Mumbai Centre */}
          <div className="grid-2" style={{ gap: '1.25rem' }}>
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
                Preferred Mumbai Location
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
          <div className="grid-2" style={{ gap: '1.25rem' }}>
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
              Email Address <span style={{ fontWeight: 400, color: '#64748b' }}>(Optional for digital receipt)</span>
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
              placeholder="Describe your joint pain, spine condition, fracture, or request for Home X-Ray service..."
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
                  Confirm Priority Consultation <Send size={18} />
                </>
              )}
            </button>
          </div>

          {/* Footer Lock Assurance */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.8rem', marginTop: '0.2rem' }}>
            <ShieldCheck size={16} style={{ color: '#0284c7' }} />
            <span>100% Confidential • Instant Call Back Within 15 Minutes</span>
          </div>
        </div>
      </form>
    </div>
  );
};
