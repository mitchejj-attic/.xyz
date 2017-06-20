import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"
import format from "date-fns/format"

import Bio from "../components/Bio"
import { rhythm, scale } from "../utils/typography"

function Qtime(props) {
  const RFC3339 = 'YYYY-MM-DDTHH:mm:ssZ'
  return (
    <time>{format(props.date, 'YYYY-MM-DD')}</time>
  )}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")


    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <article>
          <h1>{post.frontmatter.title}</h1>
          { post.frontmatter.date &&
            <Qtime date={post.frontmatter.date} />
          }  
          <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio siteMetadata={this.props.data.site.siteMetadata} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`