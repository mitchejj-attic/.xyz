# nullog.net

> Static generated site for [nullog.net]

## Branches
 - master
 - dev -- the workspace branch all work is derived from  
 - nullog.net -- staticly rendered deployed site
 - middleman  -- the pre-metalsmith site [decrepit.nullog.net]

## TODO
 - [ ] update code to use 'metalsmith-in-place:2.0.0'
 - [ ] move lib/ to gittrees
 - [ ] ugly text
 - [ ] lint css/js
 - [ ] move to remark
 - [ ] move build from index.js to the gulp file
  - [ ] use metalsmith-changed
 - [x] if private is true (page not in sitemap) also include that in the page meta
 - [ ] hook up `explore` to work correctly
  - currently displaying all post via /all
 - [x] sitemap should have proper lost mod dates based on the VC mod time
 - [ ] add link (in the footer) to each 'page' source in github

 [nullog.net]: https://nullog.net
 [decrepit.nullog.net]: http://decrepit.nullog.net
