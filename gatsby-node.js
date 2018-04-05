const Promise = require('bluebird')
const path = require('path')
const _ = require('lodash')

const select = require(`unist-util-select`)
const fs = require(`fs-extra`)
const dateFns = require('date-fns')
const slug = require('slug')
slug.defaults.mode = 'rfc3986'

exports.createPages = ({graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const genericPage = path.resolve('./src/templates/generic-page.js')
    resolve(
      graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              frontmatter {
                path
                title
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
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const path = edge.node.frontmatter.path
          if (!path) return
          const id = edge.node.id
          
          if (_.includes(id, `${__dirname}/blog/published/`)) {
            createPage({
              path: path,
              component: blogPost
            })
          }
          else {
            if (!_.includes(id, `${__dirname}/blog/published/`)) {
            createPage({
              path: path,
              component: genericPage
            })
          }
          }

        })
        /*
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path
            }
          })
        })
        */
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
