---
title: starting the refactor
subtitle: just a few words
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
date: '2013-11-29T00:00:00-05:00'
path: /2013/11/29/starting-the-refactor/
---

As I mentied before, I think the time has come to refactor the sites stack. First and foremost I wanted to be enable to deploy a test version of the site locally, running just like it would in the server production environment. I don't know why but this didn't work well with [my old method][oldMethod]. I think it might had to do with using Rack:Jekyll, but I can't be sure.

I also wanted to move away from GitHub, while GitHub is a great service I don't think what I'm doing here really is the right fit with GitHub. With this refactoring I'm moving to GitLab. While I do lose some functionality... an auto generated backup site, and the use of prose.io. I have to be honest I don't use prose, current version isn't functionally useful with the site implementation. While what I gain with the move to GitLab offers somethings I wasn't able to obtain with GitHub, free private repos. For my needs and usage $84 is a little to costly. Also having a private wiki to keep notes that relate the the technical deployment of the site very appealing.

The [new solution][newMethod] for the site does run locally, and will deploy using either puma or unicorn. Oddly enough, the post makes mention of [an answer I gave on Stack Overflow][mention].

I'm also going to try using [CloudFlare][cloudFlare] to stand between the user and Heroku... this is all over kill ;)

[oldMethod]: http://jonasforsberg.se/2012/07/22/jekyll-heroku-unicorn "Jekyll + Heroku + Unicorn = Blazing fast blogging"
[newMethod]: http://jbhannah.net/blog/2013/01/16/jekyll-on-heroku-without-rack-jekyll-or-custom-buildpacks.html "Jekyll on Heroku without Rack::Jekyll or custom buildpacks"
[mention]: /2012/09/04/giving-back
[cloudFlare]: https://www.cloudflare.com

