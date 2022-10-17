import isLive from '@/utils/environment';

const CMS = {
  BLOG_RESULTS_PER_PAGE: 13,
  BLOG_RESULTS_PER_PAGE_TAGGED: 12,
  // Next.js will try and re-build the page when a request comes in
  // every 10 minutues for production and every 30 seconds for staging
  CONTENT_REVALIDATE_RATE: isLive() ? 600 : 30,
};

export default CMS;
