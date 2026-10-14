import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const htmlPath = path.resolve(rootDir, 'dist', 'blog', 'robotic-knee-replacement-surgery', 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: dist/blog/robotic-knee-replacement-surgery/index.html does not exist.');
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

// 1. Title
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
assert(titleMatch && titleMatch[1] === 'Robotic Knee Replacement Mumbai | SOS Orthopedic Clinic', 'Title tag exact match');
assert(titleMatch && titleMatch[1].length <= 60, `Title length is ${titleMatch ? titleMatch[1].length : 0} (<= 60 chars)`);

// 2. Meta description
const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
assert(descMatch && descMatch[1] === 'Learn about robotic knee replacement surgery, its benefits, risks, and recovery, and understand knee replacement treatment options.', 'Meta description exact match');
assert(descMatch && descMatch[1].length <= 140, `Meta description length is ${descMatch ? descMatch[1].length : 0} (<= 140 chars)`);

// 3. Canonical
const canonMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
assert(canonMatch && canonMatch[1] === 'https://www.sosorth.com/blog/robotic-knee-replacement-surgery', 'Canonical URL exact match');

// 4. Open Graph
assert(html.includes('<meta property="og:type" content="article" />'), 'OG type is article');
assert(html.includes('<meta property="og:url" content="https://www.sosorth.com/blog/robotic-knee-replacement-surgery" />'), 'OG url match');
assert(html.includes('<meta property="og:title" content="Robotic Knee Replacement Mumbai | SOS Orthopedic Clinic" />'), 'OG title match');

// 5. Twitter Card
assert(html.includes('<meta name="twitter:card" content="summary_large_image" />'), 'Twitter card is summary_large_image');

// 6. Robots
assert(html.includes('<meta name="robots" content="index, follow" />'), 'Robots meta tag index, follow');

// 7. Exactly one H1
const h1Matches = html.match(/<h1[\s\S]*?<\/h1>/gi) || [];
assert(h1Matches.length === 1, `Found exactly 1 H1 (count: ${h1Matches.length})`);
assert(h1Matches[0].includes('What Is Robotic Knee Replacement Surgery? Benefits, Risks and Recovery'), 'H1 text match');

// 8. Headings hierarchy
assert(html.includes('What Is Robotic Knee Replacement Surgery?</h2>'), 'H2 What is robotic');
assert(html.includes('Which Conditions May Require Knee Replacement Surgery?</h2>'), 'H2 Conditions');
assert(html.includes('Advanced Knee Osteoarthritis</h3>'), 'H3 Advanced Knee Osteoarthritis');
assert(html.includes('Severe Joint Damage and Persistent Pain</h3>'), 'H3 Severe Joint Damage');
assert(html.includes('1. Preoperative Assessment and Planning</h3>'), 'H3 Step 1');
assert(html.includes('2. Robotic-Assisted Surgical Guidance</h3>'), 'H3 Step 2');
assert(html.includes('3. Implant Placement and Postoperative Care</h3>'), 'H3 Step 3');
assert(html.includes('What Are the Potential Benefits of Robotic Knee Replacement?</h2>'), 'H2 Benefits');
assert(html.includes('Robotic vs Conventional Knee Replacement: What Is the Difference?</h2>'), 'H2 Difference');
assert(html.includes('How Long Does Recovery Take After Robotic Knee Replacement Surgery?</h2>'), 'H2 Recovery');
assert(html.includes('Early Recovery and Mobility</h3>'), 'H3 Early Recovery');
assert(html.includes('The Role of Physiotherapy</h3>'), 'H3 Role of Physiotherapy');
assert(html.includes('Returning to Daily Activities</h3>'), 'H3 Returning to Daily Activities');
assert(html.includes('What Are the Risks and Disadvantages of Robotic Knee Replacement?</h2>'), 'H2 Risks');
assert(html.includes('What Is the Cost of Robotic Knee Replacement?</h2>'), 'H2 Cost');
assert(html.includes('Making an Informed Decision About Knee Replacement</h2>'), 'H2 Decision');
assert(html.includes('Frequently Asked Questions About Robotic Knee Replacement</h2>'), 'H2 FAQs');

// 9. Semantic Structures
assert(html.includes('<ol class="blog-procedure-ol">'), 'Semantic ordered list for procedure steps');
assert(html.includes('<ul class="blog-benefits-ul">'), 'Semantic unordered list for potential benefits');

// 10. Internal links
assert(html.includes('href="/services/joint-replacement"') && html.includes('joint replacement services</a>'), 'Internal link to /services/joint-replacement');
assert(html.includes('href="/physiotherapy"') && html.includes('physiotherapy services</a>'), 'Internal link to /physiotherapy');
assert(html.includes('href="/contact"') && html.includes('contact SOS Speciality Orthopedic Clinic</a>'), 'Internal link to /contact');

// 11. Hero Image
assert(html.includes('alt="Robotic knee replacement surgery for knee joint treatment"'), 'Hero image alt text match');
assert(html.includes('width="1730"') && html.includes('height="909"'), 'Hero image explicit dimensions (CLS prevention)');
assert(html.includes('loading="eager"'), 'Hero image loading eager');

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
    assert(faq && faq.mainEntity && faq.mainEntity.length === 5, 'FAQPage has exactly 5 FAQ entries');
  } catch (err) {
    assert(false, `JSON-LD parsing failed: ${err.message}`);
  }
}

// 14. Technical SEO Files
const sitemap = fs.readFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), 'utf-8');
assert(sitemap.includes('https://www.sosorth.com/blog/robotic-knee-replacement-surgery'), 'Sitemap includes post URL');

const robots = fs.readFileSync(path.resolve(rootDir, 'public', 'robots.txt'), 'utf-8');
assert(robots.includes('Sitemap: https://www.sosorth.com/sitemap.xml'), 'Robots references sitemap');
assert(robots.includes('Allow: /'), 'Robots allows /');

const vercelJson = fs.readFileSync(path.resolve(rootDir, 'vercel.json'), 'utf-8');
assert(vercelJson.includes('"rewrites"'), 'vercel.json has SPA rewrites configured');

// 15. Zero TODO placeholders
assert(!html.includes('TODO'), 'Generated HTML contains zero TODO placeholders');

console.log(`\nValidation complete: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
