---
title: Giving Back
subtitle: stackoverflow
tags: heroku, jekyll
meta:
  description:
  image:
    url:
    caption:
    link:
  source:
    url:
    title:
dispatch:
truncatable: false
date:
---

I the course of building and deploying this site one particular site has been truly helpful, Stack Overflow. Today I was finally able to give back and answer a fairly simple question that had me perplex when I first encountered it, [Jekyll on Heroku listing additional (internal?) posts I haven't created](http://stackoverflow.com/questions/12241403/jekyll-on-heroku-listing-additional-internal-posts-i-havent-created).

__The probelm:__ Jekyll on heroku publishes mysterious pages, and they all relate to your project someway, somehow.

__The solution:__ Let's call the directory where Jekyll is installed & running from the root /. Heroku installs the applications gems in `/vendor`. When Jekyll builds the site it scans all files and folder in the root file directory, including `/vendor`.  Fix is to simple edit `_config.yml` and put `vendor` in the exclude array.
