import React from 'react'
import Helmet from "react-helmet"
import Link from 'gatsby-link'
import {siteMetadata} from '../../gatsby-config'
import PropTypes from 'prop-types'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="outline">
        <Helmet
          meta={[
            {
              name: `twitter:site`,
              content: `@staticdraft.xyz`,
            },
            {
              name: `og:type`,
              content: `website`,
            },
            {
              name: `og:site_name`,
              content: `Static Draft`,
            },
          ]}
        />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.function,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template