import React from "react"



class Bio extends React.Component {
  render() {
    // test of prassing props
    let {siteMetadata}= this.props
    let test 
    if (siteMetadata) {
      test = siteMetadata.title
    }
    else {
      test = null
    }

    return (
      <p
        style={{

        }}
      >
       <img
          src={`https://avatars1.githubusercontent.com/u/156855?s=100`}
          alt={`Jason Mitchell`}
          style={{

          }}
        />        
        Written by
        {" "}
        <strong>Jason Mitchell</strong>
        {" "}
        {test}
      </p>
    )
  }
}

export default Bio