const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //Blog posts!
  const result1 = await graphql(`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/.*(\/pages\/blog)/.*.md$/"}}
        ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  //Books!
  const result2 = await graphql(`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/.*(\/pages\/books)/.*.md$/"}}
        ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //Books!
  result2.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/bookPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  
  //Blogposts!
  result1.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })


  
}