---
title: server underpinnings
subtitle: The perfect server isn't going to exist, the right server is the one you don't have to think about or worry about
tags: null
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
date: '2014-12-19T14:29:37-05:00'
path: /2014/12/19/server-underpinnings/
---

The choice to move to Heroku was made just under two and a half years ago; since that time Unicorn has been the primary server of choice, with a short flirtation with Puma. Lets be honest this site gets very little traffic before removing my visit or the search bots. Yet, the desire to have quick response times, load times, able to serve thousands of request per second, and not be a resource hog has had always been my mission. A free Heroku Dyno with Unicorn has been a steller choice. The choice between Unicorn and Puma was difficult, performance was nearly indistinguishable, and some benchmarks show [Unicorn was the superior choice][rubyWebBench], for my usage. Of couse, me being me I've been itching to change things up.

Enter [Raptor aka Passenger 5][raptor] which is "up to 4x faster than Unicorn, up to 2x faster than Puma, Torquebox". If this is true, switch must be made. At moment Passenger 5 is still in beta, beta software in the production environment is a big no-no. I'm not running mission critical software, I'm not running a website real demands. While the initial testing looks promising Passenger isn't a good fit, yet, as route queue time is up drastically resulting in longer wait times by the end client.

Since the underpinnings of the site, the server, where front of mind it makes plenty of sense to assess the current landscape to go back and retested my setup with with both Unicorn and Puma; make a few 'tuning tweaks' and see if an improved balance between resources and performance can be struck; the new server of choice seems to be Puma.

My test methodology harken back to some test I did with the old jekyll site. This time I used [`wrk`][wrk] opposed to `ab` then did something like:

~~~ shell
   wrk -t16 -c16 -d10s --latency http://www.nullog.net/
~~~

I suppose that would do, but I wanted to see what was going on server side. For that I found Heroku Labs has and add on called [`log-runtime-metrics`][logMetrics]. I could then use the [`Librato`][librato] add-on (for fancy graphs) and/or [`log2viz`][log2viz]; and since these solutions are reading from the server logs the [Hawthorne effect][he] isn't an issue.

[rubyWebBench]: http://www.madebymarket.com/blog/dev/ruby-web-benchmark-report.html
[raptor]: http://www.rubyraptor.org/how-we-made-raptor-up-to-4x-faster-than-unicorn-and-up-to-2x-faster-than-puma-torquebox/
[wrk]: https://github.com/wg/wrk
[logMetrics]: https://devcenter.heroku.com/articles/log-runtime-metrics "Per-dyno stats on memory use, swap use, and load average are inserted into the app’s log stream"
[librato]: https://devcenter.heroku.com/articles/librato
[log2viz]: https://log2viz.herokuapp.com/ "Realtime analysis of your Heroku app logs"
[he]: https://en.wikipedia.org/wiki/Hawthorne_effect

