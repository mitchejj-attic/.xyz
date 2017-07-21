import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PropTypes from 'prop-types'
import styled from 'styled-components' 
import IndexingPost from '../components/IndexingPost'
import SiteHeader from '../components/SiteHeader'
import { Text, Heading, Provider, Divider, Flex, Box } from 'rebass'



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
    
    const UnordredList = styled.ul`

`;

    return (
      <Flex wrap >
        <Box p={2} width={1, 1/4}>
      <SiteHeader />
        </Box>
        <Box p={2} width={1,3/4}>
                <div>
        <Helmet title={siteTitle} />
        <UnordredList>
          {pageLinks}
        </UnordredList>
      </div>
        </Box>
      </Flex >
        

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

