// PATIENT-FRIENDLY CLINICAL CONDITIONS MAPPING & CARE MATRIX
// Streamlined, punchy clinical pathways mapping conditions to symptoms, conservative care,
// surgical options, diagnostics, and appointment booking.

export interface Condition {
  id: string;
  name: string;
  category: 'Spine' | 'Joint' | 'Bone' | 'Sports' | 'Pediatric';
  bodyRegion: string;
  icon: string;
  shortDesc: string;
  symptoms: string[];
  conservativeCare: string;
  surgicalOption: string;
  diagnosticTools: string;
  homeXRayEligible: boolean;
  urgency: 'Emergency 24/7' | 'Priority OPD' | 'Routine Consult';
  recommendedServiceId: string;
  quickSymptomMatch: string;
}

export const conditionsData: Condition[] = [
  {
    id: 'knee-osteoarthritis',
    name: 'Knee Osteoarthritis',
    category: 'Joint',
    bodyRegion: 'Knee & Hip',
    icon: 'Bone',
    shortDesc: 'Cartilage wear causing stiffness, joint grating, and difficulty walking.',
    symptoms: [
      'Morning stiffness & crepitus',
      'Pain climbing stairs or walking'
    ],
    conservativeCare: 'PRP / Viscosupplementation & Targeted Physiotherapy',
    surgicalOption: 'Precision Partial or Total Knee Replacement',
    diagnosticTools: 'Weight-Bearing Digital X-Ray',
    homeXRayEligible: true,
    urgency: 'Priority OPD',
    recommendedServiceId: 'joint-replacement',
    quickSymptomMatch: 'Knee Pain & Arthritis'
  },
  {
    id: 'acl-tear',
    name: 'ACL & Ligament Tear',
    category: 'Sports',
    bodyRegion: 'Knee Joint',
    icon: 'Zap',
    shortDesc: 'Cruciate ligament or meniscus rupture from sudden sports twists or falls.',
    symptoms: [
      'Popping sound & rapid swelling',
      'Knee giving way / instability'
    ],
    conservativeCare: 'Hinged Bracing, RICE & Sports Pre-hab',
    surgicalOption: 'Keyhole Arthroscopic ACL & Meniscus Repair',
    diagnosticTools: 'High-Res 3T Knee MRI',
    homeXRayEligible: false,
    urgency: 'Priority OPD',
    recommendedServiceId: 'acl-ligament',
    quickSymptomMatch: 'ACL & Knee Instability'
  },
  {
    id: 'sciatica',
    name: 'Sciatica & Nerve Pain',
    category: 'Spine',
    bodyRegion: 'Lower Back & Leg',
    icon: 'Activity',
    shortDesc: 'Compressed lumbar nerve causing sharp shooting pain into the legs.',
    symptoms: [
      'Shooting electrical leg pain',
      'Numbness or tingling in calf / foot'
    ],
    conservativeCare: 'Spinal Decompression & Targeted Nerve Blocks',
    surgicalOption: 'Endoscopic Micro-Discectomy',
    diagnosticTools: 'Lumbar Spine MRI & X-Ray',
    homeXRayEligible: true,
    urgency: 'Priority OPD',
    recommendedServiceId: 'spine-care',
    quickSymptomMatch: 'Sciatica & Leg Pain'
  },
  {
    id: 'slipped-disc',
    name: 'Slipped / Herniated Disc',
    category: 'Spine',
    bodyRegion: 'Spine & Lumbar',
    icon: 'Disc',
    shortDesc: 'Bulging spinal disc cushion causing severe back muscle spasms.',
    symptoms: [
      'Acute back spasms on bending',
      'Pain aggravated by coughing / sitting'
    ],
    conservativeCare: 'Traction Therapy & Dynamic Core Stabilization',
    surgicalOption: 'Minimally Invasive Keyhole Decompression',
    diagnosticTools: 'High-Definition Spine MRI',
    homeXRayEligible: true,
    urgency: 'Priority OPD',
    recommendedServiceId: 'spine-care',
    quickSymptomMatch: 'Slipped Disc & Spasms'
  },
  {
    id: 'rotator-cuff',
    name: 'Rotator Cuff & Shoulder Tear',
    category: 'Sports',
    bodyRegion: 'Shoulder & Arm',
    icon: 'Shield',
    shortDesc: 'Tendon wear or tears limiting overhead reach and sleeping comfort.',
    symptoms: [
      'Deep dull shoulder ache at night',
      'Weakness lifting arm overhead'
    ],
    conservativeCare: 'Ultrasound-Guided Injections & Rehab Exercises',
    surgicalOption: 'Arthroscopic Keyhole Tendon Repair',
    diagnosticTools: 'Shoulder MRI & Ultrasound',
    homeXRayEligible: true,
    urgency: 'Priority OPD',
    recommendedServiceId: 'sports-injury',
    quickSymptomMatch: 'Shoulder & Arm Pain'
  },
  {
    id: 'osteoporosis-fractures',
    name: 'Bone Fragility & Fractures',
    category: 'Bone',
    bodyRegion: 'Spine & Hip',
    icon: 'Sun',
    shortDesc: 'Low bone density causing vertebral collapse or hip fractures after minor falls.',
    symptoms: [
      'Sudden severe back or hip pain',
      'Stooped posture & height loss'
    ],
    conservativeCare: 'TLSO Bracing & Anti-Osteoporotic Infusions',
    surgicalOption: 'Balloon Kyphoplasty / Fracture Fixation',
    diagnosticTools: '24/7 Home Digital X-Ray & DEXA Scan',
    homeXRayEligible: true,
    urgency: 'Emergency 24/7',
    recommendedServiceId: 'pediatric-trauma',
    quickSymptomMatch: 'Elderly Fall & Bone Fragility'
  },
  {
    id: 'cervical-spondylosis',
    name: 'Cervical Spondylosis',
    category: 'Spine',
    bodyRegion: 'Neck & Arm',
    icon: 'Compass',
    shortDesc: 'Age-related neck disc wear causing headaches, stiffness, and arm tingling.',
    symptoms: [
      'Neck stiffness radiating to shoulder',
      'Finger tingling & occipital headaches'
    ],
    conservativeCare: 'Cervical Isometric Rehab & Posture Correction',
    surgicalOption: 'Anterior Cervical Micro-Decompression',
    diagnosticTools: 'Cervical X-Ray & Spine MRI',
    homeXRayEligible: true,
    urgency: 'Priority OPD',
    recommendedServiceId: 'spine-care',
    quickSymptomMatch: 'Neck Pain & Tingling'
  },
  {
    id: 'frozen-shoulder',
    name: 'Frozen Shoulder',
    category: 'Joint',
    bodyRegion: 'Shoulder Joint',
    icon: 'Lock',
    shortDesc: 'Shoulder capsule inflammation causing severe global tightness and restricted motion.',
    symptoms: [
      'Inability to reach behind back',
      'Persistent night shoulder ache'
    ],
    conservativeCare: 'Hydrodilatation & Guided Capsular Stretching',
    surgicalOption: 'Arthroscopic Capsular Release',
    diagnosticTools: 'Passive Motion Exam & Ultrasound',
    homeXRayEligible: true,
    urgency: 'Routine Consult',
    recommendedServiceId: 'joint-replacement',
    quickSymptomMatch: 'Frozen Shoulder Stiffness'
  },
  {
    id: 'pediatric-fractures',
    name: 'Pediatric Fractures',
    category: 'Pediatric',
    bodyRegion: 'Child Musculoskeletal',
    icon: 'Baby',
    shortDesc: 'Gentle growth-plate conscious fracture management and casting for children.',
    symptoms: [
      'Child refusing to bear weight/limping',
      'Localized bone swelling after play fall'
    ],
    conservativeCare: 'Waterproof Synthetic Casting & Splinting',
    surgicalOption: 'Closed Reduction with Percutaneous Pinning',
    diagnosticTools: 'Low-Dose Pediatric Digital X-Ray',
    homeXRayEligible: true,
    urgency: 'Emergency 24/7',
    recommendedServiceId: 'pediatric-trauma',
    quickSymptomMatch: 'Child Limping & Fracture'
  },
  {
    id: 'acute-trauma-fractures',
    name: 'Acute Trauma & Fractures',
    category: 'Bone',
    bodyRegion: 'Emergency Trauma',
    icon: 'Zap',
    shortDesc: 'Displaced or complex bone fractures from high-energy road impact or severe falls.',
    symptoms: [
      'Severe pain, deformity & swelling',
      'Inability to bear any weight'
    ],
    conservativeCare: 'Emergency Triage, Splinting & Rapid Analgesia',
    surgicalOption: 'Minimally Invasive Plate / Interlocking Nail Fixation',
    diagnosticTools: '24/7 Doorstep/Centre Digital X-Ray & 3D CT',
    homeXRayEligible: true,
    urgency: 'Emergency 24/7',
    recommendedServiceId: 'pediatric-trauma',
    quickSymptomMatch: 'Emergency Fracture & Trauma'
  }
];
