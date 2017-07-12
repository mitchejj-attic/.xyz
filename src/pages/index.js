import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import IndexingPost from '../components/IndexingPost'

import Bio from '../components/Bio'
import {rhythm} from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts.forEach(post => {
      if (post.node.path !== '/404/') {
        const postTitle = get(post, 'node.frontmatter.title')
        pageLinks.push(
          <IndexingPost title={postTitle} link={post.node.frontmatter.path}/>
        )
      }
    })

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
}

export default BlogIndex

export const pageQuery = graphql`
query IndexQuery {
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
            frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

