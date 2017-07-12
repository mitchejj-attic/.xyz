import React from 'react'
import {TypographyStyle} from 'react-typography'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import typography from './utils/typography'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (err) {
    console.log(err)
  }
}

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
        dangerouslySetInnerHTML={{ __html: stylesStr }}
          id="gatsby-inlined-css"
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {

}
HTML.defaultProps = {

}
