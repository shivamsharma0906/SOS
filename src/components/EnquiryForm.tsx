import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  Stethoscope, 
  ShieldCheck, 
  X, 
  Building2, 
  Activity, 
  Sun, 
  Sunset, 
  Moon, 
  ChevronRight,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';
import { centresData } from '../data/centres';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { BUSINESS_INFO } from '../config/business';
import { FaWhatsapp } from 'react-icons/fa';

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
  title,
  subtitle,
  isModal = false,
  onClose
}) => {
  // Appointment Mode: 'in-clinic' | 'home-xray'
  const [appointmentType, setAppointmentType] = useState<'in-clinic' | 'home-xray'>('in-clinic');
  
  // Selected Time Slot
  const [timeSlot, setTimeSlot] = useState<string>('morning');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService || servicesData[0]?.id || '',
    centre: defaultCentre || centresData[0]?.id || '',
    doctor: defaultDoctor || '',
    preferredDate: new Date().toISOString().split('T')[0],
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Sync state when props change
  useEffect(() => {
    if (defaultDoctor) {
      setFormData(prev => ({
        ...prev,
        doctor: defaultDoctor
      }));
    }
  }, [defaultDoctor]);

  useEffect(() => {
    if (defaultCentre) {
      setFormData(prev => ({ ...prev, centre: defaultCentre }));
    }
  }, [defaultCentre]);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  // Selected Doctor Object
  const selectedDoctorObj = doctorsData.find(d => d.id === (formData.doctor || defaultDoctor));
  const selectedCentreObj = centresData.find(c => c.id === formData.centre) || centresData[0];
  const selectedServiceObj = formData.service === 'others' 
    ? { id: 'others', title: 'Others / General Orthopedic OPD' } 
    : (servicesData.find(s => s.id === formData.service) || servicesData[0]);

  const isDoctorSpecific = Boolean(selectedDoctorObj && defaultDoctor);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Patient name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter valid patient name';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select appointment date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);

    const randomToken = `SOS-OPD-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomToken);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  // SUCCESS CONFIRMATION VIEW
  if (isSubmitted) {
    return (
      <div className="hospital-booking-container animate-fade-in" style={{ borderRadius: isModal ? '16px' : '20px' }}>
        <div className="hospital-booking-header" style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)', padding: '1.25rem 1.25rem 1rem 1.25rem', textAlign: 'center', position: 'relative' }}>
          {isModal && onClose && (
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="modal-close-btn"
            >
              <X size={16} />
            </button>
          )}

          <div className="hospital-live-pill" style={{ backgroundColor: 'rgba(34, 197, 94, 0.25)', borderColor: 'rgba(74, 222, 128, 0.4)', color: '#86efac', marginBottom: '0.4rem' }}>
            <CheckCircle2 size={13} />
            <span>OPD Appointment Confirmed</span>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0 0.2rem 0' }}>
            Reference: <span style={{ color: '#86efac', letterSpacing: '0.03em' }}>{bookingRef}</span>
          </h3>
          <p style={{ color: '#bbf7d0', fontSize: '0.82rem', maxWidth: '440px', margin: '0 auto', lineHeight: 1.4 }}>
            Thank you, <strong>{formData.fullName}</strong>. Your consultation request has been registered at SOS Medical Desk.
          </p>
        </div>

        <div style={{ padding: '1.15rem', backgroundColor: '#ffffff' }}>
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem', fontSize: '0.82rem' }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>Consulting Doctor:</span>
                <strong style={{ color: '#0a1f44' }}>{selectedDoctorObj ? selectedDoctorObj.name : 'Senior Specialist Assigned'}</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>Department:</span>
                <strong style={{ color: '#0a1f44' }}>{selectedServiceObj?.title || 'Orthopedic OPD'}</strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>Location:</span>
                <strong style={{ color: '#0a1f44' }}>
                  {appointmentType === 'home-xray' ? '24/7 Home Visit (Mumbai)' : `${selectedCentreObj.area} Centre`}
                </strong>
              </div>

              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>Date & Slot:</span>
                <strong style={{ color: '#0a1f44' }}>
                  {formData.preferredDate} ({timeSlot === 'morning' ? 'Morning 10-1' : timeSlot === 'afternoon' ? 'Afternoon 2-5' : 'Evening 6-9'})
                </strong>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.6rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
                ⚡ Verification Call
              </div>
              <div style={{ fontSize: '0.78rem', color: '#15803d' }}>
                Desk will call at <strong>{formData.phone}</strong> in under 15 mins.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="btn btn-primary"
                style={{ background: '#16a34a', borderColor: '#16a34a', padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                <Phone size={12} /> Call {BUSINESS_INFO.phone}
              </a>
              <a 
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Clinic,%20I%20just%20booked%20appointment%20${bookingRef}%20for%20${encodeURIComponent(formData.fullName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', borderColor: '#bbf7d0', color: '#166534' }}
              >
                <FaWhatsapp size={13} /> WhatsApp
              </a>
            </div>
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
                preferredDate: new Date().toISOString().split('T')[0],
                message: '',
                honeypot: ''
              });
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.55rem' }}
          >
            Book Another Consultation
          </button>
        </div>
      </div>
    );
  }

  // MAIN CLEAN POPUP MODAL FORM
  return (
    <div className="hospital-booking-container animate-fade-in" style={{ borderRadius: isModal ? '16px' : '20px' }}>
      
      {/* ── 1. Clean Modal Header ── */}
      <div className="hospital-booking-header" style={{ padding: '0.9rem 1.15rem 0.85rem 1.15rem' }}>
        
        {/* Top Meta Bar: Status on Left, Close on Right */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <div className="hospital-live-pill">
            <span className="live-pulse-dot" />
            <span>Priority OPD Desk</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(2, 132, 199, 0.25)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                padding: '0.15rem 0.5rem',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                color: '#e0f2fe',
                textDecoration: 'none'
              }}
            >
              <Phone size={10} color="#38bdf8" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {isModal && onClose && (
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="modal-close-btn"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Doctor-Specific Banner OR General Booking Header */}
        {selectedDoctorObj ? (
          <div 
            style={{
              backgroundColor: 'rgba(10, 31, 68, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(56, 189, 248, 0.45)',
              borderRadius: '10px',
              padding: '0.45rem 0.65rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textAlign: 'left'
            }}
          >
            <img 
              src={selectedDoctorObj.photoUrl} 
              alt={`${selectedDoctorObj.name}, Consultant Orthopedic Surgeon at SOS Speciality Orthopedic Clinic`}
              style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #38bdf8', flexShrink: 0 }}
              loading="lazy"
            />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
                  {selectedDoctorObj.name}
                </span>
                <span style={{ fontSize: '0.62rem', fontWeight: 800, backgroundColor: '#0284c7', color: '#ffffff', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                  Consultant Surgeon
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#93c5fd', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {selectedDoctorObj.specialization} &bull; {selectedDoctorObj.experienceYears}+ Yrs Exp
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 0.15rem 0', textAlign: 'left' }}>
              {title || 'Book Priority Hospital Consultation'}
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.35, margin: 0, textAlign: 'left' }}>
              {subtitle || 'Select your preferred doctor, clinic centre, and OPD timing.'}
            </p>
          </div>
        )}
      </div>

      {/* ── 2. Mode Selector: Only shown if not doctor-specific ── */}
      {/* ── 2. Mode Selector: Only shown if not doctor-specific ── */}
      {!isDoctorSpecific && (
        <div style={{ padding: '0.4rem 0.85rem 0 0.85rem', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
            <button
              type="button"
              onClick={() => setAppointmentType('in-clinic')}
              style={{
                padding: '0.45rem 0.5rem',
                borderRadius: '8px 8px 0 0',
                border: '1.5px solid',
                borderColor: appointmentType === 'in-clinic' ? '#0284c7' : 'transparent',
                borderBottom: appointmentType === 'in-clinic' ? '2px solid #0284c7' : 'none',
                backgroundColor: appointmentType === 'in-clinic' ? '#ffffff' : 'transparent',
                color: appointmentType === 'in-clinic' ? '#0a1f44' : '#64748b',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap'
              }}
            >
              <Building2 size={14} color={appointmentType === 'in-clinic' ? '#0284c7' : '#64748b'} />
              <span>Clinic Visit</span>
            </button>

            <button
              type="button"
              onClick={() => setAppointmentType('home-xray')}
              style={{
                padding: '0.45rem 0.5rem',
                borderRadius: '8px 8px 0 0',
                border: '1.5px solid',
                borderColor: appointmentType === 'home-xray' ? '#0284c7' : 'transparent',
                borderBottom: appointmentType === 'home-xray' ? '2px solid #0284c7' : 'none',
                backgroundColor: appointmentType === 'home-xray' ? '#ffffff' : 'transparent',
                color: appointmentType === 'home-xray' ? '#0a1f44' : '#64748b',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap'
              }}
            >
              <Activity size={14} color={appointmentType === 'home-xray' ? '#0284c7' : '#64748b'} />
              <span>Home X-Ray</span>
            </button>
          </div>
        </div>
      )}

      {/* ── 3. Single Continuous Card with Legible Full-Width Fields ── */}
      <form onSubmit={handleSubmit} style={{ padding: '0.85rem', backgroundColor: '#ffffff' }}>
        <input 
          type="text" 
          name="website_url" 
          value={formData.honeypot} 
          onChange={e => setFormData({ ...formData, honeypot: e.target.value })} 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off" 
        />

        <div className="unified-booking-card">
          
          {/* Section 1: Doctor / Speciality */}
          {!isDoctorSpecific ? (
            <div className="form-sub-section">
              <div className="section-inline-header">
                <span className="step-inline-badge">1</span>
                <span>Doctor & Speciality Department</span>
              </div>

              <div className="form-doctor-spec-row">
                <div>
                  <label className="hospital-compact-label">Consulting Surgeon</label>
                  <div className="hospital-input-box">
                    <select
                      value={formData.doctor}
                      onChange={e => setFormData({ ...formData, doctor: e.target.value })}
                      className="hospital-compact-select"
                    >
                      <option value="">Any Senior Specialist (Fastest OPD)</option>
                      {doctorsData.map(d => (
                        <option key={d.id} value={d.id}>
                          {d.name} &bull; {d.specialization.split('&')[0]}
                        </option>
                      ))}
                    </select>
                    <User size={13} className="hospital-compact-icon" />
                  </div>
                </div>

                <div>
                  <label className="hospital-compact-label">Speciality Department</label>
                  <div className="hospital-input-box">
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="hospital-compact-select"
                    >
                      {servicesData.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="others">Others</option>
                    </select>
                    <Stethoscope size={13} className="hospital-compact-icon" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="form-sub-section">
              <div className="section-inline-header">
                <span className="step-inline-badge">1</span>
                <span>Speciality Department / Concern</span>
              </div>
              <div>
                <div className="hospital-input-box">
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="hospital-compact-select"
                  >
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="others">Others / General Orthopedic Consultation</option>
                  </select>
                  <Stethoscope size={13} className="hospital-compact-icon" />
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Location, Date & Session Timing */}
          <div className="form-sub-section">
            <div className="section-inline-header">
              <span className="step-inline-badge">2</span>
              <span>Location & Preferred Session</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* Centre Location */}
              {appointmentType === 'in-clinic' && (
                <div>
                  <label className="hospital-compact-label">Select SOS Mumbai Centre</label>
                  <div className="hospital-input-box">
                    <select
                      value={formData.centre}
                      onChange={e => setFormData({ ...formData, centre: e.target.value })}
                      className="hospital-compact-select"
                    >
                      {centresData.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.landmark})
                        </option>
                      ))}
                    </select>
                    <MapPin size={13} className="hospital-compact-icon" />
                  </div>
                </div>
              )}

              {/* Date + Session Slot (Stacked on mobile, side-by-side on tablet/desktop) */}
              <div className="form-date-slot-row">
                <div>
                  <label className="hospital-compact-label">Visit Date *</label>
                  <div className="hospital-input-box">
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="hospital-compact-input"
                      style={{ paddingLeft: '1.9rem', borderColor: errors.preferredDate ? '#ef4444' : undefined }}
                    />
                    <Calendar size={12} className="hospital-compact-icon" style={{ left: '0.55rem' }} />
                  </div>
                  {errors.preferredDate && (
                    <span className="hospital-compact-err">⚠️ {errors.preferredDate}</span>
                  )}
                </div>

                <div>
                  <label className="hospital-compact-label">OPD Session Slot</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.25rem' }}>
                    <button
                      type="button"
                      onClick={() => setTimeSlot('morning')}
                      className={`compact-slot-btn ${timeSlot === 'morning' ? 'active' : ''}`}
                    >
                      <Sun size={12} />
                      <span>Morning</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTimeSlot('afternoon')}
                      className={`compact-slot-btn ${timeSlot === 'afternoon' ? 'active' : ''}`}
                    >
                      <Sunset size={12} />
                      <span>Noon</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTimeSlot('evening')}
                      className={`compact-slot-btn ${timeSlot === 'evening' ? 'active' : ''}`}
                    >
                      <Moon size={12} />
                      <span>Evening</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Patient Credentials */}
          <div className="form-sub-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <div className="section-inline-header">
              <span className="step-inline-badge">3</span>
              <span>Patient Credentials</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div className="form-creds-row">
                <div>
                  <label className="hospital-compact-label">Patient Name *</label>
                  <div className="hospital-input-box">
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="hospital-compact-input"
                      style={{ borderColor: errors.fullName ? '#ef4444' : undefined }}
                    />
                    <User size={13} className="hospital-compact-icon" />
                  </div>
                  {errors.fullName && (
                    <span className="hospital-compact-err">⚠️ {errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="hospital-compact-label">Mobile / WhatsApp *</label>
                  <div className="hospital-input-box" style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', left: '0.45rem', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: '#0a1f44', fontWeight: 700, fontSize: '0.72rem' }}>
                      <span>🇮🇳 +91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="hospital-compact-input"
                      style={{ paddingLeft: '3.4rem', borderColor: errors.phone ? '#ef4444' : undefined }}
                    />
                  </div>
                  {errors.phone && (
                    <span className="hospital-compact-err">⚠️ {errors.phone}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="hospital-compact-label">Symptoms / Notes <span style={{ fontWeight: 400, color: '#94a3b8' }}>(Optional)</span></label>
                <input
                  type="text"
                  placeholder="e.g. Knee pain, fracture, stiffness"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="hospital-compact-input"
                  style={{ paddingLeft: '0.65rem' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* ── 4. Confirm Button & Single Line Trust ── */}
        <div style={{ marginTop: '0.6rem' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="hospital-compact-submit-btn"
            style={{ opacity: isSubmitting ? 0.75 : 1 }}
          >
            {isSubmitting ? (
              <>Registering Appointment...</>
            ) : (
              <>
                Confirm OPD Consultation <ChevronRight size={15} />
              </>
            )}
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '0.35rem',
            fontSize: '0.68rem',
            color: '#64748b'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
              <ShieldCheck size={11} color="#0284c7" /> Zero Wait
            </span>
            <span>&bull;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
              <Clock size={10} color="#16a34a" /> 15-Min Call Back
            </span>
            <span>&bull;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
              <Award size={11} color="#0284c7" /> Senior Specialist
            </span>
          </div>
        </div>
      </form>

      {/* ── Scoped CSS ── */}
      <style>{`
        .hospital-booking-container {
          background: #ffffff;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(10, 31, 68, 0.12), 0 2px 8px rgba(10, 31, 68, 0.04);
          border: 1px solid rgba(10, 31, 68, 0.1);
          width: 100%;
        }

        .hospital-booking-header {
          background: linear-gradient(135deg, #07152e 0%, #0a1f44 55%, #0369a1 100%);
          color: #ffffff;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: scale(1.05);
        }

        .hospital-live-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.15rem 0.5rem;
          background: rgba(37, 99, 235, 0.25);
          border: 1px solid rgba(96, 165, 250, 0.4);
          border-radius: 9999px;
          color: #93c5fd;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .live-pulse-dot {
          width: 5px;
          height: 5px;
          background: #34d399;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.35);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
          70% { box-shadow: 0 0 0 4px rgba(52, 211, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
        }

        .unified-booking-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.65rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .form-sub-section {
          padding-bottom: 0.55rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .section-inline-header {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: #0a1f44;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.35rem;
        }

        .step-inline-badge {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #0284c7;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.62rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .hospital-compact-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.15rem;
        }

        .hospital-input-box {
          position: relative;
        }

        .hospital-compact-icon {
          position: absolute;
          left: 0.65rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .hospital-compact-input,
        .hospital-compact-select {
          width: 100%;
          padding: 0.42rem 0.6rem 0.42rem 1.95rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 7px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0a1f44;
          outline: none;
          min-height: 35px;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .hospital-compact-select {
          cursor: pointer;
          appearance: auto;
        }

        .hospital-compact-input:focus,
        .hospital-compact-select:focus {
          border-color: #0284c7;
          box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.15);
        }

        .hospital-compact-err {
          color: #ef4444;
          font-size: 0.66rem;
          margin-top: 0.12rem;
          display: block;
          font-weight: 600;
        }

        .compact-slot-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          padding: 0.35rem 0.15rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.68rem;
          font-weight: 700;
          color: #334155;
          min-height: 33px;
          transition: all 0.15s ease;
        }

        .compact-slot-btn:hover {
          border-color: #0284c7;
          background: #f0f9ff;
        }

        .compact-slot-btn.active {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
        }

        .form-doctor-spec-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-date-slot-row {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 0.5rem;
        }

        .form-creds-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        @media (max-width: 540px) {
          .form-date-slot-row {
            grid-template-columns: 1fr !important;
            gap: 0.55rem !important;
          }

          .form-creds-row {
            grid-template-columns: 1fr !important;
            gap: 0.55rem !important;
          }

          .compact-slot-btn {
            font-size: 0.74rem !important;
            min-height: 36px !important;
            gap: 0.3rem !important;
          }

          .hospital-compact-input,
          .hospital-compact-select {
            font-size: 0.84rem !important;
            min-height: 38px !important;
          }
        }

        .hospital-compact-submit-btn {
          width: 100%;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 0.86rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 3px 12px rgba(2, 132, 199, 0.25);
        }

        .hospital-compact-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(2, 132, 199, 0.35);
        }
      `}</style>
    </div>
  );
};

export default EnquiryForm;
