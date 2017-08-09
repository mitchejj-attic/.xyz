import React from 'react'
import Link from 'gatsby-link'

export default class Image extends React.Component {
    static defaultProps = {
        image: null,
  }
    render() {
        const {url, caption} = this.props.image

        return (
            <figure className="blog-figure" >
                <img className="blog-image" src={url} alt={caption} />
            </figure>
        )
    }
}
