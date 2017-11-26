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
    <time className="time-divide">{format(props.date, 'dddd MMMM D, YYYY')}</time>
  )
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const image = post.frontmatter.meta.image
    const helmet_title = post.frontmatter.title + ' | ' + siteTitle
    
    return (
      <div className="blogContainer">

        <div className="header">
          <div className="siteHead">
            <SiteHeader pageTitle={post.frontmatter.title} date={post.frontmatter.date} subtitle={post.frontmatter.subtitle} />
          </div>
        </div>

        <div className="blogHead">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <Qtime date={post.frontmatter.date} />
        </div>
        
        <article title={post.frontmatter.title} className="blogContent thebox">
          <h1 className="h2 card-title mt0">{post.frontmatter.title}</h1>
          {post.frontmatter.dispatch &&
            <div className="dispatch"><p>
              My notion of dispatches (linked list) has yet to be fully implemented, until I do just follow the <Link to={post.frontmatter.dispatch}>link here.</Link>
            </p></div>
          }
          {image.url && <Image image={image} />}
          <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
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
