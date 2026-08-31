import React, { useEffect } from 'react';
import { centresData } from '../data/centres';

export const LocalBusinessSchema: React.FC = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": "https://sosortho.com/#clinic",
      "name": "SOS Speciality Orthopedic Clinic",
      "alternateName": "SOS Complete Orthopedic Care Mumbai",
      "url": "https://sosortho.com",
      "logo": "https://sosortho.com/assets/video-poster.jpg",
      "image": "https://sosortho.com/assets/video-poster.jpg",
      "telephone": "+917070706505",
      "email": "officialsosortho@gmail.com",
      "priceRange": "₹₹",
      "description": "Speciality Orthopedic Clinic in Mumbai offering expert care for bone, joint, spine, and sports injuries with 24/7 Home X-Ray Services across Borivali, Kandivali, Malad, Goregaon, and Andheri.",
      "medicalSpecialty": ["Orthopedic", "Rheumatology", "SportsMedicine", "PediatricOrthopedics"],
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
        "telephone": "+917070706505",
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
