import React from "react"

import { Helmet } from "react-helmet"

export default function Head(props) {

  return (
      
    <Helmet>
      {/* <meta charSet="utf-8" /> */}
      <title>{props.title} | Tarry Haussig</title>
    </Helmet>
      
  );
}
