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
    bio: 'Consultant Orthopedic Surgeon at SOS Speciality Orthopedic Service dedicated to advanced patient mobility and comprehensive orthopedic wellness.', // TODO: real bio
    expertiseList: ['Joint Replacement', 'Arthroscopic Surgery', 'General Orthopedics'], // TODO: real expertise list
    centresAvailable: ['Kandivali', 'Borivali'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: false
  },
  {
    id: 'dr-nikhil-gokhale',
    name: 'Dr. Nikhil Gokhale',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon',
    specialization: 'Spine & Joint Specialist',
    experienceYears: 14,
    photoUrl: '/assets/doctor-gokhale.jpg',
    bio: 'Consultant Orthopedic Surgeon specializing in evidence-based musculoskeletal care, spine management, and joint preservation protocols.',
    expertiseList: ['Spine Care & Decompression', 'Joint Preservation', 'Rehabilitation'],
    centresAvailable: ['Kandivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: false
  },
  {
    id: 'dr-akhil-tawari',
    name: 'Dr. Akhil Tawari',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon',
    specialization: 'Pediatric Orthopedics & Trauma Care',
    experienceYears: 12,
    photoUrl: '/assets/doctor-tawari.jpg',
    bio: 'Specialist in trauma resuscitation, pediatric orthopedic care, and complex fracture fixation with patient-centric clinical focus.',
    expertiseList: ['Pediatric Orthopedics', 'Trauma & Fracture Fixation', 'Emergency Ortho Care'],
    centresAvailable: ['Kandivali', 'Borivali', 'Goregaon'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: true
  },
  {
    id: 'dr-aakash-ruia',
    name: 'Dr. Aakash Ruia',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon',
    specialization: 'Sports Medicine & Arthroscopy',
    experienceYears: 12,
    photoUrl: '/assets/doctor-ruia.jpg',
    bio: 'Consultant Orthopedic Surgeon specializing in athletic sports injuries, keyhole ligament reconstructions (ACL/PCL), and joint restoration.',
    expertiseList: ['ACL & Ligament Reconstruction', 'Arthroscopic Joint Surgery', 'Sports Rehabilitation'],
    centresAvailable: ['Kandivali', 'Malad'],
    schedule: 'Mon to Sat: By Appointment',
    registrationNumber: 'Reg: Pending Verification',
    pediatricTraumaCare: false
  }
];
