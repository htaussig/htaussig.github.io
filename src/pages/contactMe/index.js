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

		<Head title="Contact" />
		<Header />

		

		<div id="bookDiv">
			<div>
				<h2>Contact Me</h2>

				<p> Woah, you don't even know me! Are you sure you want to do this, I'm just some stranger on the internet?? 
					<br></br>
					<br></br>
					Sounds pretty sketchy if you ask me: <a href="https://calendly.com/htaussig" target="_blank">https://calendly.com/htaussig</a>
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