---
title: quick and dirty metrics
subtitle: actually its about mcache
tags:
  - meta
meta:
  description: null
  image:
    url: null
    caption: null
    link: null
  source:
    url: null
    title: null
dispatch: null
date: '2012-08-26T00:00:00-04:00'
path: /2012/08/26/quick-and-dirty-metrics/
---
Now that I have github -> heroku publishing in place now is the time to setup even more over kill, heroku offers a few (2)5 MB Memcache Bucket.

I made the following changes to `config.ru`

~~~ ruby
if memcache_servers = ENV["MEMCACHE_SERVERS"]
	require 'dalli'
	require 'rack-cache'
	require 'memcachier'
	$cache = Dalli::Client.new
	use Rack::Cache,
		:verbose => true,
		:metastore => $cache,
		:entitystore => $cache
end
~~~

To test that caching is working use `ab` aka Apache HTTP server benchmarking tool and run `ab -n 500 -c 5 [hostname]`

This will make 500 requst to [hostname] with 5 concurrent request.

And to see if `Rack::Deflater` is working

	curl -I -H "Accept-Encoding: gzip,deflate" [hostname]

