import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
// import IconLinks from "../../components/iconLinks"
import BlogPostsPreview from "/src/components/blogPostsPreview"

// import { Link, graphql } from "gatsby"




export default function Home({ data }) {
	return (

	<div>
		<Head title="Writing" />
		<Header />

		<div id="bookDiv">
			<div>
				<h2><u>Writing</u></h2>
			<br></br>
			</div>

			
			<BlogPostsPreview />
			

		</div>

	
	</div>

	);
}
