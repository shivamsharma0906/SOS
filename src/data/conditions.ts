export interface Condition {
  id: string;
  name: string;
  category: 'Spine' | 'Joint' | 'Bone' | 'Sports';
  icon: string;
  shortDesc: string;
  symptoms: string[];
  recommendedServiceId: string;
}

export const conditionsData: Condition[] = [
  {
    id: 'sciatica',
    name: 'Sciatica & Nerve Compression',
    category: 'Spine',
    icon: 'Activity',
    shortDesc: 'Sharp radiating pain down one or both legs originating from lumbar nerve impingement.',
    symptoms: ['Shooting leg pain', 'Numbness in calf/foot', 'Lower back stiffness', 'Pain worsens when sitting'],
    recommendedServiceId: 'spine-care'
  },
  {
    id: 'knee-osteoarthritis',
    name: 'Knee Osteoarthritis',
    category: 'Joint',
    icon: 'Bone',
    shortDesc: 'Degeneration of knee cartilage leading to bone friction, swelling, and severe walking pain.',
    symptoms: ['Stiffness after rest', 'Crepitus grinding sound', 'Difficulty climbing stairs', 'Swollen knee joints'],
    recommendedServiceId: 'joint-care'
  },
  {
    id: 'acl-tear',
    name: 'ACL & Knee Ligament Injury',
    category: 'Sports',
    icon: 'Zap',
    shortDesc: 'Tear in the anterior cruciate ligament common in sports twists and sudden stopping movements.',
    symptoms: ['Audible pop during injury', 'Knee giving way', 'Rapid severe swelling', 'Inability to bear weight'],
    recommendedServiceId: 'sports-injury'
  },
  {
    id: 'slipped-disc',
    name: 'Slipped / Herniated Disc',
    category: 'Spine',
    icon: 'Disc',
    shortDesc: 'Displacement of spinal disc cushion causing intense localized back pain & leg weakness.',
    symptoms: ['Acute lower back spasm', 'Pain shooting into buttocks', 'Weakness lifting foot', 'Prickling pin-sensation'],
    recommendedServiceId: 'spine-care'
  },
  {
    id: 'rotator-cuff',
    name: 'Rotator Cuff & Shoulder Tear',
    category: 'Sports',
    icon: 'Shield',
    shortDesc: 'Damage to shoulder tendons causing arm lifting difficulty and nocturnal shoulder pain.',
    symptoms: ['Dull ache deep in shoulder', 'Disturbed sleep lying on arm', 'Arm weakness lifting overhead', 'Catching pain'],
    recommendedServiceId: 'sports-injury'
  },
  {
    id: 'osteoporosis',
    name: 'Osteoporosis & Fragility',
    category: 'Bone',
    icon: 'Sun',
    shortDesc: 'Loss of bone density rendering bones brittle and susceptible to low-impact fractures.',
    symptoms: ['Gradual height loss', 'Stooped posture', 'Back pain from compressed vertebra', 'Fracture after minor stumble'],
    recommendedServiceId: 'bone-care'
  },
  {
    id: 'cervical-spondylosis',
    name: 'Cervical Spondylosis',
    category: 'Spine',
    icon: 'Compass',
    shortDesc: 'Age-related wear in cervical neck discs causing neck stiffness and arm numbness.',
    symptoms: ['Neck aching radiating to shoulder', 'Headaches starting at neck base', 'Tingling fingers', 'Dizziness'],
    recommendedServiceId: 'spine-care'
  },
  {
    id: 'frozen-shoulder',
    name: 'Frozen Shoulder (Adhesive Capsulitis)',
    category: 'Joint',
    icon: 'Lock',
    shortDesc: 'Stiffening and tightness in the shoulder joint capsule severely restricting range of motion.',
    symptoms: ['Severe shoulder tightness', 'Inability to reach behind back', 'Pain aggravated at night', 'Phased stiffness'],
    recommendedServiceId: 'joint-care'
  }
];
