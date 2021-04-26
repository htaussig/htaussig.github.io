import * as React from "react"

// import "/src/styles/global.css"
import Head from "/src/components/head"
// import Header from "/src/components/header"
import IconLinks from "/src/components/iconLinks"

import { graphql } from "gatsby"

import { Helmet } from "react-helmet"
import SubscribeForm from "../components/subscribeForm"

var myFaceImg = require('/src/images/Taussig.png')

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

		<Head title="Home" />
		
		
		{/* Hardcoded header here for secret */}
		<div>
        <h1><a  id="pageTitle" href="/secret/">{data.site.siteMetadata.title}</a></h1>
        <nav id="navbar">		
            <a id="navbarlink" href="http://notes.harrytaussig.com">Garden</a>

            <a id="navbarlink" href="/generative/">Art</a>

            <a id="navbarlink" href="/blog/">Writing</a>	
        </nav>
        <hr></hr>
    	</div>

		{/* <img class="large-img" style="float: right;" src="/assets/images/Taussig.png" alt="A really cute picture of Harry with some nice glistening water in the background, just imagine the sound of rushing water pass by as his teeth shine"/> */}

		<img class="large-img" style={{float: "right",}} src={myFaceImg} alt="A really cute picture of Harry with some nice glistening water in the background, just imagine the sound of rushing water pass by as his teeth shine"/>

		<div id="bookDiv">
			<div>
				<h3>Me In 10 Seconds</h3>

				<main>
					<p>I am a Junior CS Major at Haverford College minoring in Chinese, now getting more involved with Software Engineering and <a href="https://www.effectivealtruism.org/" target="_blank">Effective Altruism</a>.
					Trying my best to learn, to connect, and to help others.
					</p>
				</main>
			</div>


			<div>
				<h3 id="meIn10Min">Me in 10 minutes</h3>

				<p>What I'm doing right <a href = "/now/">now</a>, my work in <a href="/generative/" target="_blank">creative coding</a> and a
				<a href="https://fir-test-dfe3a.firebaseapp.com/" target="_blank"> 3D version of classic Snake</a> that I made in Processing.</p>
			</div>


			<div id="contactMeDiv">
				<h3 id="contactMe">Contact Me</h3>
				<p>Email me at htaussig@gmail.com, or <a href="./contactMe">set up a meeting</a>!</p>
			</div>
		</div>

		<script
			dangerouslySetInnerHTML={{
				__html: `
				!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/8a3b9500239292a2a947aaad8/40a34962fd1b1c871c83612d9.js");
				`,
			}}
		/>

		{/* <SubscribeForm></SubscribeForm>

		<Helmet>
			<script type='text/javascript'>
				{`
				!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/8a3b9500239292a2a947aaad8/40a34962fd1b1c871c83612d9.js");
				`}
			</script>
		</Helmet> */}

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