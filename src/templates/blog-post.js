import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"
import '../css/base.css'
import Bio from "../components/Bio"
import SiteHeader from '../components/SiteHeader'
//import { Text, Image } from 'rebass'
import Image from '../components/Image'
import format from "date-fns/format"

function Qtime(props) {
  const RFC3339 = 'YYYY-MM-DDTHH:mm:ssZ'
  return (
    <time className="time-divide">{format(props.date, 'dddd MMMM D, YYYY')}</time>
  )
}

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const image = post.frontmatter.meta.image

    return (

        <div className="blogContainer">
          <div className="header">
          <div className="siteHead">
            <SiteHeader pageTitle={post.frontmatter.title} date={post.frontmatter.date}  subtitle={post.frontmatter.subtitle} />
          </div>
          <div className="blogHead">
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <Qtime date={post.frontmatter.date} />
            <h1 className="reset gray5 h1">{post.frontmatter.title}</h1>
         

            
            
            

          </div>
          </div>  
          <div className="blogContent">
                                <article title={post.frontmatter.title} >
    
            
          
          
          {image.url && <Image image={image} /> } 
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