module.exports = {
  siteMetadata: {
    title: ".xyz",
    author: "Jason Mitchell",
     site_url: "https://home.xyz"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allMarkdownRemark }) => (
    allMarkdownRemark.edges.map(edge => ({
      url: site.siteMetadata.site_url + edge.node.frontmatter.path
    }))),
        query: `
        {
          site {
            siteMetadata {
              site_url
            }
          }
          allMarkdownRemark(
            limit: 2000,
            sortBy: {
              fields: [frontmatter___date]
              order: DESC
          }) {
            edges {
              node {
                frontmatter {
                  path
                }
            }
          }
        }
      }
  `,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
