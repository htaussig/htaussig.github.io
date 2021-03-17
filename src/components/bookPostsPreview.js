import React from "react"

// import { Link } from "gatsby"
//      <Link to="/">Home</Link>

import { useStaticQuery, Link, graphql } from "gatsby"

//-------------------------------------------

const white = {
	color: "#eeeeee",
}

const gray = {
	color: "#808080",
    margin: "20px 0px 30px 0px",
}

//-------------------------------------------





export default function BookPostsPreview() {

    //static query because we are in a component here
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
                filter: {fileAbsolutePath: {regex: "/.*(\/pages\/books)/.*.md$/"}}
                    ) {
                    totalCount
                    edges {
                        node {
                        fileAbsolutePath
                        id
                        frontmatter {
                            title
                            author
                            subtitle
                            date(formatString: "DD MMMM, YYYY")
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
                <h2>
                    <span style = {white}>
                    {node.frontmatter.title}{" "}
                    </span>

                    <span style = {gray}>
                    — {node.frontmatter.author}
                    </span>
                    
                </h2>
                {/* <p>{node.excerpt}</p> */}
                </Link>
                

                <p style = {gray}> {node.frontmatter.subtitle} </p>

       
            </div>
            
        ))}

    </div>
      
  );
}

