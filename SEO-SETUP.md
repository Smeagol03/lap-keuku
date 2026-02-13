# Vite + React SPA SEO Configuration Guide

## What's Been Done ✅

### 1. Core SEO Meta Tags & Metadata
- **File**: `index.html`
- Added title, description, keywords, theme-color, OG tags, Twitter Card, canonical link
- Added JSON-LD structured data (WebApplication schema)
- PWA manifest support (`public/site.webmanifest`)

### 2. Search Engine & Social Discovery
- **Files**: `public/robots.txt`, `public/sitemap.xml`
- `robots.txt`: Directs crawlers to sitemap, allows all paths
- `sitemap.xml`: Lists indexable routes (currently just home `/`)
- `public/site.webmanifest`: PWA metadata for mobile app-like experience

### 3. Route-Level Meta Tags
- **Component**: `src/components/Seo.tsx`
- Reusable SEO component using `react-helmet-async`
- Override page title, description, OG image per route
- Example usage in `LoginPage.tsx` and `DashboardPage.tsx`

### 4. Prerender Script
- **File**: `scripts/prerender.mjs` + `package.json` script
- Command: `npm run build:prerender`
- Generates static HTML for public routes (currently `/login`)
- Helps search engines crawl and index faster

---

## Implementation Checklist

### ✅ SEO Essentials (Complete)
- [x] Base HTML meta tags (title, description, keywords)
- [x] Open Graph + Twitter Card for social previews
- [x] Canonical URL to avoid duplicate content
- [x] JSON-LD structured data
- [x] PWA manifest
- [x] robots.txt + sitemap.xml
- [x] Route-level meta via `Seo` component
- [x] Prerender script for static generation

### ⚠️ Next Steps (Recommended)

#### 1. **Update Sitemap (`public/sitemap.xml`)**
Replace placeholder with all public, indexable routes:
```xml
<url>
  <loc>https://laporan-keuangan-sand.vercel.app/</loc>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://laporan-keuangan-sand.vercel.app/login</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

#### 2. **Add Route-Level Meta to All Pages**
Place `<Seo />` component at the top of each page (already done for LoginPage & DashboardPage):
```tsx
import Seo from '@/components/Seo';

export default function YourPage() {
  return (
    <>
      <Seo title="Page Title" description="Page description" />
      {/* Page content */}
    </>
  );
}
```

Pages needing `Seo`:
- [ ] `TransactionsPage.tsx`
- [ ] `CategoriesPage.tsx`
- [ ] `ReportsPage.tsx`
- [ ] `SettingsPage.tsx`

#### 3. **Add Social & OG Images**
Each route should have a custom preview image for social sharing:
```tsx
<Seo 
  title="Transactions" 
  image="https://your-domain.com/og-transactions.png"
/>
```
Create a few OG images (1200×630px) in `public/og/` and reference them.

#### 4. **Enable Build Prerender (Optional but Recommended)**
For better SEO on public routes:
```bash
npm run build:prerender  # Instead of npm run build
```
This generates static HTML for `/login` route, making it instantly indexable.

#### 5. **Monitor with Tools**
- **Google Search Console**: Submit sitemap, monitor crawl stats
- **Google PageSpeed**: Check Core Web Vitals (LCP, FID, CLS)
- **SEO Audit**: Use Lighthouse or Ahrefs to spot issues

---

## Architecture Notes

### Current Setup (SPA + Client-Side Meta)
- React app runs entirely in browser
- Meta tags are injected via `react-helmet-async` at runtime
- Search engines CAN crawl (they support JS), but may take time
- Good for **authenticated apps** (dashboard, reports) — users don't need SEO

### If You Want True SSG/ServerSide Rendering
Consider migrating to:
- **Astro**: Static site generation with zero JavaScript overhead
- **Next.js**: Full-stack React with API routes, SSR, SSG
- **Remix**: Modern React framework with built-in SEO support

For now, your current SPA + Helmet setup is solid for a financial app where most content is behind authentication.

---

## Verify SEO is Working

### 1. Check Meta Tags in Browser
```bash
# Open http://localhost:5174/login in browser
# Right-click → Inspect → <head>
# Look for title, description, og:title, twitter:card
```

### 2. Test Social Preview
Use [Open Graph Debugger](https://www.opengraphprotocol.org/tools/inspector/):
- Enter your deployed URL (e.g., https://laporan-keuangan-sand.vercel.app/)
- Verify OG image, title, description render correctly

### 3. Submit Sitemap to Search Engines
- **Google**: [Search Console](https://search.google.com/search-console) → Sitemaps
- **Bing**: [Webmaster Tools](https://www.bing.com/webmasters/) → Sitemaps

---

## File Reference

```
/
├── index.html                           ← Master meta tags & JSON-LD
├── public/
│   ├── robots.txt                       ← Crawler instructions
│   ├── sitemap.xml                      ← Indexable routes (UPDATE ME)
│   └── site.webmanifest                 ← PWA metadata
├── src/
│   ├── components/
│   │   └── Seo.tsx                      ← Reusable per-page SEO component
│   ├── features/auth/
│   │   └── LoginPage.tsx                ← Example: with <Seo> component
│   ├── pages/
│   │   └── DashboardPage.tsx            ← Example: with <Seo> component
│   └── main.tsx                         ← Wrapped with <HelmetProvider>
└── scripts/
    └── prerender.mjs                    ← Static HTML generation (npm run build:prerender)
```

---

## URLs to Test

- **Home**: https://laporan-keuangan-sand.vercel.app/
- **Login** (prerendered): https://laporan-keuangan-sand.vercel.app/login
- **Robots**: https://laporan-keuangan-sand.vercel.app/robots.txt
- **Sitemap**: https://laporan-keuangan-sand.vercel.app/sitemap.xml
