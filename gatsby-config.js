module.exports = {
    siteMetadata: {
        title: `Harry Taussig`,
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
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

    ]

}