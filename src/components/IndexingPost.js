import React from 'react'
import Link from 'gatsby-link'

export default class IndexingPost extends React.Component {
    render() {
        const postTitle = this.props.title
        const postLink = this.props.link

        return (
            <li className="h3 cleanlist indexlist"><Link to={postLink}>{postTitle}</Link></li>
            
        )
    }
}
