Time.zone = "America/New_York"
config[:css_dir]      =    'resources/stylesheets'
config[:js_dir]       =    'resources/javascripts'
config[:images_dir]   =    'images'
config[:fonts_dir]    =    'resources/fonts'
config[:layouts_dir]  =    'resources/_layouts'
#config[:partials_dir] =    'resources/_layouts/_partials'

page '/*.xml',    layout: false
page '/*.json',   layout: false
page '/*.txt',    layout: false

###
# Blog settings
###
activate :blog do |blog|
   Time.zone = "America/New_York"
   blog.layout = "resources/_layouts/post"
   blog.default_extension = ".md"
   blog.summary_separator = /(READMORE)/
   blog.summary_length = 500

   blog.sources = "post/{year}-{month}-{day}-{title}.html"
   blog.permalink = "{year}/{month}/{day}/{title}/index.html"

   blog.tag_template = "resources/tag.html"
   blog.taglink = "explore/{tag}/index.html"

   blog.calendar_template = "resources/calendar.html"
   blog.year_link = "explore/{year}/index.html"
   blog.month_link = "explore/{year}/{month}/index.html"
   blog.day_link = "explore/{year}/{month}/{day}/index.html"

   # Enable pagination
   blog.paginate = true
   blog.per_page = 10
   blog.page_link = "p{num}"
end

activate :directory_indexes
activate :syntax
activate :vcs_time
set :markdown_engine, :kramdown
set :markdown, :layout_engine => :erb,
               :tables => true,
               :autolink => true,
               :smartypants => true

configure :build do
   activate :minify_html do |html|
      html.remove_multi_spaces        = true    # Remove multiple spaces
      html.remove_comments            = true    # Remove comments
      html.remove_intertag_spaces     = false   # Remove inter-tag spaces
      html.remove_quotes              = true    # Remove quotes
      html.simple_doctype             = false   # Use simple doctype
      html.remove_script_attributes   = true    # Remove script attributes
      html.remove_style_attributes    = true    # Remove style attributes
      html.remove_link_attributes     = true    # Remove link attributes
      html.remove_form_attributes     = false   # Remove form attributes
      html.remove_input_attributes    = true    # Remove input attributes
      html.remove_javascript_protocol = true    # Remove JS protocol
      html.remove_http_protocol       = false   # Remove HTTP protocol
      html.remove_https_protocol      = false   # Remove HTTPS protocol
      html.preserve_line_breaks       = true    # Preserve line breaks

      html.simple_boolean_attributes  = true    # Use simple boolean attributes
   end
   activate :minify_css
   activate :minify_javascript
#   activate :asset_hash, :ignore => [/^images\//]
   activate :relative_assets
#   activate :gzip
end



configure :development do
   config[:debug_assets] = true
   activate :livereload
end
