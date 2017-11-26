import React from 'react'
import Helmet from 'react-helmet'
// import '../css/base.css'
import Bio from '../components/Bio'
import SiteHeader from '../components/SiteHeader'
import Link from 'gatsby-link'


class InfoPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postTitle = this.props.data.markdownRemark.frontmatter.title
    const siteTitle = this.props.data.site.siteMetadata.title

    const helmet_title = post.frontmatter.title + ' | ' + siteTitle

    return (
      
      <div className="blogContainer">
      <Helmet title={`${helmet_title}`} />  
        <div> {postTitle} | {siteTitle} </div>
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
