---
title: Middleman
subtitle: hello world again
tags:
  - meta
  - middleman
  - jekyll
meta:
  description: null
  image:
    url: null
    caption: null
    link: null
  tags: null
  source:
    url: null
    title: null
dispatch: null
date: '2014-07-14T00:00:00-04:00'
path: /2014/07/14/middleman/
---

I don't want to go dwell to much on the [evolution of my online presence][history]. For nearly two years this site has been built upon the awesomeness that is [Jekyll][jk]. Over the two years I've learned a lot, I've also made may mistakes. I do feel in many ways Jekyll with GitHub is nearly a perfect platform for most users. Yet I wanted more and moved the hosting to Heroku. I had the inclination I still wanted more back in November when I started to 'refactor' the site design. I think I need to move, and today I am making that change by moving from Jekyll to [Middleman][mm].

I can't point to one issue or desire that prompted the change. The reasons I originally choose Jekyll are no longer compelling[^1]. With all choices have have trade offs. This move allows me to erase inherited technical debt[^2] while putting thoughtful purpose behind the choice I make while giving me the headroom to grow and explore[^3].



[^1]: I no longer use GitHub, let alone gh-pages, so the tight integration between Jekyll and GitHub mute. Conversly I love the fact Middleman-[livereload][lr] also generates assets.
[^2]: My code base started as a clone of [JekyllBootstrap][bootstrap], while you do go from nothing to something in 3 minutes, the site lacked 'thoughtful purpose' on my part. Also, did get tired of Liquid and how Liquid cause Jekyll to produce some nasty looking source code.
[^3]: **I still wholeheartedly endorse Jekyll.** It is still a great static generator and a great tool I could see using again.



[history]: /about/history
[jk]: http://jekyllrb.com/
[mm]: http://middlemanapp.com/ "makes developing websites simple"
[lr]: https://github.com/middleman/middleman-livereload
[bootstrap]: http://jekyllbootstrap.com/

