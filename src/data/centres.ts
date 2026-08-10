export interface Centre {
  id: string;
  name: string;
  area: string;
  slug: string;
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
    id: 'borivali',
    name: 'SOS Orthopedic Centre - Borivali West',
    area: 'Borivali',
    slug: 'borivali',
    address: 'Shop No. 4 & 5, Ground Floor, Royal Plaza, Near Shimpoli Road Signal, SV Road, Borivali West, Mumbai - 400092',
    landmark: 'Opposite Shimpoli Telephone Exchange',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 9:00 AM - 9:00 PM | Sunday: 10:00 AM - 2:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.873215560946!2d72.8524!3d19.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzUwLjUiTiA3MsKwNTEnMDguNiJF!5e0!3m2!1sen!2sin!4v1700000000000',
    photoUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    googleRating: 4.9,
    reviewsCount: 142,
    features: ['24/7 Emergency Ortho Care', 'Digital X-Ray Lab', 'Physiotherapy Suite', 'Wheelchair Accessible'],
    geo: {
      latitude: 19.2307,
      longitude: 72.8524
    }
  },
  {
    id: 'kandivali',
    name: 'SOS Orthopedic Centre - Kandivali West',
    area: 'Kandivali',
    slug: 'kandivali',
    address: 'Unit 102, 1st Floor, Horizon Business Hub, MG Road, Near Kandivali Railway Station, Kandivali West, Mumbai - 400067',
    landmark: 'Near Dena Bank Circle',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 9:30 AM - 8:30 PM | Sunday: Closed',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.421512411985!2d72.8351!3d19.2064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzIzLjAiTiA3MsKwNTAnMDYuNCJF!5e0!3m2!1sen!2sin!4v1700000000000',
    photoUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    googleRating: 4.8,
    reviewsCount: 118,
    features: ['Spine Rehabilitation Center', 'Joint Clinic', 'Home X-Ray Booking Desk', 'Valet Parking'],
    geo: {
      latitude: 19.2064,
      longitude: 72.8351
    }
  },
  {
    id: 'malad',
    name: 'SOS Orthopedic Centre - Malad West',
    area: 'Malad',
    slug: 'malad',
    address: 'G-12, Infinity Heights, New Link Road, Near Inorbit Mall Signal, Malad West, Mumbai - 400064',
    landmark: 'Opposite Mindspace Complex',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 9:00 AM - 9:00 PM | Sunday: 10:00 AM - 1:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.112341235123!2d72.8345!3d19.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzExLjQiTiA3MsKwNTAnMDQuMiJF!5e0!3m2!1sen!2sin!4v1700000000000',
    photoUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800',
    googleRating: 4.9,
    reviewsCount: 165,
    features: ['Advanced Arthroscopy Lab', 'Sports Injury Rehab', 'In-House Pharmacy', 'Ambulance Support'],
    geo: {
      latitude: 19.1865,
      longitude: 72.8345
    }
  },
  {
    id: 'goregaon',
    name: 'SOS Orthopedic Centre - Goregaon West',
    area: 'Goregaon',
    slug: 'goregaon',
    address: 'Shop 2, Crystal Arcade, Near SV Road & Station Road Junction, Goregaon West, Mumbai - 400104',
    landmark: 'Near Goregaon Flyover Ramp',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 10:00 AM - 9:00 PM | Sunday: Emergency Only',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.754321098765!2d72.8432!3d19.1645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzUyLjIiTiA3MsKwNTAnMzUuNSJF!5e0!3m2!1sen!2sin!4v1700000000000',
    photoUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    googleRating: 4.8,
    reviewsCount: 94,
    features: ['Bone Density Scanning', 'Fracture Clinic', 'Senior Citizen Express OPD', 'Home Services Setup'],
    geo: {
      latitude: 19.1645,
      longitude: 72.8432
    }
  },
  {
    id: 'andheri',
    name: 'SOS Orthopedic Centre - Andheri West',
    area: 'Andheri',
    slug: 'andheri',
    address: 'Suite 201, Medicare Medical Plaza, JP Road, Near Andheri Metro Station, Andheri West, Mumbai - 400058',
    landmark: 'Opposite Navrang Cinema Signal',
    phone: '7070706505',
    whatsapp: '917070706505',
    email: 'officialsosortho@gmail.com',
    timings: 'Mon - Sat: 8:30 AM - 9:30 PM | Sunday: 10:00 AM - 2:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.210987654321!2d72.8367!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzEwLjkiTiA3MsKwNTAnMTIuMSJF!5e0!3m2!1sen!2sin!4v1700000000000',
    photoUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
    googleRating: 4.95,
    reviewsCount: 210,
    features: ['Robotic Joint Surgery OPD', 'Spine Endoscopy Clinic', 'Trauma Unit', 'Diagnostic Imaging'],
    geo: {
      latitude: 19.1197,
      longitude: 72.8367
    }
  }
];
