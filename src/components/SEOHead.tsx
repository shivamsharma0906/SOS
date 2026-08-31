import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SOS Speciality Orthopedic Clinic | Complete Orthopedic Care Mumbai',
  description = 'SOS Speciality Orthopedic Clinic - Expert treatment for Bone, Joint, Spine & Sports Injuries in Mumbai (Borivali, Kandivali, Malad, Goregaon, Andheri). 24/7 Home X-Ray Service.',
  keywords = 'Orthopedic Doctor Mumbai, Home X-Ray Service Borivali, Spine Care Kandivali, Joint Replacement Malad, Sports Injury Specialist Goregaon, Bone Care Andheri, SOS Ortho',
  canonicalUrl
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);

  return null;
};
