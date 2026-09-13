export interface Mentor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  bio: string;
  photoUrl: string;
  experienceYears?: number;
}

export const mentorsData: Mentor[] = [
  {
    id: 'dr-akash-saraogi',
    name: 'Dr. Akash A. Saraogi',
    title: 'Orthopedic Surgeon — Hip and Knee Joint Specialist',
    qualifications: 'FRCS (England) (Gold Medal), MCh Hip and Knee (UK) (Gold Medal), MS Ortho (Gold Medal) – J.J. Hospital, Mumbai, Wrightington Revision Fellow, D SICOT (Gold Medal, Italy), SICOT Fellow (Spain), AO Fellow (Germany), FEBOT (Portugal)',
    bio: 'International gold medalist orthopedic surgeon specializing in primary and complex revision hip and knee joint reconstructions. Guided by masterclass fellowships across the UK, Germany, and Italy, he mentors clinical teams in advanced arthroplasty techniques.',
    photoUrl: '/assets/dr-akash-saraogi.webp'
  },
  {
    id: 'dr-hardik-desai',
    name: 'Dr. Hardik Desai',
    title: 'Consultant Trauma and Pediatric Orthopaedic Surgeon',
    qualifications: "MS Orthopaedics, Fellowship in Orthopaedics — University Hospital, Switzerland; Altona Children's Hospital, Germany",
    bio: 'Consultant orthopedic surgeon with super-specialized pediatric and trauma fellowship training from University Hospital Switzerland and Altona Children\'s Hospital Germany. He guides clinical governance in complex fractures and pediatric musculoskeletal care.',
    photoUrl: '/assets/doctor-desai.jpg'
  },
  {
    id: 'dr-akhil-tawari',
    name: 'Dr. Akhil Tawari',
    title: 'Senior Consultant Spine Surgeon — Endoscopic and Minimally Invasive Spine Surgeon',
    qualifications: 'MS Orthopaedics, DNB Orthopaedics, D Orthopaedics, Fellowship in Adult Spine Surgery — Boston University Medical Centre; Fellowship in Pediatric Spine Surgery — Miami',
    bio: 'Distinguished spine specialist with clinical fellowships in adult and pediatric spine surgery from Boston University and Miami. He oversees endoscopic spine decompression, deformity correction protocols, and minimally invasive techniques.',
    photoUrl: '/assets/doctor-tawari.jpg'
  },
  {
    id: 'dr-nikhil-gokhale',
    name: 'Dr. Nikhil Gokhale',
    title: 'Consultant Sports Orthopaedic Surgeon — Shoulder and Knee Specialist',
    qualifications: 'MS Orthopaedics, FRCS (Trauma and Ort), MRCSed, Dip. CAOS (UK)',
    bio: 'Consultant sports orthopaedic surgeon with prestigious UK surgical qualifications including FRCS, MRCSed, and Dip. CAOS. He provides surgical mentorship in shoulder and knee arthroscopy, sports injury rehabilitation, and joint restoration.',
    photoUrl: '/assets/doctor-gokhale.jpg'
  }
];
