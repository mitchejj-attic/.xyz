#configure :development do
   activate :livereload
#end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir,  "fonts"
set :partials_dir, '/layouts/partials'
set :build_dir, 'tmp'

Time.zone = "America/New_York"
activate :directory_indexes
activate :syntax
set :markdown_engine, :kramdown
set :markdown, :layout_engine => :erb,
               :tables => true,
               :autolink => true,
               :smartypants => true

configure :build do
#   activate :minify_html
   activate :minify_css
   activate :minify_javascript
   activate :asset_hash, :ignore => [/^images\//]
   activate :relative_assets
   activate :gzip
end

###
# Blog settings
###
activate :blog do |blog|
   blog.layout = "post"
   blog.default_extension = ".md"
   blog.summary_separator = /(READMORE)/
   blog.summary_length = 303

   blog.sources = "post/:year-:month-:day-:title.html"
   blog.permalink = "{year}/{month}/{day}/{title}/index.html"

   blog.tag_template = "tag.html"
   blog.taglink = "explore/{tag}/index.html"

   blog.calendar_template = "calendar.html"
   blog.year_link = "explore/{year}/index.html"

   # Enable pagination
   blog.paginate = true
   blog.per_page = 10
   blog.page_link = "p{num}"
end

page "/feed.xml", layout: false

###
# Compass
###

# Change Compass configuration
#compass_config do |config|
#  config.output_style = :dcompact
#end
###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
