# Summary: Making OPTF Website Entirely Static

## Objective

Remove all runtime Contentful API calls to make the OPTF website entirely static. Content should only be fetched at build time, requiring a full manual rebuild to update content.

## Problem Statement

The original site used Incremental Static Regeneration (ISR) and Server-Side Rendering (SSR) to automatically update content from Contentful at runtime (hourly in production, every 30 seconds in staging). This meant the site was making API calls to Contentful after deployment.

## Solution

Converted the site to be 100% static by:

### 1. Removed Incremental Static Regeneration (ISR)

**Files Changed:**

- `pages/index.tsx`
- `pages/blog/index.tsx`
- `pages/[slug].tsx`
- `pages/category/[tag].tsx`

**Changes:**

- Removed `revalidate` property from all `getStaticProps` functions
- Changed `fallback: 'blocking'` to `fallback: false` in all `getStaticPaths` functions

**Impact:**

- Pages are only generated at build time
- No on-demand regeneration
- Content updates require a full rebuild

### 2. Removed Server-Side Rendering for Preview

**Files Changed:**

- Deleted `pages/preview/[...slug].tsx`

**Changes:**

- Removed entire preview directory
- Eliminated `getServerSideProps` usage

**Impact:**

- No more preview functionality
- Content must be published in Contentful to be visible
- No runtime SSR

### 3. Converted Runtime API Routes to Build-Time Generation

**Files Changed:**

- Deleted `pages/api/sitemap.ts`
- Created `scripts/generate-sitemap.ts`
- Updated `package.json`
- Updated `next.config.js`

**Changes:**

- Created build-time script to generate sitemap
- Added RSS feed generation to build script
- Removed sitemap and feed rewrites from next.config.js
- Script runs before `next build` command

**Impact:**

- Sitemap and RSS feeds are static files
- No API routes calling Contentful at runtime
- Sitemap and feeds update only at build time

### 4. Updated Configuration and Constants

**Files Changed:**

- `constants/cms.ts`
- `.gitignore`

**Changes:**

- Removed `CONTENT_REVALIDATE_RATE` constant
- Added `/public/sitemap.xml` to `.gitignore`
- Removed unused imports

### 5. Updated Documentation

**Files Changed:**

- `README.md`
- Created `TEST_PLAN.md`

**Changes:**

- Updated README to remove mentions of automatic content updates
- Clarified that rebuilds are required for content updates
- Added comprehensive test plan

## Technical Details

### Build Process

```
yarn build → yarn generate:sitemap → next build
```

1. `generate:sitemap` script runs first:

   - Fetches all pages and posts from Contentful
   - Generates `/public/sitemap.xml`
   - Generates RSS feeds in `/public/rss/`

2. Next.js build runs:
   - Pre-renders all pages using `getStaticProps`
   - All Contentful data is fetched at build time
   - No runtime API calls

### Runtime Behavior

- All pages are served as static HTML
- No Contentful API calls after deployment
- No ISR revalidation
- No SSR
- All content is baked into the static build

## Verification

### What Was Removed:

✅ All `revalidate` properties from `getStaticProps`
✅ All `fallback: 'blocking'` from `getStaticPaths`
✅ All `getServerSideProps` usage
✅ All runtime API routes that call Contentful
✅ Preview functionality

### What Remains Static:

✅ All pages use `getStaticProps` (build-time only)
✅ All pages use `getStaticPaths` with `fallback: false`
✅ Sitemap generated at build time
✅ RSS feeds generated at build time
✅ No client-side fetching from Contentful

## Breaking Changes

### For Content Editors:

- Content changes in Contentful now require triggering a new build
- Preview functionality is no longer available
- Changes are not reflected automatically (no hourly/30-second updates)

### For Developers:

- Must run `yarn build` to see content changes
- Cannot test preview content locally without publishing in Contentful
- 404 errors for any pages not pre-generated at build time

## Security Summary

No security vulnerabilities were introduced by these changes. The changes actually improve security by:

- Reducing attack surface (no runtime API calls)
- Eliminating potential for API key exposure at runtime
- Removing dynamic page generation that could be exploited

## Files Modified Summary

```
.gitignore                     | +1 line
README.md                      | Modified (6 lines changed)
constants/cms.ts              | -5 lines (removed CONTENT_REVALIDATE_RATE)
next.config.js                | -12 lines (removed rewrites)
package.json                  | Modified (added generate:sitemap script)
pages/[slug].tsx              | -7 lines
pages/blog/index.tsx          | -2 lines
pages/category/[tag].tsx      | -6 lines
pages/index.tsx               | -2 lines
pages/preview/[...slug].tsx   | Deleted (82 lines)
pages/api/sitemap.ts          | Deleted (104 lines)
scripts/generate-sitemap.ts   | Created (117 lines)
TEST_PLAN.md                  | Created (132 lines)
```

Total: 13 files changed, 250 insertions(+), 227 deletions(-)

## Testing Requirements

See `TEST_PLAN.md` for comprehensive testing instructions.

**Prerequisites:**

- Contentful credentials in `.env.local`

**Key Tests:**

1. Build completes successfully
2. All pages are pre-rendered
3. Sitemap and RSS feeds are generated
4. No Contentful API calls at runtime (monitor network tab)
5. 404 errors for non-existent pages (fallback: false working)

## Rollback Plan

If issues arise, revert the entire PR:

```bash
git revert 3dade6c^..3dade6c
```

Or restore specific functionality:

- ISR: Add back `revalidate` and `fallback: 'blocking'`
- Preview: Restore `pages/preview/` directory
- Sitemap API: Restore `pages/api/sitemap.ts` and rewrite

## Conclusion

The OPTF website is now entirely static with no runtime Contentful API calls. All content is fetched and rendered at build time. A full rebuild is required to update content from Contentful.
