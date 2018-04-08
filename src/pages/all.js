import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import IndexingPost from '../components/IndexingPost'
import BlogIndexCard from '../components/blog-index-card'
import SiteHeader from '../components/SiteHeader'
import Bio from '../components/Bio'

class AllBlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = this.props.data.site.siteMetadata.title
    const { allMarkdownRemark } = this.props.data

    
    return (
      <div className="pageContainer">
        <div className="header">
          <SiteHeader />
          <Helmet title={`${siteTitle}`} />
        </div>
        

        <div className="blogContent">
        

           <ul className="">
          {allMarkdownRemark.edges.map(({ node }) =>
            <BlogIndexCard post={node}  />
          )}
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

