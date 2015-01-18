xml.instruct! :xml, :version => "1.0", :encoding=> :utf8
xml.feed "xmlns" => "http://www.w3.org/2005/Atom", "xml:lang" => :en do
   ######
   site_url = URI.join("http://www." + data.site.host)
   feed_url = URI.join(site_url, current_page.path)
   site_id = "net.nullog"
   site_author =  data.site.author
   site_author_uri = site_url
   ######
   xml.id "tag:" + site_id + ",2014:" +  current_page.path
   xml.updated Time.now.to_time.iso8601
   xml.title data.site.title
   xml.subtitle data.site.subtitle
   xml.link :href => feed_url, :rel => :self, :type => "application/atom+xml", :hreflang => :en
   xml.link :href => site_url, :rel => :alternate, :type => "text/html", :hreflang => :en
   xml.rights "Copyright © 2012 — " + Time.now.strftime("%Y")
   xml.author {
      xml.name site_author
      xml.uri site_author_uri }

    blog.articles[0..5].each_with_index do |article, index|
      xml.entry do
         id_key = blog.articles.count - index
         xml.id "tag:#{site_id}," + article.date.to_time.strftime("%Y") + ":" + id_key.to_s(10)
         xml.title article.title.downcase
         xml.link :href => URI.join(site_url, article.url), :rel => :alternate, :type => "text/html", :hreflang => :en

         xml.published article.date.to_time.iso8601
         #xml.updated File.mtime(article.source_file).iso8601
         # Finding the true last modifided date (via git) & an ugly hack
         source_obj = `git rev-list -n 1 HEAD #{article.source_file}`.chomp
         xml.updated correct_mod = DateTime.parse(`git show --pretty=format:%ai --abbrev-commit #{source_obj} | head -n 1`.chomp).iso8601

         #xml.summary article.summary, "type" => "html"
         xml.content article.body, :type => :html, "xml:lang" => :en
      end
   end
end
