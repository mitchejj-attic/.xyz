import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import IndexingPost from '../components/IndexingPost'
import PostCard from '../components/post-card'
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


          {allMarkdownRemark.edges.map(({ node }) =>
            <PostCard post={node}  />
          )}
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
query BlogPostsAllQuery {
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
            ...blogPostCardFragment_item
        }
        
      }
    }
  }
`

