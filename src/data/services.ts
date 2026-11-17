// SCALABILITY & PRIORITY NOTE:
// Services are ordered intentionally with Joint Replacement, ACL/Ligament, Spine Care first.
// Each service entry contains step-by-step clinical workflows, condition deep-dives (Sciatica, Slipped Disc,
// Frozen Shoulder, ACL Tear, Osteoarthritis), verified doctor affiliations, and structured patient FAQs.

import { BUSINESS_INFO } from '../config/business';

export interface ServiceStep {
  stepNumber: number;
  title: string;
  desc: string;
}

export interface ConditionDetail {
  name: string;
  slug: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string;
  treatments: string[];
  whenToConsult: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
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
  conditions?: ConditionDetail[];
  faqs?: ServiceFAQ[];
  relevantDoctorIds: string[];
  isFeatured?: boolean;
  targetKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  redirectUrl?: string;
}

export const servicesData: Service[] = [
  {
    id: 'joint-replacement',
    title: 'Joint Replacement Surgery',
    slug: 'joint-replacement',
    iconName: 'joint',
    targetKeyword: 'Joint replacement in Mumbai',
    metaTitle: 'Joint Replacement Surgery in Mumbai | SOS Clinic',
    metaDescription: 'Specialized robotic knee and hip joint replacement in Mumbai. Evidence-based joint preservation, rapid recovery protocols, and senior orthopedic surgeons.',
    h1: 'Joint Replacement & Robotic Knee Surgery in Mumbai',
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
    conditions: [
      {
        name: 'Advanced Knee Osteoarthritis',
        slug: 'knee-osteoarthritis',
        overview: 'Progressive wear and loss of articular cartilage cushioning the knee joint, resulting in painful bone-on-bone friction, inflammation, and angular deformities.',
        symptoms: [
          'Weight-bearing knee pain worsening by evening',
          'Joint stiffness after periods of sitting or upon waking',
          'Swelling, tenderness, and audible crepitus during flexion',
          'Progressive bow-leg (varus) or knock-knee (valgus) deformity'
        ],
        causes: [
          'Age-related articular cartilage degeneration',
          'Biomechanical malalignment and chronic joint overload',
          'Previous knee trauma, fractures, or untreated meniscus tears',
          'Genetic predisposition and metabolic joint stressors'
        ],
        diagnosis: 'Standing weight-bearing digital alignment X-rays (scannogram) to quantify joint space narrowing and bone spur formation.',
        treatments: [
          'Conservative: Unloader knee braces, specialized quadriceps physical therapy, intra-articular viscosupplementation',
          'Surgical: Robotic-assisted partial knee replacement or total knee arthroplasty with sub-millimeter precision'
        ],
        whenToConsult: 'Consult a specialist when knee pain limits walking distance to less than 15-20 minutes or prevents restful sleep.'
      },
      {
        name: 'Hip Joint Degeneration & Avascular Necrosis (AVN)',
        slug: 'hip-degeneration-avn',
        overview: 'Breakdown of the hip ball-and-socket joint caused by cartilage wear or loss of microvascular blood supply to the femoral head (AVN).',
        symptoms: [
          'Deep groin pain radiating down the front of the thigh to the knee',
          'Stiffness making it difficult to put on shoes or cross legs',
          'Limping gait and sudden sharp catches when turning',
          'Reduced rotational range of motion in the hip'
        ],
        causes: [
          'Femoral head avascular necrosis (often post-steroid or post-viral illness)',
          'Primary degenerative hip osteoarthritis',
          'Prior hip dislocations or femoral neck fractures'
        ],
        diagnosis: 'Pelvis AP and frog-leg lateral radiographs; 3T MRI for early pre-collapse AVN staging.',
        treatments: [
          'Early AVN: Core decompression to relieve intraosseous pressure and promote vascularization',
          'Advanced: Muscle-sparing total hip replacement with ceramic-on-polyethylene bearing surfaces'
        ],
        whenToConsult: 'Seek timely evaluation if groin pain produces an asymmetric limp or worsens progressively during weight-bearing.'
      }
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
    faqs: [
      {
        question: 'How does robotic knee replacement differ from conventional knee replacement?',
        answer: 'Robotic-assisted joint replacement uses pre-operative 3D CT modeling and intra-operative robotic guidance. This allows surgeons to balance soft tissues with sub-millimeter precision, preserving healthy bone and ligaments for a more natural-feeling joint and faster rehabilitation.'
      },
      {
        question: 'What is the expected lifespan of a modern knee or hip implant?',
        answer: 'Modern high-crosslinked polyethylene and ceramic joint implants typically last 20 to 25 years or longer when placed with precise mechanical alignment and accompanied by sensible activity levels.'
      },
      {
        question: 'How soon will I be walking after joint replacement surgery at SOS?',
        answer: 'Under our accelerated recovery pathway, patients typically begin supported walking with a walker within 12 to 24 hours of surgery under the direct supervision of our surgical physiotherapy team.'
      },
      {
        question: 'Can both knees be operated on at the same time (bilateral knee replacement)?',
        answer: 'Bilateral knee replacement is evaluated on an individual basis depending on medical fitness, cardiac health, age, and joint severity. Our surgeons discuss whether simultaneous or staged surgery is safer for you.'
      },
      {
        question: 'How does the SOS doorstep Home X-Ray service help joint replacement patients?',
        answer: 'For post-operative follow-up or immobile patients suffering from severe osteoarthritis, our mobile digital X-ray units capture hospital-grade radiographs directly at your bedside, preventing painful ambulance transfers.'
      }
    ],
    relevantDoctorIds: ['dr-maulik-joshi', 'dr-shobit-deshmukh'],
    isFeatured: true
  },
  {
    id: 'acl-ligament',
    title: 'ACL & Ligament Surgery',
    slug: 'acl-ligament',
    iconName: 'sports',
    targetKeyword: 'ACL surgery in Mumbai',
    metaTitle: 'ACL & Ligament Surgery in Mumbai | SOS Clinic',
    metaDescription: 'Minimally invasive keyhole arthroscopic ACL reconstruction and ligament repair in Mumbai. Sports medicine rehabilitation and athlete return-to-play protocols.',
    h1: 'ACL & Ligament Reconstruction in Mumbai',
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
    conditions: [
      {
        name: 'ACL Tear (Anterior Cruciate Ligament Injury)',
        slug: 'acl-tear',
        overview: 'Complete or partial rupture of the primary stabilizing ligament controlling anterior translation and rotational stability of the tibia relative to the femur.',
        symptoms: [
          'Loud audible "pop" at the exact moment of twisting',
          'Rapid joint effusion and swelling filling the knee within 2 to 4 hours',
          'Sensation of the knee slipping or buckling on pivoting',
          'Severe pain preventing continuation of sports or brisk walking'
        ],
        causes: [
          'Sudden deceleration coupled with valgus twist (pivoting on a planted foot)',
          'Awkward landing mechanics following a jump in basketball or badminton',
          'Direct contact tackle or vehicular impact to the anterior knee'
        ],
        diagnosis: 'Clinical Lachman and pivot-shift stability tests performed by an orthopedic surgeon, confirmed by high-contrast knee MRI.',
        treatments: [
          'Pre-habilitation: Swelling reduction, quadriceps activation, and restoring passive knee extension',
          'Surgical: Anatomical arthroscopic ACL reconstruction utilizing high-strength hamstring or bone-patellar tendon autografts'
        ],
        whenToConsult: 'Consult immediately if your knee buckles or gives way, or if an audible pop was accompanied by sudden swelling.'
      },
      {
        name: 'Meniscus Tears & Joint Instability',
        slug: 'meniscus-tear',
        overview: 'Tear in the C-shaped fibrocartilaginous shock absorber pads cushioning femoral and tibial joint surfaces.',
        symptoms: [
          'Localized joint line tenderness along inner or outer knee',
          'Mechanical knee locking or inability to fully straighten the joint',
          'Pain aggravated by deep squatting or rotational movements',
          'Intermittent fluid accumulation following exertion'
        ],
        causes: [
          'Forceful rotational stress on a flexed, weight-bearing knee',
          'Concomitant ACL rupture resulting in secondary meniscus shear',
          'Age-related fibrocartilage degeneration in active adults'
        ],
        diagnosis: 'McMurray test, joint line palpation, and coronal/sagittal knee MRI evaluation.',
        treatments: [
          'Conservative: RICE therapy, anti-inflammatory care, and eccentric hamstring rehab for stable tears',
          'Arthroscopic: Precision meniscus repair (all-inside suture anchors) to preserve joint shock absorption'
        ],
        whenToConsult: 'Seek evaluation if the knee joint locks in a bent position or if sharp catching prevents normal stair descent.'
      }
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
    faqs: [
      {
        question: 'Can an ACL tear heal on its own without surgery?',
        answer: 'Complete ACL tears generally do not heal spontaneously because the intra-articular synovial fluid prevents blood clot organization. Active patients wishing to return to pivot sports or prevent early arthritis benefit significantly from anatomical reconstruction.'
      },
      {
        question: 'What is the difference between ACL repair and ACL reconstruction?',
        answer: 'ACL repair involves stitching the torn ligament back to bone (suitable only for select acute avulsion tears). ACL reconstruction replaces the torn ligament with a robust tendon graft (hamstring or patellar tendon), which is the global gold standard for stability.'
      },
      {
        question: 'How long after ACL surgery can I return to running and sports?',
        answer: 'Straight-line jogging typically begins around 3 to 4 months post-surgery. Return to competitive pivot sports (football, cricket, badminton) requires 9 to 12 months of structured rehabilitation and objective strength clearance.'
      },
      {
        question: 'What are the advantages of keyhole arthroscopy at SOS?',
        answer: 'Arthroscopic surgery uses tiny 4-5 mm incisions, an HD camera, and specialized micro-instruments. This results in minimal muscle trauma, less post-operative pain, negligible blood loss, and faster discharge compared to open joint surgery.'
      },
      {
        question: 'Which surgeons perform ACL reconstructions at SOS in Mumbai?',
        answer: 'Our sports medicine and arthroscopy team is led by Dr. Shobit Nitin Deshmukh and Dr. Omkar Rashinkar, supported by surgical faculty mentorship from Dr. Nikhil Gokhale (FRCS UK).'
      }
    ],
    relevantDoctorIds: ['dr-shobit-deshmukh', 'dr-omkar'],
    isFeatured: true
  },
  {
    id: 'spine-care',
    title: 'Spine Care & Treatment in Mumbai',
    slug: 'spine-care',
    iconName: 'spine',
    targetKeyword: 'Spine doctor in Mumbai',
    metaTitle: 'Spine Care & Treatment in Mumbai | SOS Orthopedic Clinic',
    metaDescription: 'Expert non-surgical and surgical spine care in Mumbai: Sciatica relief, slipped disc decompression, postural correction, and rehabilitation at SOS Clinic.',
    h1: 'Spine Care & Treatment in Mumbai',
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
    conditions: [
      {
        name: 'Sciatica (Lumbar Radiculopathy)',
        slug: 'sciatica',
        overview: 'Irritation, inflammation, or compression of the sciatic nerve roots in the lumbar spine, causing sharp electric pain shooting down the buttock, thigh, calf, and foot.',
        symptoms: [
          'Unilateral burning, searing pain radiating below the knee',
          'Pins-and-needles sensation or numbness in toes or sole',
          'Pain aggravated by coughing, sneezing, or sitting for long periods',
          'Difficulty lifting the front part of the foot (mild foot drop)'
        ],
        causes: [
          'Lumbar disc herniation (most common at L4-L5 or L5-S1 levels)',
          'Spinal canal stenosis narrowing nerve exit foramen',
          'Piriformis muscle spasm compressing the sciatic nerve in the pelvis',
          'Degenerative lumbar spondylolisthesis (vertebral slip)'
        ],
        diagnosis: 'Positive Straight Leg Raise (Lasegue) test, dermatomal sensory mapping, and high-field Lumbar Spine MRI.',
        treatments: [
          'Conservative: Anti-inflammatory nerve medications, mechanical spinal decompression therapy, targeted core physical therapy',
          'Interventional: Selective transforaminal nerve root block injections for acute pain relief',
          'Minimally Invasive: Endoscopic micro-discectomy when persistent nerve compression causes motor deficit'
        ],
        whenToConsult: 'Urgent evaluation is needed if you experience progressive leg muscle weakness, numbness around the groin, or difficulty with bladder/bowel control (cauda equina red flags).'
      },
      {
        name: 'Herniated Disc / Slipped Disc',
        slug: 'herniated-disc',
        overview: 'Rupture or bulging of the gel-like nucleus pulposus through the fibrous outer ring (annulus) of an intervertebral disc, irritating adjacent nerve roots.',
        symptoms: [
          'Deep aching lower back pain associated with intense leg sciatica',
          'Muscle spasms causing the torso to tilt or list to one side',
          'Inability to bend forward without provoking sharp spinal pain',
          'Pain relief when lying flat with knees gently bent'
        ],
        causes: [
          'Repetitive poor lifting mechanics with flexed, rotated spine',
          'Prolonged slouched sitting posture in young working desk professionals',
          'Age-related loss of disc hydration and annular micro-tears',
          'Sudden axial impact or domestic slip and fall'
        ],
        diagnosis: 'Spine neurological examination assessing knee/ankle reflexes and high-resolution T2-weighted sagittal/axial Lumbar MRI.',
        treatments: [
          'Non-Surgical: McKenzie directional preference exercises, postural ergonomic correction, anti-edema regimens',
          'Surgical: Minimally invasive endoscopic tubular micro-discectomy performed through a keyhole corridor without bone removal'
        ],
        whenToConsult: 'Consult a spine specialist if radiating pain persists beyond 2 weeks or if conservative pain medications fail to provide functional relief.'
      }
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
    faqs: [
      {
        question: 'How can I differentiate between regular muscular back pain and sciatica?',
        answer: 'Muscular back pain is typically confined to the lower back region, feels like a dull ache, and is triggered by specific movements. Sciatica is characterized by a sharp, electric shock-like or burning pain that shoots down past the buttock and through the back or side of the leg into the calf or foot.'
      },
      {
        question: 'Can a slipped disc heal without surgery?',
        answer: 'Yes. Up to 85-90% of herniated disc cases improve significantly without surgical intervention through structured non-surgical spinal decompression, targeted physical therapy, ergonomic corrections, and short courses of anti-inflammatory medications.'
      },
      {
        question: 'What non-surgical treatments are available at SOS for back pain in Mumbai?',
        answer: 'SOS provides evidence-based conservative care including McKenzie method physical therapy, core stabilization rehab, postural ergonomic consultations, and fluoroscopy-guided selective nerve root blocks.'
      },
      {
        question: 'When is endoscopic spine surgery recommended over conservative care?',
        answer: 'Endoscopic keyhole spine surgery is considered when severe nerve compression causes progressive muscle weakness (e.g., foot drop), intractable pain unresponsive to 6 weeks of conservative treatment, or in rare cases of cauda equina syndrome.'
      },
      {
        question: 'Which spine doctors consult at SOS centres in Mumbai?',
        answer: 'Our spine unit is led by Dr. Omkar Rashinkar (Consultant Spine Surgeon) with surgical advisory faculty mentorship from Dr. Akhil Tawari (Senior Consultant Spine Surgeon with fellowship training from Boston University Medical Centre).'
      }
    ],
    relevantDoctorIds: ['dr-omkar'],
    isFeatured: true
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury & Arthroscopy Care',
    slug: 'sports-injury',
    iconName: 'sports',
    targetKeyword: 'Sports injury clinic Mumbai',
    metaTitle: 'Sports Injury & Arthroscopy in Mumbai | SOS Clinic',
    metaDescription: 'Advanced sports medicine and arthroscopy in Mumbai for frozen shoulder, rotator cuff tears, dislocations, and tennis elbow with dedicated physiotherapy.',
    h1: 'Sports Injury & Arthroscopy Care in Mumbai',
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
    conditions: [
      {
        name: 'Frozen Shoulder (Adhesive Capsulitis)',
        slug: 'frozen-shoulder',
        overview: 'Progressive inflammation, thickening, and contracture of the glenohumeral joint capsule, causing severe global restriction of shoulder movement and nighttime aching.',
        symptoms: [
          'Dull, aching shoulder pain markedly worse at night when lying on the affected side',
          'Severe stiffness preventing reaching overhead, fastening clothes, or reaching behind the back',
          'Sudden sharp twinges when making unexpected arm movements',
          'Gradual transition through freezing, frozen, and thawing stages'
        ],
        causes: [
          'Prolonged post-trauma shoulder immobilization following a minor injury',
          'Systemic predisposing conditions including diabetes mellitus and thyroid dysfunction',
          'Underlying rotator cuff tendinopathy or subacromial bursitis'
        ],
        diagnosis: 'Clinical examination showing loss of both active and passive external rotation, plus shoulder radiographs to rule out glenohumeral arthritis.',
        treatments: [
          'Early Phase: Hydrodilatation procedures, targeted intra-articular corticosteroid injections, and pain-free capsule stretching',
          'Refractory: Arthroscopic 360-degree capsular release under camera guidance to immediately restore rotational movement'
        ],
        whenToConsult: 'Consult when shoulder stiffness prevents basic dressing or grooming, or when sleep is repeatedly disturbed by shoulder pain.'
      },
      {
        name: 'Rotator Cuff Tear & Shoulder Impingement',
        slug: 'rotator-cuff-tear',
        overview: 'Partial or complete rupture of the supraspinatus or infraspinatus tendons stabilizing the humeral head against the glenoid socket.',
        symptoms: [
          'Pain when raising the arm sideways between 60 and 120 degrees (painful arc)',
          'Weakness when lifting household items or holding a cup overhead',
          'Cracking or popping sensation in the shoulder when moving the arm',
          'Radiating pain down the outer upper arm'
        ],
        causes: [
          'Repetitive overhead athletic strain (cricket bowling, swimming, tennis)',
          'Acute fall onto an outstretched hand or sudden heavy jerking lift',
          'Age-related tendon hypovascularity and subacromial bone spur rubbing'
        ],
        diagnosis: 'Positive Neer and Hawkins impingement tests, high-resolution musculoskeletal ultrasound, and shoulder MRI.',
        treatments: [
          'Non-Surgical: Rotator cuff strengthening physical therapy, scapular stabilization, subacromial bursa injections',
          'Surgical: Minimally invasive arthroscopic rotator cuff tendon repair with bio-composite suture anchors'
        ],
        whenToConsult: 'Consult promptly after a fall if you cannot actively lift your arm or if night pain persists despite rest and pain medication.'
      }
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
    faqs: [
      {
        question: 'How long does recovery take for frozen shoulder?',
        answer: 'Without treatment, frozen shoulder can take 18 to 24 months to resolve. With specialized hydrodilatation, targeted injections, and structured mobilization physiotherapy, recovery is often accelerated to 3 to 6 months.'
      },
      {
        question: 'Can a rotator cuff tear heal without surgery?',
        answer: 'Partial tears and degenerative tendinopathy often respond very well to conservative physical therapy, PRP therapy, and rotator cuff re-education. Full-thickness tears in active individuals typically require arthroscopic repair to restore full strength.'
      },
      {
        question: 'What keyhole arthroscopic procedures are performed at SOS?',
        answer: 'We perform arthroscopic rotator cuff repairs, Bankart labral repairs for recurrent shoulder dislocations, capsular release for frozen shoulder, and subacromial decompression.'
      },
      {
        question: 'How soon can athletes return to sport after shoulder treatment?',
        answer: 'Depending on the severity and procedure, non-contact training begins around 8 to 12 weeks, with full competitive overhead throwing or contact sports cleared between 4 to 6 months after functional testing.'
      },
      {
        question: 'Are shoulder specialist consultations available on weekends in Mumbai?',
        answer: 'Yes. SOS Speciality Orthopedic Clinic operates OPD consultations Monday through Saturday, with dedicated Sunday emergency triage and priority clinics available.'
      }
    ],
    relevantDoctorIds: ['dr-shobit-deshmukh', 'dr-omkar'],
    isFeatured: true
  },
  {
    id: 'pediatric-trauma',
    title: 'Pediatric Orthopedics & Trauma Care',
    slug: 'pediatric-trauma',
    iconName: 'bone',
    targetKeyword: 'Pediatric orthopedic doctor Mumbai',
    metaTitle: 'Pediatric Orthopedics & Trauma Mumbai | SOS Clinic',
    metaDescription: 'Child-centered orthopedic care and 24/7 fracture trauma triage in Mumbai. Growth plate preservation, gentle waterproof casting, and deformity correction.',
    h1: 'Pediatric Orthopedics & Trauma Care in Mumbai',
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
    conditions: [
      {
        name: 'Pediatric Fractures & Growth Plate Injuries',
        slug: 'pediatric-fractures',
        overview: 'Fractures in growing bones involving the cartilaginous physis (growth plate), which require precise anatomical alignment to prevent future limb length discrepancy or angular deformities.',
        symptoms: [
          'Child crying and guarding an injured arm or leg following a playground fall',
          'Refusal to crawl, stand, or bear weight on the affected limb',
          'Rapid focal swelling and point tenderness directly over bone ends',
          'Visible deformity or abnormal angulation'
        ],
        causes: [
          'Playground monkey bar or trampoline falls',
          'Bicycle or roller-skating accidents',
          'Contact sports collisions in school-aged athletes'
        ],
        diagnosis: 'Gentle digital radiography with comparison views of the opposite uninjured limb to assess growth plate symmetry.',
        treatments: [
          'Non-operative: Precision lightweight casting and waterproof splinting for non-displaced greenstick or buckle fractures',
          'Operative: Closed reduction under fluoroscopy and gentle percutaneous pin (K-wire) fixation protecting the growth plate'
        ],
        whenToConsult: 'Seek immediate pediatric orthopedic evaluation after any significant fall where a child refuses to use or bear weight on a limb.'
      },
      {
        name: 'Acute Trauma & Complex Fracture Fixation',
        slug: 'complex-fractures',
        overview: 'High-energy bone fractures involving major joints, comminuted bone fragments, or open soft-tissue injuries requiring emergency clinical triage and definitive surgical stabilization.',
        symptoms: [
          'Severe localized bone pain, rapid swelling, and visible bruising',
          'Total inability to bear weight or move the injured extremity',
          'Palpable bone displacement or visible deformity',
          'Numbness, tingling, or diminished pulse in digits below the injury'
        ],
        causes: [
          'Road traffic collisions and two-wheeler vehicular trauma',
          'Domestic bathroom falls in elderly osteoporotic individuals',
          'High-impact occupational falls from height'
        ],
        diagnosis: 'Immediate bedside digital X-ray series and 3D CT reconstructions for complex intra-articular fracture mapping.',
        treatments: [
          'Initial: Emergency limb splinting, sterile soft-tissue dressing, and multi-modal pain control',
          'Definitive: Minimally invasive plate osteosynthesis (MIPO) and intramedullary interlocking nail fixation'
        ],
        whenToConsult: 'Urgent emergency triage is required immediately after high-energy accidental trauma or when deformity is apparent.'
      }
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
    faqs: [
      {
        question: 'Why do pediatric bone fractures need specialized orthopedic care?',
        answer: 'Children possess open growth plates (physes) near bone ends. An untreated or poorly aligned growth plate injury can cause stunted bone growth or progressive limb deformity. Specialized pediatric orthopedic protocols preserve the growth plate and ensure normal bone remodeling.'
      },
      {
        question: 'Are waterproof casts available at SOS for children?',
        answer: 'Yes. Where clinically suitable for stable fractures, we provide advanced lightweight fiberglass and waterproof casts that allow children to shower and stay comfortable during the healing period.'
      },
      {
        question: 'How quickly can the SOS emergency team attend to a fracture at home?',
        answer: 'Our mobile dispatch team arrives with portable digital radiography within 20 to 30 minutes across our Mumbai centre network (Kandivali, Borivali, Malad, Goregaon) for immediate bedside diagnostic assessment.'
      },
      {
        question: 'Do all adult bone fractures require surgery with plates and screws?',
        answer: 'No. Undisplaced or stable fractures can be treated conservatively with functional bracing, cast immobilization, and monitored bone healing. Surgery is reserved for displaced, unstable, or intra-articular fractures where anatomical realignment is vital.'
      },
      {
        question: 'Who leads pediatric trauma care at SOS in Mumbai?',
        answer: 'Our trauma care unit is guided by Dr. Hardik Desai (Consultant Trauma & Pediatric Orthopedic Surgeon with international fellowships from University Hospital Switzerland and Altona Children’s Hospital Germany) and Dr. Maulik A. Joshi.'
      }
    ],
    relevantDoctorIds: ['dr-maulik-joshi'],
    isFeatured: true
  },
  {
    id: 'home-x-ray',
    title: 'Home X-Ray & At-Home Care',
    slug: 'home-x-ray',
    iconName: 'xray',
    targetKeyword: 'Home X-ray in Mumbai',
    metaTitle: '24/7 Home X-Ray Services in Mumbai | SOS Clinic',
    metaDescription: 'Fast 20-30 min doorstep portable digital X-ray services in Mumbai (Kandivali, Malad, Borivali, Goregaon). Low radiation, instant radiologist reports.',
    h1: '24/7 Home Digital X-Ray Services in Mumbai',
    redirectUrl: '/x-ray-services-at-home',
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
    faqs: [
      {
        question: 'How fast can the mobile X-ray unit reach my home in Mumbai?',
        answer: 'Our mobile radiographers dispatch within 20 to 30 minutes across Western Mumbai, covering Kandivali, Borivali, Malad, Goregaon, and adjoining areas.'
      },
      {
        question: 'Is portable home X-ray safe for other family members in the room?',
        answer: 'Yes. Our digital units utilize low-dose radiation collimators with lead-shielding aprons. Stray radiation drops to negligible levels beyond 2 meters, ensuring complete safety.'
      },
      {
        question: 'Who reviews and reports the home X-ray images?',
        answer: 'Images are previewed instantly on-screen by certified radiographers, sent securely to MD Radiologists for formal diagnostic reporting, and reviewed by senior SOS orthopedic surgeons.'
      }
    ],
    relevantDoctorIds: ['dr-maulik-joshi', 'dr-shobit-deshmukh', 'dr-omkar'],
    isFeatured: true
  }
];
