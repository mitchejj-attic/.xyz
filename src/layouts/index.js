import React from 'react'
import Link from 'gatsby-link'
import gray from 'gray-percentage'
import {Container} from 'react-responsive-grid'
import {siteMetadata} from '../../gatsby-config'
import PropTypes from 'prop-types'

import {rhythm, scale} from '../utils/typography'

class Template extends React.Component {
  render() {
    const {location, children} = this.props
    const style = {
      root: {
        h1: {
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0
        },
        link: {
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'rgba(28, 28, 28, .28)'
        }
      },
      leaf: {
        h3: {
          marginTop: 0
        },
        link: {}
      }
    }
    let header
    if (location.pathname === '/') {
      header = (
        <h1 style={style.root.h1}>
          <Link style={style.root.link} to={'/'} >
            {siteMetadata.title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h2 style={style.leaf.h3}>
          <Link style={style.root.link} to={'/'} >
            {siteMetadata.title}
          </Link>
        </h2>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

Template.propTypes = {
  children: PropTypes.function,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
