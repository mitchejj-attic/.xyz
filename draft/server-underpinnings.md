---
layout: post
truncatable: 'true'
title: server underpinnings
description:
tags:
llist:
source:
  url:
  title:
date: <%= Time.now %>
---
The perfect server isn't going to exist, the right server is the one you don't have to think about or worry about. The choice to move to Heroku was made just under two and a half years ago; since that time Unicorn has been the primary server of choice, with a short flirtation with Puma. Lets be honest this site gets very little traffic before removing my visit or the search bots. Yet, the desire to have quick response times, load times, able to serve thousands of request per second, and not be a resource hog has had always been my mission. A free Heroku Dyno with Unicorn has been a steller choice. The choice between Unicorn and Puma was difficult, performance was nearly indistinguishable, and some benchmarks show [Unicorn was the superior choice][rubyWebBench], for my usage. Of couse, me being me I've been itching to change things up a bit.


[Raptor aka Passenger 5][raptor] is "up to 4x faster than Unicorn, up to 2x faster than Puma, Torquebox". If this is true, switch must be made. Right now Passenger 5 is still in beta and beta software in the 'production environment' is a big no-no. I'm not running mission critical software, I'm not running a website real demands. While the initial testing looks promising Passenger isn't a good fit, yet, as route queue time is up drastically resulting in longer wait times by the end client.

Since the underpings of the site, the server, where front of mind it makes plenty of sense to assess the current landscape to go back and retested my setup with with both Unicorn and Puma; make a few 'tuning tweaks' and see if an improved balance between resources and performance can be struck.

For now the new server of choice seems to be Puma.



So my test methodology harken back to some test I did with the old jekyll site. This time I used `wrk` opposed to `ab`. I then enabled `log-runtime-metrics` from Heroku Labs and paired that with the the `Librato` add-on (for fancy graphs) along with `log2viz`

   wrk -t16 -c16 -d10s --latency http://www.nullog.net/



[rubyWebBench]: http://www.madebymarket.com/blog/dev/ruby-web-benchmark-report.html
[raptor]: http://www.rubyraptor.org/how-we-made-raptor-up-to-4x-faster-than-unicorn-and-up-to-2x-faster-than-puma-torquebox/



[logMetrics]: https://devcenter.heroku.com/articles/log-runtime-metrics
[librato]: https://devcenter.heroku.com/articles/librato
[https://log2viz.herokuapp.com/]
