---
layout: page
title: migoi (yeti)
subtitle: node/javascript discovery via the creation of a static site generator.
tags: javascript
meta:
  description: My attempt at creating at generating a static site build system
  image:
    url:
    caption:
    link:
---
**I placed this under my "sketch pad" for a reason. I doubt I will actually create the build system I have in mind.**

Ever since I picked up my RaspberryPi early 2015 I've been toying around with the idea of patching together tool to replace Middleman build/generate this site. As I think about this little project the ambitions of the project grow I need to create a roadmap to help stay focused.

The first set of requirement are fairly simple for such a build tool/system.

* ES6 (promises over callbacks) might [co][co] be useful?
* Data/content portability with Jeykll & Middleman
* Use a task/build tool
   * broccoli
      *  --- to build the  html & css
   * gulp
      * --- manage the deploy
      * --- git commits/taging
   * fly --- seems interesting but is it useful?
* CSS --- move away from SASS
   * [Best CSS Tools for 2015](https://codegeekz.com/best-css-tools-for-2015/)
      * --- uncss, cssnano, cssnext, postcss, myth.io
   * [minification-benchmark](https://goalsmashers.github.io/css-minification-benchmark/)
   * [Type­set.js](https://blot.im/typeset/)?
* Templates
   * nunjucks
      * [A Deep Dive into Asynchronous Templating](http://jlongster.com/A-Deep-Dive-into-Asynchronous-Templating)

So while the goals seem simple, something like what I want already exist in a few forms. The best way for me to move forward is to either use one of these "stock" tools or create smaller gulp/broccoli task to kick start the process.

[co]: https://github.com/tj/co
[yeti]: http://www.himalaya2000.com/bhutan/wildlife-sanctuaries/sakteng.html

[a]: https://github.com/normalize/mz
[b]: https://github.com/basicdays/node-promissory
[1]: http://www.joinscrapbook.com/ben_hall/scenarios/node-v4
[2]: https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460
[3]: https://www.npmjs.com/package/anyfs/
