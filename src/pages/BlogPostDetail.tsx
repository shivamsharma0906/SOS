import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  ChevronDown, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { AppointmentModal } from '../components/AppointmentModal';
import { blogPostsData, BlogPost } from '../data/blogs';
import { BUSINESS_INFO } from '../config/business';

// Subcomponent for Recovery Guide body
const RecoveryPostArticleBody: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { content } = post;
  return (
    <>
      {/* Lead Section */}
      <div className="blog-lead-section">
        {content.leadParagraphs.map((para, i) => (
          <p key={i} className="blog-lead-p">
            {para}
          </p>
        ))}
        <p className="blog-lead-p">
          Learn more about{' '}
          <Link to="/" className="blog-internal-link">
            SOS Speciality Orthopedic Clinic
          </Link>
          .
        </p>
      </div>

      {/* Section 1: What Happens Immediately After Robotic Knee Replacement Surgery? */}
      {content.whatHappensImmediately && (
        <section className="blog-content-section" aria-labelledby="section-immediately-after">
          <h2 id="section-immediately-after" className="blog-h2">
            {content.whatHappensImmediately.heading}
          </h2>
          {content.whatHappensImmediately.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}

      {/* Section 2: Week-by-Week Recovery Timeline After Robotic Knee Replacement Surgery */}
      {content.recoveryTimeline && (
        <section className="blog-content-section" aria-labelledby="section-recovery-timeline">
          <h2 id="section-recovery-timeline" className="blog-h2">
            {content.recoveryTimeline.heading}
          </h2>

          <div className="blog-recovery-timeline">
            {content.recoveryTimeline.subsections.map((sub, idx) => {
              const badges = ['24–48 Hours', 'Weeks 1–2', 'Weeks 3–6', 'Weeks 6–12+'];
              return (
                <div key={idx} className="blog-timeline-item">
                  <div className="blog-timeline-header-row">
                    <span className="blog-timeline-badge">{badges[idx] || `Phase ${idx + 1}`}</span>
                  </div>
                  <h3 className="blog-h3">{sub.heading}</h3>
                  {sub.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              );
            })}
          </div>

          {post.procedureImage && (
            <figure className="blog-hero-figure" style={{ marginTop: '2.5rem' }}>
              <img
                src={post.procedureImage.src}
                alt={post.procedureImage.alt}
                width={post.procedureImage.width}
                height={post.procedureImage.height}
                loading="lazy"
                className="blog-hero-img"
              />
            </figure>
          )}
        </section>
      )}

      {/* Section 3: Factors That Influence Recovery */}
      {content.factors && (
        <section className="blog-content-section" aria-labelledby="section-factors-recovery">
          <h2 id="section-factors-recovery" className="blog-h2">
            {content.factors.heading}
          </h2>
          <p>{content.factors.paragraphs[0]}</p>
          <p>{content.factors.paragraphs[1]}</p>
          <p>
            Your home environment and support system also influence recovery. Keep walking areas clear, remove loose rugs, wear stable footwear, and arrange assistance with transport and daily tasks when needed. Discuss recovery expectations with experienced{' '}
            <Link to="/doctors" className="blog-internal-link">
              robotic knee replacement surgeons
            </Link>{' '}
            and follow their advice on medication, wound care, walking aids, and follow-up appointments to support a safer, more comfortable recovery.
          </p>
        </section>
      )}

      {/* Section 4: Managing Pain, Swelling, and Physiotherapy */}
      {content.managingPainAndPhysio && (
        <section className="blog-content-section" aria-labelledby="section-pain-physio">
          <h2 id="section-pain-physio" className="blog-h2">
            {content.managingPainAndPhysio.heading}
          </h2>
          <p>{content.managingPainAndPhysio.paragraphs[0]}</p>
          <p>
            <Link to="/physiotherapy" className="blog-internal-link">
              Physiotherapy
            </Link>{' '}
            helps improve movement, flexibility, and strength. Your programme may include knee bends, thigh strengthening, balance exercises, and walking practice. Follow your physiotherapist’s instructions. Avoid forcing the knee or adding strenuous activities without approval. Rehabilitation supports recovery but cannot guarantee a particular result.
          </p>
        </section>
      )}

      {/* Section 5: When Should You Contact Your Doctor? */}
      {content.whenToContactDoctor && (
        <section className="blog-content-section" aria-labelledby="section-contact-doctor">
          <h2 id="section-contact-doctor" className="blog-h2">
            {content.whenToContactDoctor.heading}
          </h2>
          <p>{content.whenToContactDoctor.paragraphs[0]}</p>
          <p>
            Attend follow-up appointments so your surgeon can assess healing, movement, and progress. If you are unsure whether an activity is safe, ask your surgeon before attempting it. For appointment scheduling or further assistance with your treatment,{' '}
            <Link to="/contact" className="blog-internal-link">
              our team
            </Link>{' '}
            is available to help.
          </p>
        </section>
      )}

      {/* Section 6: Is Robotic Knee Replacement the Right Option? */}
      {content.isRoboticRightOption && (
        <section className="blog-content-section" aria-labelledby="section-right-option">
          <h2 id="section-right-option" className="blog-h2">
            {content.isRoboticRightOption.heading}
          </h2>
          <p>{content.isRoboticRightOption.paragraphs[0]}</p>
          <p>
            If you are considering robotic knee replacement in Mumbai, ask your surgeon whether it suits your condition and treatment goals. You can also consult{' '}
            <Link to="/doctors" className="blog-internal-link">
              experienced orthopaedic doctors
            </Link>{' '}
            to discuss your treatment options, benefits, limitations, alternatives, and risks before deciding. Before making a decision, consult experienced robotic knee replacement surgeons to understand your treatment options, and learn more about the{' '}
            <Link to="/blog/robotic-knee-replacement-surgery" className="blog-internal-link">
              robotic knee replacement procedure
            </Link>
            , including its potential benefits, limitations, and suitability for your condition.
          </p>

          {post.consultationImage && (
            <figure className="blog-hero-figure" style={{ marginTop: '2.5rem' }}>
              <img
                src={post.consultationImage.src}
                alt={post.consultationImage.alt}
                width={post.consultationImage.width}
                height={post.consultationImage.height}
                loading="lazy"
                className="blog-hero-img"
              />
            </figure>
          )}
        </section>
      )}
    </>
  );
};

// Subcomponent for original Surgery post body (100% backward compatible)
const SurgeryPostArticleBody: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { content } = post;
  return (
    <>
      {/* Lead Section (3 Intro Paragraphs) */}
      <div className="blog-lead-section">
        {content.leadParagraphs.map((para, i) => (
          <p key={i} className="blog-lead-p">
            {para}
          </p>
        ))}
      </div>

      {/* Section 1: What Is Robotic Knee Replacement Surgery? */}
      {content.whatIsRobotic && (
        <section className="blog-content-section" aria-labelledby="section-what-is-robotic">
          <h2 id="section-what-is-robotic" className="blog-h2">
            {content.whatIsRobotic.heading}
          </h2>
          {content.whatIsRobotic.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}

      {/* Section 2: Which Conditions May Require Knee Replacement Surgery? */}
      {content.conditions && (
        <section className="blog-content-section" aria-labelledby="section-conditions">
          <h2 id="section-conditions" className="blog-h2">
            {content.conditions.heading}
          </h2>
          <p>{content.conditions.intro}</p>

          {content.conditions.subsections.map((sub, i) => (
            <div key={i} className="blog-subsection">
              <h3 className="blog-h3">{sub.heading}</h3>
              {sub.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
            </div>
          ))}
        </section>
      )}

      {/* Section 3: How Does the Robotic Knee Replacement Procedure Work? */}
      {content.procedure && (
        <section className="blog-content-section" aria-labelledby="section-procedure">
          <h2 id="section-procedure" className="blog-h2">
            {content.procedure.heading}
          </h2>
          <p>{content.procedure.intro}</p>

          <ol className="blog-procedure-ol">
            {content.procedure.steps.map(step => (
              <li key={step.stepNumber} className="blog-procedure-li">
                <h3 className="blog-h3">
                  {step.stepNumber}. {step.title}
                </h3>
                {step.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
                {step.link && (
                  <p>
                    {step.link.preText}
                    <Link to={step.link.url} className="blog-internal-link">
                      {step.link.anchorText}
                    </Link>
                    {step.link.postText}
                  </p>
                )}
              </li>
            ))}
          </ol>

          {post.procedureImage && (
            <figure className="blog-hero-figure" style={{ marginTop: '2rem' }}>
              <img
                src={post.procedureImage.src}
                alt={post.procedureImage.alt}
                width={post.procedureImage.width}
                height={post.procedureImage.height}
                loading="lazy"
                className="blog-hero-img"
              />
            </figure>
          )}
        </section>
      )}

      {/* Section 4: What Are the Potential Benefits of Robotic Knee Replacement? */}
      {content.benefits && (
        <section className="blog-content-section" aria-labelledby="section-benefits">
          <h2 id="section-benefits" className="blog-h2">
            {content.benefits.heading}
          </h2>
          <p>{content.benefits.intro}</p>

          <ul className="blog-benefits-ul">
            {content.benefits.items.map((item, i) => (
              <li key={i} className="blog-benefits-li">
                <strong>{item.label}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <p>{content.benefits.conclusion}</p>
        </section>
      )}

      {/* Section 5: Robotic vs Conventional Knee Replacement: What Is the Difference? */}
      {content.roboticVsConventional && (
        <section className="blog-content-section" aria-labelledby="section-difference">
          <h2 id="section-difference" className="blog-h2">
            {content.roboticVsConventional.heading}
          </h2>
          {content.roboticVsConventional.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}

      {/* Section 6: How Long Does Recovery Take After Robotic Knee Replacement Surgery? */}
      {content.recovery && (
        <section className="blog-content-section" aria-labelledby="section-recovery">
          <h2 id="section-recovery" className="blog-h2">
            {content.recovery.heading}
          </h2>
          <p>{content.recovery.intro}</p>

          <div className="blog-subsection">
            <h3 className="blog-h3">{content.recovery.earlyRecovery.heading}</h3>
            {content.recovery.earlyRecovery.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="blog-subsection">
            <h3 className="blog-h3">{content.recovery.physiotherapy.heading}</h3>
            {content.recovery.physiotherapy.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              {content.recovery.physiotherapy.link.preText}
              <Link to={content.recovery.physiotherapy.link.url} className="blog-internal-link">
                {content.recovery.physiotherapy.link.anchorText}
              </Link>
              {content.recovery.physiotherapy.link.postText}
            </p>
          </div>

          <div className="blog-subsection">
            <h3 className="blog-h3">{content.recovery.dailyActivities.heading}</h3>
            {content.recovery.dailyActivities.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* Section 7: What Are the Risks and Disadvantages of Robotic Knee Replacement? */}
      {content.risks && (
        <section className="blog-content-section" aria-labelledby="section-risks">
          <h2 id="section-risks" className="blog-h2">
            {content.risks.heading}
          </h2>
          {content.risks.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}

      {/* Section 8: What Is the Cost of Robotic Knee Replacement? */}
      {content.cost && (
        <section className="blog-content-section" aria-labelledby="section-cost">
          <h2 id="section-cost" className="blog-h2">
            {content.cost.heading}
          </h2>
          {content.cost.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}

      {/* Section 9: Making an Informed Decision About Knee Replacement */}
      {content.informedDecision && (
        <section className="blog-content-section" aria-labelledby="section-decision">
          <h2 id="section-decision" className="blog-h2">
            {content.informedDecision.heading}
          </h2>
          {content.informedDecision.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            {content.informedDecision.link.preText}
            <Link to={content.informedDecision.link.url} className="blog-internal-link">
              {content.informedDecision.link.anchorText}
            </Link>
            {content.informedDecision.link.postText}
          </p>
        </section>
      )}
    </>
  );
};

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // All FAQs closed by default
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  // Find post by slug
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    // If slug doesn't match, redirect to /blog
    return <Navigate to="/blog" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const { content, seo, heroImage } = post;

  // JSON-LD Structured Data
  const structuredData = [
    // 1. MedicalWebPage / Article Schema
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${seo.canonicalUrl}#webpage`,
      "url": seo.canonicalUrl,
      "name": seo.metaTitle,
      "headline": post.h1,
      "description": seo.metaDescription,
      "image": seo.ogImage,
      "inLanguage": "en-IN",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": seo.canonicalUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name,
        "url": BUSINESS_INFO.website,
        "logo": {
          "@type": "ImageObject",
          "url": `${BUSINESS_INFO.website}/assets/video-poster.jpg`
        }
      },
      "author": {
        "@type": "Person",
        "name": seo.authorNamePlaceholder
      },
      "datePublished": seo.datePublished,
      "dateModified": seo.dateModified
    },
    // 2. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${seo.canonicalUrl}#faq`,
      "mainEntity": content.faqs.items.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    // 3. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${seo.canonicalUrl}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BUSINESS_INFO.website}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${BUSINESS_INFO.website}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": seo.canonicalUrl
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title={seo.metaTitle}
        description={seo.metaDescription}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        ogType="article"
        ogTitle={seo.metaTitle}
        ogDescription={seo.metaDescription}
        ogUrl={seo.canonicalUrl}
        ogImage={seo.ogImage}
        twitterCard="summary_large_image"
        twitterTitle={seo.metaTitle}
        twitterDescription={seo.metaDescription}
        twitterImage={seo.ogImage}
        structuredData={structuredData}
      />

      <div className="blog-article-page-wrap">
        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="blog-breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
                <ChevronRight size={13} aria-hidden="true" className="breadcrumb-separator" />
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog">Blog</Link>
                <ChevronRight size={13} aria-hidden="true" className="breadcrumb-separator" />
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span>{post.title}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Semantic Article */}
        <article className="blog-article-root" itemScope itemType="https://schema.org/MedicalWebPage">
          <div className="container">
            <div className="blog-article-layout-grid">
              
              {/* Main Reading Column (Max ~68-72ch) */}
              <div className="blog-article-main-col">
                <header className="blog-article-header">
                  {/* Category Pill & Verification */}
                  <div className="blog-header-badge-row">
                    <span className="blog-category-tag">
                      {post.categoryLabel}
                    </span>
                    <span className="blog-editorial-badge">
                      <ShieldCheck size={14} color="var(--blue-brand)" />
                      <span>Medically Reviewed</span>
                    </span>
                  </div>

                  {/* Single Exact H1 */}
                  <h1 className="blog-article-h1" itemProp="headline">
                    {post.h1}
                  </h1>

                  {/* Metadata Bar: Author & Last Updated */}
                  <div className="blog-article-meta-bar">
                    <div className="blog-meta-item">
                      <FileText size={15} color="var(--blue-brand)" />
                      <span>Author: <strong className="meta-author-name">{post.author.name}</strong></span>
                    </div>
                    <span className="meta-dot">&bull;</span>
                    <div className="blog-meta-item">
                      <Calendar size={15} color="var(--text-light)" />
                      <span>Last updated: <time dateTime={post.seo.dateModified}>{post.lastUpdated}</time></span>
                    </div>
                    <span className="meta-dot">&bull;</span>
                    <div className="blog-meta-item">
                      <Clock size={15} color="var(--text-light)" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Hero Image */}
                  <figure className="blog-hero-figure">
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      width={heroImage.width}
                      height={heroImage.height}
                      loading="eager"
                      // @ts-expect-error fetchpriority attribute is supported in modern browsers
                      fetchpriority="high"
                      className="blog-hero-img"
                    />
                  </figure>
                </header>

                {/* Article Body Content */}
                <div className="blog-article-body">
                  {post.slug === 'robotic-knee-replacement-recovery-mumbai' ? (
                    <RecoveryPostArticleBody post={post} />
                  ) : (
                    <SurgeryPostArticleBody post={post} />
                  )}

                  {/* Frequently Asked Questions (Accessible Accordion) */}
                  <section className="blog-content-section blog-faq-section" aria-labelledby="section-faqs">
                    <h2 id="section-faqs" className="blog-h2">
                      {content.faqs.heading}
                    </h2>
                    <div className="blog-faq-accordion">
                      {content.faqs.items.map((faq, idx) => {
                        const isOpen = openFaqs.includes(idx);
                        return (
                          <div key={idx} className={`blog-faq-item ${isOpen ? 'active' : ''}`}>
                            <button
                              type="button"
                              className="blog-faq-trigger"
                              aria-expanded={isOpen}
                              aria-controls={`faq-answer-${idx}`}
                              id={`faq-question-${idx}`}
                              onClick={() => toggleFaq(idx)}
                            >
                              <span className="blog-faq-question-text">{faq.question}</span>
                              <ChevronDown
                                size={18}
                                className={`faq-chevron ${isOpen ? 'open' : ''}`}
                                aria-hidden="true"
                              />
                            </button>
                            {/* Answer remains in DOM for crawlers, animated with CSS height/opacity */}
                            <div
                              id={`faq-answer-${idx}`}
                              role="region"
                              aria-labelledby={`faq-question-${idx}`}
                              className={`blog-faq-panel ${isOpen ? 'expanded' : 'collapsed'}`}
                            >
                              <div className="blog-faq-answer-inner">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Medical Disclaimer */}
                  <aside className="blog-medical-disclaimer" role="note" aria-label="Medical Disclaimer">
                    <AlertCircle size={20} className="disclaimer-icon" aria-hidden="true" />
                    <div>
                      <strong className="disclaimer-heading">Medical Disclaimer</strong>
                      <p className="disclaimer-text">{content.medicalDisclaimer}</p>
                    </div>
                  </aside>

                  {/* Related / Next Guide Box */}
                  <div className="blog-related-guide-box">
                    <div className="blog-related-guide-content">
                      {post.slug === 'robotic-knee-replacement-recovery-mumbai' ? (
                        <>
                          <h4>Related Guide: What Is Robotic Knee Replacement Surgery?</h4>
                          <p>Discover surgical steps, computer-guided precision, advantages, risks, and implant planning.</p>
                        </>
                      ) : (
                        <>
                          <h4>Next Guide: Robotic Knee Replacement Recovery Timeline in Mumbai</h4>
                          <p>Explore week-by-week recovery milestones, safe movement, pain management, and physiotherapy tips.</p>
                        </>
                      )}
                    </div>
                    <Link
                      to={
                        post.slug === 'robotic-knee-replacement-recovery-mumbai'
                          ? '/blog/robotic-knee-replacement-surgery'
                          : '/blog/robotic-knee-replacement-recovery-mumbai'
                      }
                      className="btn btn-secondary btn-sm"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Consultation Booking CTA Card */}
                  <div className="blog-cta-box">
                    <div className="blog-cta-content">
                      <span className="blog-cta-eyebrow">ORTHOPEDIC CONSULTATION & OPD</span>
                      <h3 className="blog-cta-title">Concerned About Knee Pain or Considering Replacement?</h3>
                      <p className="blog-cta-desc">
                        Schedule a comprehensive clinical assessment with our senior orthopedic surgeons across our Mumbai centres in Kandivali, Borivali, Malad, and Goregaon.
                      </p>
                      <div className="blog-cta-buttons">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          className="btn btn-primary btn-md"
                        >
                          <Calendar size={16} aria-hidden="true" />
                          <span>Book an Appointment</span>
                        </button>
                        <Link
                          to="/contact"
                          className="btn btn-secondary btn-md"
                        >
                          <span>Contact SOS Clinic</span>
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Sidebar Column: Sticky Clinic Info & Quick Actions */}
              <aside className="blog-article-sidebar" aria-label="Article Sidebar">
                <div className="sticky-sidebar-inner">
                  {/* Clinic Card */}
                  <div className="sidebar-clinic-card">
                    <span className="sidebar-pill">SOS Speciality Clinic</span>
                    <h3 className="sidebar-clinic-name">Joint Replacement Desk</h3>
                    <p className="sidebar-clinic-text">
                      Consultant orthopedic surgeon OPDs, robotic knee replacements, joint preservation therapies, and rapid-recovery rehabilitation across Mumbai.
                    </p>
                    <div className="sidebar-checklist">
                      <div className="sidebar-check-item">
                        <CheckCircle2 size={15} color="#10b981" />
                        <span>Zero Wait-Time OPD Sessions</span>
                      </div>
                      <div className="sidebar-check-item">
                        <CheckCircle2 size={15} color="#10b981" />
                        <span>Sub-millimeter Robotic Precision</span>
                      </div>
                      <div className="sidebar-check-item">
                        <CheckCircle2 size={15} color="#10b981" />
                        <span>Surgeon-Guided Rehabilitation</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="btn btn-primary btn-sm sidebar-cta-btn"
                    >
                      <Calendar size={14} />
                      <span>Book Consultation</span>
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="sidebar-phone-link"
                    >
                      <Phone size={14} color="var(--blue-brand)" />
                      <span>Helpline: <strong>{BUSINESS_INFO.phone}</strong></span>
                    </a>
                  </div>

                  {/* Related Services Links */}
                  <div className="sidebar-links-card">
                    <h4 className="sidebar-links-title">Related SOS Guides & Services</h4>
                    <ul className="sidebar-links-list">
                      <li>
                        <Link
                          to={
                            post.slug === 'robotic-knee-replacement-recovery-mumbai'
                              ? '/blog/robotic-knee-replacement-surgery'
                              : '/blog/robotic-knee-replacement-recovery-mumbai'
                          }
                          className="sidebar-nav-link"
                        >
                          <span>
                            {post.slug === 'robotic-knee-replacement-recovery-mumbai'
                              ? 'What Is Robotic Knee Surgery?'
                              : 'Knee Recovery Timeline Guide'}
                          </span>
                          <ChevronRight size={14} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/joint-replacement" className="sidebar-nav-link">
                          <span>Joint Replacement Services</span>
                          <ChevronRight size={14} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/physiotherapy" className="sidebar-nav-link">
                          <span>Physiotherapy & Rehabilitation</span>
                          <ChevronRight size={14} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/doctors" className="sidebar-nav-link">
                          <span>Consultant Orthopedic Surgeons</span>
                          <ChevronRight size={14} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/centres" className="sidebar-nav-link">
                          <span>SOS Mumbai Clinic Centres</span>
                          <ChevronRight size={14} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </article>
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Joint Replacement Care"
      />
    </>
  );
};
