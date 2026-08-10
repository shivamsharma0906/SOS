import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Calendar, MapPin, User, Mail } from 'lucide-react';
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
  title = 'Book Your Appointment',
  subtitle = 'Get priority consultation with expert orthopedic surgeons across Mumbai'
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

    // Simulate serverless endpoint delivery / Formspree delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          boxShadow: '0 12px 36px rgba(10, 31, 68, 0.05)'
        }}
      >
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#dcfce7',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          color: '#16a34a'
        }}>
          <CheckCircle2 size={36} />
        </div>

        <h3 className="heading-md" style={{ color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
          Appointment Request Received!
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Thank you <strong>{formData.fullName}</strong>. Our medical desk at SOS will call you at <strong>{formData.phone}</strong> shortly to confirm your consultation timing.
        </p>

        <div style={{
          backgroundColor: 'var(--blue-soft)',
          padding: '1rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.88rem',
          color: 'var(--navy-primary)',
          marginBottom: '1.5rem'
        }}>
          🚨 Urgent orthopedic emergency? Call helpline directly at <a href="tel:7070706505" style={{ fontWeight: 800 }}>7070706505</a>
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
          className="btn btn-secondary btn-sm"
        >
          Book Another Consultation
        </button>
      </div>
    );
  }

  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem',
        border: '1px solid rgba(10, 31, 68, 0.05)',
        boxShadow: '0 12px 36px rgba(10, 31, 68, 0.06)'
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 className="heading-md" style={{ color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {/* Honeypot anti-spam input */}
        <input 
          type="text" 
          name="website_url" 
          value={formData.honeypot} 
          onChange={e => setFormData({ ...formData, honeypot: e.target.value })} 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off" 
        />

        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
            Full Name *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: errors.fullName ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <User size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          </div>
          {errors.fullName && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>{errors.fullName}</span>}
        </div>

        {/* Phone & Email Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {/* Mobile Phone */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
              Mobile Phone *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem 0.75rem 2.4rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.phone ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <Phone size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            </div>
            {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>{errors.phone}</span>}
          </div>

          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
              Email Address (Optional)
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem 0.75rem 2.4rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.email ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <Mail size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            </div>
            {errors.email && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>{errors.email}</span>}
          </div>
        </div>

        {/* Preferred Service & Preferred Centre */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
              Service / Condition
            </label>
            <select
              value={formData.service}
              onChange={e => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                outline: 'none',
                backgroundColor: '#ffffff'
              }}
            >
              {servicesData.map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
              Preferred Mumbai Centre
            </label>
            <select
              value={formData.centre}
              onChange={e => setFormData({ ...formData, centre: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                outline: 'none',
                backgroundColor: '#ffffff'
              }}
            >
              {centresData.map(c => (
                <option key={c.id} value={c.id}>{c.area} Centre</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
            Preferred Date of Visit
          </label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.preferredDate}
            onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Additional Comments */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
            Symptoms / Additional Details
          </label>
          <textarea
            rows={3}
            placeholder="Briefly describe your bone, joint, spine, or X-ray requirement..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontSize: '0.9rem',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg"
          style={{ width: '100%', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? 'Confirming Appointment...' : 'Submit Appointment Request'} <Send size={18} />
        </button>

        <p style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center', marginTop: '0.2rem' }}>
          🔒 Your contact details are kept strictly confidential per SOS privacy policies.
        </p>
      </form>
    </div>
  );
};
