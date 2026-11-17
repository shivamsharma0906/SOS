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
  X as CloseIcon,
  Home as HomeIcon,
  Truck,
  Sparkles
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

  const fleetAreas = [
    {
      region: 'Kandivali & Borivali West/East',
      eta: '15 – 20 Mins',
      status: 'Flagship Fleet &bull; On Duty',
      coverage: 'Mahavir Nagar, Lokhandwala, Gorai, Shimpoli, IC Colony, Chikuwadi',
      statusColor: '#16a34a',
      statusBg: '#dcfce7'
    },
    {
      region: 'Malad & Madh Island Belt',
      eta: '20 – 25 Mins',
      status: 'Outreach Unit &bull; On Duty',
      coverage: 'Mindspace, Link Road, Marve Road, Pascal Wadi, Raheja Exotica, Orlem',
      statusColor: '#16a34a',
      statusBg: '#dcfce7'
    },
    {
      region: 'Goregaon & Oshiwara',
      eta: '25 – 30 Mins',
      status: 'Suburban Fleet &bull; On Duty',
      coverage: 'Goregaon West & East, Lokhandwala Complex, Bangur Nagar, Aarey Colony',
      statusColor: '#16a34a',
      statusBg: '#dcfce7'
    },
    {
      region: 'Andheri, Juhu & Dahisar',
      eta: '30 – 35 Mins',
      status: 'Extended Fleet &bull; Available',
      coverage: 'Andheri West/East, Versova, Juhu Scheme, Dahisar West/East & Mira Road',
      statusColor: '#0284c7',
      statusBg: '#e0f2fe'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Call or WhatsApp Dispatch',
      desc: 'Connect with our 24/7 medical desk. Share your location, patient symptoms, or doctor prescription.'
    },
    {
      num: '02',
      title: 'Rapid Bedside Arrival',
      desc: 'Our certified radiographer arrives in 20–30 minutes with calibrated high-frequency portable DR equipment.'
    },
    {
      num: '03',
      title: '30-Second Gentle Exposure',
      desc: 'Ultra-low radiation exposure taken directly on the patient bed with protective lead shielding and zero lifting.'
    },
    {
      num: '04',
      title: 'Instant Preview & Report',
      desc: 'Immediate on-screen DICOM verification, signed MD Radiologist report, and on-call orthopedic surgeon review.'
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

      {/* ── 1. Page Hero Section (Brand Consistent with SOS Orthopedic Design System) ── */}
      <section className="page-hero-section" style={{ padding: '3.5rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <MedicalCrossMotif size={65} top="8%" left="4%" opacity={0.04} />
        <MedicalCrossMotif size={75} bottom="10%" right="5%" opacity={0.03} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.45rem', 
                backgroundColor: 'var(--blue-soft)', 
                color: 'var(--blue-brand)', 
                padding: '0.35rem 0.95rem', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.82rem', 
                fontWeight: 700, 
                border: '1px solid rgba(2, 132, 199, 0.25)', 
                marginBottom: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
              }}
            >
              <Radio size={16} />
              <span>24/7 Doorstep Diagnostic Radiography &bull; Mumbai</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Hospital-Grade Digital X-Ray, <span style={{ color: 'var(--blue-brand)' }}>Delivered to Your Bedside</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '780px', fontSize: '1.08rem', lineHeight: 1.65 }}>
              Eliminating the trauma of transporting injured seniors, fracture patients, and bedridden individuals to crowded diagnostic labs. Portable, ultra-low-dose digital radiography with rapid 20–30 minute dispatch across Western Mumbai suburbs.
            </p>

            {/* Hero CTAs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.75rem' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 800 }}
              >
                <Calendar size={18} /> Book Doorstep X-Ray
              </button>

              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-secondary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 700 }}
              >
                <Phone size={18} /> 24/7 Dispatch: {BUSINESS_INFO.phone}
              </a>

              <a 
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Clinic,%20I%20urgently%20need%20a%20Home%20X-Ray%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 700 }}
              >
                <FaWhatsapp size={19} /> Instant WhatsApp Dispatch
              </a>
            </div>
          </div>

          {/* Operational Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '1rem',
              maxWidth: '1050px',
              margin: '0 auto'
            }}
            className="services-stats-grid"
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>20–30 Mins</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Rapid Suburban Dispatch</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HomeIcon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>100% Bedside</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Zero Transit or Lifting Strain</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>AERB Safety</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Ultra-Low Dose DR Sensors</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Stethoscope size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Surgeon Panel</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Immediate Fracture Triage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Suburban Rapid Dispatch Fleet ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Suburban Fleet Network
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              24/7 Doorstep Coverage <span style={{ color: 'var(--blue-brand)' }}>Across Western Mumbai</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Our dedicated mobile radiography vans are positioned across key suburban clusters with sanitized portable equipment, ready for immediate emergency dispatch.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', maxWidth: '1150px', margin: '0 auto 2.5rem auto' }}>
            {fleetAreas.map((item, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue-brand)', fontWeight: 700, fontSize: '0.85rem' }}>
                      <MapPin size={16} />
                      <span>Mumbai Suburban Hub</span>
                    </div>
                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        backgroundColor: item.statusBg, 
                        color: item.statusColor, 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em'
                      }}
                      dangerouslySetInnerHTML={{ __html: item.status }}
                    />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0 0 0.5rem 0' }}>
                    {item.region}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Estimated Arrival:</span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--blue-brand)' }}>{item.eta}</strong>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {item.coverage}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Phone size={14} color="var(--blue-brand)" /> {BUSINESS_INFO.phone}
                  </a>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary btn-sm"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', fontWeight: 700 }}
                  >
                    Request
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="var(--blue-brand)" />
              Emergency night dispatch available across all zones &bull; 24 Hours / 7 Days
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. The Clinical Reality: Hospital Travel vs SOS Home Imaging ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
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

          <div style={{ maxWidth: '980px', margin: '0 auto', overflowX: 'auto' }}>
            <table 
              style={{ 
                width: '100%', 
                borderCollapse: 'separate', 
                borderSpacing: 0, 
                borderRadius: '16px', 
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(10, 31, 68, 0.05)'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--navy-primary)', color: '#ffffff', textAlign: 'left' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.88rem', fontWeight: 800, width: '28%' }}>Clinical Parameter</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.88rem', fontWeight: 800, width: '36%', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>
                    Conventional Lab / Hospital Visit
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.88rem', fontWeight: 800, width: '36%', backgroundColor: 'rgba(2, 132, 199, 0.3)', color: '#bae6fd' }}>
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
                    <td style={{ padding: '1.15rem 1.5rem', fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, borderRight: '1px solid #e2e8f0', backgroundColor: idx % 2 === 0 ? 'rgba(254, 242, 242, 0.35)' : 'rgba(254, 242, 242, 0.65)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                        <CloseIcon size={14} color="#ef4444" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.15rem 1.5rem', fontSize: '0.84rem', color: 'var(--navy-primary)', fontWeight: 600, lineHeight: 1.5, backgroundColor: idx % 2 === 0 ? 'rgba(240, 249, 255, 0.45)' : 'rgba(240, 249, 255, 0.75)' }}>
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

      {/* ── 4. Step-by-Step "How Our Doorstep X-Ray Works" ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Seamless Bedside Protocol
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
              How Our Doorstep <span style={{ color: 'var(--blue-brand)' }}>Digital X-Ray Works</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Engineered for emergency speed, gentle patient handling, and immediate orthopedic decision-making.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '1150px', margin: '0 auto' }}>
            {steps.map((st, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  position: 'relative'
                }}
              >
                <div 
                  style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: 800, 
                    color: 'var(--blue-brand)', 
                    backgroundColor: 'var(--blue-soft)', 
                    padding: '0.2rem 0.65rem', 
                    borderRadius: '9999px',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}
                >
                  Step {st.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0 0 0.6rem 0' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Interactive Anatomical Examination Protocol ── */}
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
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
                    borderRadius: 'var(--radius-pill)',
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
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 8px 30px rgba(10, 31, 68, 0.05)'
            }}
          >
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--blue-brand)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Clinical Investigation Protocol
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0.35rem 0' }}>
                {examDetails[activeExamTab].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                {examDetails[activeExamTab].sub}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Projections & Views
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                  {examDetails[activeExamTab].views}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Diagnostic Focus
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {examDetails[activeExamTab].clinicalFocus}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Patient Comfort & Positioning
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {examDetails[activeExamTab].prep}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
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

      {/* ── 6. Integrated Orthopedic Surgeon Follow-Up Strip ── */}
      <section style={{ padding: '3.5rem 0 4.5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, var(--navy-primary, #07152e) 0%, #0369a1 100%)',
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

              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, margin: '0 0 0.85rem 0', lineHeight: 1.25, color: '#ffffff' }}>
                Found a Fracture on Your Home X-Ray? We Take Immediate Care
              </h2>

              <p style={{ fontSize: '0.96rem', color: '#e0f2fe', lineHeight: 1.6, margin: 0 }}>
                Unlike detached imaging labs that leave patients stranded with an unexplained film, SOS integrates immediate fracture care. Our consultant surgeons (Dr. Maulik Joshi, Dr. Shobit Deshmukh, Dr. Omkar Rashinkar) provide emergency splinting, waterproof casting, and clinical governance right away.
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
                  borderRadius: 'var(--radius-pill)',
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
                  borderRadius: 'var(--radius-pill)',
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

      {/* ── 7. Clinical FAQs ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
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
    </>
  );
};

export default XRayAtHome;
