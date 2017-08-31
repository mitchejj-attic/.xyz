import React from 'react'
import Helmet from 'react-helmet'
// import '../css/base.css'
import Bio from '../components/Bio'
import SiteHeader from '../components/SiteHeader'
import Link from 'gatsby-link'


class InfoPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

  return (
    <div className="blogContainer">

          <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
       
    </div>
    )
  }
}

export default InfoPageTemplate

export const pageQuery = graphql`
  query infoPage($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
