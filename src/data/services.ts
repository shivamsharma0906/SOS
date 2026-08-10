export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: 'xray' | 'bone' | 'joint' | 'spine' | 'sports';
  shortDesc: string;
  fullDesc: string;
  keyHighlights: string[];
  symptoms: string[];
  isFeatured?: boolean;
}

export const servicesData: Service[] = [
  {
    id: 'home-x-ray',
    title: 'Home X-Ray Service',
    slug: 'home-x-ray-service',
    iconName: 'xray',
    shortDesc: 'Instant, digital portable X-ray diagnostics in the comfort & safety of your home across Mumbai suburbs.',
    fullDesc: 'SOS Speciality Orthopedic Service brings advanced digital radiography directly to your doorstep. Designed for bedridden patients, senior citizens, emergency trauma, and post-surgery mobility constraints. High-resolution digital imaging evaluated promptly by senior radiologists and orthopedic specialists.',
    keyHighlights: [
      'Portable high-frequency digital radiograph machine',
      'Instant digital image preview & immediate reporting',
      'Strict hygiene, radiation safety & certified technicians',
      'Available across Borivali, Kandivali, Malad, Goregaon & Andheri',
      'Saves bedridden & frail patients painful transport'
    ],
    symptoms: [
      'Acute fracture suspicion post-fall',
      'Severe joint or bone pain preventing mobility',
      'Post-operative surgical orthopedic assessment',
      'Chest or bone infection evaluations for bedridden patients'
    ],
    isFeatured: true
  },
  {
    id: 'bone-care',
    title: 'Bone Care',
    slug: 'bone-care',
    iconName: 'bone',
    shortDesc: 'Comprehensive bone density evaluation, fracture treatment, osteoporosis management, and bone health preservation.',
    fullDesc: 'Bone strength forms the pillar of your mobility. Our Bone Care specialization provides evidence-based diagnosis and treatment for osteoporosis, complex fractures, delayed bone healing, bone infections, and age-related bone loss using modern orthopedic modalities.',
    keyHighlights: [
      'Advanced bone mineral density (DEXA) evaluation',
      'Minimally invasive fracture fixation & casting',
      'Osteoporosis & osteopenia preventative regimens',
      'Bone infection & non-union management'
    ],
    symptoms: [
      'Frequent fractures or bone fragile fractures',
      'Unexplained bone aching or height loss',
      'Post-menopausal bone health screening',
      'Traumatic bone injury management'
    ],
    isFeatured: true
  },
  {
    id: 'joint-care',
    title: 'Joint Care',
    slug: 'joint-care',
    iconName: 'joint',
    shortDesc: 'Specialized knee, hip, shoulder & small joint conservative treatments, arthroscopy, and robotic joint replacement.',
    fullDesc: 'Joint degeneration and arthritis can paralyze daily life. At SOS, our Joint Care specialists combine non-surgical biological therapies (PRP, joint injections, physiotherapy) with state-of-the-art joint preservation surgery, arthroscopic repair, and joint replacements.',
    keyHighlights: [
      'Knee, Hip, and Shoulder osteo-arthritis protocols',
      'Keyhole arthroscopic joint preservation',
      'Precision total & partial joint replacements',
      'Intra-articular hyaluronic & PRP cell therapy'
    ],
    symptoms: [
      'Knee pain while climbing stairs or walking',
      'Morning joint stiffness lasting over 30 minutes',
      'Swelling, clicking, or grating sensation in joints',
      'Restricted hip or shoulder movement range'
    ],
    isFeatured: true
  },
  {
    id: 'spine-care',
    title: 'Spine Care',
    slug: 'spine-care',
    iconName: 'spine',
    shortDesc: 'Expert relief for back pain, sciatica, herniated discs, cervical spondylosis, and spinal deformities.',
    fullDesc: 'Spine pain impacts posture, sleep, and nerve conduction. SOS Spine Care delivers personalized non-operative physical therapy, targeted spine block injections, endo-spine procedures, and microscopic disc surgery to eliminate nerve compression and restore spinal health.',
    keyHighlights: [
      'Non-surgical spinal decompression therapy',
      'Sciatica & slipped disc targeted nerve root blocks',
      'Endoscopic & Microscopic spine discectomy',
      'Postural correction & spinal rehabilitation'
    ],
    symptoms: [
      'Radiating sharp pain down the leg (Sciatica)',
      'Neck stiffness radiating into arms and fingers',
      'Lower back pain aggravated by prolonged sitting',
      'Numbness, tingling, or weakness in feet or hands'
    ],
    isFeatured: true
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury',
    slug: 'sports-injury',
    iconName: 'sports',
    shortDesc: 'Rapid recovery & rehabilitation for ligament tears (ACL/MCL), meniscus injuries, rotator cuff repair, and athletic trauma.',
    fullDesc: 'Whether you are a professional athlete or a fitness enthusiast, sports injuries demand precise anatomical repair and aggressive, structured rehab. We deliver rapid diagnostic MRI evaluations, keyhole ligament reconstruction, and sports biomechanics physical therapy.',
    keyHighlights: [
      'ACL, PCL & MCL knee ligament reconstructions',
      'Meniscus repair & cartilage preservation',
      'Rotator cuff & shoulder dislocation stabilizing surgery',
      'Sports-specific physical therapy & return-to-play guidance'
    ],
    symptoms: [
      'Sudden knee pop followed by immediate swelling',
      'Shoulder dislocation or feeling of joint instability',
      'Ankle sprain with inability to bear weight',
      'Overuse tendonitis (Tennis Elbow, Achilles Pain)'
    ],
    isFeatured: true
  }
];
