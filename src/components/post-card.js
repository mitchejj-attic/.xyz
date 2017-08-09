import React from "react"
import PropTypes from 'prop-types'
import graphql from 'graphql'
import get from 'lodash/get'
import Link from "gatsby-link"


class PostCard extends React.Component {
    render() {
        const post = this.props.post
        const __html = this.props.post.internal.content

        return (
            <div>
                <h1><Link to={post.frontmatter.path}> {post.frontmatter.title}</Link></h1>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        )
    }
}

export default PostCard

export const blogIndexCardFragment = graphql`
    fragment blogPostCardFragment_item on MarkdownRemark {
        internal {
          content }
            frontmatter {
            title
            subtitle
            path
            date
          }
        
    }
`