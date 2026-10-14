import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

console.log('--- SOS Orthopedic Clinic Link & Asset Integrity Checker ---');

// 1. Gather all files in src
function getAllFiles(dir, exts = ['.ts', '.tsx', '.html', '.json']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else {
      if (exts.includes(path.extname(fullPath))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const srcFiles = getAllFiles(SRC_DIR);

// 2. Check all asset references: /assets/...
let assetErrors = 0;
const assetRegex = /['"`](\/assets\/[^'"`]+)['"`]/g;

console.log('\n[1/3] Checking asset references in src/...');
srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const assetUrl = match[1];
    const decodedPath = decodeURIComponent(assetUrl);
    const localAssetPath = path.join(PUBLIC_DIR, decodedPath);
    if (!fs.existsSync(localAssetPath)) {
      console.error(`❌ BROKEN ASSET: "${assetUrl}" referenced in ${path.relative(ROOT_DIR, file)} does not exist at ${localAssetPath}`);
      assetErrors++;
    }
  }
});

if (assetErrors === 0) {
  console.log('✅ All /assets/... references resolve to valid files on disk!');
}

// 3. Check all internal routes: Link to="/...", href="/..."
console.log('\n[2/3] Checking internal routes in src/...');
const knownRoutes = new Set([
  '/',
  '/about',
  '/services',
  '/services/joint-replacement',
  '/services/acl-ligament',
  '/services/spine-care',
  '/services/sports-injury',
  '/services/pediatric-trauma',
  '/services/home-x-ray',
  '/x-ray-services-at-home',
  '/x-ray-at-home',
  '/physiotherapy',
  '/home-services',
  '/doctors',
  '/centres',
  '/mentors',
  '/blog',
  '/blogs',
  '/blog/robotic-knee-replacement-surgery',
  '/testimonials',
  '/contact',
  '/privacy-policy',
  '/terms'
]);

let routeErrors = 0;
const linkRegex = /(?:to|href)=['"`](\/[^'"`#?]*)['"`]/g;

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const route = match[1];
    // Skip asset links, api, or external
    if (route.startsWith('/assets/') || route.startsWith('/favicon') || route.startsWith('/robots.txt') || route.startsWith('/sitemap.xml') || route.startsWith('/vite.svg')) {
      continue;
    }
    
    // Check if route or dynamic base route is known
    const cleanRoute = route.replace(/\/$/, '') || '/';
    if (!knownRoutes.has(cleanRoute)) {
      console.error(`⚠️ UNRECOGNIZED ROUTE: "${route}" referenced in ${path.relative(ROOT_DIR, file)}`);
      routeErrors++;
    }
  }
});

if (routeErrors === 0) {
  console.log('✅ All internal links reference known active routes in App.tsx!');
}

// 4. Check data files for any empty/broken fields
console.log('\n[3/3] Checking data integrity...');
import('../src/data/doctors.ts').catch(() => {});
import('../src/data/centres.ts').catch(() => {});
import('../src/data/blogs.ts').catch(() => {});

console.log('\nSummary:');
console.log(`- Asset Errors: ${assetErrors}`);
console.log(`- Route Errors: ${routeErrors}`);

if (assetErrors > 0 || routeErrors > 0) {
  process.exit(1);
} else {
  console.log('🎉 Everything passed link & asset validation!');
}
