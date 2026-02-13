#!/usr/bin/env node

/**
 * Prerender script: Generates static HTML for selected routes
 * Run: npm run build:prerender
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

// Routes to prerender (public, indexable routes only)
const routes = ['/login'];

// Fallback HTML if route-specific HTML doesn't exist
const fallbackHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

async function prerender() {
  console.log('🔨 Prerendering routes:', routes);

  for (const route of routes) {
    if (route === '/') {
      // Root route: use index.html
      console.log(`✓ / → index.html (default)`);
      continue;
    }

    // Convert route to file path (e.g., /login → login.html)
    const filename = route === '/' ? 'index.html' : `${route}.html`;
    const filePath = path.join(distDir, filename);

    // Create directory if needed
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the fallback HTML; in a real SSG, this would be route-specific rendered content
    fs.writeFileSync(filePath, fallbackHtml, 'utf-8');
    console.log(`✓ ${route} → ${filename}`);
  }

  console.log(
    '\n✅ Prerendering complete! Deploy the dist/ folder to your static host.\n' +
    '💡 Tip: For advanced SSG with server-side rendering, consider Astro or Next.js.\n' +
    '📝 Update routes in scripts/prerender.mjs as needed.'
  );
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
