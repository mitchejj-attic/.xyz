import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import IndexingPost from '../components/IndexingPost'
import BlogIndexCard from '../components/blog-index-card'
import SiteHeader from '../components/SiteHeader'
import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = this.props.data.site.siteMetadata.title
    const { allMarkdownRemark } = this.props.data
    
    return (
      <div className="pageContainer">
        <div className="header">
          <SiteHeader />
        </div>
      
        <div className="blogContent">
          
            {allMarkdownRemark.edges.map(({ node }) =>
              <BlogIndexCard post={node} />
            )} 
          
            <ul className="pl0">
            <li className="h3 cleanlist indexlist inline-block mr1"><Link to="all/">the archive</ Link></li>
            <li className="h3 cleanlist indexlist inline-block mr1"><Link to="about/">who am i</ Link></li>  
          </ul>
           
          
        </div>
      </div>

    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
}

export default BlogIndex

export const pageQuery = graphql`
query BlogPostsIndexQuery {
  site {
    siteMetadata {
      title
    }
  }
    allMarkdownRemark(
      limit: 3,
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
      filter: {
        fileAbsolutePath: { regex: "/blog/published/" }
      })
      {
        edges {
          node {
            ...blogIndexCardFragment_item
        }
        
      }
    }
  }
`

