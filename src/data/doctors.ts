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
    id: 'dr-maulik-joshi',
    name: 'Dr. Maulik A. Joshi',
    title: 'Consultant Trauma & Orthopaedic Surgeon',
    qualifications: 'MBBS, D Orth, Fellowship in Hip & Knee Arthroplasty (Mumbai), Fellowship in Trauma and Ilizarov Surgery (Dahod)',
    specialization: 'Hip & Knee Specialist — Joint Replacement & Trauma',
    experienceYears: 12,
    photoUrl: '/assets/dr-maulik-joshi.webp',
    bio: 'Consultant trauma and orthopedic surgeon specialized in hip and knee arthroplasty, complex trauma reconstructions, and Ilizarov limb deformity corrections.',
    expertiseList: ['Hip & Knee Joint Arthroplasty', 'Complex Trauma Reconstruction', 'Ilizarov & Deformity Surgery', 'Fracture Care'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: ',
    registrationNumber: 'MMC Reg. Verified',
    pediatricTraumaCare: true,
    category: 'consultant',
    honorBadge: 'Trauma & Deformity Fellow',
    degrees: ['MBBS', 'D Orth', 'Fellowship in Hip & Knee Arthroplasty (Mumbai)'],
    fellowships: ['Complex Trauma & Ilizarov Deformity Surgery (Dahod)']
  },
  {
    id: 'dr-shobit-deshmukh',
    name: 'Dr. Shobit Nitin Deshmukh',
    title: 'Consultant Orthopedic & Joint Replacement Surgeon',
    qualifications: 'DNB Orthopedics, Fellowship in Joint Replacement Surgery (MUHS), Fellowship in Revision and Complex Joint Replacement (South Korea), Fellowship in Robotic Joint Replacement (Mumbai)',
    specialization: 'Joint Replacement Surgery & Robotic Arthroplasty',
    experienceYears: 11,
    photoUrl: '/assets/dr-shobit-deshmukh.webp',
    bio: 'Consultant orthopedic surgeon with super-specialized fellowship expertise in robotic-assisted joint replacement, revision arthroplasty, and advanced knee and hip surgeries.',
    expertiseList: ['Robotic Joint Replacement', 'Revision Joint Replacement', 'Complex Knee & Hip Reconstruction', 'Arthroscopy'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: ',
    registrationNumber: 'MMC Reg. Verified',
    pediatricTraumaCare: false,
    category: 'consultant',
    honorBadge: 'Robotic & Revision Fellow',
    degrees: ['DNB Orthopedics', 'Fellowship in Joint Replacement Surgery (MUHS)'],
    fellowships: ['Robotic Joint Replacement (Mumbai)', 'Revision & Complex Joint Replacement (South Korea)']
  },
  {
    id: 'dr-omkar',
    name: 'Dr. Omkar',
    title: 'Consultant Spine & Orthopedic Surgeon',
    qualifications: 'MS Orthopaedics, Fellowship in Minimally Invasive Spine Surgery, Fellowship in Arthroscopy & Sports Medicine',
    specialization: 'Spine Care, Arthroscopy & Joint Restoration',
    experienceYears: 10,
    photoUrl: '/assets/dr-omkar.png',
    bio: 'Consultant orthopedic surgeon specializing in minimally invasive endoscopic spine decompression, sciatica nerve relief, disc management, and arthroscopic joint reconstructions.',
    expertiseList: ['Endoscopic Spine Surgery', 'Sciatica & Disc Decompression', 'Sports Arthroscopy & Joint Care', 'Minimally Invasive Spine Procedures'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: ',
    registrationNumber: 'MMC Reg. Verified',
    pediatricTraumaCare: false,
    category: 'consultant',
    honorBadge: 'Spine & Arthroscopy Specialist',
    degrees: ['MS Orthopaedics', 'Fellowship in Minimally Invasive Spine Surgery'],
    fellowships: ['Endoscopic Spine Decompression (Mumbai)', 'Arthroscopy & Sports Medicine']
  }
];
