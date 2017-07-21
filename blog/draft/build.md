---
title: build
subtitle: crafting a js build system
tags: js gulp
meta:
  description: Using node for my build system.
  image:
    url:
    title:
    link:
  source:
    url:
    title:
dispatch:
truncatable: true
date: <%= Time.now %>
---
http://runnersconnect.net/marathon-training-schedule/

http://hellojason.net/blog/remove-unused-css-from-middleman-before-deploying/

From the gulp-exec README
https://github.com/robrich/gulp-exec

**Note**: If you just want to run a command, just run the command, don't use this plugin:

```js
var exec = require('child_process').exec;

gulp.task('task', function (cb) {
  exec('ping localhost', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
```
