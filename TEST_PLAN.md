# Test Plan for Static Site Changes

## Prerequisites

1. Set up `.env.local` with valid Contentful credentials:
   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ENVIRONMENT_ID=your_environment_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   CONTENTFUL_PREVIEW_TOKEN=your_preview_token (not needed anymore but keep for compatibility)
   ```

## Build Tests

### 1. Test Production Build

```bash
yarn build
```

**Expected Results:**

- Build completes successfully
- Sitemap is generated at `public/sitemap.xml`
- RSS feeds are generated at `public/rss/feed.xml`, `public/rss/atom.xml`, `public/rss/feed.json`
- All pages are pre-rendered (check `.next/server/pages/` for HTML files)
- No errors about missing pages

### 2. Test Staging Build

```bash
yarn build:staging
```

**Expected Results:**

- Same as production build
- Environment variables reflect staging

### 3. Verify Static Files

```bash
ls -la public/sitemap.xml
ls -la public/rss/
ls -la .next/server/pages/
```

**Expected Results:**

- All static files exist
- HTML files exist for all routes

## Runtime Tests

### 1. Start Production Server

```bash
yarn start
```

### 2. Test Pages Load

- Visit http://localhost:3000
- Visit http://localhost:3000/blog
- Visit a blog post (e.g., http://localhost:3000/blog/[any-post-slug])
- Visit category pages (e.g., http://localhost:3000/category/[any-tag])
- Visit other pages (e.g., http://localhost:3000/contact-us)

**Expected Results:**

- All pages load correctly
- No 404 errors for existing pages
- 404 error for non-existent pages (since fallback is false)

### 3. Monitor Network Activity

Open browser DevTools > Network tab and:

1. Clear network log
2. Navigate to different pages
3. Check for any API calls to `contentful.com` or `ctfassets.net` (except for already-loaded images)

**Expected Results:**

- NO API calls to Contentful API endpoints after page load
- Only static assets (images, CSS, JS) should be loaded
- Images from `ctfassets.net` are allowed (they're pre-rendered in the HTML)

### 4. Test Sitemap

```bash
curl http://localhost:3000/sitemap.xml
```

**Expected Results:**

- Returns XML sitemap
- Contains all static and dynamic pages
- No errors

### 5. Test RSS Feeds

```bash
curl http://localhost:3000/rss/feed.xml
curl http://localhost:3000/rss/atom.xml
curl http://localhost:3000/rss/feed.json
```

**Expected Results:**

- All RSS feeds are accessible
- Contain blog posts
- Properly formatted

## Verification Checklist

- [ ] Build completes without errors
- [ ] All pages are pre-rendered at build time
- [ ] No Contentful API calls at runtime
- [ ] Sitemap is generated and accessible
- [ ] RSS feeds are generated and accessible
- [ ] 404 pages work correctly for non-existent routes
- [ ] No ISR (no revalidation) - content only updates with rebuild
- [ ] Preview pages are removed (404 on /preview/\*)
- [ ] Staging environment password protection still works

## Notes

- Content changes in Contentful will NOT be reflected until a full rebuild
- To update content, run `yarn build` again
- Preview functionality has been removed - all content must be published in Contentful to be visible
