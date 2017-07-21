---
layout: post
truncatable: true
title: a new playground
description: Soggy Oatmeal
tags: meta, node
llist:
source:
  url: http://sourcefoundry.org/hack/
  title:
date: <%= Time.now %>
---
https://fakena.me/
https://codeforgeek.com/2015/09/command-line-application-nodejs/
I've been thinking about doing something stupid, writting my own blogging platform/app; but is that what I really want?? Do I a CMS like system or do I really want a build/generater system. I know one thing I want, what ever this will turn into, be built using JavaScript. At first I my inital thought was this would be a node based server and I really loved the idea of having my own CMS like system for the site. However, as I thought about whats involved, including learing JavaScript via node. Also, some really 'good' free-ish static hosting services exist. Why should I take one the overhead of that complexity just yet. That might be a more long term goal, but for now I want narrow the focus and create something closer to a Middleman replacement.

If I look at my new project goal, an unambisious JavaScript version of Middleman, I should be able to do all of the work via a task runner gulp and leverage an build tool (broccoli). For this all to work the system will contiunally be based off of the latest version of iojs for the node backend.

http://jlongster.com/Presenting-The-Most-Over-Engineered-Blog-Ever
https://github.com/jlongster/blog

https://github.com/vesparny/morpheus
http://braddenver.com/blog/2015/react-static-site.html
https://remysharp.com/2014/09/18/wordpress-ghost-harp-pt1

I'm going to consider this post my planning/spec post. Now DocPad (see below) may very well be exactly what I want/need for this and while it is open source it doens't feel free... after all it has [ToS][http://bevry.me/tos] and [Privacy Policy][http://bevry.me/privacy]... not to mention it phones home.

I have name picked out, kind of. Soggy Oatmeal or Soggy Oats.

The basic idea for the platform is this...

* Node based (iojs)
* Use broccoli.js for assets (resources) or gulp
* Backend in data (post) are stored in a git repo

* mocha -- testing
* npm-dview david -- security & up-to-date
* Markdown (yaml-markdown)
* Dynamic yet static
   * Page/post renders when accessed (first time) then cached for ~15 mins

   https://github.com/postcss/postcss

Similar Projects
* [DocPad][https://github.com/docpad/docpad]
* [Camel][https://github.com/cliss/camel]
* [hexo][https://github.com/hexojs/hexo]
* [Wheat][https://github.com/creationix/wheat]
* [Wintersmith][https://github.com/jnordberg/wintersmith]
http://hexo.io/


http://broccoli-taco.com/
https://github.com/ducksoupdev/gulp-site-generator
http://www.metalsmith.io/


https://medium.com/objects-in-space/considering-a-static-site-tool-learn-gulp-2fd5f9821fc4
http://blog.crushingpennies.com/a-static-site-generator-with-gulp-proseio-and-travis-ci.html
http://www.rioki.org/2014/06/09/jekyll-to-gulp.html
http://blog.lmorchard.com/2014/10/20/static-blog-generation-with-gulp/
https://github.com/crucialfelix/gulp-blog-scaffold
https://iainhouston.com/blog/gulp-workflow-for-static-website-no-blog.html

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
