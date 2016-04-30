const blog_source = 'post/**/*.md' // will match zero or more directory in post

import each_upto from '../handlebars/helpers/each_upto'
import ISODate from '../handlebars/helpers/ISODate'

const config = {
  destination: './build/_site',
  layouts: {
    engine: 'handlebars',
    pattern: '**/!(*.css|*.scss)+(*.md|*.html)',  // https://stackoverflow.com/questions/24222093/node-javascript-glob-file-path-matching-syntax-wildcards-etc
    default: 'default.hbs',
    directory: 'handlebars/layouts/',
    partials: 'handlebars/partials',
    helpers: {
      each_upto: each_upto,
      iso_date: ISODate
    }
  },
  inplace: {
    engine: 'handlebars',
    pattern: '**/*.markdown',
    partials: 'layouts/partials',
    helpers: {
      each_upto: each_upto,
      iso_date: ISODate
    }
  },
  blog: {
    source: blog_source,
    // permalinks: ':collection/:year/:month/:day/:slug'
    pattern: ':year/:month/:day/:slug',
    relative: false
  },
  collections: {
    blog: {
      pattern: blog_source,
      sortBy: 'date',
      reverse: true
    },
    io: {
      pattern: 'io/**/*'
    }
  },
  p2: {
      // original options would act as the keys of a `default` linkset,
    pattern: ':collection/:title',

      // each linkset defines a match, and any other desired option
    linksets: [{
      match: { collection: 'blog' },
      permalinks: ':collection/:year/:month/:day/:slug'
    }]
  }
}
export default config
