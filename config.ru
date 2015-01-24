require 'rubygems'
require 'rack'
require 'rack/contrib/try_static'
require 'rack/rewrite'
require 'rack/contrib/not_found'
require 'middleman/rack'

# run Middleman.server

ONE_TWENTY_EIGHT=128
TWO_FIFTY_SIX=256
THREE_DAYS=259200
ONE_MONTH=2678400
TEN_YEARS=315360000
header_rules = [
	[['html'],		{'Content-Type'  => 'text/html; charset=utf-8'}],
	[['css'],		{'Content-Type'  => 'text/css; charset=utf-8'}],
	[['xml'],		{'Content-Type'  => 'text/xml; charset=utf-8'}],
#	[['xml'],		{'Content-Type'  => 'application/atom+xml;type=feed; charset=utf-8'}],
	[['js'],			{'Content-Type'  => 'text/javascript; charset=utf-8'}],
	[['txt'],		{'Content-Type'  => 'text/plain; charset=utf-8'}],
#	[['woff'],		{'Content-Type'  => 'application/x-font-woff'}],
#	[['ttf'],		{'Content-Type'  => 'application/x-font-ttf'}],
#	[['eot'],		{'Content-Type'  => 'application/vnd.ms-fontobject'}],
#	[['svg'],		{'Content-Type'  => 'image/svg+xml'}],
#	[['png'],		{'Content-Type'  => 'image/png'}],
	['/',					{'Cache-Control' => "public, max-age=#{ONE_TWENTY_EIGHT}"}	],
	['/stylesheets',	{'Cache-Control' => "public, max-age=#{TWO_FIFTY_SIX}"}		],
]


use Rack::Runtime
use Rack::Head
use Rack::BounceFavicon
use Rack::Deflater
use Rack::TryStatic,
    root: 'build',
    urls: %w[/],
    try: %w[.html index.html /index.html],
    :header_rules =>	header_rules
use Rack::Rewrite do 												# match 2xxx with an optional /
	r307 %r{2(\d{3}\/?\d{0,2})}, '/explore/2$1'				# will also take /mm and drop /dd
end																		# see http://rubular.com/r/yA2OEtWtg5
run Rack::NotFound.new('./build/404/index.html')

#FIVE_MINUTES=300
#run lambda { |env|
#	not_found_page = File.expand_path('../tmp/404/index.html', __FILE__)
#	content = File.exist?(not_found_page) ? File.read(not_found_page) : '404 - page not found'
##	content_size = content.size.to_s
#
#	return [
#		404,
#		{ 'Content-Type' => 'text/html',
##			'Content-Length' => content_size,
#			'Cache-Control' => "public, max-age=#{FIVE_MINUTES}"
#		}, [content]
#	]
#}
