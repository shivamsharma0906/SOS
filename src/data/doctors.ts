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
}

export const doctorsData: Doctor[] = [
  {
    id: 'dr-rajesh-sharma',
    name: 'Dr. Rajesh Sharma',
    title: 'Senior Consultant Orthopedic & Robotic Joint Surgeon',
    qualifications: 'MBBS, MS (Ortho), DNB (Ortho), Fellowship in Joint Replacement (Germany)',
    specialization: 'Joint Care & Knee/Hip Replacement',
    experienceYears: 18,
    photoUrl: '/assets/doctor-1.jpg',
    bio: 'Dr. Rajesh Sharma is a pioneer in computer-assisted and robotic knee and hip joint replacements. With over 18 years of surgical excellence, he has performed more than 4,500 successful joint procedures with rapid recovery protocols.',
    expertiseList: ['Robotic Total Knee Replacement', 'Minimal Invasive Hip Surgery', 'PRP Joint Preservation', 'Complex Revision Surgery'],
    centresAvailable: ['Borivali', 'Andheri', 'Malad'],
    schedule: 'Mon, Wed, Fri: 10:00 AM - 4:00 PM',
    registrationNumber: 'MMC/2006/04/1820'
  },
  {
    id: 'dr-ananya-deshmukh',
    name: 'Dr. Ananya Deshmukh',
    title: 'Chief Consultant Spine & Spinal Endoscopy Surgeon',
    qualifications: 'MBBS, MS (Ortho), FISM (Spine), Fellowship in Endoscopic Spine (South Korea)',
    specialization: 'Spine Care & Minimally Invasive Spine Surgery',
    experienceYears: 14,
    photoUrl: '/assets/doctor-2.jpg',
    bio: 'Dr. Ananya Deshmukh specializes in stitchless stitch-free endoscopic spine surgery for slipped discs and sciatica. Her patient-first approach prioritizes non-surgical back care before advising precise keyhole intervention.',
    expertiseList: ['Endoscopic Micro-Discectomy', 'Sciatica Nerve Root Blocks', 'Cervical Spondylosis Care', 'Spinal Decompression'],
    centresAvailable: ['Kandivali', 'Goregaon', 'Borivali'],
    schedule: 'Tue, Thu, Sat: 11:00 AM - 5:00 PM',
    registrationNumber: 'MMC/2010/08/2914'
  },
  {
    id: 'dr-vikram-mehta',
    name: 'Dr. Vikram Mehta',
    title: 'Sports Medicine & Arthroscopy Specialist',
    qualifications: 'MBBS, MS (Ortho), Diploma Sports Med (UK), Fellowship Arthroscopy (USA)',
    specialization: 'Sports Injury & Keyhole Arthroscopic Repair',
    experienceYears: 12,
    photoUrl: '/assets/doctor-3.jpg',
    bio: 'Dr. Vikram Mehta serves as orthopedic consultant for several national sports academies. He specializes in ACL/PCL knee reconstructions, shoulder dislocation surgery, and cartilage restoration for active individuals.',
    expertiseList: ['ACL / PCL Ligament Reconstruction', 'Rotator Cuff Tear Repair', 'Meniscus Keyhole Surgery', 'Athletic Biomechanics Rehabilitation'],
    centresAvailable: ['Malad', 'Andheri', 'Kandivali'],
    schedule: 'Mon to Sat: 4:00 PM - 8:00 PM',
    registrationNumber: 'MMC/2012/03/1102'
  },
  {
    id: 'dr-siddharth-verma',
    name: 'Dr. Siddharth Verma',
    title: 'Consultant Trauma & Complex Fracture Specialist',
    qualifications: 'MBBS, D.Ortho, DNB (Ortho), AO Trauma Fellow (Switzerland)',
    specialization: 'Bone Care & Complex Fracture Reconstruction',
    experienceYears: 15,
    photoUrl: '/assets/doctor-4.jpg',
    bio: 'Dr. Siddharth Verma is a high-volume trauma specialist handling severe polytrauma, non-healing fractures, and bone infection management. He leads the Home X-Ray & Emergency Response Division at SOS.',
    expertiseList: ['Complex Fracture Fixation', 'Non-Union Bone Grafting', 'Bone Infection (Osteomyelitis) Care', 'Emergency Trauma Resuscitation'],
    centresAvailable: ['Borivali', 'Goregaon', 'Andheri'],
    schedule: 'Mon to Sat: 9:00 AM - 2:00 PM',
    registrationNumber: 'MMC/2009/05/1930'
  },
  {
    id: 'dr-meera-joshi',
    name: 'Dr. Meera Joshi',
    title: 'Consultant Rheumatologist & General Orthopedics Specialist',
    qualifications: 'MBBS, MD (Med), Fellowship in Rheumatology (London), DNB',
    specialization: 'Osteoporosis, Arthritis & Home Ortho Care',
    experienceYears: 16,
    photoUrl: '/assets/doctor-5.jpg',
    bio: 'Dr. Meera Joshi brings deep expertise in metabolic bone diseases, rheumatoid arthritis, post-menopausal bone care, and elderly pain management with compassionate patient-centric guidance.',
    expertiseList: ['Osteoporosis Density Protocol', 'Rheumatoid Arthritis Biologicals', 'Senior Mobility Management', 'Geriatric Ortho Consultation'],
    centresAvailable: ['Kandivali', 'Malad', 'Borivali'],
    schedule: 'Mon, Wed, Fri: 2:00 PM - 7:00 PM',
    registrationNumber: 'MMC/2008/01/0455'
  }
];
