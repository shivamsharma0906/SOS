// SCALABILITY & DATA NOTE:
// Replace TODO fields with real credentials, biographies, registration numbers, and photos
// as they are supplied. Doctors data array is scalable and consumed across all doctor cards,
// filter pages, and enquiry modals.

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  photoUrl: string;
  bio: string;
  expertiseList: string[];
  centresAvailable: string[];
  schedule: string;
  registrationNumber: string;
  pediatricTraumaCare?: boolean; // Tag for pediatric / trauma care highlighting
  category?: 'senior' | 'consultant';
  degrees?: string[];
  fellowships?: string[];
  honorBadge?: string;
}

export const doctorsData: Doctor[] = [
  {
    id: 'dr-hardik-desai',
    name: 'Dr. Hardik Desai',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon', // TODO: real qualifications
    specialization: 'Joint Replacement & Orthopedic Care', // TODO: real specialization
    experienceYears: 15, // TODO: real experience years
    photoUrl: '/assets/doctor-desai.jpg', // TODO: real photo URL
    bio: 'Consultant Orthopedic Surgeon at SOS Speciality Orthopedic Clinic dedicated to advanced patient mobility and comprehensive orthopedic wellness.', // TODO: real bio
    expertiseList: ['Joint Replacement', 'Arthroscopic Surgery', 'General Orthopedics'], // TODO: real expertise list
    centresAvailable: ['Kandivali', 'Borivali'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: false,
    category: 'senior'
  },
  {
    id: 'dr-nikhil-gokhale',
    name: 'Dr. Nikhil Gokhale',
    title: 'Consultant Sports Orthopaedic Surgeon',
    qualifications: 'MS Orthopaedics, FRCS (Trauma and Ort), MRCSed, Dip. CAOS (UK)',
    specialization: 'Shoulder and Knee Specialist',
    experienceYears: 14,
    photoUrl: '/assets/doctor-gokhale.jpg',
    bio: 'Consultant Sports Orthopaedic Surgeon dedicated to advanced shoulder and knee arthroscopy, sports injury rehabilitation, and joint restoration.',
    expertiseList: ['Shoulder Surgery & Arthroscopy', 'Knee Surgery & Ligament Reconstruction', 'Sports Injury Management'],
    centresAvailable: ['Kandivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: false,
    category: 'senior'
  },
  {
    id: 'dr-akhil-tawari',
    name: 'Dr. Akhil Tawari',
    title: 'Senior Consultant Spine Surgeon',
    qualifications: 'MS Orthopaedics, DNB Orthopaedics, D Orthopaedics',
    specialization: 'Endoscopic and Minimally Invasive Spine Surgeon',
    experienceYears: 12,
    photoUrl: '/assets/doctor-tawari.jpg',
    bio: 'Senior Consultant Spine Surgeon with fellowship in adult spine surgery at Boston University Medical Centre and fellowship in pediatric spine surgery in Miami, specializing in endoscopic and minimally invasive spine care.',
    expertiseList: ['Endoscopic Spine Surgery', 'Minimally Invasive Spine Surgery', 'Pediatric Spine Care'],
    centresAvailable: ['Kandivali', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: true,
    category: 'senior'
  },
  {
    id: 'dr-aakash-ruia',
    name: 'Dr. Aakash Ruia',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon',
    specialization: 'Sports Medicine & Arthroscopy',
    experienceYears: 12,
    photoUrl: '/assets/dr-aakash-ruia.webp',
    bio: 'Consultant Orthopedic Surgeon specializing in athletic sports injuries, keyhole ligament reconstructions (ACL/PCL), and joint restoration.',
    expertiseList: ['ACL & Ligament Reconstruction', 'Arthroscopic Joint Surgery', 'Sports Rehabilitation'],
    centresAvailable: ['Kandivali', 'Malad'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: false,
    category: 'senior'
  },
  {
    id: 'dr-akash-saraogi',
    name: 'Dr. Akash A. Saraogi',
    title: 'Orthopedic Surgeon',
    qualifications: 'FRCS (England) (Gold Medal), MCh Hip and Knee (UK) (Gold Medal), MS Ortho (Gold Medal) – J.J. Hospital Mumbai, Wrightington Revision Fellow, D SICOT (Gold Medal, Italy), SICOT Fellow (Spain), AO Fellow (Germany), FEBOT (Portugal)',
    specialization: 'Hip and Knee Joint Specialist',
    experienceYears: 0, // TODO: real experience years
    photoUrl: '/assets/dr-akash-saraogi.webp',
    bio: 'Distinguished orthopedic surgeon and international gold medalist specializing in primary and complex revision hip and knee joint reconstructions.',
    expertiseList: ['Hip & Knee Joint Replacement', 'Revision Arthroplasty', 'Complex Joint Reconstruction'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: false,
    category: 'consultant',
    honorBadge: '4x International Gold Medalist',
    degrees: ['FRCS (England) (Gold Medal)', 'MCh Hip & Knee (UK) (Gold Medal)', 'MS Ortho (Gold Medal)', 'FEBOT (Portugal)', 'D SICOT (Gold Medal, Italy)'],
    fellowships: ['Wrightington Revision Arthroplasty Fellow (UK)', 'AO Trauma Fellow (Germany)', 'SICOT International Fellow (Spain)', 'Joint Replacement Fellow (Germany)']
  },
  {
    id: 'dr-shobit-deshmukh',
    name: 'Dr. Shobit Nitin Deshmukh',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'DNB Orthopedics, Fellowship in Joint Replacement Surgery (MUHS), Fellowship in Revision and Complex Joint Replacement (South Korea), Fellowship in Robotic Joint Replacement (Mumbai)',
    specialization: 'Joint Replacement Surgery',
    experienceYears: 0, // TODO: real experience years
    photoUrl: '/assets/dr-shobit-deshmukh.webp',
    bio: 'Consultant orthopedic surgeon with super-specialized fellowship expertise in robotic-assisted joint replacement, revision arthroplasty, and advanced knee and hip surgeries.',
    expertiseList: ['Robotic Joint Replacement', 'Revision Joint Replacement', 'Complex Knee & Hip Reconstruction'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: false,
    category: 'consultant',
    honorBadge: 'Robotic & Revision Fellow',
    degrees: ['DNB Orthopedics', 'Fellowship in Joint Replacement Surgery (MUHS)'],
    fellowships: ['Robotic Joint Replacement (Mumbai)', 'Revision & Complex Joint Replacement (South Korea)']
  },
  {
    id: 'dr-maulik-joshi',
    name: 'Dr. Maulik A. Joshi',
    title: 'Consultant Trauma Orthopaedic Surgeon',
    qualifications: 'MBBS, D Orth, Fellowship in Hip and Knee Arthroplasty (Mumbai), Fellowship in Trauma and Ilizarov Surgery (Dahod)',
    specialization: 'Hip and Knee Specialist',
    experienceYears: 0, // TODO: real experience years
    photoUrl: '/assets/dr-maulik-joshi.webp',
    bio: 'Consultant trauma and orthopedic surgeon specialized in hip and knee arthroplasty, complex trauma reconstructions, and Ilizarov limb deformity corrections.',
    expertiseList: ['Hip & Knee Joint Arthroplasty', 'Complex Trauma Reconstruction', 'Ilizarov & Deformity Surgery'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: false,
    category: 'consultant',
    honorBadge: 'Trauma & Deformity Fellow',
    degrees: ['MBBS', 'D Orth', 'Fellowship in Hip & Knee Arthroplasty (Mumbai)'],
    fellowships: ['Complex Trauma & Ilizarov Deformity Surgery (Dahod)']
  }
];
