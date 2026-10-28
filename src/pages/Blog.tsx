import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  Stethoscope, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  ChevronDown, 
  X, 
  HelpCircle,
  Mail
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { AppointmentModal } from '../components/AppointmentModal';
import { blogPostsData, blogCategories, BlogPost } from '../data/blogs';
import { BUSINESS_INFO } from '../config/business';
import { doctorsData } from '../data/doctors';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDoctorFilter, setSelectedDoctorFilter] = useState<string | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleOpenArticle = (article: BlogPost) => {
    navigate(`/blog/${article.slug}`);
  };

  const handleBookWithDoctor = (doctorName: string) => {
    setBookingDoctor(doctorName);
    setIsAppointmentOpen(true);
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

  // Is the user actively filtering or searching?
  const isFiltering = Boolean(searchQuery.trim() || selectedCategory !== 'all' || selectedDoctorFilter);

  // Articles displayed in directory grid:
  // When not searching/filtering, exclude the featuredArticle so it never duplicates on the page!
  const gridArticles = useMemo(() => {
    if (!isFiltering && featuredArticle) {
      return filteredArticles.filter(a => a.id !== featuredArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle, isFiltering]);

  return (
    <div className="editorial-blog-page">
      <SEOHead
        title="Orthopedic Blog & Patient Recovery Guides | SOS Speciality Clinic Mumbai"
        description="Evidence-based advice, recovery guides, and practical orthopedic insights from our specialist doctors at SOS Speciality Clinic, Mumbai."
        canonicalUrl={`${BUSINESS_INFO.website}/blog`}
        keywords="Orthopedic blog Mumbai, Knee replacement guide, Robotic knee surgery Mumbai, Fast recovery joint replacement, SOS Ortho Clinic"
      />

      {/* ── 1. Hero Section (Two-Column Editorial Composition) ── */}
      <section className="editorial-hero-section">
        <div className="container">
          <div className="editorial-hero-grid">
            
            {/* Left Column: Label, Headline, Subtitle, Search, Topic Pills */}
            <div className="editorial-hero-content">
              <span className="editorial-eyebrow">
                ORTHOPEDIC BLOG & PATIENT GUIDES
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
                  placeholder="Search articles, knee replacement, symptoms, or surgery..."
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
                <span className="filter-pills-label">Topics:</span>
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

            {/* Right Column: High-Quality Orthopedic Photograph */}
            <div className="editorial-hero-image-wrap">
              <img 
                src="/assets/clinic-consultation-suite.jpg" 
                alt="SOS Speciality Orthopedic Clinic modern consultation suites in Mumbai"
                className="editorial-hero-image"
                width="800"
                height="450"
                loading="eager"
              />
              <div className="image-caption-strip">
                <Stethoscope size={14} color="var(--blue-brand)" />
                <span>Specialist Musculoskeletal Care &amp; Patient Education &bull; SOS Mumbai</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Featured Article Banner (Visible on default view) ── */}
      {featuredArticle && !isFiltering && (
        <section className="featured-quickreads-section">
          <div className="container">
            <div className="featured-article-card" style={{ width: '100%' }}>
              <div className="featured-card-grid">
                
                {/* Large Orthopedic Image on Left */}
                <div className="featured-image-holder">
                  <img 
                    src={featuredArticle.heroImage.src} 
                    srcSet={featuredArticle.heroImage.srcSet}
                    sizes="(max-width: 900px) 100vw, 540px"
                    alt={featuredArticle.heroImage.alt}
                    width={featuredArticle.heroImage.width}
                    height={featuredArticle.heroImage.height}
                    loading="eager"
                    decoding="async"
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
                    <Link to={`/blog/${featuredArticle.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {featuredArticle.title}
                    </Link>
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
                    <Link
                      to={`/blog/${featuredArticle.slug}`}
                      className="read-full-article-btn"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={16} />
                    </Link>
                    <span className="featured-publish-date">{featuredArticle.publishDate}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 3. All Articles Directory & Filter View ── */}
      <section className="all-articles-directory-section" id="all-articles-section">
        <div className="container">
          <div className="directory-header-bar">
            <div>
              <h2 className="directory-title">
                {!isFiltering
                  ? 'More Clinical Guides & Patient Recovery'
                  : 'Search & Filter Results'}
              </h2>
              <p className="directory-count-text">
                {!isFiltering
                  ? `Showing ${gridArticles.length} recent ${gridArticles.length === 1 ? 'guide' : 'guides'} & clinical care pathways`
                  : `Showing ${gridArticles.length} ${gridArticles.length === 1 ? 'article' : 'articles'}`}
                {selectedCategory !== 'all' && ` in ${blogCategories.find(c => c.id === selectedCategory)?.label}`}
                {selectedDoctorFilter && ` authored by ${selectedDoctorFilter}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {isFiltering && (
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

          {gridArticles.length === 0 ? (
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
              {gridArticles.map(article => (
                <article 
                  key={article.id} 
                  className="editorial-article-card"
                >
                  <div className="article-card-image-box">
                    <img 
                      src={article.heroImage.src} 
                      srcSet={article.heroImage.srcSet}
                      sizes="(max-width: 768px) 100vw, 380px"
                      alt={article.heroImage.alt} 
                      width={article.heroImage.width}
                      height={article.heroImage.height}
                      loading="lazy"
                      decoding="async"
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

                    <h3 className="article-card-title">
                      <Link to={`/blog/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {article.title}
                      </Link>
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

                      <Link
                        to={`/blog/${article.slug}`}
                        className="article-read-link"
                        aria-label={`Read ${article.title}`}
                      >
                        <span>Read Guide</span>
                        <ArrowRight size={14} />
                      </Link>
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
                  <Link
                    to="/doctors"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    View Profile
                  </Link>

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

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultDoctor={bookingDoctor}
        defaultService="Joint Replacement Care"
      />
    </div>
  );
};
