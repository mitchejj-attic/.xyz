---
layout: post
title: "Middleman"
description: hello world; again
category:
tags: meta, middleman, jekyll
llist:
---
I don't want to go dwell to much on the [evolution of my online presence][history]. For nearly two years this site has been built upon the awesomeness that is [Jekyll][jk]. Over the two years I've learned a lot, I've also made may mistakes. I do feel in many ways Jekyll with GitHub is nearly a perfect platform for most users. Yet I wanted more and moved the hosting to Heroku. I had the inclination I still wanted more back in November when I started to 'refactor' the site design. I think I need to move, and today I am making that change by moving from Jekyll to [Middleman][mm].

I can't point to one issue or desire that prompted the change. The reasons I originally choose Jekyll are no longer compelling[^compelling]. With all choices have have trade offs. This move allows me to erase inherited technical debt[^debt] while putting thoughtful purpose behind the choice I make while giving me the headroom to grow and explore[^endorse].


[^compelling]: I no longer use GitHub, let alone gh-pages, so the tight integration between Jekyll and GitHub mute. Conversly I love the fact Middleman-[livereload][lr] also generates assets.
[^debt]: My code base started as a clone of [JekyllBootstrap][bootstrap], while you do go from nothing to something in 3 minutes, the site lacked 'thoughtful purpose' on my part. Also, did get tired of Liquid and how Liquid cause Jekyll to produce some nasty looking source code.
[^endorse]: **I still wholeheartedly endorse Jekyll.** It is still a great static generator and a great tool I could see using again.

[history]: /about/history
[jk]: http://jekyllrb.com/
[mm]: http://middlemanapp.com/ "makes developing websites simple"
[lr]: https://github.com/middleman/middleman-livereload
[bootstrap]: http://jekyllbootstrap.com/
