// SCALABILITY NOTE:
// To add a 5th, 6th, or subsequent centre in the future, simply append a new Centre object 
// to the `centresData` array below. All grid layouts (Centres page, Home overview, Footer, 
// Contact page, and Schema generator) are responsive and use auto-fill grids that dynamically 
// adapt to any number of centres without requiring any component or style modifications.

import { BUSINESS_INFO } from '../config/business';

export type CentreType = 'centre' | 'outreach-clinic' | 'service-area';
export type CentreStatus = 'operational' | 'opening-soon';

export interface LocalFAQ {
  question: string;
  answer: string;
}

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
  googleRating: string;
  features: string[];
  imagePosition?: string;
  targetKeyword: string;
  localOverview: string;
  localDoctors: string[];
  localFaqs: LocalFAQ[];
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
    address: 'Shop No. 3, Ground Floor, Mahavir Majesty, Kandivali West, Mumbai',
    landmark: 'Mahavir Majesty, Kandivali West',
    phone: BUSINESS_INFO.phone,
    whatsapp: `91${BUSINESS_INFO.phone}`,
    email: BUSINESS_INFO.email,
    timings: 'Mon - Sat: 8:00 AM - 10:00 PM | Sunday OPD Available',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Mahavir+Majesty+Kandivali+West+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/clinic-kandivali.jpg',
    imagePosition: 'center 15%',
    googleRating: '4.5+',
    targetKeyword: 'Orthopedic Clinic in Kandivali',
    localOverview: 'Our primary operational orthopedic centre in Kandivali West is equipped with dedicated surgical consultation suites, digital radiography support, physiotherapy assessment, and emergency fracture triage. Open 6 days a week with priority Sunday clinics.',
    localDoctors: ['dr-maulik-joshi', 'dr-shobit-deshmukh', 'dr-omkar'],
    features: ['Orthopedic OPD Clinic', 'Emergency Fracture Triage', '24/7 Home X-Ray Dispatch Desk', 'Post-Op Physiotherapy'],
    localFaqs: [
      {
        question: 'Where is the SOS Orthopedic Clinic located in Kandivali?',
        answer: 'Our Kandivali centre is located at Shop No. 3, Ground Floor, Mahavir Majesty, Kandivali West, easily accessible from Link Road and SV Road.'
      },
      {
        question: 'Are walk-in consultations accepted at the Kandivali clinic?',
        answer: 'Walk-ins are accommodated for acute fractures and trauma triage. For joint replacement and spine consultations, we recommend booking in advance to minimize waiting time.'
      },
      {
        question: 'Can I book a doorstep X-ray from the Kandivali branch?',
        answer: 'Yes. Our 24/7 mobile radiography dispatch unit is stationed locally and reaches residences across Kandivali East and West within 20 to 30 minutes.'
      }
    ],
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
    phone: BUSINESS_INFO.phone,
    whatsapp: `91${BUSINESS_INFO.phone}`,
    email: BUSINESS_INFO.email,
    timings: 'Scheduled Outreach Days & By Appointment',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Raheja+Exotica+Pascal+Wadi+Madh+Mumbai+400061&t=&z=16&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/clinic-consultation-suite.jpg',
    imagePosition: 'center center',
    googleRating: '4.5+',
    targetKeyword: 'Orthopedic Specialist in Malad',
    localOverview: 'Our operational Malad outreach clinic provides specialized orthopedic consultations, pre-operative joint evaluations, and post-operative surgical reviews for residents of Malad, Madh Island, and Link Road.',
    localDoctors: ['dr-maulik-joshi', 'dr-shobit-deshmukh'],
    features: ['Outreach Orthopedic OPD', 'Consultation & Triage', 'Referral & Follow-up Support', '24/7 Home X-Ray Dispatch'],
    localFaqs: [
      {
        question: 'How do I book an appointment at the Malad outreach clinic?',
        answer: 'Consultations at the Malad outreach clinic are scheduled by prior appointment. You can book by calling 093211 44580 or through our central WhatsApp desk.'
      },
      {
        question: 'Is doorstep X-ray available in Malad West and East?',
        answer: 'Yes. Our portable digital X-ray vans serve all residential areas of Malad, Chincholi Bunder, Marve Road, and Madh with 20–30 minute emergency dispatch.'
      }
    ],
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
    address: 'Borivali West, Mumbai (Upcoming Physical Centre & Active Doorstep Service Area)',
    landmark: 'Upcoming Facility, Borivali West',
    phone: BUSINESS_INFO.phone,
    whatsapp: `91${BUSINESS_INFO.phone}`,
    email: BUSINESS_INFO.email,
    timings: '24/7 Doorstep Services Active | Clinic Facility Opening Soon',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Borivali+West,Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/clinic-digital-xray.jpg',
    imagePosition: 'center center',
    googleRating: '4.5+',
    targetKeyword: 'Orthopedic Doctor in Borivali',
    localOverview: 'Borivali is an active service area with 24/7 emergency dispatch for portable digital X-rays, doctor home visits, and mobile physiotherapy for bedridden or elderly patients. A dedicated consultation facility in Borivali West is currently opening soon.',
    localDoctors: ['dr-maulik-joshi', 'dr-shobit-deshmukh', 'dr-omkar'],
    features: ['24/7 Doorstep Home X-Ray', 'Doctor Home Visit Service', 'Home Physiotherapy Dispatch', 'Consultation Desk Open'],
    localFaqs: [
      {
        question: 'How soon can a doctor or X-ray technician visit my home in Borivali?',
        answer: 'Our certified radiography team arrives at residential addresses across Borivali West (Shimpoli, IC Colony, Gorai) and Borivali East within 20 to 30 minutes of booking.'
      },
      {
        question: 'Where can Borivali patients see SOS surgeons in person right now?',
        answer: 'In-person outpatient consultations are available at our operational flagship centre in nearby Kandivali West (just 10 minutes from Borivali Station).'
      }
    ],
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
    address: 'Goregaon West, Mumbai (Upcoming Physical Centre & Active Doorstep Service Area)',
    landmark: 'Upcoming Facility, Goregaon West',
    phone: BUSINESS_INFO.phone,
    whatsapp: `91${BUSINESS_INFO.phone}`,
    email: BUSINESS_INFO.email,
    timings: '24/7 Doorstep Services Active | Clinic Facility Opening Soon',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Goregaon+West,Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed',
    photoUrl: '/assets/clinic-lounge-reception.jpg',
    imagePosition: 'center center',
    googleRating: '4.5+',
    targetKeyword: 'Orthopedic Surgeon in Goregaon',
    localOverview: 'Goregaon is actively covered by our 24/7 doorstep orthopedic mobile fleet. Senior citizens and acute fracture patients across Goregaon West and East receive rapid-response portable digital X-rays and home physiotherapy. A physical consultation centre is opening soon.',
    localDoctors: ['dr-shobit-deshmukh', 'dr-omkar'],
    features: ['24/7 Bedside Digital X-Ray', 'Orthopedic Home Care Visits', 'Joint Rehab Physiotherapy', 'Emergency Fracture Triage'],
    localFaqs: [
      {
        question: 'Is emergency home X-ray available in Goregaon 24/7?',
        answer: 'Yes. Our high-frequency portable digital X-ray unit is available 24 hours a day, 7 days a week across Goregaon West, Goregaon East, and adjoining areas.'
      },
      {
        question: 'How can I schedule a specialist consultation if I live in Goregaon?',
        answer: 'You can consult our surgeons at our Kandivali centre or book a home doctor visit by calling our central helpline at 093211 44580.'
      }
    ],
    geo: {
      latitude: 19.1663,
      longitude: 72.8526
    }
  }
];
