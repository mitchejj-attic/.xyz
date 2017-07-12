const Promise = require('bluebird')
const path = require('path')
const _ = require('lodash')

const select = require(`unist-util-select`)
const fs = require(`fs-extra`)
const dateFns = require('date-fns')
const slug = require('slug')

slug.defaults.mode = 'rfc3986'

const createPath = frontmatter => {
  /* Work In Progress */
  const title = frontmatter.title
  const subtitle = frontmatter.subtitle
  const date = frontmatter.date
  return '/junk/'
}

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path, // || '/junk/',
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path
            }
          })
        })
      })
    )
  })
}

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
/*exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators

  switch (node.internal.type) {
    case 'File':{
      const parsedFilePath = path.parse(node.relativePath)
      const slug = `/${parsedFilePath.dir}/`
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
      return
    }
    case 'MarkdownRemark': {
      const fileNode = getNode(node.parent)
      const frontmatterPath = _.get(node, 'frontmatter.path') || createPath(_.get(node, 'frontmatter'))
      createNodeField({
        node,
        name: 'slug',
        value: frontmatterPath
      })
    }
  }
}*/
