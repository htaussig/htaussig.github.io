import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import IconLinks from "/src/components/iconLinks"



// ------------------------------------------------------------------------------------------------------------------

// styles
const body = {
	maxWidth:"40em",
	margin: "0 auto",
	padding: "5px",
	fontFamily: "Georgia, serif",
	fontSize: "20px",
	lineHeight:"30px",
	color: "#eeeeee",
	backgroundColor: "#20272F",
  }

  const gray = {
	color: "#808080",
    // margin: "20px 0px 30px 0px",
}
  
// ----------------------------------------------------------------------------------------------------------
 
export default function Home() {
  return (
    
    <div>

		<Head title="what were you thinking" />
		<Header />

		

		<div id="bookDiv">
			<div>
				<h2>What the actual <a href="/secret/secret2">heck</a></h2>

				<p>What are doing just going around clicking on people's names like that?
					You click your own name with that mouse?
					<br></br>
					<br></br>
					Some people
				</p>
				
			</div>


		</div>

		<IconLinks />


	</div>

    // </div>

  );
}



// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `