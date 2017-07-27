import React from "react"
import PropTypes from 'prop-types'
import graphql from 'graphql'
import get from 'lodash/get'
import Link from "gatsby-link"


class BlogIndexCard extends React.Component {
    render() {
        const post = this.props.post

        return (
            <li className="h3 cleanlist indexlist"><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></li>
        )
    }
}

export default BlogIndexCard

export const blogIndexCardFragment = graphql`
    fragment blogIndexCardFragment_item on MarkdownRemark {
        
            frontmatter {
            title
            subtitle
            path
            date
          }
        
    }
`