import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const htmlPath = path.resolve(rootDir, 'dist', 'blog', 'robotic-knee-replacement-recovery-mumbai', 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: dist/blog/robotic-knee-replacement-recovery-mumbai/index.html does not exist.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

console.log('--- Validating SEO for Robotic Knee Replacement Recovery Mumbai ---');

// 1. Title
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
assert(titleMatch && titleMatch[1] === 'Planning Robotic Knee Replacement Surgery in Mumbai? Know the Recovery Time', 'Title tag exact match');

// 2. Meta description
const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
assert(descMatch && descMatch[1] === 'Learn about robotic knee replacement recovery, with insights into recovery timelines, pain management, physiotherapy, and treatment considerations for patients exploring care in Mumbai.', 'Meta description exact match');

// 3. Canonical
const canonMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
assert(canonMatch && canonMatch[1] === 'https://www.sosorth.com/blog/robotic-knee-replacement-recovery-mumbai', 'Canonical URL exact match');

// 4. Open Graph
assert(html.includes('<meta property="og:type" content="article" />'), 'OG type is article');
assert(html.includes('<meta property="og:url" content="https://www.sosorth.com/blog/robotic-knee-replacement-recovery-mumbai" />'), 'OG url match');
assert(html.includes('<meta property="og:title" content="Planning Robotic Knee Replacement Surgery in Mumbai? Know the Recovery Time" />'), 'OG title match');
assert(html.includes('<meta property="og:image" content="https://www.sosorth.com/assets/robotic-knee-recovery-mumbai.png" />'), 'OG image match');

// 5. Twitter Card
assert(html.includes('<meta name="twitter:card" content="summary_large_image" />'), 'Twitter card is summary_large_image');

// 6. Robots
assert(html.includes('<meta name="robots" content="index, follow" />'), 'Robots meta tag index, follow');

// 7. Exactly one H1
const h1Matches = html.match(/<h1[\s\S]*?<\/h1>/gi) || [];
assert(h1Matches.length === 1, `Found exactly 1 H1 (count: ${h1Matches.length})`);
assert(h1Matches[0].includes('How Long Does It Take to Recover After Robotic Knee Replacement Surgery?'), 'H1 text match');

// 8. Headings hierarchy
assert(html.includes('What Happens Immediately After Robotic Knee Replacement Surgery?</h2>'), 'H2 What happens immediately');
assert(html.includes('Week-by-Week Recovery Timeline After Robotic Knee Replacement Surgery</h2>'), 'H2 Recovery timeline');
assert(html.includes('First 24–48 Hours: Initial Movement and Monitoring</h3>'), 'H3 24-48 Hours');
assert(html.includes('Weeks 1–2: Establishing a Safe Routine</h3>'), 'H3 Weeks 1-2');
assert(html.includes('Weeks 3–6: Improving Everyday Mobility</h3>'), 'H3 Weeks 3-6');
assert(html.includes('Weeks 6–12 and Beyond: Building Strength and Confidence</h3>'), 'H3 Weeks 6-12 and beyond');
assert(html.includes('Factors That Influence Recovery</h2>'), 'H2 Factors');
assert(html.includes('Managing Pain, Swelling, and Physiotherapy</h2>'), 'H2 Managing pain & physiotherapy');
assert(html.includes('When Should You Contact Your Doctor?</h2>'), 'H2 When to contact doctor');
assert(html.includes('Is Robotic Knee Replacement the Right Option?</h2>'), 'H2 Right option');
assert(html.includes('Frequently Asked Questions</h2>'), 'H2 FAQs');

// 9. Semantic Structures
assert(html.includes('class="blog-recovery-timeline"'), 'Semantic timeline container');
assert(html.includes('class="blog-timeline-badge">24–48 Hours</span>'), 'Timeline badge 24-48h');
assert(html.includes('class="blog-timeline-badge">Weeks 1–2</span>'), 'Timeline badge Weeks 1-2');

// 10. Internal links
assert(html.includes('href="https://www.sosorth.com/"') && html.includes('SOS Speciality Orthopedic Clinic</a>'), 'Link to SOS Clinic homepage');
assert(html.includes('href="/doctors"') && html.includes('robotic knee replacement surgeons</a>'), 'Internal link to /doctors');
assert(html.includes('href="/physiotherapy"') && html.includes('Physiotherapy</a>'), 'Internal link to /physiotherapy');
assert(html.includes('href="/contact"') && html.includes('our team</a>'), 'Internal link to /contact');
assert(html.includes('href="/blog/robotic-knee-replacement-surgery"') && html.includes('robotic knee replacement procedure</a>'), 'Internal link to robotic surgery blog');

// 11. Images & Recommended ALT Text
assert(html.includes('alt="Robotic knee replacement surgery and knee recovery in mumbai"'), 'Hero image ALT exact match');
assert(html.includes('alt="Robotic knee replacement surgery procedure in mumbai"'), 'Procedure image ALT exact match');
assert(html.includes('alt="Orthopaedic surgeon discussing knee replacement surgery with a patient in mumbai"'), 'Consultation image ALT exact match');

// 12. Medical Disclaimer & CTA
assert(html.includes('This article is for informational purposes and does not replace professional medical advice.'), 'Medical disclaimer present');
assert(html.includes('Concerned About Knee Pain or Considering Replacement?'), 'Consultation CTA present');

// 13. JSON-LD validation
const ldJsonMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
assert(ldJsonMatch !== null, 'JSON-LD script block found');

if (ldJsonMatch) {
  try {
    const data = JSON.parse(ldJsonMatch[1]);
    assert(Array.isArray(data), 'JSON-LD is valid array');
    const types = data.map(d => d['@type']);
    assert(types.includes('MedicalWebPage'), 'JSON-LD contains MedicalWebPage');
    assert(types.includes('FAQPage'), 'JSON-LD contains FAQPage');
    assert(types.includes('BreadcrumbList'), 'JSON-LD contains BreadcrumbList');

    const faq = data.find(d => d['@type'] === 'FAQPage');
    assert(faq && faq.mainEntity && faq.mainEntity.length === 4, 'FAQPage has exactly 4 FAQ entries');
  } catch (err) {
    assert(false, `JSON-LD parsing failed: ${err.message}`);
  }
}

// 14. Technical SEO Files
const sitemap = fs.readFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), 'utf-8');
assert(sitemap.includes('https://www.sosorth.com/blog/robotic-knee-replacement-recovery-mumbai'), 'Sitemap includes recovery post URL');

// 15. Check direct slug HTML file
const directSlugHtml = path.resolve(rootDir, 'dist', 'robotic-knee-replacement-recovery-mumbai', 'index.html');
assert(fs.existsSync(directSlugHtml), 'Direct slug fallback HTML exists');

console.log(`\nValidation complete: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
