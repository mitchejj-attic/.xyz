import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"
import '../css/base.css'
import Bio from "../components/Bio"
import SiteHeader from '../components/SiteHeader'
import { Text, Image } from 'rebass'
import format from "date-fns/format"

function Qtime(props) {
  const RFC3339 = 'YYYY-MM-DDTHH:mm:ssZ'
  return (
    <time className=" gray5">{format(props.date, 'dddd MMMM D, YYYY')}</time>
  )
}

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div className="containerlost">
        <div className="grid aside">
                  <SiteHeader pageTitle={post.frontmatter.title} date={post.frontmatter.date} path={this.props.location.pathname} subtitle={post.frontmatter.subtitle} />   
        </div>
        <div className="grid main">
          <article title={post.frontmatter.title} >
            <Qtime date={post.frontmatter.date} />
            <h1 className="reset cyan5">{post.frontmatter.title}</h1>
            {post.frontmatter.subtitle && <h2 className="gray5 reset">{post.frontmatter.subtitle}</h2>}
            
          
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <Image src={post.frontmatter.meta.image.url} />  
          <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
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