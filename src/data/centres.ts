// SCALABILITY NOTE:
// To add a 5th, 6th, or subsequent centre in the future, simply append a new Centre object 
// to the `centresData` array below. All grid layouts (Centres page, Home overview, Footer, 
// Contact page, and Schema generator) are responsive and use auto-fill grids that dynamically 
// adapt to any number of centres without requiring any component or style modifications.

export type CentreType = 'centre' | 'outreach-clinic';
export type CentreStatus = 'operational' | 'opening-soon';

export interface Centre {
  id: string;
  name: string;
  area: string;
  slug: string;
  type: CentreType;
  status: CentreStatus;
  address: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  email: string;
  timings: string;
  mapEmbedUrl: string;
  photoUrl: string;
  googleRating: number;
  reviewsCount: number;
  features: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
}

export const centresData: Centre[] = [
  {
    id: 'kandivali',
    name: 'SOS Orthopedic Centre - Kandivali',
    area: 'Kandivali',
    slug: 'kandivali',
    type: 'centre',
    status: 'operational',
    address: 'Shop No. 3, Ground Floor, Mahavir Majesty, Kandivali West',
    landmark: 'Mahavir Majesty, Kandivali West',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 8:00 AM - 10:00 PM | Sunday OPD Available',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Mahavir+Majesty+Kandivali+West+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/centre-kandivali.png',
    googleRating: 4.9,
    reviewsCount: 150,
    features: ['Orthopedic OPD', 'Emergency Care', 'Home X-Ray Booking Desk', 'Physiotherapy'],
    geo: {
      latitude: 19.2064,
      longitude: 72.8351
    }
  },
  {
    id: 'malad',
    name: 'SOS Outreach Clinic - Malad',
    area: 'Malad',
    slug: 'malad',
    type: 'outreach-clinic',
    status: 'operational',
    address: 'Raheja Exotica, Pascal Wadi, Madh, Mumbai – 400061',
    landmark: 'Raheja Exotica, Madh',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Scheduled Outreach Days & By Appointment',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Raheja+Exotica+Pascal+Wadi+Madh+Mumbai+400061&t=&z=16&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/centre-malad.png',
    googleRating: 4.8,
    reviewsCount: 85,
    features: ['Outreach Orthopedic OPD', 'Consultation & Triage', 'Referral & Follow-up Support'],
    geo: {
      latitude: 19.1432,
      longitude: 72.7938
    }
  },
  {
    id: 'borivali',
    name: 'SOS Orthopedic Centre - Borivali',
    area: 'Borivali',
    slug: 'borivali',
    type: 'centre',
    status: 'opening-soon',
    address: 'Borivali West, Mumbai (Opening Soon)',
    landmark: 'Upcoming Facility, Borivali West',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Under Construction • Opening Soon (Enquiries Open)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Borivali+West,Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/centre-borivali.png',
    googleRating: 4.9,
    reviewsCount: 135,
    features: ['Specialist Orthopedic Consultations', 'Joint & Spine Care', '24/7 Home X-Ray Dispatch'],
    geo: {
      latitude: 19.2307,
      longitude: 72.8567
    }
  },
  {
    id: 'goregaon',
    name: 'SOS Orthopedic Centre - Goregaon',
    area: 'Goregaon',
    slug: 'goregaon',
    type: 'centre',
    status: 'opening-soon',
    address: 'Goregaon West, Mumbai (Opening Soon)',
    landmark: 'Upcoming Facility, Goregaon West',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Under Construction • Opening Soon (Enquiries Open)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Goregaon+West,Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/centre-goregaon.png',
    googleRating: 4.8,
    reviewsCount: 110,
    features: ['Orthopedic OPD Clinic', 'Digital Radiography Support', 'Fracture & Sports Care'],
    geo: {
      latitude: 19.1663,
      longitude: 72.8526
    }
  }
];
