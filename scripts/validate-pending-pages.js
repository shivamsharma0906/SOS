import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

const pendingUrls = [
  { file: 'blog/index.html', canonical: 'https://www.sosorth.com/blog', title: 'Orthopedic Blog & Patient Recovery Guides | SOS Speciality Clinic Mumbai' },
  { file: 'mentors/index.html', canonical: 'https://www.sosorth.com/mentors', title: 'Our Mentors & Surgical Faculty | SOS Speciality Orthopedic Clinic Mumbai' },
  { file: 'services/index.html', canonical: 'https://www.sosorth.com/services', title: 'Our Orthopedic Specialities & Clinical Pathways | SOS Mumbai' },
  { file: 'home-services/index.html', canonical: 'https://www.sosorth.com/home-services', title: 'Comprehensive Orthopedic Home Care & Doorstep Services Mumbai | SOS Clinic' },
  { file: 'physiotherapy/index.html', canonical: 'https://www.sosorth.com/physiotherapy', title: 'Orthopedic Physiotherapy & Surgeon-Led Joint Rehab Mumbai | SOS Clinic' },
  { file: 'x-ray-services-at-home/index.html', canonical: 'https://www.sosorth.com/x-ray-services-at-home', title: '24/7 Digital X-Ray Services at Home in Mumbai | SOS Orthopedic Clinic' }
];

console.log('--- Validating 6 Google Search Console Pending Pages in dist/ ---');
let allPassed = true;

for (const p of pendingUrls) {
  const fullPath = path.resolve(distDir, p.file);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing file: ${p.file}`);
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  const hasCanonical = content.includes(`<link rel="canonical" href="${p.canonical}" />`);
  const hasRobots = content.includes('<meta name="robots" content="index, follow" />');
  const hasTitle = content.includes(`<title>${p.title}</title>`);
  const hasH1 = /<h1[^>]*>.*?<\/h1>/.test(content);
  const hasJsonLd = content.includes('"@type": "MedicalWebPage"');
  const hasNoRootCanonical = !content.includes('<link rel="canonical" href="https://www.sosorth.com/" />');

  if (hasCanonical && hasRobots && hasTitle && hasH1 && hasJsonLd && hasNoRootCanonical) {
    console.log(`✅ ${p.file} -> canonical, robots, title, H1, JSON-LD verified!`);
  } else {
    console.error(`❌ Check failed on ${p.file}:`);
    console.log(`   Canonical match: ${hasCanonical}`);
    console.log(`   No root canonical: ${hasNoRootCanonical}`);
    console.log(`   Robots tag: ${hasRobots}`);
    console.log(`   Title match: ${hasTitle}`);
    console.log(`   Has H1: ${hasH1}`);
    console.log(`   Has JSON-LD: ${hasJsonLd}`);
    allPassed = false;
  }
}

// Also verify that blog post FAQ items are collapsed by default in static HTML
const blogPosts = [
  'blog/robotic-knee-replacement-surgery/index.html',
  'blog/robotic-knee-replacement-recovery-mumbai/index.html'
];

for (const bp of blogPosts) {
  const content = fs.readFileSync(path.resolve(distDir, bp), 'utf-8');
  const hasExpandedTrigger = content.includes('aria-expanded="true"');
  const hasActivePanel = content.includes('blog-faq-panel expanded');
  if (!hasExpandedTrigger && !hasActivePanel) {
    console.log(`✅ ${bp} -> all FAQ items start collapsed by default (aria-expanded="false")!`);
  } else {
    console.error(`❌ ${bp} -> FAQ has open item! aria-expanded="true": ${hasExpandedTrigger}`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🎉 ALL 6 PENDING PAGES & FAQ COLLAPSE CHECKS PASSED PERFECTLY!');
} else {
  console.error('\n❌ Some checks failed!');
  process.exit(1);
}
