---
title: Free Is Good
subtitle: Greed is good
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
date: '2013-11-24T00:00:00-05:00'
path: /2013/11/24/free-is-good/
---

I was able to to bring my Digital Ocean 'cloud' up without to much trouble. I was able to bring up an ngix server, server up encrypted content all while keeping the all three version of the site in sync with the git repo.

The hardest part was the how, what is the best way to keep the Digital Ocean version of the site up-to-date with the git repo. After some searching I stumbled across [jekyll-hook][jekyllHook], by the same creators of Prose. Now it wasn't to difficult to configure and deploy. I only ran into to issues, and only one of them took time to figure out. What is the best method to keep a node app running and how do you do that on a systemd server. The first part of the problem ended up being fairly simple, and use [forever][forever]. However, I've never crafted a systemd service file before, and I had no idea where to start. In the end the solution was really simple. I just needed one to create a [jekyll-hook.service][serviceGist] file and install at `/etc/systemd/system/jekyll-hook.service`. I also use RVM to install ruby and gemset, so I also jekyll-hook build script (build-v1.sh), knows about RVM by properly sourcing it.

While I enjoyed all of this, and love the idea hosting the site via https, I think I will be pulling down the sails and keep the site docked with heroku. When it comes down to it the price, free, is hard to beat. None of the basic requirements have changed, I have a working stack which suits my needs... for now. However, now is the time to oil the gears and clear the cruft it is time to refactor the stack.

I order to make the move really worth while I need to generate a spec sheet that would encompass more services that I currently rely on. In spirit, now is the time to oil the gears and clear the cruft it is time to refactor the stack.



[jekyllHook]: http://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/
[jhGH]: https://github.com/developmentseed/jekyll-hook
[forever]: http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever
[foreverGH]: https://github.com/nodejitsu/forever
[serviceGist]: https://gist.github.com/mitchejj/7631695

