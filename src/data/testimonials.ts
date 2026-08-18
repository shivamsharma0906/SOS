export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  location: string;
  treatment: string;
  doctorName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'review-1',
    patientName: 'Ramesh Joshi',
    age: 68,
    location: 'Kandivali Centre',
    treatment: 'Joint Replacement & Geriatric Care',
    doctorName: 'Dr. Hardik Desai',
    rating: 5,
    comment: 'Underwent knee joint consultation and care under Dr. Hardik Desai. The home X-ray service and prompt attention saved my family from painful hospital travel. Within weeks, I was able to walk comfortably without pain.',
    date: 'Verified Patient',
    verified: true
  },
  {
    id: 'review-2',
    patientName: 'Priya Nair',
    age: 34,
    location: 'Nanded Centre',
    treatment: 'ACL & Ligament Reconstruction',
    doctorName: 'Dr. Aakash Ruia',
    rating: 5,
    comment: 'Suffered an ACL sports ligament injury during badminton practice. Dr. Aakash Ruia took time to explain the keyhole arthroscopic procedure and structured my rehabilitation. I am now back to my fitness routine with full stability.',
    date: 'Verified Patient',
    verified: true
  },
  {
    id: 'review-3',
    patientName: 'Suresh Kulkarni',
    age: 58,
    location: 'Ambernath Centre',
    treatment: 'Spine Care & Sciatica Management',
    doctorName: 'Dr. Nikhil Gokhale',
    rating: 5,
    comment: 'Suffered from chronic sciatica and lower back stiffness for over two years. Dr. Nikhil Gokhale recommended targeted non-surgical therapy before any invasive procedure. Highly impressed by the ethical, patient-first approach.',
    date: 'Verified Patient',
    verified: true
  },
  {
    id: 'review-4',
    patientName: 'Anil Deshpande',
    age: 42,
    location: 'Kandivali Centre',
    treatment: 'Pediatric & Trauma Orthopedic Care',
    doctorName: 'Dr. Akhil Tawari',
    rating: 5,
    comment: 'My 14-year-old son sustained a forearm fracture during a football match. Dr. Akhil Tawari managed the emergency triage with exceptional patience, gentle bedside manner, and precise bone realignment. Recovery was smooth and fast.',
    date: 'Verified Patient',
    verified: true
  },
  {
    id: 'review-5',
    patientName: 'Meenakshi Iyer',
    age: 62,
    location: 'Murbad Outreach Clinic',
    treatment: 'Arthritis & Mobility Management',
    doctorName: 'Dr. Hardik Desai',
    rating: 5,
    comment: 'Having access to top-tier orthopedic surgeons directly at the Murbad Outreach Clinic is a blessing for elderly residents. Systematic diagnosis, proper guidance on joint preservation, and zero unnecessary medications.',
    date: 'Verified Patient',
    verified: true
  }
];
