import React from "react"
import { graphql } from "gatsby"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import BookFooter from "/src/components/bookFooter"
import BlogPostInfo from "/src/components/blogPostInfo"

import Img from "gatsby-image"

import "/src/styles/global.css"

//---styles---------------------------------------------

const bookCoverStyle = {
  float: "right",
  marginTop: "8px",
  marginLeft: "8px"
}

//------------------------------------------------


export default function BookPost({ data }) {
  const post = data.markdownRemark


  let coverImage = post.frontmatter.bookCoverImage.childImageSharp.fixed
  

  return (

      <div>
        
        
        <Head title={post.frontmatter.title} />
        <Header />

          <div id="bookDiv">


            <Img fixed={coverImage} style={bookCoverStyle} />


          <h2>{post.frontmatter.title} - {post.frontmatter.author}</h2>

          <p id="blogPostInfo">
            Read on {post.frontmatter.date}
          <br></br> 
            Rating: {post.frontmatter.rating}
          <br></br> 
          <br></br> 
          (Go back to the whole <a href="../" >book list</a>)


          </p>

              {/* <!-- Write here --> */}
              <div dangerouslySetInnerHTML={{ __html: post.html }} />

              {/* <!-- Write here --> */}

          
          <BookFooter />
          
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
        author
        rating
        date(formatString: "DD MMMM, YYYY")
        bookCoverImage {
          childImageSharp {
            fixed (height: 256) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`