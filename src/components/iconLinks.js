import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

library.add(fab, faCheckSquare, faCoffee)

const icon = {
	color: "#0081c7",

	paddingRight:"10px",
	paddingTop: "25px",

	marginTop: "-8px",
	marginLeft: "17px",
	marginRight: "-8px",
	right: "0px",
	float: "left",
}

export default function iconLinks() {
  return (
    
    <div>
		{/* <!-- just delete the space between the next 2 < ?php include $_SERVER['DOCUMENT_ROOT'] . '/templates/subscribe.html' ?> --> */}
	

		<a href="https://twitter.com/harry_taussig" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} size={"3x"} style={icon} /></a>
					
		<a href="https://github.com/htaussig" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size={"3x"} style={icon} /></a>

		<a href="https://goodreads.com/harrytaussig" target="_blank"><FontAwesomeIcon icon={['fab', 'goodreads-g']} size={"3x"} style={icon} /></a>

		
	</div>
      
  );
}