import React, { useEffect } from 'react';
import { centresData } from '../data/centres';
import { testimonialsData, googleReviewsSummary } from '../data/testimonials';
import { BUSINESS_INFO } from '../config/business';

export const LocalBusinessSchema: React.FC = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${BUSINESS_INFO.website}/#clinic`,
      "name": BUSINESS_INFO.name,
      "alternateName": "SOS Complete Orthopedic Care Mumbai",
      "url": BUSINESS_INFO.website,
      "logo": `${BUSINESS_INFO.website}/assets/video-poster.jpg`,
      "image": `${BUSINESS_INFO.website}/assets/video-poster.jpg`,
      "telephone": `+91${BUSINESS_INFO.phone}`,
      "email": BUSINESS_INFO.email,
      "priceRange": "₹₹",
      "description": "Speciality Orthopedic Clinic in Mumbai offering expert care for bone, joint, spine, and sports injuries with 24/7 Home X-Ray Services across Borivali, Kandivali, Malad, Goregaon, and Andheri.",
      "medicalSpecialty": ["Orthopedic", "Rheumatology", "SportsMedicine", "PediatricOrthopedics"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": googleReviewsSummary.averageRating.toString(),
        "reviewCount": googleReviewsSummary.totalReviews.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": testimonialsData.map(item => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": item.patientName
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": item.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": item.comment,
        "datePublished": "2026-08-25"
      })),
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Borivali" },
        { "@type": "AdministrativeArea", "name": "Kandivali" },
        { "@type": "AdministrativeArea", "name": "Malad" },
        { "@type": "AdministrativeArea", "name": "Goregaon" },
        { "@type": "AdministrativeArea", "name": "Andheri" }
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61592799181133",
        "https://www.instagram.com/sosorthopaedics/"
      ],
      "availableService": [
        { "@type": "MedicalDiagnosticTest", "name": "24/7 Home X-Ray Service" },
        { "@type": "MedicalProcedure", "name": "Joint Care & Robotic Replacement" },
        { "@type": "MedicalProcedure", "name": "Endoscopic Spine Care & Discectomy" },
        { "@type": "MedicalProcedure", "name": "Bone Care & Complex Fracture Fixation" },
        { "@type": "MedicalProcedure", "name": "Sports Injury Arthroscopy & ACL Repair" }
      ],
      "department": centresData.map(centre => ({
        "@type": "MedicalClinic",
        "name": centre.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": centre.address,
          "addressLocality": centre.area,
          "addressRegion": "Maharashtra",
          "postalCode": "400092",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": centre.geo.latitude,
          "longitude": centre.geo.longitude
        },
        "telephone": `+91${BUSINESS_INFO.phone}`,
        "openingHours": "Mo-Sa 09:00-21:00"
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
