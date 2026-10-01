import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  Activity, 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Zap, 
  ArrowRight, 
  FileText, 
  AlertCircle, 
  HeartPulse, 
  Stethoscope, 
  Users, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Radio,
  FileCheck,
  Check,
  X as CloseIcon
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SEOHead } from '../components/SEOHead';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { AppointmentModal } from '../components/AppointmentModal';
import { BUSINESS_INFO } from '../config/business';
import { doctorsData } from '../data/doctors';

export const XRayAtHome: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeExamTab, setActiveExamTab] = useState<'hip' | 'spine' | 'knee' | 'chest' | 'wrist'>('hip');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const examDetails = {
    hip: {
      title: 'Hip, Pelvis & Femur (Domestic Fall Protocol)',
      sub: 'Most common in senior citizens following accidental slips in bathroom or bedroom',
      views: 'Pelvis AP, Hip AP with cross-table lateral',
      prep: 'Patient remains comfortable on bed; zero lifting or repositioning strain.',
      clinicalFocus: 'Immediate detection of femoral neck fractures, intertrochanteric fractures, and pelvic ring integrity.',
      turnaround: 'Image reviewed on-screen in 60 seconds; surgeon alerted immediately.'
    },
    spine: {
      title: 'Lumbar & Cervical Spine (Severe Back & Neck Pain)',
      sub: 'For patients immobilized by acute sciatica, disc herniation, or osteoporotic collapse',
      views: 'Lumbo-sacral Spine AP & Lateral / Cervical Spine AP & Lateral',
      prep: 'Gentle flat-panel sensor positioning under the back with cushioned foam wedges.',
      clinicalFocus: 'Vertebral body height, compression fractures, spondylolisthesis, and degenerative disc narrowing.',
      turnaround: 'Digital radiograph transmitted securely to our spine specialist panel.'
    },
    knee: {
      title: 'Knee & Lower Limb (Severe Osteoarthritis & Joint Trauma)',
      sub: 'For acute knee swelling, inability to bear weight, or sudden twisting injuries',
      views: 'Knee AP & Lateral, Skyline view if patellar injury suspected',
      prep: 'Positioned in slight natural flexion with supportive limb pads.',
      clinicalFocus: 'Joint space narrowing, subchondral sclerosis, tibial plateau fractures, and osteophytes.',
      turnaround: 'Immediate alignment assessment to determine conservative care vs surgery.'
    },
    chest: {
      title: 'Chest & Thoracic (Respiratory & Pre-Operative Assessment)',
      sub: 'Evaluation for pneumonia, lung congestion, bronchitis, and cardiac silhouette',
      views: 'Chest PA or AP (Sitting / Semi-Recumbent on Bed)',
      prep: 'Full inspiration exposure taken in sitting or semi-fowler position.',
      clinicalFocus: 'Consolidation, pleural effusion, cardiomegaly, rib fractures, and respiratory infections.',
      turnaround: 'Verified by certified MD Radiologists within 2 hours.'
    },
    wrist: {
      title: 'Wrist, Foot, Ankle & Shoulder (Acute Accidental Trauma)',
      sub: 'Fall on outstretched hand (FOOSH) or ankle twist with severe local swelling',
      views: 'AP, Lateral & Oblique views as clinically indicated',
      prep: 'Compact portable sensor placed on a firm tabletop or beside the armrest.',
      clinicalFocus: 'Colles fracture, scaphoid injury, malleolar ankle fractures, and joint subluxations.',
      turnaround: 'Immediate confirmation for doorstep splinting or waterproof casting.'
    }
  };

  const comparisonData = [
    {
      parameter: 'Patient Transfer Strain',
      conventional: 'Requires physically lifting an injured senior into wheelchairs, autos, or ambulances.',
      sosHome: '100% Bedside. Patient remains relaxed in their own bed with zero painful movements.'
    },
    {
      parameter: 'Pain & Fracture Displacement Risk',
      conventional: 'Potholes, vehicle vibrations, and clinic stairs risk displacing delicate fracture fragments.',
      sosHome: 'Zero vibration. The detector slides smoothly under the limb without moving the fracture.'
    },
    {
      parameter: 'Hospital Waiting & Infection Exposure',
      conventional: '1 to 3 hours sitting in crowded hospital corridors exposed to hospital-acquired pathogens.',
      sosHome: 'Completely private home setting. Sanitized equipment with full sterile precautions.'
    },
    {
      parameter: 'Turnaround Time',
      conventional: 'Half-day ordeal of traffic, registration queues, waiting for film, and travel back.',
      sosHome: 'Technician arrives in 20–30 mins. Exposure takes 30 seconds. Instant screen preview.'
    },
    {
      parameter: 'Immediate Orthopedic Doctor Care',
      conventional: 'Diagnostic lab only hands you a black film. You still have to search for a specialist.',
      sosHome: 'SOS orthopedic surgeons (Dr. Maulik, Dr. Shobit, Dr. Omkar) directly review and prescribe care.'
    }
  ];

  const faqs = [
    {
      q: 'How clear is a portable home digital X-ray compared to large hospital machines?',
      a: 'Our mobile digital radiography (DR) units use identical high-frequency generators and high-resolution flat panel detectors as top tertiary hospitals. The images deliver superior spatial resolution, allowing our radiologists and surgeons to clearly distinguish hair-line fissures, trabecular bone loss, and microscopic joint wear.'
    },
    {
      q: 'Is it safe for family members, children, and elderly individuals in the house?',
      a: 'Yes, 100% safe. Modern digital detectors require less than one-third of the radiation dose used by older film systems. The X-ray beam is tightly collimated to only the targeted anatomy. Technicians carry lead shielding aprons for the patient and position family members at a safe distance during the 0.1-second exposure.'
    },
    {
      q: 'Do I need a doctor’s prescription before requesting a home X-ray?',
      a: 'If you have an existing prescription from your doctor, our technician will follow it precisely. However, if an emergency fall occurs at home and you do not yet have a prescription, our consultant orthopedic surgeons (Dr. Maulik, Dr. Shobit, Dr. Omkar) will perform immediate tele-triage to recommend the correct radiographic views.'
    },
    {
      q: 'How quickly will the signed radiologist report be delivered?',
      a: 'The digital radiograph is immediately previewed on the calibrated laptop monitor at your bedside so the technician confirms diagnostic quality. A formally signed report from an MD Radiologist is emailed and sent via WhatsApp within 2 to 4 hours. Emergency stat readings can be provided within 30 minutes for acute trauma.'
    },
    {
      q: 'What should we do if the X-ray confirms a fracture?',
      a: 'You do not have to scramble or call multiple doctors. SOS is an orthopedic surgical organization. If a fracture is detected, our surgeons immediately advise on immobilization, prescribe analgesics, and can dispatch an orthopedic technician for doorstep waterproof plaster casting or arrange emergency admission if surgery is indicated.'
    }
  ];

  return (
    <>
      <SEOHead
        title="24/7 Digital X-Ray Services at Home in Mumbai | SOS Orthopedic Clinic"
        description="Fast 20-30 min doorstep portable digital X-ray services across Mumbai (Kandivali, Malad, Borivali, Goregaon). Low-dose high-frequency imaging, instant radiologist reports, certified technicians."
        canonicalUrl={`${BUSINESS_INFO.website}/x-ray-services-at-home`}
      />

      {/* ── 1. Editorial Hospital Header ── */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #07152e 0%, #0a1f44 100%)', 
          color: '#ffffff',
          padding: '4rem 0 3.5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <MedicalCrossMotif size={70} top="6%" left="3%" opacity={0.04} />
        <MedicalCrossMotif size={90} bottom="8%" right="4%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3rem', alignItems: 'center' }} className="hero-split-grid">
            {/* Left Column: Clinical Heading & Authority */}
            <div>
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.45rem', 
                  backgroundColor: 'rgba(56, 189, 248, 0.12)', 
                  color: '#38bdf8', 
                  padding: '0.35rem 0.95rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  border: '1px solid rgba(56, 189, 248, 0.25)', 
                  marginBottom: '1.25rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                <Radio size={14} />
                <span>24/7 Doorstep Diagnostic Radiography &bull; Mumbai</span>
              </div>

              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.15, margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>
                Hospital-Grade <span style={{ color: '#38bdf8' }}>Digital X-Ray</span> at Your Bedside
              </h1>

              <p style={{ color: '#cbd5e1', fontSize: '1.08rem', lineHeight: 1.65, margin: '0 0 1.75rem 0', maxWidth: '620px' }}>
                Eliminating the trauma of transporting injured seniors and bedridden patients to diagnostic labs. Portable, low-dose digital radiography with 20–30 minute dispatch across Western Mumbai suburbs.
              </p>

              {/* Direct Dispatch Hotline Strip */}
              <div 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.06)', 
                  border: '1px solid rgba(255, 255, 255, 0.12)', 
                  borderRadius: '16px', 
                  padding: '1.25rem 1.5rem', 
                  marginBottom: '2rem',
                  maxWidth: '560px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Emergency Dispatch Desk
                    </div>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`}
                      style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.2rem' }}
                    >
                      <Phone size={18} color="#38bdf8" />
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="btn btn-primary btn-sm"
                      style={{ padding: '0.65rem 1.25rem', fontWeight: 800 }}
                    >
                      Request Dispatch
                    </button>
                    <a 
                      href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Clinic,%20I%20urgently%20need%20a%20Home%20X-Ray%20service.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ padding: '0.65rem 1rem' }}
                      aria-label="WhatsApp Dispatch"
                    >
                      <FaWhatsapp size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Clinical Attributes */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#94a3b8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} color="#38bdf8" />
                  <span>AERB-Compliant Safety</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FileCheck size={16} color="#38bdf8" />
                  <span>MD Radiologist Verified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Stethoscope size={16} color="#38bdf8" />
                  <span>Surgeon On-Call Triage</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Dispatch Console Card */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--navy-primary)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Suburban Fleet Status
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                    Active Diagnostic Units
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.25rem 0.65rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span className="live-pulse-indicator" />
                  Fleet On Duty
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                {[
                  { region: 'Kandivali & Borivali West/East', eta: '15 - 20 mins', unit: 'Unit 1 &bull; Active' },
                  { region: 'Malad & Marve Coastal Belt', eta: '20 - 25 mins', unit: 'Unit 2 &bull; Active' },
                  { region: 'Goregaon & Oshiwara', eta: '25 - 30 mins', unit: 'Unit 3 &bull; Active' },
                  { region: 'Andheri, Juhu & Dahisar', eta: '30 - 35 mins', unit: 'Unit 4 &bull; Scheduled' }
                ].map((item, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--navy-primary)' }}>{item.region}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: item.unit }} />
                    </div>
                    <div style={{ fontWeight: 800, color: 'var(--blue-brand)', fontSize: '0.88rem' }}>
                      {item.eta}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontWeight: 800, borderRadius: '12px' }}
              >
                Schedule Doorstep Examination <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Clinical Reality: Hospital Travel vs SOS Home Imaging ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Patient Safety Analysis
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              Why We Eliminate the <span style={{ color: 'var(--blue-brand)' }}>Diagnostic Lab Journey</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Transporting a senior or an acutely injured patient for routine radiography causes immense suffering and risks aggravating undisplaced bone fractures.
            </p>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', overflowX: 'auto' }}>
            <table 
              style={{ 
                width: '100%', 
                borderCollapse: 'separate', 
                borderSpacing: 0, 
                borderRadius: '18px', 
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 6px 24px rgba(10, 31, 68, 0.04)'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--navy-primary)', color: '#ffffff', textAlign: 'left' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', width: '28%' }}>Clinical Parameter</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', width: '36%', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5' }}>
                    Standard Lab / Hospital Visit
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', width: '36%', backgroundColor: 'rgba(2, 132, 199, 0.25)', color: '#38bdf8' }}>
                    SOS Doorstep Digital Radiography
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1.15rem 1.5rem', fontWeight: 800, fontSize: '0.88rem', color: 'var(--navy-primary)', borderRight: '1px solid #e2e8f0' }}>
                      {row.parameter}
                    </td>
                    <td style={{ padding: '1.15rem 1.5rem', fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, borderRight: '1px solid #e2e8f0', backgroundColor: idx % 2 === 0 ? 'rgba(254, 242, 242, 0.4)' : 'rgba(254, 242, 242, 0.7)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                        <CloseIcon size={14} color="#ef4444" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.15rem 1.5rem', fontSize: '0.84rem', color: 'var(--navy-primary)', fontWeight: 600, lineHeight: 1.5, backgroundColor: idx % 2 === 0 ? 'rgba(240, 249, 255, 0.5)' : 'rgba(240, 249, 255, 0.8)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                        <Check size={14} color="#0284c7" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{row.sosHome}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Anatomical Examination Protocol ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Diagnostic Pathways
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              Common Indications & <span style={{ color: 'var(--blue-brand)' }}>Examination Protocols</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              Select a body region to review patient preparation, required radiographic projections, and turnaround metrics.
            </p>

            {/* Examination Switcher Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              {[
                { id: 'hip', label: 'Hip & Pelvis' },
                { id: 'spine', label: 'Spine & Sciatica' },
                { id: 'knee', label: 'Knee & Joint Wear' },
                { id: 'chest', label: 'Chest & Lungs' },
                { id: 'wrist', label: 'Wrist & Extremities' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveExamTab(tab.id as any)}
                  className="pill-choice-btn"
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    border: '1.5px solid',
                    borderColor: activeExamTab === tab.id ? 'var(--navy-primary)' : 'var(--border-color)',
                    backgroundColor: activeExamTab === tab.id ? 'var(--navy-primary)' : '#ffffff',
                    color: activeExamTab === tab.id ? '#ffffff' : 'var(--navy-primary)',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    cursor: 'pointer'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Examination Detail Card */}
          <div 
            key={activeExamTab}
            className="animate-fade-in"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(10, 31, 68, 0.09)',
              padding: '2.5rem',
              boxShadow: '0 8px 32px rgba(10, 31, 68, 0.05)'
            }}
          >
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--blue-brand)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Clinical Investigation Protocol
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0.35rem 0' }}>
                {examDetails[activeExamTab].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                {examDetails[activeExamTab].sub}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Projections & Views
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                  {examDetails[activeExamTab].views}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Diagnostic Focus
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {examDetails[activeExamTab].clinicalFocus}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Patient Comfort & Positioning
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {examDetails[activeExamTab].prep}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Clinical Turnaround
                </div>
                <div style={{ fontSize: '0.88rem', color: '#16a34a', fontWeight: 700 }}>
                  {examDetails[activeExamTab].turnaround}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--blue-brand)" />
                <span>Zero patient movement required &bull; Low radiation exposure</span>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-sm"
                style={{ fontWeight: 800, padding: '0.65rem 1.4rem' }}
              >
                Schedule This X-Ray Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Integrated Orthopedic Surgeon Follow-Up Strip ── */}
      <section style={{ padding: '3.5rem 0 4.5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #0a1f44 0%, #0369a1 100%)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              color: '#ffffff',
              boxShadow: '0 16px 40px rgba(10, 31, 68, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.78rem', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                <Stethoscope size={14} color="#fcd34d" />
                <span>Continuous Surgical Oversight</span>
              </div>

              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, margin: '0 0 0.85rem 0', lineHeight: 1.25 }}>
                Found a Fracture on Your Home X-Ray? We Take Immediate Care
              </h2>

              <p style={{ fontSize: '0.96rem', color: '#e0f2fe', lineHeight: 1.6, margin: 0 }}>
                Unlike detached imaging labs that leave patients stranded with an unexplained film, SOS integrates immediate fracture care. Our consultant surgeons (Dr. Maulik, Dr. Shobit, Dr. Omkar) provide emergency splinting, waterproof casting, and clinical governance right away.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '240px' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn"
                style={{
                  backgroundColor: '#ffffff',
                  color: 'var(--navy-primary)',
                  fontWeight: 800,
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  gap: '0.5rem'
                }}
              >
                <Calendar size={16} /> Request Home Dispatch
              </button>

              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontWeight: 700,
                  padding: '0.8rem 1.4rem',
                  borderRadius: '9999px',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  gap: '0.5rem'
                }}
              >
                <Phone size={15} /> 24/7 Hotline: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Clinical FAQs ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Patient Knowledge Base
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Frequently Asked Questions on <span style={{ color: 'var(--blue-brand)' }}>Home X-Ray</span>
            </h2>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '14px',
                    marginBottom: '0.85rem',
                    overflow: 'hidden',
                    backgroundColor: isOpen ? 'var(--bg-subtle)' : '#ffffff',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--navy-primary)', paddingRight: '1rem' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={20} color="var(--blue-brand)" /> : <ChevronDown size={20} color="var(--text-secondary)" />}
                  </button>

                  {isOpen && (
                    <div className="faq-answer-animated" style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="home-x-ray"
      />

      <style>{`
        @media (max-width: 900px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default XRayAtHome;
