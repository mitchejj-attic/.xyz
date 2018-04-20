import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import BlogIndexCard from '../components/blog-index-card'

class AllBlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = this.props.data.site.siteMetadata.title
    const { allMarkdownRemark } = this.props.data

    return (
      <div id="grid">
        <div class="header stanchionbox">
          <h1 class="h3 mt0 mb0">
            <Helmet title={`${siteTitle}`} />    
            {siteTitle}
          </h1>
        </div>
        <div class="content">
          {allMarkdownRemark.edges.map(({ node }) =>
            <BlogIndexCard post={node} />
          )}
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

AllBlogIndex.propTypes = {
  route: PropTypes.object
}

export default AllBlogIndex

export const pageQuery = graphql`
query AllBlogPostsIndexQuery {
  site {
    siteMetadata {
      title
    }
  }
    allMarkdownRemark(
      limit: 2000,
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
      filter: {
        fileAbsolutePath: { regex: "/blog/published/" }
      }
    )
      {
        edges {
          node {
            ...blogIndexCardFragment_item
        }
        
      }
    }
  }
`

