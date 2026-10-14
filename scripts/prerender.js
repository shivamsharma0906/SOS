/**
 * Build-time Prerendering Script for SOS Orthopedic Clinic Blog
 * 
 * Lightweight zero-dependency static HTML generator:
 * - Runs post-build (after `vite build`)
 * - Injects SEO meta tags, Open Graph, Twitter cards, JSON-LD schemas,
 *   and full semantic HTML (H1, H2s, H3s, OL, UL, FAQs) into the static HTML
 * - Writes to `dist/blog/robotic-knee-replacement-surgery/index.html`
 * - When deployed on Vercel, this static page is served directly to search engine
 *   crawlers (Googlebot, Bingbot, social media scrapers) without requiring JavaScript.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[Prerender] dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// Blog Post Metadata
const post = {
  slug: 'robotic-knee-replacement-surgery',
  url: 'https://www.sosorth.com/blog/robotic-knee-replacement-surgery',
  metaTitle: 'Robotic Knee Replacement Mumbai | SOS Orthopedic Clinic',
  metaDescription: 'Learn about robotic knee replacement surgery, its benefits, risks, and recovery, and understand knee replacement treatment options.',
  keywords: 'Robotic Knee Replacement Mumbai, knee replacement surgery benefits, robotic knee surgery recovery, knee osteoarthritis treatment, SOS Speciality Orthopedic Clinic',
  ogImage: 'https://www.sosorth.com/assets/robotic-knee-consultation.png',
  h1: 'What Is Robotic Knee Replacement Surgery? Benefits, Risks and Recovery',
  datePublished: '2026-10-14',
  dateModified: '2026-10-14',
  author: 'Dr. Shobit Nitin Deshmukh'
};

// JSON-LD Schemas
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${post.url}#webpage`,
    "url": post.url,
    "name": post.metaTitle,
    "headline": post.h1,
    "description": post.metaDescription,
    "image": post.ogImage,
    "inLanguage": "en-IN",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "SOS Speciality Orthopedic Clinic",
      "url": "https://www.sosorth.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sosorth.com/assets/video-poster.jpg"
      }
    },
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${post.url}#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How Painful Is Robotic Knee Replacement Surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pain, swelling and stiffness are expected to some degree after knee replacement. Pain-management measures and prescribed rehabilitation can help manage discomfort as healing progresses. The recovery timeline varies between individuals."
        }
      },
      {
        "@type": "Question",
        "name": "Is Robotic Surgery Better for Knee Replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Robotic-assisted surgery supports planning and guides selected surgical steps, but it does not guarantee better outcomes for every patient. Conventional knee replacement can also be effective. The appropriate approach depends on the patient's condition and the surgeon's assessment."
        }
      },
      {
        "@type": "Question",
        "name": "What Are the Disadvantages of Robotic Knee Surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Potential disadvantages include additional costs in some settings, limited availability and the need for a team trained in the technology. Robotic assistance does not eliminate the general risks of knee replacement."
        }
      },
      {
        "@type": "Question",
        "name": "How Long Does It Take to Recover After Robotic Knee Replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recovery varies according to general health, joint damage and rehabilitation progress. Routine activities may resume gradually over several weeks, while more complete recovery can take several months."
        }
      },
      {
        "@type": "Question",
        "name": "Is Robotic Knee Replacement Suitable for Everyone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Suitability depends on the patient's symptoms, joint damage, overall health and treatment goals. An orthopedic specialist can assess whether knee replacement is appropriate and explain the available options."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${post.url}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sosorth.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.sosorth.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "What Is Robotic Knee Replacement Surgery? Benefits, Risks and Recovery",
        "item": post.url
      }
    ]
  }
];

// Semantic Pre-rendered Content HTML
const prerenderedArticleContent = `
<div class="blog-article-page-wrap">
  <nav aria-label="Breadcrumb" class="blog-breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="/">Home</a> / </li>
        <li class="breadcrumb-item"><a href="/blog">Blog</a> / </li>
        <li class="breadcrumb-item active" aria-current="page">${post.h1}</li>
      </ol>
    </div>
  </nav>

  <article class="blog-article-root" itemscope itemtype="https://schema.org/MedicalWebPage">
    <div class="container">
      <div class="blog-article-layout-grid">
        <div class="blog-article-main-col">
          <header class="blog-article-header">
            <span class="blog-category-tag">Joint Replacement &amp; Knee</span>
            <h1 class="blog-article-h1" itemprop="headline">${post.h1}</h1>
            <div class="blog-article-meta-bar">
              <span>Author: <strong class="meta-author-name">${post.author}</strong></span>
              <span> &bull; Last updated: <time datetime="2026-10-14">October 14, 2026</time></span>
            </div>
            <figure class="blog-hero-figure">
              <img src="/assets/robotic-knee-consultation.png" alt="Robotic knee replacement surgery for knee joint treatment" width="1730" height="909" loading="eager" fetchpriority="high" class="blog-hero-img" />
              <figcaption class="blog-hero-caption">Orthopedic specialist and patient reviewing computerized 3D knee joint anatomy and implant alignment plan in consultation suite.</figcaption>
            </figure>
          </header>

          <div class="blog-article-body">
            <div class="blog-lead-section">
              <p class="blog-lead-p">Knee pain can make everyday activities such as walking, climbing stairs and standing for long periods difficult. When advanced arthritis or severe joint damage causes persistent pain, medication, physiotherapy and lifestyle changes may no longer provide sufficient relief. In such cases, an orthopedic specialist may recommend evaluating whether knee replacement surgery is appropriate.</p>
              <p class="blog-lead-p">Robotic knee replacement surgery uses computer-assisted technology to help surgeons plan and guide selected steps of knee joint replacement. Patients researching robotic knee replacement in Mumbai should understand how the procedure works, its potential benefits, risks and recovery requirements before making a treatment decision.</p>
              <p class="blog-lead-p">The robotic system does not independently perform the operation. The surgeon remains in control and makes the clinical decisions throughout the procedure.</p>
            </div>

            <section class="blog-content-section">
              <h2 class="blog-h2">What Is Robotic Knee Replacement Surgery?</h2>
              <p>Robotic knee replacement is a surgical procedure in which a robotic-assisted system supports planning and guides selected steps of knee joint replacement. Depending on the technology used, it may help the surgeon assess knee anatomy, plan bone preparation and evaluate alignment.</p>
              <p>During knee replacement, damaged joint surfaces are prepared and replaced with artificial components. The procedure aims to reduce pain caused by severe joint damage and improve mobility.</p>
              <p>The exact process varies according to the robotic system and surgical technique. Patients considering robotic knee replacement surgery in Mumbai should discuss the available technology, the surgeon's experience and suitable treatment options with their orthopedic specialist.</p>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">Which Conditions May Require Knee Replacement Surgery?</h2>
              <p>Knee replacement may be considered when joint damage causes significant pain, stiffness and difficulty performing everyday activities, particularly when nonsurgical treatments no longer provide adequate relief.</p>
              <div class="blog-subsection">
                <h3 class="blog-h3">Advanced Knee Osteoarthritis</h3>
                <p>Osteoarthritis gradually damages the cartilage that cushions the ends of bones. This can cause pain, swelling, stiffness and reduced mobility. When symptoms significantly affect daily life, an orthopedic specialist may evaluate whether knee replacement is appropriate.</p>
              </div>
              <div class="blog-subsection">
                <h3 class="blog-h3">Severe Joint Damage and Persistent Pain</h3>
                <p>Severe joint damage can affect knee movement, alignment and stability. Treatment may include medication, physiotherapy, activity modification and other nonsurgical approaches. If these measures do not provide sufficient relief, a specialist may discuss surgical options after reviewing the patient's symptoms and examination findings.</p>
              </div>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">How Does the Robotic Knee Replacement Procedure Work?</h2>
              <p>The procedure generally involves preoperative assessment, surgical planning, robotic-assisted guidance, implant placement and postoperative rehabilitation. The exact steps depend on the patient's condition and the technology used.</p>
              <ol class="blog-procedure-ol">
                <li class="blog-procedure-li">
                  <h3 class="blog-h3">1. Preoperative Assessment and Planning</h3>
                  <p>The surgeon reviews the patient's medical history, symptoms, examination findings and relevant imaging. Depending on the robotic system, this information may help create a digital plan for bone preparation, alignment and implant positioning.</p>
                  <p>The healthcare team also assesses the patient's overall health, medications and suitability for anesthesia.</p>
                </li>
                <li class="blog-procedure-li">
                  <h3 class="blog-h3">2. Robotic-Assisted Surgical Guidance</h3>
                  <p>During surgery, the surgeon uses the robotic-assisted system to guide selected steps according to the surgical plan. Depending on the technology, the system may provide information about knee anatomy, alignment and joint balance.</p>
                  <p>The surgeon remains responsible for the operation and makes decisions based on the patient's anatomy and clinical needs. Robotic assistance supports surgical planning but does not replace the surgeon's expertise.</p>
                </li>
                <li class="blog-procedure-li">
                  <h3 class="blog-h3">3. Implant Placement and Postoperative Care</h3>
                  <p>After the damaged joint surfaces are prepared, the replacement components are positioned. The surgeon assesses knee movement, alignment and stability before completing the operation.</p>
                  <p>Patients then receive instructions regarding pain management, wound care, safe movement and rehabilitation. Learn more about SOS Speciality Orthopedic Clinic's <a href="/services/joint-replacement" class="blog-internal-link">joint replacement services</a>.</p>
                </li>
              </ol>

              <figure class="blog-hero-figure" style="margin-top: 2rem;">
                <img src="/assets/blog-featured-robotic.jpg" alt="Intraoperative robotic knee replacement surgical guidance and bone preparation" width="1376" height="768" loading="lazy" class="blog-hero-img" />
                <figcaption class="blog-hero-caption">Intraoperative robotic-assisted surgical system providing real-time alignment and joint balance guidance.</figcaption>
              </figure>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">What Are the Potential Benefits of Robotic Knee Replacement?</h2>
              <p>Robotic-assisted technology may support individualized surgical planning and guide selected steps of knee replacement. Potential advantages include:</p>
              <ul class="blog-benefits-ul">
                <li class="blog-benefits-li"><strong>Personalized planning:</strong> Digital planning may help account for individual knee anatomy.</li>
                <li class="blog-benefits-li"><strong>Surgical guidance:</strong> Certain systems provide measurements to support bone preparation and implant positioning.</li>
                <li class="blog-benefits-li"><strong>Alignment assessment:</strong> Some systems help surgeons evaluate knee alignment and joint balance during selected surgical steps.</li>
              </ul>
              <p>These technical advantages do not guarantee better outcomes for every patient. Robotic assistance does not eliminate surgical risks or ensure less pain, faster recovery or longer-lasting implants. Patients should discuss the potential benefits, limitations and alternatives with their orthopedic surgeon.</p>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">Robotic vs Conventional Knee Replacement: What Is the Difference?</h2>
              <p>Both robotic-assisted and conventional knee replacement aim to relieve pain caused by severe joint damage and improve mobility.</p>
              <p>Conventional knee replacement uses established surgical techniques and instruments. Robotic-assisted knee replacement incorporates additional technology to support planning and guide selected surgical steps.</p>
              <p>The capabilities of robotic systems vary, and not every hospital or surgical team uses the same technology. Conventional knee replacement can also provide good outcomes for appropriately selected patients.</p>
              <p>The decision should consider the patient's condition, the surgeon's experience, available technology, expected costs and individual treatment goals.</p>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">How Long Does Recovery Take After Robotic Knee Replacement Surgery?</h2>
              <p>Recovery varies according to age, general health, the severity of joint damage, other medical conditions and participation in rehabilitation. Robotic assistance does not remove the need for postoperative care or physiotherapy.</p>
              <div class="blog-subsection">
                <h3 class="blog-h3">Early Recovery and Mobility</h3>
                <p>The healthcare team provides guidance on pain management, wound care and safe movement. Many patients begin standing or walking with assistance when their medical team considers it appropriate. A walker or another mobility aid may be needed initially.</p>
                <p>Patients should follow their surgeon's instructions regarding movement, weight-bearing, exercises and follow-up appointments.</p>
              </div>
              <div class="blog-subsection">
                <h3 class="blog-h3">The Role of Physiotherapy</h3>
                <p>Physiotherapy helps improve knee movement, strengthen surrounding muscles, support balance and gradually restore mobility. Rehabilitation may include knee-bending and straightening exercises, walking practice and progressive strengthening.</p>
                <p>Exercises should follow the recommendations of the surgeon and physiotherapist. Patients can explore SOS's <a href="/physiotherapy" class="blog-internal-link">physiotherapy services</a> for information about the clinic's rehabilitation services.</p>
              </div>
              <div class="blog-subsection">
                <h3 class="blog-h3">Returning to Daily Activities</h3>
                <p>Many patients gradually resume routine activities over several weeks, while more complete recovery may take several months. The timeline depends on individual progress. Returning to driving, work and exercise should be guided by the treating surgeon.</p>
              </div>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">What Are the Risks and Disadvantages of Robotic Knee Replacement?</h2>
              <p>Like conventional knee replacement, robotic-assisted surgery carries risks. These may include infection, blood clots, stiffness, persistent pain, implant-related problems and complications associated with surgery or anesthesia.</p>
              <p>Additional considerations may include higher costs in some settings, equipment requirements and limited availability. Robotic assistance is not suitable for every patient and does not guarantee better outcomes.</p>
              <p>Patients should discuss their individual risks, available alternatives and expected costs with their surgeon before deciding on treatment.</p>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">What Is the Cost of Robotic Knee Replacement?</h2>
              <p>The cost varies according to the hospital, surgeon's fees, implant, robotic technology, investigations, hospital stay and rehabilitation requirements.</p>
              <p>Patients comparing treatment options in Mumbai should request an itemized estimate and confirm which services, implants, hospital charges and follow-up visits are included. Cost should be considered alongside the suitability of the procedure and the patient's individual treatment needs.</p>
            </section>

            <section class="blog-content-section">
              <h2 class="blog-h2">Making an Informed Decision About Knee Replacement</h2>
              <p>Robotic knee replacement surgery uses technology to support surgical planning and guide selected steps of knee joint replacement. It may be appropriate for some patients with advanced arthritis or severe joint damage, but the decision should be based on individual medical needs and a qualified surgeon's assessment.</p>
              <p>Understanding the procedure, potential benefits, risks, costs and recovery requirements helps patients make informed decisions. For guidance on orthopedic evaluation and available treatment options, patients can <a href="/contact" class="blog-internal-link">contact SOS Speciality Orthopedic Clinic</a>.</p>
            </section>

            <section class="blog-content-section blog-faq-section">
              <h2 class="blog-h2">Frequently Asked Questions About Robotic Knee Replacement</h2>
              <div class="blog-faq-accordion">
                <div class="blog-faq-item active">
                  <button type="button" class="blog-faq-trigger" aria-expanded="true">
                    <span class="blog-faq-question-text">How Painful Is Robotic Knee Replacement Surgery?</span>
                  </button>
                  <div class="blog-faq-panel expanded">
                    <div class="blog-faq-answer-inner">
                      <p>Pain, swelling and stiffness are expected to some degree after knee replacement. Pain-management measures and prescribed rehabilitation can help manage discomfort as healing progresses. The recovery timeline varies between individuals.</p>
                    </div>
                  </div>
                </div>
                <div class="blog-faq-item">
                  <button type="button" class="blog-faq-trigger" aria-expanded="false">
                    <span class="blog-faq-question-text">Is Robotic Surgery Better for Knee Replacement?</span>
                  </button>
                  <div class="blog-faq-panel collapsed">
                    <div class="blog-faq-answer-inner">
                      <p>Robotic-assisted surgery supports planning and guides selected surgical steps, but it does not guarantee better outcomes for every patient. Conventional knee replacement can also be effective. The appropriate approach depends on the patient's condition and the surgeon's assessment.</p>
                    </div>
                  </div>
                </div>
                <div class="blog-faq-item">
                  <button type="button" class="blog-faq-trigger" aria-expanded="false">
                    <span class="blog-faq-question-text">What Are the Disadvantages of Robotic Knee Surgery?</span>
                  </button>
                  <div class="blog-faq-panel collapsed">
                    <div class="blog-faq-answer-inner">
                      <p>Potential disadvantages include additional costs in some settings, limited availability and the need for a team trained in the technology. Robotic assistance does not eliminate the general risks of knee replacement.</p>
                    </div>
                  </div>
                </div>
                <div class="blog-faq-item">
                  <button type="button" class="blog-faq-trigger" aria-expanded="false">
                    <span class="blog-faq-question-text">How Long Does It Take to Recover After Robotic Knee Replacement?</span>
                  </button>
                  <div class="blog-faq-panel collapsed">
                    <div class="blog-faq-answer-inner">
                      <p>Recovery varies according to general health, joint damage and rehabilitation progress. Routine activities may resume gradually over several weeks, while more complete recovery can take several months.</p>
                    </div>
                  </div>
                </div>
                <div class="blog-faq-item">
                  <button type="button" class="blog-faq-trigger" aria-expanded="false">
                    <span class="blog-faq-question-text">Is Robotic Knee Replacement Suitable for Everyone?</span>
                  </button>
                  <div class="blog-faq-panel collapsed">
                    <div class="blog-faq-answer-inner">
                      <p>No. Suitability depends on the patient's symptoms, joint damage, overall health and treatment goals. An orthopedic specialist can assess whether knee replacement is appropriate and explain the available options.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside class="blog-medical-disclaimer">
              <div>
                <strong class="disclaimer-heading">Medical Disclaimer</strong>
                <p class="disclaimer-text">This article is for informational purposes and does not replace professional medical advice.</p>
              </div>
            </aside>

            <div class="blog-cta-box">
              <span class="blog-cta-eyebrow">ORTHOPEDIC CONSULTATION &amp; OPD</span>
              <h3 class="blog-cta-title">Concerned About Knee Pain or Considering Replacement?</h3>
              <p class="blog-cta-desc">Schedule a comprehensive clinical assessment with our senior orthopedic surgeons across our Mumbai centres.</p>
              <div class="blog-cta-buttons">
                <a href="/contact" class="btn btn-primary btn-md">Book an Appointment</a>
                <a href="/contact" class="btn btn-secondary btn-md">Contact SOS Clinic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</div>
`;

// Build customized HTML
let outputHtml = template;

// 1. Replace <title>
outputHtml = outputHtml.replace(
  /<title>.*?<\/title>/i,
  `<title>${post.metaTitle}</title>`
);

// 2. Replace meta title
outputHtml = outputHtml.replace(
  /<meta name="title" content=".*?" \/>/i,
  `<meta name="title" content="${post.metaTitle}" />`
);

// 3. Replace meta description
outputHtml = outputHtml.replace(
  /<meta name="description"[\s\S]*?content=".*?" \/>/i,
  `<meta name="description" content="${post.metaDescription}" />`
);

// 4. Replace keywords
outputHtml = outputHtml.replace(
  /<meta name="keywords"[\s\S]*?content=".*?" \/>/i,
  `<meta name="keywords" content="${post.keywords}" />`
);

// 5. Replace canonical
outputHtml = outputHtml.replace(
  /<link rel="canonical" href=".*?" \/>/i,
  `<link rel="canonical" href="${post.url}" />`
);

// 6. Replace Open Graph tags
outputHtml = outputHtml.replace(
  /<meta property="og:type" content=".*?" \/>/i,
  `<meta property="og:type" content="article" />`
);
outputHtml = outputHtml.replace(
  /<meta property="og:url" content=".*?" \/>/i,
  `<meta property="og:url" content="${post.url}" />`
);
outputHtml = outputHtml.replace(
  /<meta property="og:title" content=".*?" \/>/i,
  `<meta property="og:title" content="${post.metaTitle}" />`
);
outputHtml = outputHtml.replace(
  /<meta property="og:description"[\s\S]*?content=".*?" \/>/i,
  `<meta property="og:description" content="${post.metaDescription}" />`
);
outputHtml = outputHtml.replace(
  /<meta property="og:image" content=".*?" \/>/i,
  `<meta property="og:image" content="${post.ogImage}" />`
);

// 7. Replace Twitter tags
outputHtml = outputHtml.replace(
  /<meta name="twitter:title" content=".*?" \/>/i,
  `<meta name="twitter:title" content="${post.metaTitle}" />`
);
outputHtml = outputHtml.replace(
  /<meta name="twitter:description" content=".*?" \/>/i,
  `<meta name="twitter:description" content="${post.metaDescription}" />`
);
outputHtml = outputHtml.replace(
  /<meta name="twitter:image" content=".*?" \/>/i,
  `<meta name="twitter:image" content="${post.ogImage}" />`
);

// 8. Inject robots tag & JSON-LD schemas in <head>
const headInjections = `
  <meta name="robots" content="index, follow" />
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>
`;
outputHtml = outputHtml.replace('</head>', `${headInjections}\n</head>`);

// 9. Inject Pre-rendered Article HTML into #root
outputHtml = outputHtml.replace(
  '<div id="root"></div>',
  `<div id="root">${prerenderedArticleContent}</div>`
);

// 10. Write to target file
const targetDir = path.resolve(distDir, 'blog', post.slug);
fs.mkdirSync(targetDir, { recursive: true });
const targetFile = path.resolve(targetDir, 'index.html');
fs.writeFileSync(targetFile, outputHtml, 'utf-8');

console.log(`[Prerender] Successfully generated static page: ${targetFile}`);
