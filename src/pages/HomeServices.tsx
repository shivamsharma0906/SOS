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
  HeartPulse, 
  Stethoscope, 
  Users, 
  Home as HomeIcon,
  ChevronDown,
  ChevronUp,
  Cross,
  TestTube,
  Truck,
  Check,
  AlertCircle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SEOHead } from '../components/SEOHead';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { AppointmentModal } from '../components/AppointmentModal';
import { BUSINESS_INFO } from '../config/business';
import { doctorsData } from '../data/doctors';

export const HomeServices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string>('senior-fall');
  const [selectedArea, setSelectedArea] = useState<string>('kandivali');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // ── 1. Interactive Triage Scenarios ──
  const scenarios = [
    {
      id: 'senior-fall',
      tabLabel: 'Elderly Fall at Home',
      patientStatus: 'Senior citizen slipped in bathroom or bedroom with severe hip, pelvis, or wrist pain',
      urgency: 'Immediate Emergency (Priority Dispatch)',
      urgencyColor: '#dc2626',
      urgencyBg: '#fee2e2',
      recommendedCare: '24/7 Portable Digital X-Ray at Bedside + Emergency Orthopedic Surgeon Consultation',
      turnaround: '20–30 Minutes',
      careTeam: 'Certified Radiographer + Lead Protective Shielding + On-Call Orthopedic Surgeon',
      actions: [
        'Perform high-frequency digital radiograph directly on the bed without lifting or moving the senior',
        'Inspect on-screen DICOM preview within 60 seconds to detect neck of femur or pelvic ring fractures',
        'Orthopedic surgeon (Dr. Maulik / Dr. Shobit / Dr. Omkar) directly reviews image via encrypted link',
        'Bedside temporary splinting or emergency hospital transfer coordination if displaced fracture is found'
      ],
      safetyAdvisory: 'CRITICAL: Do not attempt to force the patient to stand or walk. Moving an undetected femoral fracture can cause bone fragment displacement and severe internal bleeding.'
    },
    {
      id: 'post-op-joint',
      tabLabel: 'Day 1–14 Post-Surgery Care',
      patientStatus: 'Patient recently discharged after Total Knee or Total Hip Replacement surgery',
      urgency: 'Scheduled Daily Rehabilitation',
      urgencyColor: '#059669',
      urgencyBg: '#ecfdf5',
      recommendedCare: 'Doorstep Orthopedic Physiotherapy + Sterile Suture/Staple Dressing Care',
      turnaround: 'Same-Day / Morning & Evening Slots',
      careTeam: 'Specialized Orthopedic Physiotherapist + Surgical Wound Care Nurse',
      actions: [
        'Guided Day 1/2 assisted ambulation, walker gait normalization, and stair climbing confidence',
        'Targeted knee extension (0°) and flexion milestones (90°–110°) with portable electrotherapy',
        'Aseptic inspection of surgical incision, waterproof dressing change, and surgical staple removal',
        'Weekly joint angle progress metrics shared directly with your operating orthopedic surgeon'
      ],
      safetyAdvisory: 'Sterile surgical wound care conducted with single-use sterile dressing packs prevents dangerous surgical site infections (SSI).'
    },
    {
      id: 'acute-sciatica',
      tabLabel: 'Severe Sciatica / Back Spasm',
      patientStatus: 'Patient unable to get out of bed due to acute shooting leg pain or severe lumbar disc spasm',
      urgency: 'Urgent Same-Day Relief',
      urgencyColor: '#d97706',
      urgencyBg: '#fffbeb',
      recommendedCare: 'Senior Orthopedic Doctor Home Visit + Decompression Physiotherapy',
      turnaround: 'Under 2 Hours',
      careTeam: 'Consultant Orthopedic Surgeon + Spine Physical Therapist',
      actions: [
        'Bedside neurological examination: straight leg raise (SLR), sensory dermatomes, and motor reflexes',
        'Prescription of acute neuro-modulators and anti-inflammatory intramuscular or oral analgesia',
        'Gentle McKenzie spinal decompression protocols and portable electro-analgesia (TENS/IFT)',
        'Arrangement of bedside portable spine X-ray or scheduled MRI priority coordination if needed'
      ],
      safetyAdvisory: 'Immediate surgical alert if red-flag symptoms are present: numbness in the saddle region, severe foot drop, or altered bladder/bowel sensations.'
    },
    {
      id: 'plaster-wound',
      tabLabel: 'Plaster Check & Wound Care',
      patientStatus: 'Healing fracture under cast, post-trauma laceration, or bedridden pressure ulcer',
      urgency: 'Routine Clinical Nursing',
      urgencyColor: '#0284c7',
      urgencyBg: '#f0f9ff',
      recommendedCare: 'Sterile Surgical Nursing Visit + Orthopedic Review',
      turnaround: 'Scheduled 2-Hour Window',
      careTeam: 'Trained Surgical Nurse under Consultant Doctor Supervision',
      actions: [
        'Inspection of cast integrity, padding adjustments, and peripheral circulation check (capillary refill)',
        'Sterile suture and staple removal using autoclaved disposable instruments',
        'Advanced antimicrobial foam dressings for diabetic ulcers and healing wound margins',
        'Documentation of wound healing photography sent directly to the treating surgeon'
      ],
      safetyAdvisory: 'Never insert foreign objects inside plaster casts. If fingers or toes become pale, numb, or cold, call our helpline immediately.'
    },
    {
      id: 'blood-diagnostics',
      tabLabel: 'Blood Tests & Pre-Op Lab',
      patientStatus: 'Senior citizen needing arthritis panels, bone metabolism profiles, or pre-surgery fitness tests',
      urgency: 'Convenient Home Phlebotomy',
      urgencyColor: '#7c3aed',
      urgencyBg: '#faf5ff',
      recommendedCare: 'Doorstep Phlebotomy & NABL-Accredited Pathology Diagnostics',
      turnaround: 'Morning Fasting Dispatch / Report in 12 Hrs',
      careTeam: 'Certified Phlebotomist with Cold-Chain Specimen Transport',
      actions: [
        'Painless vacutainer blood sample draw at home for seniors with fragile veins',
        'Pre-operative surgical panels: CBC, PT/INR, Renal Function, Blood Sugar, Blood Grouping',
        'Arthritis & Bone panels: Serum Calcium, Vitamin D3, RA Factor, Anti-CCP, Uric Acid, ESR, CRP',
        'Digital PDF report delivered via WhatsApp & Email, with auto-routing to SOS orthopedic doctors'
      ],
      safetyAdvisory: 'Cold-chain insulated sample carriers ensure zero sample degradation during Mumbai transit.'
    }
  ];

  const activeScenarioData = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  // ── 2. The 4 Executive Doorstep Care Divisions ──
  const careDivisions = [
    {
      id: 'xray',
      title: '24/7 Digital Radiography at Bedside',
      badge: 'Rapid 20–30 Min Turnaround',
      icon: <Zap size={24} color="var(--blue-brand)" />,
      desc: 'Hospital-grade portable digital radiography unit brought directly into the patient bedroom. Ideal for elderly accidental falls, suspected fractures, and chest infections with instantaneous on-screen review.',
      clinicalSpecs: [
        'AERB-compliant low-dose high-frequency portable generator',
        'Certified radiography technicians with lead protective shielding',
        'Full DICOM digital images verified by MD Radiologists',
        'Direct emergency escalation to SOS orthopedic surgeons'
      ],
      linkText: 'Explore Home X-Ray Details',
      linkUrl: '/x-ray-services-at-home',
      cta: 'Book Doorstep X-Ray'
    },
    {
      id: 'doctor-visit',
      title: 'Senior Orthopedic Surgeon Bedside OPD',
      badge: 'Consultant Clinical Care',
      icon: <Stethoscope size={24} color="var(--blue-brand)" />,
      desc: 'Bedside consultations conducted by senior orthopedic surgeons (Dr. Maulik Joshi, Dr. Shobit Deshmukh, Dr. Omkar) for bedridden seniors, severe acute sciatica, or post-surgical follow-ups.',
      clinicalSpecs: [
        'Exhaustive clinical joint and spine neurological assessment',
        'Immediate bedside pain relief injections & prescription protocols',
        'Temporary limb splinting and stability evaluation',
        'Seamless tertiary hospital admission transfer if surgery is indicated'
      ],
      linkText: 'Meet Our Surgeons',
      linkUrl: '/doctors',
      cta: 'Request Doctor Home Visit'
    },
    {
      id: 'physio',
      title: 'Surgeon-Guided Home Rehabilitation',
      badge: 'Certified Physical Therapy',
      icon: <Activity size={24} color="var(--blue-brand)" />,
      desc: 'One-on-one personalized physical therapy conducted at home for knee and hip replacements, spine decompression, stroke mobility, and geriatric balance training.',
      clinicalSpecs: [
        'Therapist arrives with portable electrotherapy (IFT/TENS) & bands',
        'Accelerated Day 1/2 walking and knee flexion (0°–110°) milestones',
        'Home transfer safety coaching: bed, chair, toilet, and stairs',
        'Weekly progress reports reviewed with your orthopedic surgeon'
      ],
      linkText: 'View Physiotherapy Protocols',
      linkUrl: '/physiotherapy',
      cta: 'Schedule Home Physio'
    },
    {
      id: 'nursing-lab',
      title: 'Sterile Surgical Nursing & Phlebotomy',
      badge: 'Aseptic Clinical Protocol',
      icon: <TestTube size={24} color="var(--blue-brand)" />,
      desc: 'Hospital-trained surgical nurses and phlebotomists delivering sterile post-operative wound dressings, surgical staple removals, plaster checks, and diagnostic blood collection.',
      clinicalSpecs: [
        'Strict aseptic protocols eliminating surgical site infection risks',
        'Autoclaved single-use surgical staple and suture removal tools',
        'Waterproof dressing changes and diabetic wound care',
        'NABL accredited lab testing with cold-chain sample preservation'
      ],
      linkText: 'Book Nursing or Lab',
      linkUrl: '/contact',
      cta: 'Request Nursing Care'
    }
  ];

  // ── 3. Suburban Coverage Data ──
  const suburbs = [
    {
      id: 'kandivali',
      shortName: 'Kandivali',
      area: 'Kandivali (West & East)',
      base: 'Central SOS Hospital Hub',
      speed: '15–25 Minutes',
      status: 'High Mobile Readiness'
    },
    {
      id: 'borivali',
      shortName: 'Borivali',
      area: 'Borivali (West & East) & IC Colony',
      base: 'Borivali Link Road Unit',
      speed: '20–30 Minutes',
      status: 'Active Mobile Unit'
    },
    {
      id: 'malad',
      shortName: 'Malad',
      area: 'Malad (West & East) & Mindspace',
      base: 'Malad Outreach Desk',
      speed: '20–30 Minutes',
      status: 'Active Mobile Unit'
    },
    {
      id: 'goregaon',
      shortName: 'Goregaon',
      area: 'Goregaon & Oshiwara',
      base: 'SV Road Station Desk',
      speed: '25–35 Minutes',
      status: 'Active Mobile Unit'
    },
    {
      id: 'andheri',
      shortName: 'Andheri & Juhu',
      area: 'Andheri West, Lokhandwala & Juhu',
      base: 'Western Express Corridor Desk',
      speed: '30–40 Minutes',
      status: 'Scheduled Dispatch'
    },
    {
      id: 'dahisar',
      shortName: 'Dahisar & Mira Rd',
      area: 'Dahisar & Mira Road',
      base: 'Northern Suburban Unit',
      speed: '30–40 Minutes',
      status: 'Active Mobile Unit'
    }
  ];

  // ── 4. Clinical FAQs ──
  const faqs = [
    {
      q: 'Are SOS home services available on Sundays and public holidays?',
      a: 'Yes. Our 24/7 doorstep Home X-Ray dispatch and emergency clinical triage operate 365 days a year without interruption. Scheduled doctor home visits, physiotherapy sessions, and nursing care are also routinely available on Sundays by prior booking.'
    },
    {
      q: 'How fast can a mobile medical team arrive at my residence in Mumbai?',
      a: 'For emergency Home X-Ray requests in Kandivali, Borivali, Malad, and Goregaon, our mobile radiography van typically arrives in 20 to 30 minutes. For doctor consultations and physiotherapy sessions, same-day appointments are coordinated based on surgeon OPD schedules.'
    },
    {
      q: 'What hygiene and sterilization protocols are observed during home visits?',
      a: 'Every member of our doorstep medical team follows strict hospital aseptic guidelines: single-use sterile gloves, disposable surgical masks, single-use sterile drape sheets, autoclaved instrument packs for suture/staple removals, and certified radiation-protective lead aprons.'
    },
    {
      q: 'What happens if a home X-ray or doctor visit reveals a severe fracture requiring surgery?',
      a: 'Because SOS is headed by senior consultant orthopedic surgeons (Dr. Maulik Joshi, Dr. Shobit Deshmukh, Dr. Omkar), we have immediate tertiary hospital transfer pathways. We arrange priority admission, bed reservation, pre-operative workup, and surgical slot scheduling across our network of accredited hospital partners in Mumbai.'
    },
    {
      q: 'Can these doorstep medical services be reimbursed under health insurance?',
      a: 'Yes. Most comprehensive private health insurance policies and outpatient corporate health covers reimburse doctor home visits, home physiotherapy, diagnostic X-rays, and blood tests when accompanied by an authorized orthopedic prescription and official GST tax invoice.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Comprehensive Orthopedic Home Care & Doorstep Services Mumbai | SOS Clinic"
        description="Hospital-grade orthopedic healthcare delivered to your doorstep in Mumbai: 24/7 Portable Digital X-Ray, Orthopedic Surgeon Home Visits, Post-Op Physiotherapy, Sterile Wound Care & Lab Phlebotomy."
        canonicalUrl={`${BUSINESS_INFO.website}/home-services`}
      />

      {/* ── 1. Concierge Editorial Hero ── */}
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
              <HomeIcon size={16} />
              <span>SOS Care at Home | Concierge Orthopedic Services</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Hospital-Grade Orthopedic Care, <span style={{ color: 'var(--blue-brand)' }}>Delivered to Your Doorstep</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '770px', fontSize: '1.08rem', lineHeight: 1.65 }}>
              Bringing senior orthopedic surgeons, 24/7 portable digital radiography, and dedicated physical rehabilitation directly into the comfort of your home. Zero painful vehicle jolts, zero crowded waiting rooms.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.75rem' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 800 }}
              >
                <Calendar size={18} /> Book Home Healthcare Service
              </button>

              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-secondary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 700 }}
              >
                <Phone size={18} /> 24/7 Helpline: {BUSINESS_INFO.phone}
              </a>

              <a 
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SOS%20Clinic,%20I%20would%20like%20to%20request%20Home%20Healthcare%20Services.`}
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
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Portable X-Ray Dispatch</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Stethoscope size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>Doctor OPD</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Senior Surgeon Bedside Visit</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Activity size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Home Physio</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Surgeon-Led Phased Rehab</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>100% Sterile</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Hospital Infection Control</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Patient Scenario Triage Console ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Clinical Triage Console
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Select Patient Scenario to <span style={{ color: 'var(--blue-brand)' }}>View Recommended Care</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Every orthopedic situation demands a distinct clinical response. Select the immediate condition below for tailored guidance:
            </p>

            {/* Scenario Tabs */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginTop: '1.75rem'
              }}
            >
              {scenarios.map(s => {
                const isActive = activeScenario === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScenario(s.id)}
                    className="pill-choice-btn"
                    style={{
                      padding: '0.55rem 1.15rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      border: '1.5px solid',
                      borderColor: isActive ? 'var(--navy-primary)' : 'var(--border-color)',
                      backgroundColor: isActive ? 'var(--navy-primary)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--navy-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    {s.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Triage Card */}
          <div 
            key={activeScenarioData.id}
            className="animate-fade-in"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid rgba(10, 31, 68, 0.1)',
              boxShadow: '0 12px 36px rgba(10, 31, 68, 0.06)',
              padding: '2.5rem',
              maxWidth: '1050px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span 
                    style={{ 
                      fontSize: '0.74rem', 
                      fontWeight: 800, 
                      color: activeScenarioData.urgencyColor, 
                      backgroundColor: activeScenarioData.urgencyBg, 
                      padding: '0.2rem 0.65rem', 
                      borderRadius: 'var(--radius-pill)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {activeScenarioData.urgency}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
                    Target Response: {activeScenarioData.turnaround}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                  {activeScenarioData.recommendedCare}
                </h3>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
                style={{ fontWeight: 800 }}
              >
                Dispatch This Care Team
              </button>
            </div>

            {/* Patient State & Team */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Patient Presentation:
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--navy-primary)', lineHeight: 1.5 }}>
                  {activeScenarioData.patientStatus}
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Dispatched Clinical Personnel:
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--navy-primary)', lineHeight: 1.5 }}>
                  {activeScenarioData.careTeam}
                </div>
              </div>
            </div>

            {/* Protocol Actions */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
                Bedside Clinical Protocol:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.75rem' }}>
                {activeScenarioData.actions.map((act, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--navy-primary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="var(--blue-brand)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisory Alert */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#991b1b', fontSize: '0.84rem', lineHeight: 1.5, fontWeight: 600 }}>
              <AlertCircle size={18} color="#dc2626" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>{activeScenarioData.safetyAdvisory}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. The 4 Executive Care Divisions ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Specialized Care Spectrum
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              4 Doorstep Healthcare Pillars for <span style={{ color: 'var(--blue-brand)' }}>Orthopedic Recovery</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              From initial acute fracture evaluation to post-operative suture removal, SOS provides continuous hospital-grade clinical oversight at your doorstep.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1050px', margin: '0 auto' }}>
            {careDivisions.map((div) => (
              <div 
                key={div.id}
                className="interactive-feature-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '22px',
                  border: '1px solid rgba(10, 31, 68, 0.08)',
                  boxShadow: '0 8px 24px rgba(10, 31, 68, 0.04)',
                  padding: '2.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '2rem'
                }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', maxWidth: '680px' }}>
                  <div 
                    className="icon-box-hover"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--blue-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {div.icon}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                        {div.title}
                      </h3>
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: 'var(--blue-brand)',
                          backgroundColor: 'var(--blue-soft)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-pill)',
                          textTransform: 'uppercase'
                        }}
                      >
                        {div.badge}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {div.desc}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.55rem', marginBottom: '1.25rem' }}>
                      {div.clinicalSpecs.map((spec, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--navy-primary)' }}>
                          <CheckCircle2 size={15} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={div.linkUrl}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--blue-brand)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        textDecoration: 'none'
                      }}
                    >
                      <span>{div.linkText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '220px', alignSelf: 'center' }}>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontWeight: 800 }}
                  >
                    {div.cta}
                  </button>

                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}
                  >
                    <Phone size={14} /> Call Helpline
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Hospital Sterility & Infection Control Standards ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Infection Control Mandate
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Hospital Sterility Standards <span style={{ color: 'var(--blue-brand)' }}>in Your Living Room</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Bringing surgical precision to your doorstep without compromising microbiological safety:
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            <div 
              className="interactive-feature-card"
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '2.25rem 2rem', 
                borderRadius: '20px', 
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div 
                className="icon-box-hover"
                style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}
              >
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                100% Autoclaved & Sealed Kits
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Every stitch cutter, staple remover, and dressing forceps comes sealed in autoclaved surgical indicator pouches, opened only in front of the patient.
              </p>
            </div>

            <div 
              className="interactive-feature-card"
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '2.25rem 2rem', 
                borderRadius: '20px', 
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div 
                className="icon-box-hover"
                style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}
              >
                <HeartPulse size={26} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                Zero Hospital Pathogen Exposure
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Healing fresh incisions at home shields vulnerable post-operative joints from multi-drug resistant hospital bacteria common in waiting corridors.
              </p>
            </div>

            <div 
              className="interactive-feature-card"
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '2.25rem 2rem', 
                borderRadius: '20px', 
                border: '1px solid rgba(10, 31, 68, 0.08)',
                boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div 
                className="icon-box-hover"
                style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}
              >
                <Users size={26} />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                Senior Dignity & Dementia Comfort
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Elderly individuals remain peaceful in familiar surroundings, avoiding the disorientation, delirium, and fear triggered by hospital clinical transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Suburban Coverage & Dispatch Timing ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Suburban Dispatch Grid
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Mumbai Coverage Suburbs & <span style={{ color: 'var(--blue-brand)' }}>Dispatch Readiness</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Select your residential zone to verify average doorstep response time and operating mobile units:
            </p>

            {/* Suburb Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              {suburbs.map(s => {
                const isActive = selectedArea === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedArea(s.id)}
                    className="pill-choice-btn"
                    style={{
                      padding: '0.55rem 1.25rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      border: '1.5px solid',
                      borderColor: isActive ? 'var(--navy-primary)' : 'var(--border-color)',
                      backgroundColor: isActive ? 'var(--navy-primary)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--navy-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    {s.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Area Banner */}
          {(() => {
            const activeSuburb = suburbs.find(s => s.id === selectedArea) || suburbs[0];
            return (
              <div 
                key={activeSuburb.id}
                className="animate-fade-in"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '2.25rem 2.5rem',
                  maxWidth: '960px',
                  margin: '0 auto',
                  border: '1.5px solid rgba(10, 31, 68, 0.08)',
                  boxShadow: '0 8px 30px rgba(10, 31, 68, 0.04)'
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <MapPin size={20} color="var(--blue-brand)" style={{ flexShrink: 0 }} />
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                        {activeSuburb.area}
                      </h3>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      Nearest Dispatch Station: <strong style={{ color: 'var(--navy-primary)' }}>{activeSuburb.base}</strong>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--blue-brand)', backgroundColor: 'var(--blue-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
                    Verified Dispatch Zone
                  </span>
                </div>

                {/* Metrics & Action Grid */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    alignItems: 'center', 
                    gap: '1.5rem' 
                  }}
                >
                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem 1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      Doorstep ETA
                    </div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--blue-brand)', lineHeight: 1.1 }}>
                      {activeSuburb.speed}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem 1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Fleet Readiness
                    </div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#059669', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="live-pulse-indicator" />
                      <span>{activeSuburb.status}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="btn btn-primary"
                      style={{ width: '100%', fontWeight: 800, padding: '0.85rem 1.5rem', justifyContent: 'center' }}
                    >
                      Dispatch Unit Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── 6. Direct Surgeon Escalation Guarantee ── */}
      <section style={{ padding: '3.5rem 0 4.5rem 0', backgroundColor: '#ffffff' }}>
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
            <div style={{ maxWidth: '660px' }}>
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
                <span>Direct Hospital Escalation Protocol</span>
              </div>

              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, margin: '0 0 0.85rem 0', lineHeight: 1.25 }}>
                Emergency Backup by Consultant Orthopedic Surgeons
              </h2>

              <p style={{ fontSize: '0.96rem', color: '#e0f2fe', lineHeight: 1.6, margin: 0 }}>
                Unlike standalone home care agencies, SOS is an integrated surgical institution. Senior consultant orthopedic surgeons (Dr. Maulik Joshi, Dr. Shobit Deshmukh, Dr. Omkar) directly supervise all doorstep diagnostics. If an urgent displaced fracture or compartment concern is identified, our priority hospital admission pathways are triggered immediately.
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
                <Calendar size={16} /> Request Home Healthcare
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
                <Phone size={15} /> 24/7 Helpline: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Clinical FAQs ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Frequently Asked Questions
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Questions About <span style={{ color: 'var(--blue-brand)' }}>Home Healthcare</span>
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
                    backgroundColor: '#ffffff',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(10, 31, 68, 0.03)'
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
      />
    </>
  );
};

export default HomeServices;
