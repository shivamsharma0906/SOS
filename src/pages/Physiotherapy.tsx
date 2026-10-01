import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Activity, 
  Clock, 
  Phone, 
  Calendar, 
  Award, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Home as HomeIcon, 
  Stethoscope, 
  Users, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Dumbbell,
  Target,
  Check,
  TrendingUp,
  Layers
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SEOHead } from '../components/SEOHead';
import { MedicalCrossMotif } from '../components/DecorativeMotif';
import { AppointmentModal } from '../components/AppointmentModal';
import { BUSINESS_INFO } from '../config/business';
import { doctorsData } from '../data/doctors';

export const Physiotherapy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePhase, setActivePhase] = useState<number>(1);
  const [activeProtocol, setActiveProtocol] = useState<'tkr' | 'thr' | 'spine' | 'acl' | 'shoulder' | 'geriatric'>('tkr');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // ── 1. Recovery Phases Data ──
  const recoveryPhases = [
    {
      phase: 1,
      name: 'Acute Protection & Pain Control',
      timeline: 'Weeks 0 – 2',
      badge: 'Immediate Post-Op / Acute Phase',
      color: '#0284c7',
      bgLight: '#f0f9ff',
      objective: 'Eliminate post-surgical swelling, restore terminal extension (0°), reactivate dormant muscle firing, and prevent deep vein thrombosis (DVT).',
      milestones: [
        'Passive knee extension restored to 0° (critical for normal walking)',
        'Active quadriceps recruitment without extensor lag',
        'Swelling and effusion down by 40–50% via cryo-compression',
        'Safe assisted ambulation with walker or crutches'
      ],
      interventions: [
        'Isometric quad sets and ankle venous pump drills',
        'Gentle patellar glides (superior/inferior) to prevent scar adhesions',
        'Doorstep cryotherapy and portable electro-analgesia (TENS/IFT)',
        'Home transfer mechanics (bed to standing, commode safety)'
      ],
      contraindications: 'No unassisted weight-bearing, no forced aggressive flexion beyond tissue tolerance, no sudden pivoting.'
    },
    {
      phase: 2,
      name: 'Early Mobility & Neuromuscular Awakening',
      timeline: 'Weeks 2 – 6',
      badge: 'Active Functional Phase',
      color: '#059669',
      bgLight: '#ecfdf5',
      objective: 'Restore active-assisted range of motion, normalize walking gait without limp, and wean off walking aids under surgeon clearance.',
      milestones: [
        'Knee flexion reaching 90°–110° without sharp joint pain',
        'Full active straight leg raise (SLR) with zero lag',
        'Independent transition from walker to single walking stick or cane',
        'Reciprocal reciprocal stair climbing (one step at a time)'
      ],
      interventions: [
        'Closed-chain heel slides and terminal knee extension (TKE) bands',
        'Hip abductor (Gluteus Medius) strengthening to stop Trendelenburg gait',
        'Stationary cycling with zero resistance for synovial lubrication',
        'Core bracing and postural realignment coaching'
      ],
      contraindications: 'No high-impact jumping, no open-chain heavy leg extensions, avoid prolonged standing over 30 minutes.'
    },
    {
      phase: 3,
      name: 'Progressive Strength & Proprioception',
      timeline: 'Weeks 6 – 12',
      badge: 'Strengthening & Balance Phase',
      color: '#d97706',
      bgLight: '#fffbeb',
      objective: 'Build muscular endurance, restore joint position sense (proprioception), eliminate muscle imbalances, and restore full functional movement.',
      milestones: [
        'Full symmetrical range of motion (120°–130° flexion)',
        'Single-leg balance stability for 30+ seconds without sway',
        'Walking 1–2 kilometers independently with natural arm swing',
        'Confident stair descent without handrail dependency'
      ],
      interventions: [
        'Eccentric quadriceps and hamstring load training',
        'Dynamic balance boards, rocker platforms, and perturbation drills',
        'Mini-squats, step-downs, and resistance band lateral walks',
        'Deep core multifidus recruitment for spinal offloading'
      ],
      contraindications: 'Avoid sudden deceleration twists or returning to sports without formal surgeon clearance.'
    },
    {
      phase: 4,
      name: 'Full Functional Return & High-Demand Resilience',
      timeline: 'Weeks 12+',
      badge: 'Performance & Maintenance',
      color: '#7c3aed',
      bgLight: '#faf5ff',
      objective: 'Achieve athletic or active lifestyle goals, pass Limb Symmetry Index (LSI > 90%), and cement lifelong joint preservation habits.',
      milestones: [
        'Limb Symmetry Index (LSI) > 90% strength parity with healthy limb',
        'Clearance for swimming, outdoor cycling, brisk walking, or sports',
        'Zero residual morning stiffness or post-exertional joint effusion',
        'Complete return to professional duties and social activities'
      ],
      interventions: [
        'Sport-specific or vocation-specific movement retraining',
        'Agility ladder coordination and multi-directional decelerations',
        'Lifelong home maintenance exercise blueprint',
        'Annual biomechanical review with SOS orthopedic surgeons'
      ],
      contraindications: 'Continue warming up prior to exertion; avoid sudden 100% volume spikes in athletic activity.'
    }
  ];

  // ── 2. Anatomical Protocols Data ──
  const protocols = {
    tkr: {
      title: 'Total Knee Arthroplasty (TKR) Rapid Recovery Protocol',
      targetJoint: 'Knee Joint Replacement',
      surgeonOverview: 'Designed in direct collaboration with Dr. Maulik Joshi, Dr. Shobit Deshmukh, and Dr. Omkar. Focuses on accelerated Day 1 ambulation, preventing knee flexion contractures, and achieving 110°–120° functional flexion.',
      benchmarks: [
        { label: 'Day 1–2', val: '60°–70° Flexion', note: 'Assisted standing & walker ambulation' },
        { label: 'Day 7', val: '80°–90° Flexion', note: 'Active quad contraction & stair navigation' },
        { label: 'Day 14', val: '95°–105° Flexion', note: 'Suture removal & transition to stick' },
        { label: 'Week 4–6', val: '110°–120° Flexion', note: 'Independent walking & driving clearance' }
      ],
      coreExercises: [
        'Active-assisted heel slides with strap assistance',
        'Quadriceps isometric sets with towel under heel (extension lock)',
        'Straight leg raises with 5-second isometric hold',
        'Seated knee extension over foam roller with slow eccentric lowering'
      ],
      surgeonPrecaution: 'Full knee extension (0°) is far more critical in the first 2 weeks than forced flexion. Never place a pillow directly under the knee while sleeping.'
    },
    thr: {
      title: 'Total Hip Arthroplasty (THR) Dislocation-Prevention Protocol',
      targetJoint: 'Hip Joint Replacement',
      surgeonOverview: 'Structured rehabilitation safeguarding prosthetic hip stability. Emphasizes gluteal reactivation, safe bed-to-chair transitions, and strict adherence to directional precautions depending on surgical approach.',
      benchmarks: [
        { label: 'Day 1–2', val: 'Weight-Bearing as Tolerated', note: 'Safe pivot transfers with walker' },
        { label: 'Day 14', val: 'Hip Abduction Firing', note: 'Normal pelvis leveling while walking' },
        { label: 'Week 4', val: 'Single-Cane Ambulation', note: 'No Trendelenburg lurch' },
        { label: 'Week 8', val: 'Full Independence', note: 'Free walking & outdoor mobility' }
      ],
      coreExercises: [
        'Isometric gluteal contractions and supine hip abduction within safe arc',
        'Standing hip extension with stable parallel support',
        'Clamshells (within permitted angles) for piriformis and abductor control',
        'Gait retraining focusing on heel-to-toe strike symmetry'
      ],
      surgeonPrecaution: 'Maintain hip precautions: Do not bend hip past 90°, do not cross legs, and use a raised commode seat for the initial 6 weeks.'
    },
    spine: {
      title: 'Lumbar Spine & Sciatica Decompression Protocol',
      targetJoint: 'Lumbar & Cervical Spine',
      surgeonOverview: 'Evidence-based mechanical spinal decompression adhering to McKenzie directional preference protocols. Rapidly centralizes radiating nerve pain and activates the deep stabilizing multifidus corset.',
      benchmarks: [
        { label: 'Session 1–3', val: 'Pain Centralization', note: 'Pain recedes from calf/thigh to lower back' },
        { label: 'Week 2', val: 'Spasm Resolution', note: 'Restoration of erect trunk posture' },
        { label: 'Week 4', val: 'Core Stabilization', note: 'Transversus Abdominis recruited' },
        { label: 'Week 6+', val: 'Relapse Prevention', note: 'Ergonomic spine resilience' }
      ],
      coreExercises: [
        'Prone lumbar press-ups (McKenzie extension) for disc centralization',
        'Sciatic nerve flossing and neurodynamic mobilization',
        'Dead-bug and bird-dog progressions with abdominal bracing',
        'Pelvic tilts and cat-camel spinal articulation'
      ],
      surgeonPrecaution: 'If leg numbness, foot drop, or bowel/bladder control issues develop, immediate surgeon re-evaluation is required.'
    },
    acl: {
      title: 'ACL Reconstruction & Sports Return-to-Play Protocol',
      targetJoint: 'Knee Ligament Complex',
      surgeonOverview: 'Phased neuromuscular conditioning protecting graft integration while restoring terminal knee extension, quad cross-sectional area, and high-velocity deceleration mechanics.',
      benchmarks: [
        { label: 'Week 0–2', val: 'Graft Protection', note: '0° extension lock & swelling control' },
        { label: 'Week 6', val: 'Full ROM & Normal Gait', note: 'Stationary cycling & closed chain load' },
        { label: 'Month 3–4', val: 'Jogging Progression', note: 'Straight-line impact clearance' },
        { label: 'Month 6–9', val: 'Return to Sport (RTS)', note: 'LSI > 90% on functional hop testing' }
      ],
      coreExercises: [
        'Terminal knee extensions (TKE) with elastic resistance bands',
        'Romanian deadlifts and Nordic hamstring curls for hamstring/quad balance',
        'Y-Balance and dynamic single-leg landing stabilization drills',
        'Agility footwork and multi-planar cutting mechanics'
      ],
      surgeonPrecaution: 'Do not rush open-chain heavy quadriceps extensions before 12 weeks to protect the immature ligament graft.'
    },
    shoulder: {
      title: 'Rotator Cuff & Frozen Shoulder (Capsular Mobilization)',
      targetJoint: 'Glenohumeral Joint',
      surgeonOverview: 'Combines Maitland passive joint mobilization with scapular rhythm retraining. Eliminates excruciating night pain, expands restricted overhead arcs, and strengthens the rotator cuff tendon balance.',
      benchmarks: [
        { label: 'Week 1–2', val: 'Night Pain Relief', note: 'Pendulum drills & posture offloading' },
        { label: 'Week 4', val: '120° Passive Elevation', note: 'Capsular release & wand exercises' },
        { label: 'Week 8', val: 'Active Overhead Reach', note: 'Full scapulohumeral rhythm' },
        { label: 'Week 12', val: 'Rotator Cuff Strength', note: 'Resistance band internal/external rotation' }
      ],
      coreExercises: [
        'Codman pendulum swings and finger ladder wall climbs',
        'Passive pulley and cane-assisted elevation stretches',
        'Scapular setting: rows, wall angels, and prone Y-T-W raises',
        'Elastic band internal and external rotations at 0° abduction'
      ],
      surgeonPrecaution: 'Avoid aggressive ballistic arm jerks during the freezing phase. Gentle sustained end-range holds produce superior capsular elongation.'
    },
    geriatric: {
      title: 'Geriatric Balance & Fall Prevention Care',
      targetJoint: 'Senior Functional Independence',
      surgeonOverview: 'Gentle, empowering physical therapy conducted directly at home for seniors recovering from fractures or struggling with balance, osteoporosis, and fear of falling.',
      benchmarks: [
        { label: 'Week 1', val: 'Transfer Confidence', note: 'Safe bed-to-chair-to-toilet transfers' },
        { label: 'Week 3', val: 'Postural Equilibrium', note: 'Tandem stance and steady stepping' },
        { label: 'Week 6', val: 'Fall Risk Reduction', note: 'Timed Up and Go (TUG) improvement' },
        { label: 'Ongoing', val: 'Daily Independence', note: 'Active mobility without fear' }
      ],
      coreExercises: [
        'Sit-to-stand repetitions from chair with minimal arm support',
        'Heel-to-toe tandem walking along wall support',
        'Seated ankle pumps and knee extensions with light ankle cuffs',
        'Vestibular head-eye coordination balance drills'
      ],
      surgeonPrecaution: 'Home environment check: Ensure zero loose rugs, install grab bars in bathrooms, and keep pathways well illuminated.'
    }
  };

  const activeProtocolData = protocols[activeProtocol];

  // ── 3. Modalities Grid Data ──
  const modalities = [
    {
      title: 'Interferential Therapy (IFT) & TENS',
      category: 'Electro-Analgesia',
      desc: 'Medium-frequency electrical currents penetrating deep muscle layers to block pain impulses and release endorphins.',
      useFor: 'Acute sciatica, severe lumbar spasms, post-op pain'
    },
    {
      title: 'Therapeutic Ultrasound & Deep Heat',
      category: 'Deep Tissue Healing',
      desc: '1MHz & 3MHz sound waves inducing cellular acoustic microstreaming to break down fibrous adhesions and reduce swelling.',
      useFor: 'Calcific tendinitis, frozen shoulder, chronic ligament sprains'
    },
    {
      title: 'Maitland & Mulligan Mobilization',
      category: 'Hands-on Manual Therapy',
      desc: 'Oscillatory and sustained joint glide techniques performed by certified therapists to restore restricted joint mechanics.',
      useFor: 'Post-cast stiff joints, adhesive capsulitis, neck stiffness'
    },
    {
      title: 'Trigger Point Dry Needling',
      category: 'Myofascial Decompression',
      desc: 'Sterile ultra-fine filiform needles targeting hyper-irritable muscular taut bands to immediately deactivate stubborn spasms.',
      useFor: 'Trapezius muscle knots, pyriformis syndrome, chronic back pain'
    },
    {
      title: 'Motorized Axial Traction Bed',
      category: 'Spinal Decompression',
      desc: 'Precision computerized intermittent cervical and lumbar traction creating negative intradiscal vacuum to relieve pinched nerves.',
      useFor: 'Herniated disc, sciatica nerve compression, cervical spondylosis'
    },
    {
      title: 'Dynamic Neuromuscular Proprioception',
      category: 'Motor Control Retraining',
      desc: 'BOSU balance trainers, wobble discs, and resistance bands to retrain subconscious joint position sense and prevent reinjury.',
      useFor: 'ACL recovery, ankle sprains, elderly fall prevention'
    }
  ];

  // ── 4. FAQs ──
  const faqs = [
    {
      q: 'How soon after knee or hip replacement surgery should physiotherapy begin?',
      a: 'Under the SOS accelerated rehabilitation pathway, physical therapy begins within 24 hours of surgery. Starting early with ankle pumps, gentle isometric quadriceps sets, and assisted standing reduces post-operative swelling, prevents dangerous blood clots (DVT), and ensures optimal implant alignment.'
    },
    {
      q: 'Can an orthopedic physiotherapist visit my residence in Mumbai?',
      a: 'Yes. SOS operates dedicated doorstep home physiotherapy across Kandivali, Borivali, Malad, Goregaon, Andheri, and adjoining suburbs. Our certified physiotherapist arrives with portable electrotherapy units (IFT/TENS), resistance equipment, and guided exercise aids for comfortable living-room care.'
    },
    {
      q: 'How does SOS physiotherapy differ from standalone gym physiotherapists?',
      a: 'At SOS, your physical therapy is directly supervised by consultant orthopedic surgeons (Dr. Maulik Joshi, Dr. Shobit Deshmukh, Dr. Omkar). Your post-op X-rays, surgical implant details, and range-of-motion milestones are reviewed collectively every week. This eliminates guesswork and protects healing tissues.'
    },
    {
      q: 'How many sessions will I need to recover fully?',
      a: 'Mild muscle strains or acute postural neck pain typically require 5 to 7 sessions. Complex post-operative joint replacements, multi-ligament knee injuries, or severe lumbar disc herniations usually follow a structured 4 to 8-week phased program with measurable weekly benchmarks.'
    },
    {
      q: 'What if a home therapy patient experiences sudden severe pain or swelling?',
      a: 'Because our therapists are part of the SOS orthopedic hospital network, they directly connect with on-call consultant surgeons. If an urgent concern arises, bedside digital X-ray dispatch or immediate clinic escalation is arranged seamlessly.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Orthopedic Physiotherapy & Surgeon-Led Joint Rehab Mumbai | SOS Clinic"
        description="Comprehensive orthopedic physical therapy and joint rehabilitation in Mumbai. Specialized in-clinic & doorstep home physio for knee replacement, hip surgery, sciatica, and sports injuries."
        canonicalUrl={`${BUSINESS_INFO.website}/physiotherapy`}
      />

      {/* ── 1. Bespoke Editorial Hero Header ── */}
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
              <Activity size={16} />
              <span>Evidence-Based Orthopedic & Sports Rehabilitation</span>
            </div>

            <h1 className="heading-xl" style={{ color: 'var(--navy-primary)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
              Precision Biomechanics & <span style={{ color: 'var(--blue-brand)' }}>Surgeon-Led Joint Rehab</span>
            </h1>

            <p className="subhead" style={{ color: 'var(--text-secondary)', margin: '0 auto 2.25rem auto', maxWidth: '760px', fontSize: '1.08rem', lineHeight: 1.65 }}>
              Restoring pain-free joint mobility and rebuilding deep muscular stability through structured, phase-by-phase recovery protocols. Designed in unison with senior consultant orthopedic surgeons and available both at our specialized centres and at your doorstep.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.75rem' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 800 }}
              >
                <Calendar size={18} /> Book In-Clinic Physio
              </button>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-secondary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 700 }}
              >
                <HomeIcon size={18} /> Request Home Visit Physio
              </button>

              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-secondary btn-lg"
                style={{ gap: '0.5rem', padding: '0.85rem 1.8rem', fontWeight: 700 }}
              >
                <Phone size={18} /> 24/7 Desk: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Clinical Pillars Strip */}
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
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>1-on-1 Care</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Dedicated 45-Min Sessions</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Stethoscope size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>Surgeon-Led</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Direct Doctor Oversight</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--blue-soft)', color: 'var(--blue-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HomeIcon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>Clinic + Home</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Doorstep Mumbai Visits</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.15rem', borderRadius: '16px', border: '1px solid rgba(10, 31, 68, 0.08)', boxShadow: '0 4px 16px rgba(10, 31, 68, 0.04)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Target size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', lineHeight: 1 }}>0° Extension</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>Strict ROM Milestones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Clinical Recovery Phase Matrix (Phase 1–4) ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Biological Healing Pathway
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              The 4 Clinical Phases of <span style={{ color: 'var(--blue-brand)' }}>Orthopedic Rehabilitation</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Safe recovery is governed by biological tissue repair timelines, not arbitrary exercise routines. Explore our surgeon-calibrated phases below:
            </p>

            {/* Phase Selector Tabs */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '0.5rem', 
                marginTop: '2rem',
                backgroundColor: 'var(--bg-subtle)',
                padding: '0.4rem',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}
              className="recovery-phase-tabs"
            >
              {recoveryPhases.map(p => {
                const isActive = activePhase === p.phase;
                return (
                  <button
                    key={p.phase}
                    onClick={() => setActivePhase(p.phase)}
                    style={{
                      padding: '0.75rem 0.5rem',
                      borderRadius: '12px',
                      border: 'none',
                      backgroundColor: isActive ? '#ffffff' : 'transparent',
                      color: isActive ? 'var(--navy-primary)' : 'var(--text-secondary)',
                      boxShadow: isActive ? '0 4px 12px rgba(10, 31, 68, 0.08)' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.2rem'
                    }}
                    className="pill-choice-btn"
                  >
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: isActive ? p.color : 'inherit', letterSpacing: '0.04em' }}>
                      Phase {p.phase}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                      {p.timeline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Phase Deep Dive Card */}
          {(() => {
            const cur = recoveryPhases.find(p => p.phase === activePhase) || recoveryPhases[0];
            return (
              <div 
                key={cur.phase}
                className="animate-fade-in"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(10, 31, 68, 0.1)',
                  boxShadow: '0 12px 36px rgba(10, 31, 68, 0.06)',
                  padding: '2.5rem',
                  maxWidth: '1050px',
                  margin: '0 auto',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Header Strip */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <span 
                        style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: 800, 
                          color: cur.color, 
                          backgroundColor: cur.bgLight, 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: 'var(--radius-pill)', 
                          border: `1px solid ${cur.color}30` 
                        }}
                      >
                        {cur.badge}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
                        Timeline: {cur.timeline}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                      Phase {cur.phase}: {cur.name}
                    </h3>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary btn-sm"
                    style={{ fontWeight: 800 }}
                  >
                    Discuss Phase with Physio
                  </button>
                </div>

                <div style={{ marginBottom: '1.75rem', backgroundColor: 'var(--bg-subtle)', padding: '1.15rem 1.35rem', borderRadius: '14px', borderLeft: `4px solid ${cur.color}` }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
                    Primary Biological Objective
                  </div>
                  <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--navy-primary)', lineHeight: 1.6 }}>
                    {cur.objective}
                  </p>
                </div>

                {/* 2-Column Split: Clinical Milestones & Interventions */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '1.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
                      <Target size={17} color={cur.color} />
                      <span>Quantitative Clinical Benchmarks:</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {cur.milestones.map((m, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={16} color={cur.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
                      <Dumbbell size={17} color="var(--blue-brand)" />
                      <span>Therapeutic Interventions & Drills:</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {cur.interventions.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--navy-primary)', lineHeight: 1.5 }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--blue-brand)', marginTop: '8px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Precaution Box */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#991b1b', fontSize: '0.84rem', fontWeight: 600 }}>
                  <ShieldCheck size={18} color="#dc2626" style={{ flexShrink: 0 }} />
                  <span><strong>Clinical Safety Rule:</strong> {cur.contraindications}</span>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── 3. Interactive Anatomical Protocol Navigator ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Condition-Specific Blueprints
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Orthopedic Protocols by <span style={{ color: 'var(--blue-brand)' }}>Anatomical Specialty</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Select a clinical presentation to inspect the exact rehabilitation roadmap followed by SOS orthopedic physical therapists:
            </p>

            {/* Protocol Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              {[
                { id: 'tkr', label: 'Total Knee Arthroplasty (TKR)' },
                { id: 'thr', label: 'Total Hip Arthroplasty (THR)' },
                { id: 'spine', label: 'Lumbar Spine & Sciatica' },
                { id: 'acl', label: 'ACL & Sports Ligaments' },
                { id: 'shoulder', label: 'Rotator Cuff & Frozen Shoulder' },
                { id: 'geriatric', label: 'Geriatric Balance & Fall Care' }
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setActiveProtocol(btn.id as any)}
                  className="pill-choice-btn"
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1.5px solid',
                    borderColor: activeProtocol === btn.id ? 'var(--navy-primary)' : 'var(--border-color)',
                    backgroundColor: activeProtocol === btn.id ? 'var(--navy-primary)' : '#ffffff',
                    color: activeProtocol === btn.id ? '#ffffff' : 'var(--navy-primary)',
                    cursor: 'pointer'
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Protocol Display */}
          <div 
            key={activeProtocol}
            className="animate-fade-in"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(10, 31, 68, 0.08)',
              boxShadow: '0 8px 30px rgba(10, 31, 68, 0.05)',
              padding: '2.5rem',
              maxWidth: '1050px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {activeProtocolData.targetJoint}
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0.2rem 0 0.5rem 0' }}>
                  {activeProtocolData.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '780px' }}>
                  {activeProtocolData.surgeonOverview}
                </p>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-outline btn-sm"
                style={{ fontWeight: 800 }}
              >
                Book Protocol Evaluation
              </button>
            </div>

            {/* Benchmarks Strip */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                backgroundColor: 'var(--bg-subtle)',
                padding: '1.25rem',
                borderRadius: '16px',
                marginBottom: '2rem'
              }}
            >
              {activeProtocolData.benchmarks.map((bm, i) => (
                <div key={i} style={{ borderLeft: '3px solid var(--blue-brand)', paddingLeft: '0.75rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                    {bm.label}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)', margin: '0.2rem 0' }}>
                    {bm.val}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                    {bm.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Drills & Surgeon Advice */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.85rem' }}>
                  Prescribed Exercise Modalities:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeProtocolData.coreExercises.map((ex, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--navy-primary)', lineHeight: 1.45 }}>
                      <Check size={16} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: '#fffbeb', borderRadius: '16px', padding: '1.35rem', border: '1px solid #fde68a' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                  Surgeon Clinical Advisory
                </div>
                <p style={{ fontSize: '0.88rem', color: '#78350f', lineHeight: 1.6, margin: 0 }}>
                  {activeProtocolData.surgeonPrecaution}
                </p>
                <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#92400e', fontWeight: 600 }}>
                  Reviewed weekly by SOS Consultant Orthopedic Panel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. In-Clinic vs Doorstep Home Visits Pathway ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.75rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Dual Delivery Pathways
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Choose Between <span style={{ color: 'var(--blue-brand)' }}>In-Clinic & Home Physio</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              We tailor your rehabilitation setting to your mobility level, clinical stage, and convenience.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
              maxWidth: '1080px',
              margin: '0 auto'
            }}
          >
            {/* Pathway 1: In-Clinic */}
            <div 
              className="interactive-feature-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                border: '1.5px solid rgba(2, 132, 199, 0.3)',
                boxShadow: '0 8px 30px rgba(2, 132, 199, 0.08)',
                padding: '2.5rem 2.25rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div 
                className="icon-box-hover"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--blue-soft)',
                  color: 'var(--blue-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Dumbbell size={26} />
              </div>

              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Advanced Clinic Suite
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                In-Clinic Specialized Rehabilitation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.35rem' }}>
                Recommended for active recovery, athletic conditioning, and patients needing mechanized spinal traction or comprehensive gym resistance apparatus.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Motorized cervical & lumbar decompression traction tables',
                  'High-frequency IFT, TENS & deep ultrasound therapy suites',
                  'Parallel walking bars, balance wobble boards & gym resistance',
                  'Direct same-day orthopedic surgeon re-evaluations on site'
                ].map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                    <CheckCircle2 size={16} color="var(--blue-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontWeight: 800 }}
                >
                  Book In-Clinic Session <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Pathway 2: Doorstep Home Visits */}
            <div 
              className="interactive-feature-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                border: '1.5px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 8px 30px rgba(16, 185, 129, 0.08)',
                padding: '2.5rem 2.25rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div 
                className="icon-box-hover"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <HomeIcon size={26} />
              </div>

              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Doorstep Care Across Mumbai
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.65rem' }}>
                Doorstep Home Physiotherapy
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.35rem' }}>
                Ideal for Day 1–14 post-operative joint replacements, seniors with acute fall risks, or patients immobilized by acute back spasms.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Zero painful transit, auto rickshaw jerks, or traffic exhaustion',
                  'Certified physiotherapist arrives with portable electrotherapy gear',
                  'Tailored bed transfers, chair biomechanics & home stair training',
                  'Flexible daily or alternate-day morning and evening slots'
                ].map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--navy-primary)' }}>
                    <CheckCircle2 size={16} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontWeight: 800, borderColor: '#059669', color: '#059669' }}
                >
                  Request Home Physio Visit <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Advanced Modalities & Technology ── */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
              Clinical Equipment
            </div>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '0.75rem' }}>
              Advanced Therapeutic <span style={{ color: 'var(--blue-brand)' }}>Modalities & Technology</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Combining modern electro-physical agents with hands-on manual techniques to accelerate pain relief and tissue remodeling:
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {modalities.map((item, idx) => (
              <div 
                key={idx}
                className="interactive-feature-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '1.75rem',
                  border: '1px solid rgba(10, 31, 68, 0.08)',
                  boxShadow: '0 4px 16px rgba(10, 31, 68, 0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--blue-brand)', backgroundColor: 'var(--blue-soft)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                  {item.desc}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', fontSize: '0.78rem', color: 'var(--navy-primary)' }}>
                  <strong>Key Indications:</strong> <span style={{ color: 'var(--text-secondary)' }}>{item.useFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Surgeon Governance Strip (Dr. Maulik, Dr. Shobit, Dr. Omkar) ── */}
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
                <span>Integrated Doctor-Therapist Supervision</span>
              </div>

              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, margin: '0 0 0.85rem 0', lineHeight: 1.25 }}>
                Physiotherapy Directly Monitored by Senior Orthopedic Surgeons
              </h2>

              <p style={{ fontSize: '0.96rem', color: '#e0f2fe', lineHeight: 1.6, margin: 0 }}>
                At SOS, physical therapy is never conducted in isolation. Senior consultant orthopedic surgeons (Dr. Maulik Joshi, Dr. Shobit Deshmukh, Dr. Omkar) review patient progression curves every week. Surgical notes, prosthesis specifications, and follow-up digital X-rays are analyzed collectively to adapt your protocol safely.
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
                <Calendar size={16} /> Book Physio Assessment
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
              Clinical Questions About <span style={{ color: 'var(--blue-brand)' }}>Physiotherapy</span>
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

export default Physiotherapy;
