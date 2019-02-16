---
path: /spec
title: nullog specs
subtitle: "infrastructure, specs & data"
tags:
meta:
  description:
  image:
    url:
    caption:
    link:
---
* Host: [Netlify][cdn]
* Generator: [Metalsmith][ms]
* [Node][node]:
  * Version: {{ env.node }}
  * v8: {{ env.v8 }}
  * Arch: {{ env.arch }}-{{ env.platform }}
* Version Control: [GitHub][gh]
* [CSS Stats][cssStats]
* [TestMyCSS][cssTest]
* Generated: {{ env.date }}

Form
Generally speaking the frontmatter has two version

Postings:

      ---
      title:
      subtitle:
      tags:
      meta:
        description:
        image:
          url:
          caption:
        source:
          url:
          title:
      dispatch:
      truncatable: false
      date:
      ---

Pages:

      ---
      layout: page
      title:
      subtitle:
      tags:
      meta:
        description:
        image:
          url:
          caption:
          link:
      ---

Grave Yard:
* Past Host:
  * Git Hub Pages
  * heroku
  * Surge CDN
* Past Generator
  * Jekyll -- ruby
  * Middleman -- ruby
* Past Version Control:
  * github
  * gitlab


[cdn]: https://www.netlify.com
[ruby]: http://ruby-lang.org/
[ms]: http://www.metalsmith.io
[node]: http://nodejs.org/
[heroku]: https://www.heroku.com/
[middleman]: http://middlemanapp.com/
[gh]: https://github.com
[gl]: https://gitlab.com/
[cssStats]: http://cssstats.com/stats?url=https://nullog.net/nullog.css
[cssTest]: http://www.testmycss.com/analyze?url=https%3A%2F%2Fnullog.net%2Fnullog.css