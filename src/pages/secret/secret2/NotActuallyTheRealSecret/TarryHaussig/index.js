import * as React from "react"

import "/src/styles/global.css"
import EvilHead from "/src/components/evilHead"
import EvilHeader from "/src/components/evilHeader"
import IconLinks from "/src/components/iconLinks"

import { graphql } from "gatsby"


var myFaceImg = require('/src/images/harry.jpg')

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
  
// ----------------------------------------------------------------------------------------------------------
 
export default function Home({ data }) {

  return (
    
    <div>

		<EvilHead title="Home" />
		
		
		{/* Hardcoded header here for secret */}
		<EvilHeader />

		{/* <img class="large-img" style="float: right;" src="/assets/images/Taussig.png" alt="A really cute picture of Harry with some nice glistening water in the background, just imagine the sound of rushing water pass by as his teeth shine"/> */}

		<img class="large-img" style={{float: "right",}} src={myFaceImg} alt="A really cute picture of Harry with some nice glistening water in the background, just imagine the sound of rushing water pass by as his teeth shine"/>

		<div id="bookDiv">
			<div>
				<h3>10 Seconds</h3>

				<main>
					<p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
					</p>
				</main>
			</div>


			<div>
				<h3 id="meIn10Min">Me in 10 minutes</h3>

				<p>
                    真的吗？为什么你翻译我的句子。总得你不可以懂我本来的意思。要是你真正想了解我，十分钟不够。你得会说中文要是你想了解我。开始学吧。
                </p>
			</div>


			<div id="contactMeDiv">
				<h3 id="contactMe">Contact Me</h3>
				<p>I will be at <a href="https://www.google.com/maps/place/33%C2%B014'50.3%22N+53%C2%B021'50.3%22W/@33.247308,-53.3661587,17z/data=!3m1!4b1!4m9!1m2!2m1!1swakanda!3m5!1s0x0:0x0!7e2!8m2!3d33.2473084!4d-53.3639703" target="_blank">
					this location</a> at 5:00 PM tomorrow if you'd like to meet up!
				</p>
			</div>
		</div>

		<IconLinks />


	</div>

    // </div>

  );
}



export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`