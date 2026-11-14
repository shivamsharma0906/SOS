export interface BlogAuthor {
  name: string;
  title: string;
  photoUrl: string;
  qualifications: string;
  specialization: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogProcedureStep {
  stepNumber: number;
  title: string;
  paragraphs: string[];
  link?: {
    preText: string;
    anchorText: string;
    url: string;
    postText: string;
  };
}

export interface BlogBenefit {
  label: string;
  description: string;
}

export interface BlogSEO {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  imageAlt: string;
  ogImage: string;
  keywords: string;
  // Publishing dates and author attributes
  datePublished: string;
  dateModified: string;
  authorNamePlaceholder: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  category: 'knee' | 'spine' | 'trauma';
  categoryLabel: string;
  author: BlogAuthor;
  publishDate: string;
  lastUpdated: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  heroImage: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
  procedureImage?: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
  consultationImage?: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
  seo: BlogSEO;
  content: {
    leadParagraphs: string[];
    whatIsRobotic?: {
      heading: string;
      paragraphs: string[];
    };
    conditions?: {
      heading: string;
      intro: string;
      subsections: {
        heading: string;
        paragraphs: string[];
      }[];
    };
    procedure?: {
      heading: string;
      intro: string;
      steps: BlogProcedureStep[];
    };
    benefits?: {
      heading: string;
      intro: string;
      items: BlogBenefit[];
      conclusion: string;
    };
    roboticVsConventional?: {
      heading: string;
      paragraphs: string[];
    };
    recovery?: {
      heading: string;
      intro: string;
      earlyRecovery: {
        heading: string;
        paragraphs: string[];
      };
      physiotherapy: {
        heading: string;
        paragraphs: string[];
        link: {
          preText: string;
          anchorText: string;
          url: string;
          postText: string;
        };
      };
      dailyActivities: {
        heading: string;
        paragraphs: string[];
      };
    };
    risks?: {
      heading: string;
      paragraphs: string[];
    };
    cost?: {
      heading: string;
      paragraphs: string[];
    };
    informedDecision?: {
      heading: string;
      paragraphs: string[];
      link: {
        preText: string;
        anchorText: string;
        url: string;
        postText: string;
      };
    };
    // Section fields for recovery guide
    whatHappensImmediately?: {
      heading: string;
      paragraphs: string[];
    };
    recoveryTimeline?: {
      heading: string;
      subsections: {
        heading: string;
        paragraphs: string[];
      }[];
    };
    factors?: {
      heading: string;
      paragraphs: string[];
    };
    managingPainAndPhysio?: {
      heading: string;
      paragraphs: string[];
    };
    whenToContactDoctor?: {
      heading: string;
      paragraphs: string[];
    };
    isRoboticRightOption?: {
      heading: string;
      paragraphs: string[];
    };
    faqs: {
      heading: string;
      items: BlogFAQ[];
    };
    // Section fields for back pain in young adults
    causes?: {
      heading: string;
      intro: string;
      subsections: {
        heading: string;
        paragraphs: string[];
      }[];
    };
    whenToConsult?: {
      heading: string;
      paragraphs: string[];
    };
    diagnosisAndTreatment?: {
      heading: string;
      paragraphs: string[];
    };
    findingCare?: {
      heading: string;
      paragraphs: string[];
    };
    // Section fields for ankle sprain vs fracture
    ankleContent?: {
      difference: {
        heading: string;
        paragraphs: string[];
      };
      untreated: {
        heading: string;
        paragraphs: string[];
      };
      causes: {
        heading: string;
        paragraphs: string[];
      };
      symptoms: {
        heading: string;
        paragraphs: string[];
      };
      diagnosis: {
        heading: string;
        paragraphs: string[];
      };
      treatment: {
        heading: string;
        intro: string;
        sprain: {
          heading: string;
          paragraphs: string[];
        };
        fracture: {
          heading: string;
          paragraphs: string[];
        };
      };
      whenToSeeDoctor: {
        heading: string;
        paragraphs: string[];
      };
      recovery: {
        heading: string;
        paragraphs: string[];
      };
      conclusion: {
        heading: string;
        paragraphs: string[];
      };
    };
    medicalDisclaimer: string;
  };
}

export interface BlogCategory {
  id: string;
  label: string;
}

