import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'

export default class IndexingPost extends React.Component {
    render() {
        const postTitle = this.props.title
        const postLink = this.props.link
        return (
            <li key={postLink}
                style={{
                    marginBottom: rhythm(1 / 4)
                }}>
                <Link to={postLink}>
                    {postTitle}
                </Link>
            </li>   
        )
    }
}

