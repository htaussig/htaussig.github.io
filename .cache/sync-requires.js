const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/about.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/blog/index.js"))),
  "component---src-pages-books-index-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/books/index.js"))),
  "component---src-pages-cool-example-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/coolExample.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/pages/my-files.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/templates/blogPost.js"))),
  "component---src-templates-book-post-js": hot(preferDefault(require("/Users/harrytaussig/Documents/mySite/htaussig.github.io/src/templates/bookPost.js")))
}

