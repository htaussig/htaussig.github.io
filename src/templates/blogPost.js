import React from "react"
import { graphql } from "gatsby"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import BlogFooter from "/src/components/blogFooter"
import BlogPostInfo from "/src/components/blogPostInfo"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (

      <div>
        
        
        <Head title={post.frontmatter.title} />
        <Header />

          <div id="bookDiv">

          <h2>{post.frontmatter.title}</h2>

          <p id="blogPostInfo">
            {post.frontmatter.date}
          <br></br> 

          </p>

              {/* <!-- Write here --> */}
              <div dangerouslySetInnerHTML={{ __html: post.html }} />

              {/* <!-- Write here --> */}

          
          <BlogFooter />
          
        </div>
      </div>

  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`