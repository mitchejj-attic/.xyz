---
layout: page
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
* Host: [Surge CDN][cdn]
* Generator: [Metalsmith][ms]
* [Node][node]:
   * Version: {{ env.node }}
   * Release Date: {{ env.arch }}
* Version Control: [GitLab][gl]
* [CSS Stats][cssStats]
* [TestMyCSS][cssTest]
* Generated: {{ env.date }}

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

[cdn]: http://surge.sh/
[ruby]: http://ruby-lang.org/
[ms]: http://www.metalsmith.io
[node]: http://nodejs.org/
[heroku]: https://www.heroku.com/
[middleman]: http://middlemanapp.com/
[gl]: https://gitlab.com/
[cssStats]: http://cssstats.com/stats?url=http://www.nullog.net
[cssTest]: http://www.testmycss.com/analyze?url=http%3A%2F%2Fnullog.net%2Fresources%2Fstylesheets%2Fnullog.css