import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../config/business';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SOS Speciality Orthopedic Clinic | Complete Orthopedic Care Mumbai',
  description = 'SOS Speciality Orthopedic Clinic - Expert treatment for Bone, Joint, Spine & Sports Injuries in Mumbai (Borivali, Kandivali, Malad, Goregaon, Andheri). 24/7 Home X-Ray Service.',
  keywords = 'Orthopedic Doctor Mumbai, Home X-Ray Service Borivali, Spine Care Kandivali, Joint Replacement Malad, Sports Injury Specialist Goregaon, Bone Care Andheri, SOS Ortho',
  canonicalUrl,
  noIndex = false
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

    // Canonical link handling
    const resolvedCanonical = canonicalUrl || `${BUSINESS_INFO.website}${window.location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', resolvedCanonical);

    // Robots meta handling
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else if (metaRobots) {
      metaRobots.remove();
    }

    return () => {
      if (noIndex) {
        const robotsOnUnmount = document.querySelector('meta[name="robots"]');
        if (robotsOnUnmount) {
          robotsOnUnmount.remove();
        }
      }
    };
  }, [title, description, keywords, canonicalUrl, noIndex]);

  return null;
};

