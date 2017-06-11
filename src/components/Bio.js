import React from "react"

import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
       <img
          src={`https://avatars1.githubusercontent.com/u/156855?s=100`}
          alt={`Jason Mitchell`}
          style={{
            float: "left",
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />        
        Written by
        {" "}
        <strong>Jason Mitchell</strong>
        {" "}
        {" "}
      </p>
    )
  }
}

export default Bio
