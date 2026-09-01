export interface OwnerResponse {
  text: string;
  timeAgo: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  location: string;
  treatment: string;
  doctorName?: string;
  rating: number;
  comment: string;
  date: string;
  timeAgo: string;
  isNew?: boolean;
  reviewerStats?: string;
  isLocalGuide?: boolean;
  hasPhotos?: boolean;
  photosCount?: number;
  verified: boolean;
  source: 'Google Review' | 'Direct Patient';
  ownerResponse?: OwnerResponse;
  category: 'knee' | 'spine-neck' | 'trauma-xray' | 'general';
}

export const googleReviewsSummary = {
  averageRating: 5.0,
  totalReviews: 10,
  stars: 5,
  ratingBreakdown: {
    5: 10,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
  placeName: 'SOS Speciality Orthopedic Clinic',
  location: 'Kandivali West, Mumbai',
  writeReviewUrl: 'https://maps.google.com/?q=SOS+Speciality+Orthopedic+Clinic+Kandivali+West',
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'google-review-1',
    patientName: 'Nirmal Shah',
    location: 'SOS Kandivali Clinic',
    treatment: 'Knee Pain Diagnosis & Digital X-Ray',
    doctorName: 'SOS Orthopedic Team',
    rating: 5,
    comment: 'Good orthopedic doctor, I have to consult for my knee pain... Doctor was spot on in diagnosing, did my xray and helping me out in pain.. now I feel much better.... Good polite staff...',
    date: '7 hours ago',
    timeAgo: '7 hours ago',
    isNew: true,
    reviewerStats: '4 reviews',
    verified: true,
    source: 'Google Review',
    category: 'knee'
  },
  {
    id: 'google-review-2',
    patientName: 'Felixcia',
    location: 'SOS Speciality Orthopedic Clinic',
    treatment: 'Neck Pain & Shoulder Radiating Stiffness',
    doctorName: 'SOS Orthopedic Team',
    rating: 5,
    comment: 'I visited the Sos Orthopedic Clinic, had a very good experience . Doctor really helped me to recover my neck pain and Stiffness that was radianting down my shoulder. Effective medicines.Polite Staffs and Clean place . Highly Recommend!!!',
    date: '3 days ago',
    timeAgo: '3 days ago',
    isNew: true,
    reviewerStats: '3 reviews',
    verified: true,
    source: 'Google Review',
    category: 'spine-neck',
    ownerResponse: {
      text: 'Thank you, Felixcia, for sharing your detailed experience with SOS Speciality Orthopedic Clinic. We’re glad to know that our doctor helped you with your neck pain and stiffness radiating towards the shoulder. We truly appreciate your kind feedback.',
      timeAgo: '13 hours ago'
    }
  },
  {
    id: 'google-review-3',
    patientName: 'Akhil Tawari',
    location: 'Kandivali West',
    treatment: 'Orthopedic Consultation Facility',
    doctorName: 'SOS Orthopedic Specialist',
    rating: 5,
    comment: 'Nice Consultation facility.',
    date: '4 days ago',
    timeAgo: '4 days ago',
    isNew: true,
    reviewerStats: '3 reviews',
    verified: true,
    source: 'Google Review',
    category: 'general',
    ownerResponse: {
      text: 'Thank you, Akhil, for your 5-star review. We’re glad you had a positive consultation experience at SOS Speciality Orthopedic Clinic. We appreciate your trust in our Orthopaedic Doctor in Kandivali West and look forward to serving you again.',
      timeAgo: '3 days ago'
    }
  },
  {
    id: 'google-review-4',
    patientName: 'Trushna Parmar',
    location: 'SOS Kandivali Clinic',
    treatment: 'Robotic & Conventional Knee Replacement Consult',
    doctorName: 'SOS Orthopedic Surgeons',
    rating: 5,
    comment: 'Recently visited SOS for my grandfathers knee pain orthopaedic surgeons at SOS suggest knee replacement, they do both robotic and conventional knee replacement surgeries, experienced and kind orthopaedic surgeons,staffs were polite and helpful.',
    date: 'a week ago',
    timeAgo: 'a week ago',
    isNew: true,
    reviewerStats: '1 review · 1 photo',
    hasPhotos: true,
    photosCount: 1,
    verified: true,
    source: 'Google Review',
    category: 'knee',
    ownerResponse: {
      text: 'Thank you, Trushna, for taking the time to share such a detailed review covering your family’s experiences with SOS Speciality Orthopedic Clinic. We’re grateful for your trust in us for your grandfather’s knee pain and appreciate your kind words.',
      timeAgo: 'a day ago'
    }
  },
  {
    id: 'google-review-5',
    patientName: 'Nitin Tiwari',
    location: 'Kandivali West',
    treatment: 'In-House X-Ray & Orthopedic Counselling',
    doctorName: 'SOS Orthopedic Surgeon',
    rating: 5,
    comment: 'I wanted orthopedic surgeon in kandivali west, came to SOS orthopedic clinic after recommendation of common friend. They have in house xray , polite staff , proper counselling. Satisfied with my consultation.',
    date: 'a week ago',
    timeAgo: 'a week ago',
    isNew: true,
    reviewerStats: '1 review',
    verified: true,
    source: 'Google Review',
    category: 'trauma-xray',
    ownerResponse: {
      text: 'Thank you, Nitin, for sharing your experience and for choosing SOS Speciality Orthopedic Clinic based on a recommendation. We’re glad to know you were satisfied with your consultation and appreciated the in-house X-ray, proper counselling, and polite staff.',
      timeAgo: '13 hours ago'
    }
  },
  {
    id: 'google-review-6',
    patientName: 'Nasima Khan',
    location: 'SOS Superspeciality Orthopedic Services',
    treatment: 'Emergency Fall Trauma & Immediate Digital X-Ray',
    doctorName: 'SOS Orthopedic Surgeons',
    rating: 5,
    comment: 'My mom slipped and fell while she was doing house chores we took her to SOS for X-ray done immediately and orthopaedic surgeons at SOS treated her immediately for pain and she recovered gradually I really like their services as they have in-house X-ray facility and prompt care.',
    date: 'a week ago',
    timeAgo: 'a week ago',
    isNew: true,
    reviewerStats: '4 reviews · 2 photos',
    hasPhotos: true,
    photosCount: 2,
    verified: true,
    source: 'Google Review',
    category: 'trauma-xray',
    ownerResponse: {
      text: 'Thank you, Nasima, for sharing such a thoughtful review and for trusting SOS Superspeciality Orthopaedic Services with your mother’s care. We’re happy to know that she received timely attention after her fall and that the X-ray and prompt treatment helped her recover.',
      timeAgo: '12 hours ago'
    }
  },
  {
    id: 'google-review-7',
    patientName: 'Joshuva Kounder',
    location: 'Kandivali Clinic',
    treatment: 'Orthopedic Care & Patient Support',
    doctorName: 'SOS Orthopedic Doctor',
    rating: 5,
    comment: '5-Star rating for SOS Speciality Orthopedic Clinic. Outstanding medical care, compassionate doctor, and dedicated staff.',
    date: '3 days ago',
    timeAgo: '3 days ago',
    isNew: true,
    reviewerStats: '1 review',
    verified: true,
    source: 'Google Review',
    category: 'general',
    ownerResponse: {
      text: 'Thank you, Joshuva, for your 5-star rating. We truly appreciate you taking the time to support SOS Speciality Orthopedic Clinic. Your trust means a great deal to our team, and we remain committed to providing attentive, compassionate care as an Orthopedic Doctor in Kandivali.',
      timeAgo: '13 hours ago'
    }
  },
  {
    id: 'google-review-8',
    patientName: 'Mansi P',
    location: 'Kandivali Clinic',
    treatment: 'Specialist Orthopedic Care',
    doctorName: 'SOS Orthopedic Team',
    rating: 5,
    comment: '5-Star Review from Local Guide. Recognized as a trusted Orthopedic Clinic in Kandivali with attentive care, clean facilities, and knowledgeable doctors.',
    date: '5 days ago',
    timeAgo: '5 days ago',
    isNew: true,
    reviewerStats: 'Local Guide · 155 reviews · 331 photos',
    isLocalGuide: true,
    hasPhotos: true,
    photosCount: 331,
    verified: true,
    source: 'Google Review',
    category: 'general',
    ownerResponse: {
      text: 'Thank you, Mansi, for your 5-star rating. We truly appreciate your support and confidence in SOS Speciality Orthopedic Clinic. It means a lot to our team to be recognized as a trusted Orthopedic Clinic in Kandivali.',
      timeAgo: '3 days ago'
    }
  },
  {
    id: 'google-review-9',
    patientName: 'Hardik Desai',
    location: 'Kandivali West',
    treatment: 'Orthopedic Consultation & Examination',
    doctorName: 'SOS Orthopedic Clinic',
    rating: 5,
    comment: '5-Star Review. Attentive, patient-focused care and a comfortable experience for every visitor seeking an Orthopaedic Clinic in Kandivali West.',
    date: '6 days ago',
    timeAgo: '6 days ago',
    isNew: true,
    reviewerStats: 'Local Guide · 16 reviews',
    isLocalGuide: true,
    verified: true,
    source: 'Google Review',
    category: 'general',
    ownerResponse: {
      text: 'Thank you, Hardik, for your 5-star rating and for choosing SOS Speciality Orthopedic Clinic. We truly appreciate your trust and support. Our team is committed to providing attentive, patient-focused care and a comfortable experience for every visitor seeking an Orthopaedic Clinic Kandivali West.',
      timeAgo: 'a day ago'
    }
  },
  {
    id: 'google-review-10',
    patientName: 'Nikhil Gokhale',
    location: 'Kandivali West',
    treatment: 'Orthopedic Evaluation & Care',
    doctorName: 'SOS Orthopedic Clinic',
    rating: 5,
    comment: '5-Star Review. Dedicated and attentive patient-focused care with a comfortable consultation experience at SOS Orthopedic Clinic in Kandivali West.',
    date: 'a week ago',
    timeAgo: 'a week ago',
    isNew: true,
    reviewerStats: '2 reviews',
    verified: true,
    source: 'Google Review',
    category: 'general',
    ownerResponse: {
      text: 'Thank you, Nikhil, for your 5-star rating and for choosing SOS Speciality Orthopedic Clinic. We truly appreciate your trust and support. Our team remains committed to providing attentive, patient-focused care as an Orthopaedic Clinic in Kandivali West. Your appreciation means a lot to us and motivates us to continue delivering a comfortable experience for every patient.',
      timeAgo: '12 hours ago'
    }
  }
];
