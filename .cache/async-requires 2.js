// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-index-js": () => import("./../../../src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-books-index-js": () => import("./../../../src/pages/books/index.js" /* webpackChunkName: "component---src-pages-books-index-js" */),
  "component---src-pages-cool-example-js": () => import("./../../../src/pages/coolExample.js" /* webpackChunkName: "component---src-pages-cool-example-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("./../../../src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-book-post-js": () => import("./../../../src/templates/bookPost.js" /* webpackChunkName: "component---src-templates-book-post-js" */)
}

