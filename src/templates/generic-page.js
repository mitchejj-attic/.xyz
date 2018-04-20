import React from 'react'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import SiteHeader from '../components/SiteHeader'
import Link from 'gatsby-link'

class GenericPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postTitle = this.props.data.markdownRemark.frontmatter.title
    const siteTitle = this.props.data.site.siteMetadata.title
    const helmet_title = post.frontmatter.title + ' | ' + siteTitle
    
    return (
      <div id="grid">
        <div class="header stanchionbox">
          <Helmet title={`${helmet_title}`} />
          {postTitle} | {siteTitle}
        </div>
        
        <div class="content pt0">
          <div className="index-markdown" dangerouslySetInnerHTML={{ __html: post.html }} />  
        </div>
        
        <div class="footer stanchionbox">
          <ul className="pl0">
            <li className="h3 cleanlist indexlist inline-block mr1">
              <Link to="/all/">the archive</ Link></li>
            <li className="h3 cleanlist indexlist inline-block mr1">
              <Link to="/about/">who am i</ Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default GenericPageTemplate

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