import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import IndexingPost from '../components/IndexingPost'
import BlogIndexCard from '../components/blog-index-card'
import SiteHeader from '../components/SiteHeader'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { allMarkdownRemark } = this.props.data
    /*const posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts.forEach(post => {
      if (post.node.path !== '/404/') {
        const postTitle = get(post, 'node.frontmatter.title')
        pageLinks.push(
          <IndexingPost title={postTitle} link={post.node.frontmatter.path}/>
        )
      }
    })
    */
    
    return (
      <div className="index">
        <div className="siteHead"><SiteHeader /></div>
        <div className="mainContent">
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
      limit: 2000,
      sort: {
        fields: [frontmatter___date]
        order: DESC
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

