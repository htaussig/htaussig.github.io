import * as React from "react"

import "/src/styles/global.css"
import EvilHead from "/src/components/evilHead"
import EvilHeader from "/src/components/evilHeader"
// import IconLinks from "../../components/iconLinks"
import BlogPostsPreview from "/src/components/blogPostsPreview"

// import { Link, graphql } from "gatsby"




export default function Home({ data }) {
	return (

	<div>
		<EvilHead title="Evil Writing" />
		<EvilHeader />

		<div id="bookDiv">
			<div>
				<h2><u>Evil Writing</u></h2>
			<br></br>
			</div>

			
			<BlogPostsPreview />
			

		</div>

	
	</div>

	);
}
