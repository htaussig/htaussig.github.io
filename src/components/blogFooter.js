import React from "react"
import MailChimpForm from "../components/MailChimpForm"

export default function BlogFooter() {
  return (

    <div style={{marginLeft: "10px", marginTop: "25px"}}>
    
    {/* <hr></hr> */}
			
    
      <MailChimpForm />
    {/* <hr></hr> */}
    
      <p style={{marginTop: "30px"}}>(Go back to <a href="../" >my writing</a>)</p>

    </div>
      
  );
}

