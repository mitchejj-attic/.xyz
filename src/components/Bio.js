import React from "react"
import Link from "gatsby-link"



class Bio extends React.Component {
  render() {
    // test of prassing props
    let a = ""
    let locationType = this.props.type
    if (locationType = 'head') {
      a = "bio mobileHide"
    }
    let {siteMetadata}= this.props
    let test 
    if (siteMetadata) {
      test = siteMetadata.title
    }
    else {
      test = null
    }

    return (
      <div className={a}>
      <p>I’m Jason; this is my online dwelling; this is the disjointed weblog. I hold a degree in Computer Science from <a href="http://gvsu.edu/">Grand Valley State University</a>. However, instead of putting my degree to uses, I work a retail job, as a manger, for <a href="http://panerabread.com">Panera Bread</a>. Thanks to this experience learned a lot and grown as an individual. Here will live a digital work-space and playground. I will share personal thoughts, refine my writing style and explore different technologies and methodologies. Things may work, things may not work and things may break. As a result, nothing here should be considered finished, polished, refined or ready for mass consumption. With any luck, I will develop this space into an unique blend of tech, running
      and everything I find interesting. </p></div>
    )
  }
}

export default Bio