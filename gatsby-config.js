module.exports = {
    siteMetadata: {
        title: `Harry Taussig`,
    },
    plugins: [
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
          endpoint: 'https://harrytaussig.us7.list-manage.com/subscribe/post?u=8a3b9500239292a2a947aaad8&amp;id=be50be427f'
        }
      },

    ]

}

