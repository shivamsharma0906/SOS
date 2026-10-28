import https from 'node:https';

https.get('https://www.sosorth.com/?nocache=' + Date.now(), (res) => {
  console.log('STATUS:', res.statusCode);
  console.log('HEADERS:', JSON.stringify(res.headers, null, 2));
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('BODY LENGTH:', data.length);
    console.log('HAS PRELOAD HERO:', data.includes('rel="preload" as="image"'));
    console.log('HAS ROOT CONTENT:', data.includes('Speciality Orthopedic Clinic'));
    console.log('GTM PRESENT:', data.includes('googletagmanager'));
    console.log('FONTS ASYNC:', data.includes('media="print"'));
    console.log('JS BUNDLES:', data.match(/src="\/assets\/[^"]+"/g));
  });
});
