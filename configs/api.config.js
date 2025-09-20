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

  GET_BLOG_PUBLISHED: '/blog-published',
  GET_BLOG_PUBLISHED_BY_ID: '/blog-slug/',
  GET_BLOG_METADATA: '/getPageDiscription/selecte/blog',
  //────────────────────────────────────────────
  //? API: ---- User [Product, supplier, purchase] ----
  //────────────────────────────────────────────
  GET_PRODUCT: '/user/product',
  CREATE_PRODUCT: '/user/product',
  UPDATE_PRODUCT: '/user/product/',
  DELETE_PRODUCT: '/user/product/',
  GET_PRODUCT_BY_ID: '/user/product/',
  GET_PRODUCT_BY_SEARCH: '/user/product/search?q=',
};

export default apiConfig;