import React from 'react'
import Link from 'gatsby-link'
import Lightbox from 'react-images'

export default class Image extends React.Component {
    static defaultProps = {
        src: null,
        caption: null,
  }
    render() {
        const src = this.props.src
        const imageSet = [{
            src: this.props.src
            caption: this.props.src
        }]
        return (
            <figure>
                <img src={src} alt={caption} >
            </figure>
        )
    }
}
