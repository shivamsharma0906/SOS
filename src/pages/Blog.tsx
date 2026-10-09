import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  BookOpen, 
  Share2, 
  Check, 
  ArrowRight, 
  Stethoscope, 
  AlertTriangle, 
  Lightbulb, 
  Info, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  ChevronDown, 
  X, 
  HelpCircle,
  ShieldCheck,
  Mail
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SEOHead } from '../components/SEOHead';
import { AppointmentModal } from '../components/AppointmentModal';
import { blogPostsData, blogCategories, topicCategories, BlogPost } from '../data/blogs';
import { BUSINESS_INFO } from '../config/business';
import { doctorsData } from '../data/doctors';

export const Blog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDoctorFilter, setSelectedDoctorFilter] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Sync active article with URL query parameter for shareable direct links
  useEffect(() => {
    const articleSlug = searchParams.get('article');
    if (articleSlug) {
      const found = blogPostsData.find(b => b.slug === articleSlug);
      if (found) {
        setActiveArticle(found);
      }
    }
  }, [searchParams]);

  const handleOpenArticle = (article: BlogPost) => {
    setActiveArticle(article);
    setSearchParams({ article: article.slug });
    setReadingProgress(0);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    setSearchParams({});
  };

  const handleBookWithDoctor = (doctorName: string) => {
    setBookingDoctor(doctorName);
    setIsAppointmentOpen(true);
  };

  const handleCopyLink = (slug: string) => {
    const url = `${window.location.origin}/blog?article=${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleShareWhatsApp = (article: BlogPost) => {
    const url = `${window.location.origin}/blog?article=${article.slug}`;
    const text = encodeURIComponent(`Orthopedic Guide from SOS Speciality Clinic: "${article.title}" by ${article.author.name} - ${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  // Filtered Articles based on Category, Search query, and Doctor filter
  const filteredArticles = useMemo(() => {
    return blogPostsData.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesDoctor = !selectedDoctorFilter || post.author.name.toLowerCase().includes(selectedDoctorFilter.toLowerCase());
      
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery = !query || 
        post.title.toLowerCase().includes(query) ||
        post.subtitle.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesDoctor && matchesQuery;
    });
  }, [selectedCategory, selectedDoctorFilter, searchQuery]);

  // Lead flagship story
  const featuredArticle = useMemo(() => {
    return blogPostsData.find(p => p.featured) || blogPostsData[0];
  }, []);

  // Quick Reads list (next 4 articles excluding featured)
  const quickReads = useMemo(() => {
    return blogPostsData.filter(p => p.id !== featuredArticle.id).slice(0, 4);
  }, [featuredArticle]);

  // Update scroll reading progress in modal
  const handleModalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const totalHeight = target.scrollHeight - target.clientHeight;
    if (totalHeight > 0) {
      const progress = Math.min(100, Math.round((target.scrollTop / totalHeight) * 100));
      setReadingProgress(progress);
    }
  };

  return (
    <div className="editorial-blog-page">
      <SEOHead
        title="Orthopedic Blog & Patient Recovery Guides | SOS Speciality Clinic Mumbai"
        description="Evidence-based advice, recovery guides, and practical orthopedic insights from our specialist doctors at SOS Speciality Clinic, Mumbai."
        canonicalUrl={`${BUSINESS_INFO.website}/blog`}
        keywords="Orthopedic blog Mumbai, Knee replacement guide, Sciatica relief non surgical, Fracture care first aid, Sports arthroscopy recovery, SOS Ortho Clinic"
      />

      {/* ── 1. Hero Section (Two-Column Editorial Composition) ── */}
      <section className="editorial-hero-section">
        <div className="container">
          <div className="editorial-hero-grid">
            
            {/* Left Column: Label, Serif Headline, Subtitle, Search, Topic Pills */}
            <div className="editorial-hero-content">
              <span className="editorial-eyebrow">
                ORTHOPEDIC BLOG
              </span>

              <h1 className="editorial-hero-heading">
                Expert Insights for a Stronger, Healthier Tomorrow
              </h1>

              <p className="editorial-hero-subhead">
                Evidence-based advice, recovery guides, and practical orthopedic insights from our specialist doctors at SOS Speciality Clinic, Mumbai.
              </p>

              {/* Search Bar */}
              <div className="editorial-search-container">
                <Search size={18} className="search-icon-left" />
                <input
                  type="text"
                  placeholder="Search articles, symptoms, surgeries, or doctor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="editorial-search-box"
                  aria-label="Search orthopedic articles"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="search-reset-button"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Compact Topic Filter Pills */}
              <div className="hero-filter-pills-row">
                <span className="filter-pills-label">Popular Topics:</span>
                <div className="filter-pills-list">
                  {blogCategories.map(cat => {
                    const isActive = selectedCategory === cat.id && !searchQuery;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSearchQuery('');
                          setSelectedDoctorFilter(null);
                        }}
                        className={`hero-topic-pill ${isActive ? 'active' : ''}`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: High-Quality Orthopedic Healthcare Photograph */}
            <div className="editorial-hero-image-wrap">
              <img 
                src="/assets/blog-hero.jpg" 
                alt="Orthopedic doctor examining patient knee in modern consultation room"
                className="editorial-hero-image"
                loading="eager"
              />
              <div className="image-caption-strip">
                <Stethoscope size={14} color="var(--blue-brand)" />
                <span>Specialist Musculoskeletal Care & Patient Education &bull; SOS Mumbai</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Featured Article and Quick Reads ── */}
      <section className="featured-quickreads-section">
        <div className="container">
          <div className="featured-quickreads-grid">
            
            {/* Left: Featured Article (Approx 70% width) */}
            <div className="featured-article-card">
              <div className="featured-card-grid">
                
                {/* Large Orthopedic Image on Left */}
                <div className="featured-image-holder">
                  <img 
                    src={featuredArticle.imageUrl} 
                    alt={featuredArticle.title}
                    className="featured-cover-image"
                  />
                  <span className="featured-badge-overlay">
                    Featured Guide
                  </span>
                </div>

                {/* Article Info on Right */}
                <div className="featured-details-body">
                  <div className="featured-category-row">
                    <span className="editorial-category-label">
                      {featuredArticle.categoryLabel}
                    </span>
                    <span className="meta-dot">&bull;</span>
                    <span className="meta-read-time">
                      <Clock size={13} /> {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 
                    className="featured-article-title"
                    onClick={() => handleOpenArticle(featuredArticle)}
                  >
                    {featuredArticle.title}
                  </h2>

                  <p className="featured-article-excerpt">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Author Strip */}
                  <div className="featured-author-strip">
                    <img 
                      src={featuredArticle.author.photoUrl} 
                      alt={featuredArticle.author.name}
                      className="featured-author-thumb"
                    />
                    <div className="featured-author-info">
                      <div className="featured-author-name">{featuredArticle.author.name}</div>
                      <div className="featured-author-title">{featuredArticle.author.title}</div>
                    </div>
                  </div>

                  <div className="featured-action-row">
                    <button
                      onClick={() => handleOpenArticle(featuredArticle)}
                      className="read-full-article-btn"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={16} />
                    </button>
                    <span className="featured-publish-date">{featuredArticle.publishDate}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Quick Reads List (Approx 30% width) */}
            <div className="quick-reads-panel">
              <div className="quick-reads-header">
                <h3 className="quick-reads-title">Quick Reads</h3>
                <span className="quick-reads-subtitle">Essential clinical guides</span>
              </div>

              <div className="quick-reads-list">
                {quickReads.map((article, idx) => (
                  <div 
                    key={article.id} 
                    className="quick-read-item"
                    onClick={() => handleOpenArticle(article)}
                  >
                    <span className="quick-read-number">0{idx + 1}</span>
                    <div className="quick-read-text-box">
                      <span className="quick-read-category">{article.categoryLabel}</span>
                      <h4 className="quick-read-heading">{article.title}</h4>
                      <span className="quick-read-time">{article.readTime}</span>
                    </div>
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="quick-read-thumb"
                    />
                  </div>
                ))}
              </div>

              <div className="quick-reads-footer">
                <button
                  onClick={() => {
                    const elem = document.getElementById('all-articles-section');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="quick-reads-view-all"
                >
                  <span>View All Articles</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Explore by Topic ── */}
      <section className="explore-topics-section">
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="section-eyebrow-tag">SPECIALTY ARCHIVES</span>
              <h2 className="section-heading-primary">Explore by Topic</h2>
            </div>
            <p className="section-caption-text">
              Browse surgical insights and clinical guidance categorized by orthopedic sub-specialty.
            </p>
          </div>

          <div className="topics-cards-grid">
            {topicCategories.map(topic => {
              const count = blogPostsData.filter(b => b.category === topic.id).length;

              return (
                <div 
                  key={topic.id}
                  className="topic-image-card"
                  onClick={() => {
                    setSelectedCategory(topic.id);
                    setSearchQuery('');
                    setSelectedDoctorFilter(null);
                    const elem = document.getElementById('all-articles-section');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="topic-card-image-wrap">
                    <img src={topic.imageUrl} alt={topic.name} className="topic-card-img" />
                    <span className="topic-card-count">{count} {count === 1 ? 'Article' : 'Articles'}</span>
                  </div>

                  <div className="topic-card-body">
                    <h3 className="topic-card-name">{topic.name}</h3>
                    <p className="topic-card-desc">{topic.description}</p>
                    <div className="topic-card-action">
                      <span>Explore Topic</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. All Articles Directory & Filter View ── */}
      <section className="all-articles-directory-section" id="all-articles-section">
        <div className="container">
          <div className="directory-header-bar">
            <div>
              <h2 className="directory-title">
                {selectedCategory === 'all' && !searchQuery && !selectedDoctorFilter
                  ? 'All Orthopedic Articles'
                  : 'Filtered Articles'}
              </h2>
              <p className="directory-count-text">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'all' && ` in ${blogCategories.find(c => c.id === selectedCategory)?.label}`}
                {selectedDoctorFilter && ` authored by ${selectedDoctorFilter}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {(selectedCategory !== 'all' || searchQuery || selectedDoctorFilter) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setSelectedDoctorFilter(null);
                }}
                className="clear-filters-btn"
              >
                Clear Filters <X size={14} />
              </button>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="empty-results-card">
              <HelpCircle size={44} color="var(--blue-brand)" style={{ margin: '0 auto 1rem auto' }} />
              <h3>No articles found</h3>
              <p>We could not find any guides matching your search criteria. Try a different term or clear filters.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSelectedDoctorFilter(null); }}
                className="btn btn-primary btn-sm"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="editorial-articles-grid">
              {filteredArticles.map(article => (
                <article 
                  key={article.id} 
                  className="editorial-article-card"
                >
                  <div className="article-card-image-box">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="article-card-img"
                    />
                    <span className="article-card-tag">{article.categoryLabel}</span>
                  </div>

                  <div className="article-card-content">
                    <div className="article-card-meta">
                      <Clock size={13} color="var(--text-light)" />
                      <span>{article.readTime}</span>
                      <span className="meta-dot">&bull;</span>
                      <span>{article.publishDate}</span>
                    </div>

                    <h3 
                      className="article-card-title"
                      onClick={() => handleOpenArticle(article)}
                    >
                      {article.title}
                    </h3>

                    <p className="article-card-excerpt">
                      {article.excerpt}
                    </p>

                    <div className="article-card-footer">
                      <div className="article-card-author">
                        <img 
                          src={article.author.photoUrl} 
                          alt={article.author.name} 
                          className="author-avatar-tiny"
                        />
                        <span className="author-name-tiny">{article.author.name}</span>
                      </div>

                      <button
                        onClick={() => handleOpenArticle(article)}
                        className="article-read-link"
                        aria-label={`Read ${article.title}`}
                      >
                        <span>Read Article</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── 5. Doctor-Contributed Articles ── */}
      <section className="doctors-contributed-section">
        <div className="container">
          <div className="section-title-row text-center">
            <span className="section-eyebrow-tag">SURGICAL EDITORIAL CONTRIBUTORS</span>
            <h2 className="section-heading-primary">Clinical Guidance by Senior Orthopedic Surgeons</h2>
            <p className="section-caption-text mx-auto" style={{ maxWidth: '680px' }}>
              All articles are written and medically reviewed by our verified orthopedic specialists who lead our clinic network in Mumbai.
            </p>
          </div>

          <div className="doctors-cards-grid">
            {doctorsData.map(doc => (
              <div key={doc.id} className="editorial-doctor-card">
                <div className="doctor-header-row">
                  <img 
                    src={doc.photoUrl} 
                    alt={doc.name} 
                    className="doctor-portrait-img"
                  />
                  <div>
                    <span className="doctor-experience-tag">{doc.experienceYears}+ Years Clinical Experience</span>
                    <h3 className="doctor-card-name">{doc.name}</h3>
                    <div className="doctor-card-title">{doc.title}</div>
                  </div>
                </div>

                <div className="doctor-credentials-strip">
                  <strong>Qualifications:</strong> {doc.qualifications}
                </div>

                <p className="doctor-card-bio">
                  {doc.bio}
                </p>

                <div className="doctor-card-actions">
                  <button
                    onClick={() => {
                      setSelectedDoctorFilter(doc.name);
                      const elem = document.getElementById('all-articles-section');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    View Articles
                  </button>

                  <button
                    onClick={() => handleBookWithDoctor(doc.name)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Consultation Banner ── */}
      <section className="editorial-consultation-banner">
        <div className="container">
          <div className="consultation-banner-wrapper">
            <div className="consultation-banner-content">
              <span className="consultation-eyebrow">
                PERSONALIZED CLINICAL EVALUATION
              </span>
              <h2 className="consultation-heading">
                Consult Our Orthopedic Specialists
              </h2>
              <p className="consultation-copy">
                Schedule an in-clinic OPD consultation across our Mumbai centres or request an independent second opinion on your MRI, CT, and X-ray reports with our senior surgical team.
              </p>

              <div className="consultation-actions-row">
                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="btn btn-primary btn-lg"
                  style={{ gap: '0.5rem', backgroundColor: '#ffffff', color: 'var(--navy-primary)' }}
                >
                  <Calendar size={18} /> Book an Appointment
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="btn btn-secondary btn-lg"
                  style={{ gap: '0.5rem', borderColor: 'rgba(255, 255, 255, 0.4)', color: '#ffffff', backgroundColor: 'transparent' }}
                >
                  <Phone size={18} /> Call Now: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="consultation-banner-image-wrap">
              <img 
                src="/assets/centre-kandivali.webp" 
                alt="SOS Speciality Orthopedic Clinic Mumbai" 
                className="consultation-clinic-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Newsletter Section ── */}
      <section className="editorial-newsletter-section">
        <div className="container">
          <div className="newsletter-card-clean">
            <div className="newsletter-info">
              <div className="newsletter-icon-circle">
                <Mail size={22} color="var(--blue-brand)" />
              </div>
              <div>
                <h3 className="newsletter-heading">Get the Latest Orthopedic Insights</h3>
                <p className="newsletter-desc">
                  Receive evidence-based joint care tips, recovery guides, and surgical updates directly from our specialists.
                </p>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              {newsletterSubscribed ? (
                <div className="newsletter-success-notice">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>Thank you. You have been subscribed to SOS clinical updates.</span>
                </div>
              ) : (
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="newsletter-email-field"
                    aria-label="Your email address"
                  />
                  <button type="submit" className="btn btn-primary btn-md" style={{ whiteSpace: 'nowrap' }}>
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── 8. Clinical Guidance FAQs ── */}
      <section className="editorial-faqs-section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-title-row text-center">
            <span className="section-eyebrow-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-heading-primary">Patient Guidance & FAQ</h2>
            <p className="section-caption-text mx-auto" style={{ maxWidth: '640px' }}>
              Common clinical questions answered directly by our orthopedic surgeons.
            </p>
          </div>

          <div className="faqs-accordion-list">
            {[
              {
                q: 'When should I see an orthopedic surgeon instead of taking painkillers?',
                a: 'If joint, back, or neck pain persists for more than 7–10 days, interferes with night sleep, causes numbness or pins-and-needles down the arm/leg, or is accompanied by swelling or difficulty bearing weight, seek an orthopedic evaluation immediately. Masking pain with over-the-counter painkillers can allow joint cartilage wear or nerve impingement to progress unchecked.'
              },
              {
                q: 'Can I get a digital X-ray done immediately during my consultation?',
                a: 'Yes. SOS Speciality Orthopedic Clinic is equipped with high-resolution in-house digital radiography. There are zero outside diagnostic referrals or waiting queues—your X-ray is captured and reviewed by the consulting surgeon on the spot within minutes.'
              },
              {
                q: 'Does robotic knee surgery mean a robot operates without the doctor?',
                a: 'No. The surgery is 100% planned and performed by the orthopedic surgeon. The robotic arm provides haptic feedback, computerized 3D navigation, and sub-millimeter cutting accuracy to match the patient’s exact anatomy, safeguarding surrounding ligaments.'
              },
              {
                q: 'How does 24/7 Doorstep Home X-Ray work for seniors who cannot travel?',
                a: 'SOS operates mobile digital radiography vans across Western Mumbai (Borivali to Andheri). Our technician arrives at your home within 20–30 minutes, takes the X-ray right on the patient’s bed with zero painful transfers, and transmits the digital image directly to our orthopedic surgeons.'
              },
              {
                q: 'Can I consult SOS surgeons for a second opinion on spine or joint surgery?',
                a: 'Absolutely. We encourage patients to bring their existing MRI, CT, and X-ray reports. Our surgeons focus on joint preservation and non-surgical conservative pathways whenever clinically viable.'
              }
            ].map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div key={index} className="editorial-faq-card">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="faq-toggle-button"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`faq-arrow-icon ${isOpen ? 'open' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-response-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. Distraction-Free Longform Article Reader Modal ── */}
      {activeArticle && (
        <div 
          className="editorial-reader-overlay"
          onClick={handleCloseArticle}
        >
          <div 
            className="editorial-reader-modal"
            onClick={e => e.stopPropagation()}
            onScroll={handleModalScroll}
          >
            {/* Top Reading Progress Bar */}
            <div className="modal-progress-bar-wrap">
              <div 
                className="modal-progress-bar"
                style={{ width: `${readingProgress}%` }}
              />
            </div>

            {/* Modal Top Header */}
            <div className="modal-top-bar">
              <div className="modal-top-left">
                <span className="modal-category-tag">
                  {activeArticle.categoryLabel}
                </span>
                <span className="meta-read-time">
                  <Clock size={13} /> {activeArticle.readTime}
                </span>
              </div>

              <div className="modal-top-right">
                <button
                  onClick={() => handleShareWhatsApp(activeArticle)}
                  className="btn btn-whatsapp btn-sm"
                  style={{ padding: '0.35rem 0.7rem', fontSize: '0.78rem', gap: '0.35rem' }}
                >
                  <FaWhatsapp size={14} /> Share
                </button>

                <button
                  onClick={() => handleCopyLink(activeArticle.slug)}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.35rem 0.7rem', fontSize: '0.78rem', gap: '0.35rem' }}
                >
                  {copiedLink ? <Check size={14} color="#10b981" /> : <Share2 size={14} />}
                  <span>{copiedLink ? 'Copied' : 'Copy Link'}</span>
                </button>

                <button
                  onClick={handleCloseArticle}
                  className="modal-close-icon-btn"
                  aria-label="Close article"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Article Body */}
            <div className="modal-content-container">
              {/* Medically Reviewed Seal */}
              <div className="reader-medical-seal">
                <ShieldCheck size={15} color="#10b981" />
                <span>Medically Reviewed by SOS Orthopedic Surgical Review Board</span>
              </div>

              <h1 className="modal-article-headline">
                {activeArticle.title}
              </h1>

              <p className="modal-article-subhead">
                {activeArticle.subtitle}
              </p>

              {/* Author Header Card */}
              <div className="modal-author-strip">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <img 
                    src={activeArticle.author.photoUrl} 
                    alt={activeArticle.author.name}
                    className="modal-author-avatar"
                  />
                  <div>
                    <div className="modal-author-name">{activeArticle.author.name}</div>
                    <div className="modal-author-role">{activeArticle.author.title}</div>
                    <div className="modal-author-degree">{activeArticle.author.qualifications}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleBookWithDoctor(activeArticle.author.name)}
                  className="btn btn-primary btn-sm"
                  style={{ gap: '0.35rem', fontSize: '0.78rem' }}
                >
                  <Calendar size={13} /> Consult Author
                </button>
              </div>

              {/* Featured Image inside Article Reader */}
              <div className="modal-featured-image-box">
                <img 
                  src={activeArticle.imageUrl} 
                  alt={activeArticle.title}
                  className="modal-featured-image"
                />
              </div>

              {/* Lead Paragraph */}
              <div className="modal-lead-paragraph">
                {activeArticle.content.lead}
              </div>

              {/* Table of Contents */}
              <div className="modal-toc-box">
                <div className="modal-toc-heading">IN THIS ARTICLE:</div>
                <div className="modal-toc-list">
                  {activeArticle.tableOfContents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className="modal-toc-link"
                      onClick={(e) => {
                        e.preventDefault();
                        const elem = document.getElementById(item.id);
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="toc-index">0{idx + 1}.</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Article Sections */}
              <div className="modal-sections-flow">
                {activeArticle.content.sections.map((section) => (
                  <div key={section.id} id={section.id} className="modal-section-item">
                    <h2 className="modal-section-heading">{section.heading}</h2>

                    <div className="modal-section-paragraphs">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {section.bulletPoints && (
                      <ul className="modal-bullet-list">
                        {section.bulletPoints.map((bp, bIdx) => (
                          <li key={bIdx}>
                            <CheckCircle2 size={16} color="var(--blue-brand)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className={`modal-callout-card ${section.callout.type}`}>
                        {section.callout.type === 'warning' && <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />}
                        {section.callout.type === 'tip' && <Lightbulb size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />}
                        {section.callout.type === 'clinical-note' && <Info size={18} color="var(--blue-brand)" style={{ flexShrink: 0, marginTop: '2px' }} />}

                        <div>
                          <div className="callout-card-title">{section.callout.title}</div>
                          <div className="callout-card-text">{section.callout.text}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="modal-takeaways-card">
                <div className="takeaways-card-header">
                  <CheckCircle2 size={20} color="#10b981" />
                  <h3>Summary & Key Clinical Takeaways</h3>
                </div>
                <ul className="takeaways-bullets">
                  {activeArticle.content.keyTakeaways.map((point, idx) => (
                    <li key={idx}>
                      <span className="takeaway-check">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doctor Consultation Box */}
              <div className="modal-bottom-consult-box">
                <div>
                  <div className="bottom-consult-eyebrow">ORTHOPEDIC CONSULTATION</div>
                  <h4>Have questions about {activeArticle.categoryLabel.toLowerCase()}?</h4>
                  <p>Consult with {activeArticle.author.name} at our Mumbai centres in Kandivali, Borivali, Malad, or Goregaon.</p>
                </div>

                <div className="bottom-consult-actions">
                  <button
                    onClick={() => handleBookWithDoctor(activeArticle.author.name)}
                    className="btn btn-primary btn-md"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <Calendar size={15} /> Book OPD Visit
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="btn btn-secondary btn-md"
                    style={{ whiteSpace: 'nowrap', backgroundColor: '#ffffff', color: 'var(--navy-primary)' }}
                  >
                    <Phone size={15} color="var(--blue-brand)" /> {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── 10. Appointment Modal ── */}
      <AppointmentModal 
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultDoctor={bookingDoctor}
        defaultService={activeArticle ? activeArticle.categoryLabel : ''}
      />

      {/* ── Scoped Styling (Using ONLY Original Brand Identity) ── */}
      <style>{`
        .editorial-blog-page {
          background-color: #ffffff;
          color: var(--text-primary);
          font-family: var(--font-main);
        }

        /* ── Hero Section ── */
        .editorial-hero-section {
          background-color: var(--blue-soft);
          padding: 3.5rem 0 3.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .editorial-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3rem;
          align-items: center;
        }

        .editorial-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--blue-brand);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }

        .editorial-hero-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--navy-primary);
          line-height: 1.18;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }

        .editorial-hero-subhead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.75rem;
          max-width: 580px;
        }

        .editorial-search-container {
          position: relative;
          max-width: 520px;
          margin-bottom: 1.75rem;
        }

        .search-icon-left {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--blue-brand);
          pointer-events: none;
        }

        .editorial-search-box {
          width: 100%;
          padding: 0.8rem 2.5rem 0.8rem 2.85rem;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: var(--navy-primary);
          box-shadow: 0 2px 8px rgba(10, 31, 68, 0.04);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .editorial-search-box:focus {
          border-color: var(--blue-brand);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .editorial-search-box::placeholder {
          color: var(--text-light);
        }

        .search-reset-button {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .hero-filter-pills-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .filter-pills-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .filter-pills-list {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .hero-topic-pill {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          padding: 0.35rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .hero-topic-pill:hover {
          border-color: var(--blue-brand);
          color: var(--navy-primary);
        }

        .hero-topic-pill.active {
          background-color: var(--navy-primary);
          color: #ffffff;
          border-color: var(--navy-primary);
        }

        .editorial-hero-image-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 8px 24px rgba(10, 31, 68, 0.06);
          background-color: #ffffff;
        }

        .editorial-hero-image {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        .image-caption-strip {
          padding: 0.65rem 1rem;
          background-color: #ffffff;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* ── Featured Article & Quick Reads ── */
        .featured-quickreads-section {
          padding: 3.5rem 0 3rem 0;
          background-color: #ffffff;
        }

        .featured-quickreads-grid {
          display: grid;
          grid-template-columns: 1.45fr 0.85fr;
          gap: 2rem;
          align-items: stretch;
        }

        .featured-article-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(10, 31, 68, 0.04);
          overflow: hidden;
        }

        .featured-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
        }

        .featured-image-holder {
          position: relative;
          background-color: var(--blue-soft);
          height: 100%;
          min-height: 360px;
        }

        .featured-cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .featured-badge-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: var(--navy-primary);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .featured-details-body {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .featured-category-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.75rem;
        }

        .editorial-category-label {
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--blue-brand);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-dot {
          color: var(--border-color);
          font-weight: 800;
        }

        .meta-read-time {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.76rem;
          color: var(--text-light);
        }

        .featured-article-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.3;
          color: var(--navy-primary);
          margin-bottom: 0.75rem;
          cursor: pointer;
          transition: color 0.15s;
        }

        .featured-article-title:hover {
          color: var(--blue-brand);
        }

        .featured-article-excerpt {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .featured-author-strip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .featured-author-thumb {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid var(--blue-brand);
        }

        .featured-author-name {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--navy-primary);
        }

        .featured-author-title {
          font-size: 0.74rem;
          color: var(--text-light);
        }

        .featured-action-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .read-full-article-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: none;
          border: none;
          color: var(--blue-brand);
          font-size: 0.88rem;
          font-weight: 800;
          cursor: pointer;
          padding: 0;
          transition: transform 0.15s;
        }

        .read-full-article-btn:hover {
          transform: translateX(3px);
        }

        .featured-publish-date {
          font-size: 0.76rem;
          color: var(--text-light);
        }

        /* Quick reads panel */
        .quick-reads-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 4px 16px rgba(10, 31, 68, 0.04);
          display: flex;
          flex-direction: column;
        }

        .quick-reads-header {
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1rem;
        }

        .quick-reads-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin: 0;
        }

        .quick-reads-subtitle {
          font-size: 0.78rem;
          color: var(--text-light);
        }

        .quick-reads-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .quick-read-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .quick-read-item:last-child {
          border-bottom: none;
        }

        .quick-read-item:hover .quick-read-heading {
          color: var(--blue-brand);
        }

        .quick-read-number {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--blue-brand);
          width: 24px;
          flex-shrink: 0;
        }

        .quick-read-text-box {
          flex-grow: 1;
        }

        .quick-read-category {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.15rem;
        }

        .quick-read-heading {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--navy-primary);
          line-height: 1.35;
          margin: 0;
          transition: color 0.15s;
        }

        .quick-read-time {
          font-size: 0.7rem;
          color: var(--text-light);
          margin-top: 0.2rem;
          display: block;
        }

        .quick-read-thumb {
          width: 52px;
          height: 52px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .quick-reads-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .quick-reads-view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: var(--navy-primary);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          transition: color 0.15s;
        }

        .quick-reads-view-all:hover {
          color: var(--blue-brand);
        }

        /* ── Explore by Topic ── */
        .explore-topics-section {
          padding: 4rem 0 3.5rem 0;
          background-color: var(--blue-soft);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .section-title-row {
          margin-bottom: 2.25rem;
        }

        .section-title-row.text-center {
          text-align: center;
        }

        .section-eyebrow-tag {
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--blue-brand);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.4rem;
        }

        .section-heading-primary {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 2.1rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 0.5rem;
        }

        .section-caption-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .topics-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .topic-image-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(10, 31, 68, 0.04);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
        }

        .topic-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(10, 31, 68, 0.08);
        }

        .topic-card-image-wrap {
          position: relative;
          height: 160px;
          background-color: var(--blue-soft);
        }

        .topic-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .topic-card-count {
          position: absolute;
          bottom: 0.65rem;
          right: 0.65rem;
          background-color: rgba(7, 21, 46, 0.85);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-pill);
        }

        .topic-card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .topic-card-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 0.35rem;
        }

        .topic-card-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .topic-card-action {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--blue-brand);
        }

        /* ── All Articles Directory ── */
        .all-articles-directory-section {
          padding: 4rem 0 4.5rem 0;
          background-color: #ffffff;
        }

        .directory-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .directory-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin: 0;
        }

        .directory-count-text {
          font-size: 0.88rem;
          color: var(--text-light);
          margin-top: 0.25rem;
        }

        .clear-filters-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: 1px solid var(--border-color);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--navy-primary);
          cursor: pointer;
        }

        .clear-filters-btn:hover {
          background-color: var(--blue-soft);
          border-color: var(--blue-brand);
          color: var(--blue-brand);
        }

        .editorial-articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.85rem;
        }

        .editorial-article-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(10, 31, 68, 0.03);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .editorial-article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(10, 31, 68, 0.08);
        }

        .article-card-image-box {
          position: relative;
          height: 180px;
          background-color: var(--blue-soft);
        }

        .article-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .article-card-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background-color: #ffffff;
          color: var(--navy-primary);
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(10, 31, 68, 0.08);
          text-transform: uppercase;
        }

        .article-card-content {
          padding: 1.5rem 1.35rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .article-card-meta {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          color: var(--text-light);
          margin-bottom: 0.65rem;
        }

        .article-card-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--navy-primary);
          line-height: 1.35;
          margin-bottom: 0.65rem;
          cursor: pointer;
          transition: color 0.15s;
        }

        .article-card-title:hover {
          color: var(--blue-brand);
        }

        .article-card-excerpt {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .article-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .article-card-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .author-avatar-tiny {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--border-color);
        }

        .author-name-tiny {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--navy-primary);
        }

        .article-read-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: none;
          border: none;
          color: var(--blue-brand);
          font-size: 0.8rem;
          font-weight: 800;
          cursor: pointer;
          padding: 0;
        }

        .empty-results-card {
          text-align: center;
          padding: 3.5rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 14px;
        }

        .empty-results-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 0.5rem;
        }

        .empty-results-card p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          margin-bottom: 1.5rem;
        }

        /* ── Doctor-Contributed Articles ── */
        .doctors-contributed-section {
          padding: 4.5rem 0;
          background-color: var(--blue-soft);
          border-top: 1px solid var(--border-color);
        }

        .doctors-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.85rem;
        }

        .editorial-doctor-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 4px 16px rgba(10, 31, 68, 0.03);
          display: flex;
          flex-direction: column;
        }

        .doctor-header-row {
          display: flex;
          gap: 0.9rem;
          align-items: center;
          margin-bottom: 1.15rem;
        }

        .doctor-portrait-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--blue-brand);
          flex-shrink: 0;
        }

        .doctor-experience-tag {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--blue-brand);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: block;
          margin-bottom: 0.15rem;
        }

        .doctor-card-name {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin: 0;
        }

        .doctor-card-title {
          font-size: 0.76rem;
          color: var(--text-light);
          margin-top: 0.15rem;
        }

        .doctor-credentials-strip {
          background-color: var(--blue-soft);
          border-radius: 8px;
          padding: 0.65rem 0.85rem;
          font-size: 0.74rem;
          color: var(--navy-primary);
          line-height: 1.45;
          margin-bottom: 1rem;
        }

        .doctor-card-bio {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .doctor-card-actions {
          margin-top: auto;
          display: flex;
          gap: 0.5rem;
        }

        /* ── Consultation Banner ── */
        .editorial-consultation-banner {
          padding: 3.5rem 0;
          background-color: #ffffff;
        }

        .consultation-banner-wrapper {
          background-color: var(--navy-primary);
          border-radius: 20px;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(10, 31, 68, 0.15);
        }

        .consultation-banner-content {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .consultation-eyebrow {
          font-size: 0.76rem;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .consultation-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.85rem;
        }

        .consultation-copy {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 1.75rem;
          max-width: 540px;
        }

        .consultation-actions-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .consultation-banner-image-wrap {
          background-color: var(--navy-dark);
        }

        .consultation-clinic-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Newsletter Section ── */
        .editorial-newsletter-section {
          padding: 2.5rem 0 3.5rem 0;
          background-color: #ffffff;
          border-bottom: 1px solid var(--border-color);
        }

        .newsletter-card-clean {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem 2.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
          box-shadow: 0 2px 10px rgba(10, 31, 68, 0.03);
        }

        .newsletter-info {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .newsletter-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--blue-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .newsletter-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 0.25rem;
        }

        .newsletter-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .newsletter-input-group {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-email-field {
          flex-grow: 1;
          padding: 0.65rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--navy-primary);
          outline: none;
        }

        .newsletter-email-field:focus {
          border-color: var(--blue-brand);
        }

        .newsletter-success-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #065f46;
          background-color: #ecfdf5;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
        }

        /* ── FAQs Section ── */
        .editorial-faqs-section {
          padding: 4.5rem 0;
          background-color: #ffffff;
        }

        .faqs-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .editorial-faq-card {
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background-color: #ffffff;
          overflow: hidden;
        }

        .faq-toggle-button {
          width: 100%;
          padding: 1.15rem 1.35rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--navy-primary);
          cursor: pointer;
          text-align: left;
          gap: 1rem;
        }

        .faq-arrow-icon {
          color: var(--blue-brand);
          transition: transform 0.2s;
          flex-shrink: 0;
        }

        .faq-arrow-icon.open {
          transform: rotate(180deg);
        }

        .faq-response-body {
          padding: 0 1.35rem 1.15rem 1.35rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* ── Distraction-Free Longform Reader Modal ── */
        .editorial-reader-overlay {
          position: fixed;
          inset: 0;
          z-index: 2200;
          background-color: rgba(10, 31, 68, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 1.5rem 1rem;
          overflow-y: auto;
        }

        .editorial-reader-modal {
          background-color: #ffffff;
          border-radius: 20px;
          max-width: 860px;
          width: 100%;
          margin: auto;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .modal-progress-bar-wrap {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background-color: rgba(2, 132, 199, 0.15);
          z-index: 30;
        }

        .modal-progress-bar {
          height: 100%;
          background-color: var(--blue-brand);
          transition: width 0.1s linear;
        }

        .modal-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          background-color: #ffffff;
          position: sticky;
          top: 3px;
          z-index: 20;
        }

        .modal-top-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .modal-category-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--blue-brand);
          background-color: var(--blue-soft);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          text-transform: uppercase;
        }

        .modal-top-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-close-icon-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.35rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
        }

        .modal-content-container {
          padding: 2.25rem 2rem 3rem 2rem;
        }

        .reader-medical-seal {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.74rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .modal-article-headline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 2.15rem;
          font-weight: 800;
          color: var(--navy-primary);
          line-height: 1.25;
          margin-bottom: 0.85rem;
        }

        .modal-article-subhead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .modal-author-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--blue-soft);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.85rem 1.15rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .modal-author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--blue-brand);
        }

        .modal-author-name {
          font-weight: 800;
          font-size: 0.92rem;
          color: var(--navy-primary);
        }

        .modal-author-role {
          font-size: 0.76rem;
          color: var(--blue-brand);
          font-weight: 600;
        }

        .modal-author-degree {
          font-size: 0.7rem;
          color: var(--text-light);
        }

        .modal-featured-image-box {
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 1.75rem;
          max-height: 380px;
        }

        .modal-featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-lead-paragraph {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--navy-primary);
          font-weight: 500;
          border-left: 3px solid var(--blue-brand);
          padding: 0.75rem 1.15rem;
          background-color: var(--blue-soft);
          border-radius: 0 10px 10px 0;
          margin-bottom: 2rem;
        }

        .modal-toc-box {
          background-color: #f8fafc;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.15rem;
          margin-bottom: 2.25rem;
        }

        .modal-toc-heading {
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--navy-primary);
          letter-spacing: 0.06em;
          margin-bottom: 0.5rem;
        }

        .modal-toc-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .modal-toc-link {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--blue-brand);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .toc-index {
          color: var(--text-light);
          font-size: 0.76rem;
        }

        .modal-sections-flow {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .modal-section-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .modal-section-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .modal-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0.85rem 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .modal-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-callout-card {
          margin-top: 1.15rem;
          padding: 1.15rem;
          border-radius: 12px;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .modal-callout-card.warning {
          background-color: #fffbeb;
          border: 1px solid #fde68a;
        }

        .modal-callout-card.tip {
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .modal-callout-card.clinical-note {
          background-color: var(--blue-soft);
          border: 1px solid rgba(2, 132, 199, 0.25);
        }

        .callout-card-title {
          font-size: 0.86rem;
          font-weight: 800;
          margin-bottom: 0.15rem;
          color: var(--navy-primary);
        }

        .callout-card-text {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .modal-takeaways-card {
          margin-top: 2.75rem;
          padding: 1.5rem;
          border-radius: 14px;
          background-color: var(--blue-soft);
          border: 1px solid rgba(2, 132, 199, 0.25);
        }

        .takeaways-card-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.85rem;
        }

        .takeaways-card-header h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin: 0;
        }

        .takeaways-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .takeaways-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .takeaway-check {
          color: var(--blue-brand);
          font-weight: 800;
        }

        .modal-bottom-consult-box {
          margin-top: 3rem;
          background-color: var(--navy-primary);
          color: #ffffff;
          border-radius: 16px;
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .bottom-consult-eyebrow {
          font-size: 0.72rem;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 0.08em;
          margin-bottom: 0.25rem;
        }

        .modal-bottom-consult-box h4 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.25rem 0;
        }

        .modal-bottom-consult-box p {
          font-size: 0.84rem;
          color: #cbd5e1;
          margin: 0;
        }

        .bottom-consult-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        /* ── Responsive Media Queries ── */
        @media (max-width: 1024px) {
          .editorial-hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .featured-quickreads-grid {
            grid-template-columns: 1fr;
          }
          .topics-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .editorial-articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .doctors-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .consultation-banner-wrapper {
            grid-template-columns: 1fr;
          }
          .newsletter-card-clean {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .editorial-hero-heading {
            font-size: 2rem;
          }
          .editorial-hero-image {
            height: 260px;
          }
          .featured-card-grid {
            grid-template-columns: 1fr;
          }
          .featured-image-holder {
            min-height: 220px;
          }
          .topics-cards-grid {
            grid-template-columns: 1fr;
          }
          .editorial-articles-grid {
            grid-template-columns: 1fr;
          }
          .doctors-cards-grid {
            grid-template-columns: 1fr;
          }
          .modal-content-container {
            padding: 1.5rem 1.15rem;
          }
          .modal-article-headline {
            font-size: 1.6rem;
          }
          .consultation-banner-content {
            padding: 2rem 1.5rem;
          }
          .consultation-heading {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
