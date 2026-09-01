// SCALABILITY & PRIORITY NOTE:
// Services are ordered intentionally with Joint Replacement and ACL/Ligament first.
// Each service entry contains step-by-step clinical workflows and linked specialist doctors
// for rendering dedicated landing pages at /services/:slug.

import { BUSINESS_INFO } from '../config/business';

export interface ServiceStep {
  stepNumber: number;
  title: string;
  desc: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: 'joint' | 'sports' | 'spine' | 'bone' | 'xray';
  shortDesc: string;
  fullDesc: string;
  conditionOverview: string;
  keyHighlights: string[];
  symptoms: string[];
  steps: ServiceStep[];
  relevantDoctorIds: string[];
  isFeatured?: boolean;
}

export const servicesData: Service[] = [
  {
    id: 'joint-replacement',
    title: 'Joint Replacement Care',
    slug: 'joint-replacement',
    iconName: 'joint',
    shortDesc: 'Precision knee and hip joint replacements, joint preservation therapies, and rapid-recovery rehabilitation.',
    fullDesc: 'SOS delivers advanced total and partial joint replacement care for knee and hip osteoarthritis, severe cartilage wear, and joint degeneration. Our surgeons emphasize joint preservation therapies first and utilize precision surgical techniques designed for swift post-operative mobility.',
    conditionOverview: 'Severe joint degeneration, osteoarthritis, and chronic cartilage wear can cause debilitating pain, morning stiffness, and loss of independence. Our structured pathway evaluates joint preservation biological options before recommending surgical replacement.',
    keyHighlights: [
      'Evidence-based total and partial knee/hip replacements',
      'Joint preservation protocols (biological cell therapies & injections)',
      'Tissue-sparing surgical approaches for reduced post-op pain',
      'Dedicated physiotherapy and early ambulation protocols'
    ],
    symptoms: [
      'Severe pain while walking, climbing stairs, or standing',
      'Morning stiffness lasting longer than 30 minutes',
      'Grating sensation (crepitus) or clicking in knee/hip joints',
      'Inability to perform routine daily activities without pain relievers'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Specialist Clinical Assessment & Digital Radiography',
        desc: 'Comprehensive evaluation by our senior joint surgeon with high-resolution digital X-rays to assess joint space narrowing and bone alignment.'
      },
      {
        stepNumber: 2,
        title: 'Non-Surgical & Joint Preservation Evaluation',
        desc: 'Prioritizing conservative medical management, targeted physical therapy, and intra-articular therapies where joint preservation is clinically viable.'
      },
      {
        stepNumber: 3,
        title: 'Precision Surgical Planning & Procedure',
        desc: 'When surgery is necessary, precision implant templating and tissue-sparing surgical techniques are deployed for optimal joint alignment.'
      },
      {
        stepNumber: 4,
        title: 'Rapid Recovery & Guided Rehabilitation',
        desc: 'Structured same-day / next-day ambulation guidance, personalized home exercise regimen, and regular surgeon follow-ups.'
      }
    ],
    relevantDoctorIds: ['dr-hardik-desai', 'dr-nikhil-gokhale'],
    isFeatured: true
  },
  {
    id: 'acl-ligament',
    title: 'ACL & Ligament Care',
    slug: 'acl-ligament',
    iconName: 'sports',
    shortDesc: 'Minimally invasive keyhole arthroscopic repair and anatomical reconstruction for ACL, PCL, and knee ligament tears.',
    fullDesc: 'Ligament injuries demand exact anatomical reconstruction and progressive, biomechanically sound rehabilitation. SOS provides specialized keyhole arthroscopic repair for anterior cruciate ligament (ACL), posterior cruciate ligament (PCL), collateral ligaments, and meniscus tears.',
    conditionOverview: 'Sudden pivot twists, athletic tackles, or accidental falls can rupture critical knee stabilizing ligaments. Prompt diagnosis and arthroscopic (keyhole) repair prevent secondary cartilage damage and long-term joint instability.',
    keyHighlights: [
      'Anatomical ACL and multi-ligament arthroscopic reconstructions',
      'Meniscus repair and joint cartilage preservation',
      'Minimally invasive keyhole surgery with minimal tissue disruption',
      'Sports-specific return-to-activity rehabilitation programs'
    ],
    symptoms: [
      'Audible popping sensation during a twist or sudden pivot',
      'Rapid knee swelling and joint effusion within hours',
      'Feeling of knee instability or "giving way" while walking',
      'Inability to fully straighten or bend the injured knee'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Diagnostic Physical Exam & MRI Review',
        desc: 'Specific ligament stability stress tests combined with high-contrast MRI imaging to evaluate ligament tear severity and meniscus involvement.'
      },
      {
        stepNumber: 2,
        title: 'Pre-Operative Conditioning (Pre-Hab)',
        desc: 'Reducing joint swelling, restoring basic range of motion, and strengthening surrounding quadriceps and hamstrings before surgical intervention.'
      },
      {
        stepNumber: 3,
        title: 'Keyhole Arthroscopic Reconstruction',
        desc: 'Minimally invasive keyhole procedure using camera guidance to anatomically reconstruct the torn ligament with high-strength autografts.'
      },
      {
        stepNumber: 4,
        title: 'Phased Return-to-Activity Rehabilitation',
        desc: 'Stepwise progression from protected weight-bearing to functional muscle strengthening, agility drills, and return-to-sport testing.'
      }
    ],
    relevantDoctorIds: ['dr-aakash-ruia', 'dr-hardik-desai'],
    isFeatured: true
  },
  {
    id: 'spine-care',
    title: 'Spine Care & Sciatica',
    slug: 'spine-care',
    iconName: 'spine',
    shortDesc: 'Comprehensive care for herniated discs, sciatica nerve pain, cervical spondylosis, and minimally invasive spine decompression.',
    fullDesc: 'Back and neck pain can severely hinder everyday movement and sleep. SOS Spine Care focuses on precision diagnosis, conservative postural physical therapy, targeted spinal nerve blocks, and minimally invasive keyhole decompression when nerve impingement occurs.',
    conditionOverview: 'Compressed spinal nerves, slipped discs, or cervical degenerative changes cause sharp radiating pain, numbness, and tingling. We focus on non-operative relief protocols first, reserving keyhole intervention for persistent nerve compression.',
    keyHighlights: [
      'Targeted non-operative spinal decompression and core rehab',
      'Sciatica and nerve root block diagnostic injections',
      'Endoscopic micro-discectomy (keyhole spine surgery)',
      'Postural ergonomics and chronic back pain management'
    ],
    symptoms: [
      'Sharp shooting pain radiating down one or both legs (Sciatica)',
      'Neck stiffness radiating into shoulders, arms, or fingers',
      'Lower back muscle spasms aggravated by prolonged sitting',
      'Numbness, tingling, or weakness in feet or hands'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Spine Neurological & Posture Evaluation',
        desc: 'Thorough assessment of nerve reflexes, motor strength, sensation patterns, and review of spine MRI/X-ray scans.'
      },
      {
        stepNumber: 2,
        title: 'Conservative & Non-Surgical Protocols',
        desc: 'Evidence-based anti-inflammatory regimens, specialized spinal physical therapy, core stability training, and ergonomic correction.'
      },
      {
        stepNumber: 3,
        title: 'Targeted Interventional Relief',
        desc: 'For acute pain episodes, targeted nerve root blocks provide therapeutic relief and localize specific nerve irritation.'
      },
      {
        stepNumber: 4,
        title: 'Keyhole Micro-Decompression (When Indicated)',
        desc: 'Minimally invasive endoscopic micro-discectomy to relieve persistent nerve root pressure without extensive muscle trauma.'
      }
    ],
    relevantDoctorIds: ['dr-nikhil-gokhale'],
    isFeatured: true
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury & Arthroscopy',
    slug: 'sports-injury',
    iconName: 'sports',
    shortDesc: 'Expert sports medicine for rotator cuff tears, shoulder dislocations, tennis elbow, and athletic joint injuries.',
    fullDesc: 'Active individuals and athletes require accurate anatomical restoration and aggressive, structured recovery regimens. We provide comprehensive sports medicine care, keyhole shoulder stabilization, tendon repairs, and biomechanical physical therapy.',
    conditionOverview: 'Repetitive athletic stress or acute impacts can cause shoulder rotator cuff tears, recurrent dislocations, labral tears, and ankle sprains. Our sports medicine team combines arthroscopic repair with functional movement training.',
    keyHighlights: [
      'Arthroscopic rotator cuff and labrum keyhole repairs',
      'Recurrent shoulder dislocation stabilization procedures',
      'Overuse tendonitis protocols (Tennis Elbow, Achilles Tendonitis)',
      'Biomechanical movement assessment and injury prevention'
    ],
    symptoms: [
      'Shoulder pain when lifting the arm overhead or sleeping on that side',
      'Repeated feeling of shoulder joint slipping out or catching',
      'Severe ankle sprain with persistent swelling and instability',
      'Localized tendon tenderness that worsens with athletic activity'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Athletic Biomechanical Assessment',
        desc: 'Detailed clinical examination of joint range, muscle firing patterns, stability, and diagnostic ultrasound / MRI scans.'
      },
      {
        stepNumber: 2,
        title: 'Acute Inflammation & Joint Protection',
        desc: 'Rest, ice, compression protocols, temporary bracing, and targeted therapeutic modalities to control initial acute joint inflammation.'
      },
      {
        stepNumber: 3,
        title: 'Minimally Invasive Keyhole Repair',
        desc: 'Arthroscopic keyhole surgical restoration for torn tendons, labral tears, or loose cartilage bodies with minimal downtime.'
      },
      {
        stepNumber: 4,
        title: 'Sport-Specific Conditioning & Clearance',
        desc: 'Progressive strength, proprioceptive balance exercises, and safe return-to-sport athletic clearance testing.'
      }
    ],
    relevantDoctorIds: ['dr-aakash-ruia'],
    isFeatured: true
  },
  {
    id: 'pediatric-trauma',
    title: 'Pediatric & Trauma Care',
    slug: 'pediatric-trauma',
    iconName: 'bone',
    shortDesc: 'Specialized fracture management, childhood bone growth alignment, and 24/7 acute orthopedic trauma care.',
    fullDesc: 'Children and trauma patients require dedicated, specialized orthopedic expertise. Our Pediatric & Trauma Care unit handles complex bone fractures, pediatric growth plate injuries, deformity corrections, and immediate emergency fracture fixation.',
    conditionOverview: 'Children’s bones heal differently and require special care to protect active growth plates (physis). In acute trauma and polytrauma scenarios, rapid clinical response and precise fracture stabilization are essential to ensure optimal long-term bone healing.',
    keyHighlights: [
      'Pediatric growth plate preservation and gentle fracture casting',
      'Minimally invasive fracture fixation and reduction',
      'Correction of childhood limb alignment and gait abnormalities',
      '24/7 acute orthopedic trauma evaluation and emergency triage'
    ],
    symptoms: [
      'Sudden swelling, deformity, or severe pain after a fall or collision',
      'Child refusing to bear weight on a limb or persistent limping',
      'Visible limb deformity or abnormal bone contour post-injury',
      'Non-healing fracture or persistent localized bone tenderness'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Emergency Triage & Digital Radiography',
        desc: 'Immediate pain management, clinical stabilization, and gentle digital X-rays to assess fracture pattern and growth plate integrity.'
      },
      {
        stepNumber: 2,
        title: 'Conservative Casting / Splinting',
        desc: 'For non-displaced or stable fractures, precision waterproof casting and gentle anatomical splinting are applied.'
      },
      {
        stepNumber: 3,
        title: 'Minimally Invasive Fracture Alignment',
        desc: 'When bones are displaced, closed reduction under fluoroscopy or keyhole pin fixation ensures exact anatomical realignment.'
      },
      {
        stepNumber: 4,
        title: 'Growth Monitoring & Bone Healing Follow-up',
        desc: 'Scheduled radiograph reviews to monitor pediatric bone remodeling, cast removal, and gradual return to playground activities.'
      }
    ],
    relevantDoctorIds: ['dr-akhil-tawari'],
    isFeatured: true
  },
  {
    id: 'home-x-ray',
    title: 'Home X-Ray & At-Home Care',
    slug: 'home-x-ray',
    iconName: 'xray',
    shortDesc: '24/7 doorstep portable digital X-ray imaging, wound dressings, and at-home orthopedic consultations.',
    fullDesc: 'SOS Speciality Orthopedic Clinic brings certified digital radiograph equipment and trained technicians directly to your residence. Designed specifically for senior citizens, bedridden patients, and acute post-fall emergencies.',
    conditionOverview: 'Transporting an elderly or injured patient with an acute fracture to a diagnostic lab causes unnecessary suffering. Our doorstep medical division provides immediate imaging and reporting at home.',
    keyHighlights: [
      'Portable high-frequency digital radiograph machine',
      'Instant on-screen digital image preview & certified radiologist report',
      'Strict radiation safety, hygiene, and lead-shielding protocols',
      'Available 24/7 with 20–30 minute emergency dispatch across our centre network'
    ],
    symptoms: [
      'Suspicion of fracture following a domestic fall in elderly patients',
      'Severe bone or joint pain preventing travel to a clinic',
      'Post-operative surgical assessment for bedridden patients',
      'Chest or bone infection evaluations requiring comfortable home imaging'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Call / Request Dispatch',
        desc: `Contact our 24/7 helpline (${BUSINESS_INFO.phone}) or book via WhatsApp/online form with patient location and clinical details.`
      },
      {
        stepNumber: 2,
        title: 'Mobile Unit Arrival & Setup',
        desc: 'Certified radiography technicians arrive within 20–30 minutes with portable digital equipment and radiation safety gear.'
      },
      {
        stepNumber: 3,
        title: 'Gentle At-Home Digital Exposure',
        desc: 'Quick, low-radiation digital exposure performed safely right at the bedside with zero physical strain on the patient.'
      },
      {
        stepNumber: 4,
        title: 'Instant Preview & Specialist Consultation',
        desc: 'Digital images previewed immediately, validated by senior radiologists, and shared directly with consulting orthopedic surgeons.'
      }
    ],
    relevantDoctorIds: ['dr-hardik-desai', 'dr-akhil-tawari'],
    isFeatured: true
  }
];
