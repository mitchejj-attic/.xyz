import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'  
import { Text } from 'rebass'

export default class IndexingPost extends React.Component {
    render() {
        const postTitle = this.props.title
        const postLink = this.props.link
        const ListItem = styled.li`
	    list-style-type: none;
        line-height: 1.62;
`;

        return (
            <li className="h3 cleanlist indexlist"><Link to={postLink}>{postTitle}</Link></li>
            
        )
    }
}
