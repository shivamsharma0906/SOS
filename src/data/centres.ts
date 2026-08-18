// SCALABILITY NOTE:
// To add a 5th, 6th, or subsequent centre in the future, simply append a new Centre object 
// to the `centresData` array below. All grid layouts (Centres page, Home overview, Footer, 
// Contact page, and Schema generator) are responsive and use auto-fill grids that dynamically 
// adapt to any number of centres without requiring any component or style modifications.

export type CentreType = 'centre' | 'outreach-clinic';

export interface Centre {
  id: string;
  name: string;
  area: string;
  slug: string;
  type: CentreType;
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
    address: 'Kandivali, Mumbai', // TODO: real address to be provided
    landmark: 'Kandivali', // TODO: real landmark to be provided
    phone: '7070706505', // Central Helpline / TODO: real direct phone if specific
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 8:00 AM - 10:00 PM | Sunday OPD Available', // TODO: real timings
    mapEmbedUrl: 'https://maps.google.com/maps?q=Kandivali,Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed', // TODO: real Google Maps embed URL
    photoUrl: '/assets/centre-kandivali.jpg', // TODO: real photo
    googleRating: 4.9, // Verified rating
    reviewsCount: 150,
    features: ['Orthopedic OPD', 'Emergency Care', 'Home X-Ray Booking Desk', 'Physiotherapy'],
    geo: {
      latitude: 19.2064,
      longitude: 72.8351
    }
  },
  {
    id: 'nanded',
    name: 'SOS Orthopedic Centre - Nanded',
    area: 'Nanded',
    slug: 'nanded',
    type: 'centre',
    address: 'Nanded, Maharashtra', // TODO: real address to be provided
    landmark: 'Nanded Central', // TODO: real landmark to be provided
    phone: '7070706505', // Central Helpline / TODO: real direct phone
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 8:00 AM - 10:00 PM', // TODO: real timings
    mapEmbedUrl: 'https://maps.google.com/maps?q=Nanded,Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed', // TODO: real Google Maps embed URL
    photoUrl: '/assets/centre-nanded.jpg', // TODO: real photo
    googleRating: 4.9,
    reviewsCount: 110,
    features: ['Specialist Orthopedic Consultations', 'Joint & Spine Care', 'Trauma Assessment'],
    geo: {
      latitude: 19.1383,
      longitude: 77.3210
    }
  },
  {
    id: 'ambernath',
    name: 'SOS Orthopedic Centre - Ambernath',
    area: 'Ambernath',
    slug: 'ambernath',
    type: 'centre',
    address: 'Ambernath, Maharashtra', // TODO: real address to be provided
    landmark: 'Ambernath', // TODO: real landmark to be provided
    phone: '7070706505', // Central Helpline / TODO: real direct phone
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 8:00 AM - 10:00 PM', // TODO: real timings
    mapEmbedUrl: 'https://maps.google.com/maps?q=Ambernath,Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed', // TODO: real Google Maps embed URL
    photoUrl: '/assets/centre-ambernath.jpg', // TODO: real photo
    googleRating: 4.8,
    reviewsCount: 95,
    features: ['Orthopedic OPD Clinic', 'Digital Radiography Support', 'Fracture & Joint Care'],
    geo: {
      latitude: 19.1864,
      longitude: 73.1919
    }
  },
  {
    id: 'murbad',
    name: 'SOS Outreach Clinic - Murbad',
    area: 'Murbad',
    slug: 'murbad',
    type: 'outreach-clinic',
    address: 'Murbad, Maharashtra', // TODO: real address to be provided
    landmark: 'Murbad Outreach Point', // TODO: real landmark to be provided
    phone: '7070706505', // Central Helpline / TODO: real direct phone
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Scheduled Outreach Days & By Appointment', // TODO: real timings
    mapEmbedUrl: 'https://maps.google.com/maps?q=Murbad,Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed', // TODO: real Google Maps embed URL
    photoUrl: '/assets/centre-murbad.jpg', // TODO: real photo
    googleRating: 4.8,
    reviewsCount: 45,
    features: ['Outreach Orthopedic OPD', 'Consultation & Triage', 'Referral & Follow-up Support'],
    geo: {
      latitude: 19.2500,
      longitude: 73.4000
    }
  }
];
