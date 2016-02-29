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
* Generator: [Middleman][middleman]
* [Ruby][ruby]: <%= RUBY_VERSION %>
   * Platform: <%= RUBY_PLATFORM %>
   * Release Date: <%= RUBY_RELEASE_DATE %>
* Version Control: [GitLab][gl]
* [CSS Stats][cssStats]
* Generated: <%= Time.now %>

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
[heroku]: https://www.heroku.com/
[middleman]: http://middlemanapp.com/
[gl]: https://gitlab.com/
[cssStats]: http://cssstats.com/stats?url=http://www.nullog.net
