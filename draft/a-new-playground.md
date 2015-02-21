---
layout: post
truncatable: true
title: a new playground
description: Soggy Oatmeal
tags: meta, node
llist:
source:
  url:
  title:
date: <%= Time.now %>
---
I've been thinking about doing something stupid, writting my own blogging platform/app. I'm going to consider this post my planning/spec post. Now DocPad (see below) may very well be exactly what I want/need for this and while it is open source it doens't feel free... after all it has [ToS][http://bevry.me/tos] and [Privacy Policy][http://bevry.me/privacy]... not to mention it phones home.

I have name picked out, kind of. Soggy Oatmeal or Soggy Oats.

The basic idea for the platform is this...

* Node based
* Written in CoffeeScript
* Backend in data (post) are stored in a git repo
* Use broccoli.js for assets (resources)
* Markdown
* eco for templates?
* Dynamic yet static
   * Page/post renders when accessed (first time) then cached for ~15 mins

Similar Projects
* [DocPad][https://github.com/docpad/docpad]
* [Camel][https://github.com/cliss/camel]
* [hexo][https://github.com/hexojs/hexo]
* [Wheat][https://github.com/creationix/wheat]
* [Wintersmith][https://github.com/jnordberg/wintersmith]
http://hexo.io/

npm install -g brunch
npm install -g bower && bower install
brunch new gh:brunch/dead-simple

Now does it make sense for me to do this? No, not one bit. Will I? I honestly don't know. The biggest obstacle to over come is two fold. First the obviouse, I've never atempted anything like this with a language I've never used. The time commitment to this project is astronomical. Second, and more importantly writting this little project isn't close to a top prioritory of things I want to do in the next year. So how will I move forward? I need to either focus on creating the back end generator and not worry about how the files are served or work on making a working static server for my needs.

https://bgrins.github.io/TinyColor/
http://knowthen.com/category/node-js/


http://dietjs.com/tutorials/router#


http://speakingjs.com/

https://keyholesoftware.com/2015/01/26/improve-node-js-performance-by-turning-it-into-a-clusterfork/

http://code.tutsplus.com/tutorials/introduction-to-generators-koajs-part-1--cms-21615
http://code.tutsplus.com/tutorials/introduction-to-generators-koajs-part-2--cms-21756
http://clarkfeusier.com/2015/01/08/simple-node-server-api/
http://addyosmani.com/blog/removing-unused-css/
http://knowthen.com/episode-7-serving-content-in-koajs-with-swig/
http://davidwalsh.name/es6-generators
http://nodeschool.io/#workshopper-list
http://blog.modulus.io/absolute-beginners-guide-to-nodejs
http://www.tutorialindustry.com/node-js-tutorial-for-beginners
http://www.metalsmith.io/
