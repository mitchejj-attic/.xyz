import React from "react"
import PropTypes from 'prop-types'
import graphql from 'graphql'
import get from 'lodash/get'
import Link from "gatsby-link"


class BlogIndexCard extends React.Component {
    render() {
        const post = this.props.post

        return (
        <div className="thebox">
                <div className="h2 card-title index"><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></div>
                
            <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        )
    }
}

export default BlogIndexCard

export const blogIndexCardFragment = graphql`
    fragment blogIndexCardFragment_item on MarkdownRemark {
            html
            frontmatter {
            title
            subtitle
            path
            date
          }
        
    }
`