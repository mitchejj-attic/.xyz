# Read Me

[https://github.com/mitchejj/.xyz/blob/master/src/pages/README.md](https://github.com/mitchejj/.xyz/blob/master/src/pages/README.md)

To Do:
* [ ] Need a rewrite rule for /io/pi/ see /2015/03/15/raspberry/ for link test
* [ ] Need a rewirte rule for /pages/arch-on-flash
* [ ] Need a rewrite rule for /about/history
* [ ] Need to fix `dispatch` links
* [ ] Need to fix meta data
* [-] Better footnotes see /2014/11/30/november-bits/ or /2014/07/14/middleman/
    * [ ] Move footnotes back over to using the provied markdown support
* [ ] Move from lost
    * https://css-tricks.com/snippets/css/complete-guide-grid/
    * https://gridbyexample.com
* [ ] Better color choices?
    * http://clrs.cc
* [ ] Look into 
    * http://shoelace.style
 
    git remote add markdown git@github.com:mitchejj/nullog.git
git fetch markdown
git subtree add -P blog markdown/content

git pull -s subtree markdown content


git subtree pull —prefix=vendor my-subtree master

to use post-cssnext you need 
 "postcss-loader"
 with postCssPlugins: ['postcss-cssnext'],