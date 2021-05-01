// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`
// })

module.exports = {
    siteMetadata: {
      title: "Harry Taussig",
      description: "My personal site",
      siteUrl: "https://harrytaussig.com/",
      site_url: "https://harrytaussig.com/"
        
    },
    plugins: [
      `gatsby-plugin-material-ui`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-twitter`,
      // {
      //   resolve: `gatsby-plugin-manifest`,
      //   options: {
      //     icon: `src/images/favicon.png`,
      //   },
      // },
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
          endpoint: 'https://harrytaussig.us7.list-manage.com/subscribe/post?u=8a3b9500239292a2a947aaad8&amp;id=be50be427f',
          timeout: 3500,
        }
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allMarkdownRemark } }) => {
                return allMarkdownRemark.edges.map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  })
                })
              },
              query: `
                {
                  allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] },
                  ) {
                    edges {
                      node {
                        excerpt
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                }
              `,
              output: "/rss.xml",
              title: "Your Site's RSS Feed",
              // optional configuration to insert feed reference in pages:
              // if `string` is used, it will be used to create RegExp and then test if pathname of
              // current page satisfied this regular expression;
              // if not provided or `undefined`, all pages will have feed reference inserted
              match: "^/blog/",
              // optional configuration to specify external rss feed, such as feedburner
              // link: "https://feeds.feedburner.com/gatsby/blog",
            },
          ],
        },
      },

      // 'https://harrytaussig.us7.list-manage.com/subscribe/post?u=8a3b9500239292a2a947aaad8&amp;id=be50be427f'

    ]

}

