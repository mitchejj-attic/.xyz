import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import format from "date-fns/format"

function Qtime(props) {
  const RFC3339 = 'YYYY-MM-DDTHH:mm:ssZ'
  return (
    <time className="small">{format(props.date, 'YYYY-MM-DD')}</time>
  )}


export default class SiteHeader extends React.Component {
    /*static propTypes = {
        pathName: PropTypes.string,
        pageTitle: PropTypes.string,
        date: PropTypes.string,
    }*/
    static defaultProps = {
        path: '/',
        pageTitle: null,
        date: null,
  }
    render() {
        const pathName = this.props.path
        const pageTitle = this.props.pageTitle
        const date = this.props.date

        let header
        
        if (pathName === '/') {
            header = (
                <h1 className="center reset"><Link to={'/'} >
                    {siteMetadata.title}
                </Link></h1>
            )
        }
        else {
            header = (
                <hrgroup>
                <h2 className="center reset"><Link to={'/'} >
                    {siteMetadata.title}
                    </Link></h2>
                <h1>{pageTitle}</h1>
                </hrgroup>              
            )
        }

        return (
            <div className="center reset">{header}
            {date &&
            <Qtime date={date} />
          } </div>
            
        )
    }

}
/*
export const pageQuery = graphql`
fragment PostDetails on BlogPostByPath {
    meta {
          description
          image {
            url
            caption
            link
          }
}

in BlogPostByPath insert ...PostDetails
*/