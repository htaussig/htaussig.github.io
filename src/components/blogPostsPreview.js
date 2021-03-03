import React from "react"

// import { Link } from "gatsby"
//      <Link to="/">Home</Link>

import { useStaticQuery, Link, graphql } from "gatsby"

//-------------------------------------------

const white = {
	color: "#eeeeee",
}

//-------------------------------------------





export default function BlogPostsPreview() {

    //static query because we are in a component here
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
                filter: {fileAbsolutePath: {regex: "/.*(\/pages\/blog)/.*.md$/"}}
                    ) {
                    totalCount
                    edges {
                        node {
                        fileAbsolutePath
                        id
                        frontmatter {
                            title
                            date(
                                
                                formatString: "DD MMMM, YYYY")
                        }
                        fields {
                            slug
                        }
                        excerpt
                        }
                    }
                }
            }
        `
    )

  return (

    
    <div>


    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }) => (

            
            <div key={node.id}>
                

                {/* <p>{node.fileAbsolutePath}</p> */}

                <Link to={node.fields.slug}>
                <h3>
                    <span style = {white}>
                    {node.frontmatter.title}{" "}
                    
                    {/* — {node.frontmatter.date} */}
                    </span>
                </h3>
                {/* <p>{node.excerpt}</p> */}
                </Link>
                <br></br>

                
            </div>
            
        ))}

    </div>
      
  );
}

