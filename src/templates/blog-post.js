import React from 'react'
import Helmet from 'react-helmet'
import '../css/base.css'
import Bio from '../components/Bio'
import SiteHeader from '../components/SiteHeader'
import Link from 'gatsby-link'
import Image from '../components/Image'
import format from 'date-fns/format'
function Qtime(props) {
  const RFC3339 = 'YYYY-MM-DDTHH:mm:ssZ'
  return (
    <time className="h5">{format(props.date, 'dddd MMMM D, YYYY')}</time>
  )
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const image = post.frontmatter.meta.image
    const helmet_title = post.frontmatter.title + ' | ' + siteTitle
    
    return (
      <div id="grid">
        
        <div class="header stanchionbox">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1 class="h3 mt0 mb0">
            {post.frontmatter.title} | <Link to={'/'} >{siteTitle}</Link>
          </h1>
          <div className="h4">
            {post.frontmatter.subtitle}
          </div>
          <Qtime date={post.frontmatter.date} />
        </div>
        <div class="content">
          {post.frontmatter.dispatch &&
            <div className="dispatch"><p>My notion of dispatches (linked list) has yet to be fully implemented, until I do just follow the <a href={post.frontmatter.dispatch}>link here.</a>
            </p></div>
          }
          <article title={post.frontmatter.title} className="blogContent thebox">
            {image.url && <Image image={image} />}
            <div className="index-markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
        <div class="footer stanchionbox">
          <ul className="pl0">
            <li className="h3 cleanlist indexlist inline-block mr1"><Link to="/all/">the archive</ Link></li>
            <li className="h3 cleanlist indexlist inline-block mr1"><Link to="/about/">who am i</ Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
        path
        title
        subtitle
        date
        dispatch
        tags
        meta {
          description
          image {
            url
            caption
            link
          }
        }
      }
    }
  }
`
