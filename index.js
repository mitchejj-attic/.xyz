'use strict'

// https://github.com/dpobel/metalsmith-filemetadata
import Metalsmith from 'metalsmith'
import frontmatter from 'metalsmith-matters'
// import define from 'metalsmith-define'
import branch from 'metalsmith-branch'
import markdown from 'metalsmith-markdown'
import paths from 'metalsmith-paths'
import permalinks from 'metalsmith-permalinks'
import collections from 'metalsmith-collections'
import inplace from 'metalsmith-in-place'
import layouts from 'metalsmith-layouts'
import rename from 'metalsmith-rename'
import sitemap from 'metalsmith-mapsite'
// import default_values from 'metalsmith-default-values'
// import pagination from 'metalsmith-pagination'

// const browserSync = require('metalsmith-browser-sync')
// import serve from 'metalsmith-serve'

import metadate from './lib/scripts/metalsmith/meta-dater'
import taggy from './lib/scripts/metalsmith/tag-array'
import forge from './lib/scripts/metalsmith/forge'
import ider from './lib/scripts/metalsmith/ider'
import config from './var/config'
import metadex from './var/site-meta-index'


Metalsmith(__dirname)
.metadata(metadex)
.frontmatter(false)  //
.destination(config.destination)
//  .use(watch())
.use(frontmatter())
.use(branch(config.blog.source)
    .use(metadate())
    .use(taggy())
    .use(ider())
  )

  .use(forge())
  .use(collections(config.collections))
//    .use(function (f,m,d) { console.log(m.metadata().collections); d() }) // DEBUG=metalsmith-collections babel-node index.js
  .use(inplace({
      engine: 'handlebars',
      pattern: '**/*.txt.hbs',
      rename: false,
  }))
  .use(rename([
      [/\.txt.hbs$/, ".text"]
  ]))
  .use(inplace(config.inplace))
  .use(markdown({smartypants: true}))
  .use(permalinks(config.blog.permalinks))
  .use(paths())
//  .use(pagination(
//    {
//      collections.blog
//    }
//  ))
.use(layouts(config.layouts))
//  .use(serve(config.server))
//.use(browserSync({
//  server: config.destination,
//  open: false,
//  logLevel: "debug",
//  files  : ['src/**/*.md', 'layouts/**/*.hbs']
//}))
.use(sitemap({
    hostname: metadex.site.uri,
    omitIndex: true,
    }))
  .build(function(err)
   {
    if (err) throw err;
  })

  function echo () {
    console.log('echo')
}
