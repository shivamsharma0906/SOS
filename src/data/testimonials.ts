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
    id: '1',
    patientName: 'Ramesh Shah',
    age: 68,
    location: 'Borivali West',
    treatment: 'Home X-Ray Service & Knee Care',
    doctorName: 'Dr. Rajesh Sharma',
    rating: 5,
    comment: 'My elderly mother was unable to walk due to severe knee pain and a fall. SOS sent their portable digital Home X-Ray team within 2 hours to our Borivali apartment! The technician was extremely gentle and professional. Saved us an agonizing ambulance trip.',
    date: 'July 2026',
    verified: true
  },
  {
    id: '2',
    patientName: 'Priya Kulkarni',
    age: 34,
    location: 'Kandivali West',
    treatment: 'Endoscopic Spine Surgery (Sciatica)',
    doctorName: 'Dr. Ananya Deshmukh',
    rating: 5,
    comment: 'I suffered from excruciating sciatica radiating down my left leg for 6 months. Dr. Ananya recommended keyhole endoscopic discectomy at Kandivali. I was walking pain-free the next morning without any big scar. Extraordinary spine care!',
    date: 'June 2026',
    verified: true
  },
  {
    id: '3',
    patientName: 'Aman Verma',
    age: 27,
    location: 'Malad West',
    treatment: 'ACL Reconstruction & Sports Rehab',
    doctorName: 'Dr. Vikram Mehta',
    rating: 5,
    comment: 'Tore my ACL playing football. Dr. Vikram Mehta performed arthroscopic reconstruction at the Malad centre. His post-op rehab guidance got me back on the field in 5 months. Best sports injury doctor in Mumbai!',
    date: 'May 2026',
    verified: true
  },
  {
    id: '4',
    patientName: 'Sunita Shetty',
    age: 61,
    location: 'Andheri West',
    treatment: 'Robotic Total Knee Replacement',
    doctorName: 'Dr. Rajesh Sharma',
    rating: 5,
    comment: 'Both my knees had grade 4 osteoarthritis. Dr. Rajesh Sharma operated both knees using robotic precision. Now at 61, I walk 3 kilometers daily without any pain relievers. SOS staff at Andheri treat you like family.',
    date: 'April 2026',
    verified: true
  },
  {
    id: '5',
    patientName: 'Mahesh Patel',
    age: 52,
    location: 'Goregaon West',
    treatment: 'Complex Fracture Management',
    doctorName: 'Dr. Siddharth Verma',
    rating: 5,
    comment: 'Met with a bike accident in Goregaon. Dr. Siddharth Verma managed my wrist & collarbone fracture with absolute precision. Their digital X-ray reporting was super fast and transparent. Highly recommended!',
    date: 'March 2026',
    verified: true
  }
];
