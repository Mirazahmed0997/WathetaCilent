import CONSTANT from "./constant.config";

const isServer = typeof window === 'undefined';
const API_URL = isServer
  ? `${CONSTANT.API_URL}/${CONSTANT?.API_PREFIX}/v1` // Server-side URL
  : `${CONSTANT.API_URL}/${CONSTANT?.API_PREFIX}/v1` // Client-side URL

const apiConfig = {
  BASE_URL: `${API_URL}`,

  //────────────────────────────────────────────
  //? API: ---- Blog ----
  //────────────────────────────────────────────
  GET_BLOG_PUBLIC: '/blog/post/public',
  GET_BLOG_PUBLIC_BY_SLUG: '/blog/post/public/',
  GET_BLOG_CATEGORIES: '/blog/category/public/',

  GET_BLOG_PUBLISHED: '/blog-published',
  GET_BLOG_PUBLISHED_BY_ID: '/blog-slug/',
  GET_BLOG_METADATA: '/getPageDiscription/selecte/blog',
  //────────────────────────────────────────────
  //? API: ---- Pricing ----
  //────────────────────────────────────────────
  GET_SITE_SEO: '/setting/site-seo',

  GET_ADDONS: '/price/addons/public',

  GET_PRICING: '/price/public/regular',
  GET_PRICING_SEO: '/price/seo',
  CREATE_PAYMENT: 'https://payapi.watheta.com/api/postByDefaultAbandoned',
  //────────────────────────────────────────────
  //? API: ---- Offer ----
  //────────────────────────────────────────────
  GET_OFFER: '/offer/public',
  GET_OFFER_BY_SLUG: '/offer/public/',
  GET_PRICING_OFFER: '/price/public/offer',
};

export default apiConfig;