module.exports = {
  siteMetadata: {
    title: 'StaticDraft.xyz',
    author: 'Jason Mitchell',
    site_url: 'https://staticdraft.xyz',
    profilePic: 'https://avatars1.githubusercontent.com/u/156855?s=100',
    twitter: '@staticdraft',
    env: {
      node: process.versions.node,
      v8: process.versions.v8,
      arch: process.arch,
      platform: process.platform,
      date: new Date().toJSON()
    },
    jason: {
      name: 'Jason Mitchell',
      location: 'Michigan',
      twitter: 'mitchejj',
      strava: '2911431',
      dailymile: 'mitchejj'
    }
  },
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://staticdraft.xyz`,
      }
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: ['postcss-cssnext', 'lost'],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/`,
        name: 'blog'
      }
    },
   /*
      Resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              site_url
            }
          }
          allMarkdownRemark(
            limit: 2000,
            sort: {
              fields: [frontmatter___date]
              order: DESC
          }) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
         }
        }
      `,
      },
    }, */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool'
            }
          }
        ]
      }
    },
   // `gatsby-transformer-sharp`,
   // `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
  ]
}
