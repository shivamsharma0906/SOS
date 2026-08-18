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
    centresAvailable: ['Kandivali', 'Ambernath'], // TODO: real centres available
    schedule: 'Mon to Sat: By Appointment', // TODO: real schedule
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: false
  },
  {
    id: 'dr-nikhil-gokhale',
    name: 'Dr. Nikhil Gokhale',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon', // TODO: real qualifications
    specialization: 'Spine & Joint Specialist', // TODO: real specialization
    experienceYears: 14, // TODO: real experience years
    photoUrl: '/assets/doctor-gokhale.jpg', // TODO: real photo URL
    bio: 'Consultant Orthopedic Surgeon specializing in evidence-based musculoskeletal care, spine management, and joint preservation protocols.', // TODO: real bio
    expertiseList: ['Spine Care & Decompression', 'Joint Preservation', 'Rehabilitation'], // TODO: real expertise list
    centresAvailable: ['Kandivali', 'Nanded'], // TODO: real centres available
    schedule: 'Mon to Sat: By Appointment', // TODO: real schedule
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: false
  },
  {
    id: 'dr-akhil-tawari',
    name: 'Dr. Akhil Tawari',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon', // TODO: real qualifications
    specialization: 'Pediatric Orthopedics & Trauma Care', // TODO: real specialization
    experienceYears: 12, // TODO: real experience years
    photoUrl: '/assets/doctor-tawari.jpg', // TODO: real photo URL
    bio: 'Specialist in trauma resuscitation, pediatric orthopedic care, and complex fracture fixation with patient-centric clinical focus.', // TODO: real bio
    expertiseList: ['Pediatric Orthopedics', 'Trauma & Fracture Fixation', 'Emergency Ortho Care'], // TODO: real expertise list
    centresAvailable: ['Kandivali', 'Ambernath', 'Nanded'], // TODO: real centres available
    schedule: 'Mon to Sat: By Appointment', // TODO: real schedule
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: true
  },
  {
    id: 'dr-aakash-ruia',
    name: 'Dr. Aakash Ruia',
    title: 'Consultant Orthopedic Surgeon',
    qualifications: 'Orthopedic Surgeon', // TODO: real qualifications
    specialization: 'Sports Medicine & Arthroscopy', // TODO: real specialization
    experienceYears: 12, // TODO: real experience years
    photoUrl: '/assets/doctor-ruia.jpg', // TODO: real photo URL
    bio: 'Consultant Orthopedic Surgeon specializing in athletic sports injuries, keyhole ligament reconstructions (ACL/PCL), and joint restoration.', // TODO: real bio
    expertiseList: ['ACL & Ligament Reconstruction', 'Arthroscopic Joint Surgery', 'Sports Rehabilitation'], // TODO: real expertise list
    centresAvailable: ['Kandivali', 'Murbad'], // TODO: real centres available
    schedule: 'Mon to Sat: By Appointment', // TODO: real schedule
    registrationNumber: 'Reg: Pending Verification', // TODO: real registration number
    pediatricTraumaCare: false
  }
];
