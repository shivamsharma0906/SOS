import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../config/business';

interface StructuredData {
  [key: string]: unknown;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogSiteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: StructuredData | StructuredData[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SOS Speciality Orthopedic Clinic | Complete Orthopedic Care Mumbai',
  description = 'SOS Speciality Orthopedic Clinic - Expert treatment for Bone, Joint, Spine & Sports Injuries in Mumbai (Borivali, Kandivali, Malad, Goregaon, Andheri). 24/7 Home X-Ray Service.',
  keywords = 'Orthopedic Doctor Mumbai, Home X-Ray Service Borivali, Spine Care Kandivali, Joint Replacement Malad, Sports Injury Specialist Goregaon, Bone Care Andheri, SOS Ortho',
  canonicalUrl,
  noIndex = false,
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = `${BUSINESS_INFO.website}/assets/video-poster.jpg`,
  ogSiteName = 'SOS Speciality Orthopedic Clinic',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData
}) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Set HTML lang
    document.documentElement.lang = 'en-IN';

    // Helper for meta tags
    const setMetaTag = (attr: 'name' | 'property', attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 3. Primary Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 4. Canonical link handling
    const resolvedCanonical = canonicalUrl || `${BUSINESS_INFO.website}${window.location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', resolvedCanonical);

    // 5. Open Graph / Facebook Meta
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', ogTitle || title);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:url', ogUrl || resolvedCanonical);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', ogSiteName);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 6. Twitter Card Meta
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', twitterTitle || ogTitle || title);
    setMetaTag('name', 'twitter:description', twitterDescription || ogDescription || description);
    setMetaTag('name', 'twitter:image', twitterImage || ogImage);

    // 7. Robots meta handling
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'index, follow');
    }

    // 8. Structured Data JSON-LD injection
    const scriptId = 'seo-structured-data-dynamic';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    noIndex,
    ogType,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    ogSiteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData
  ]);

  return null;
};
