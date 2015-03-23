---
title: Chromium & Chrome Sync Server Address
subtitle:
tags: chromium
meta:
  description:
  image:
    url:
    caption:
    link:
  source:
    url: ttp://elliotli.blogspot.com/2010/07/google-chrome-chromium-sync-server.html
    title: "Yan Li's Words"
dispatch:
truncatable: false
date:
---
I use [hostsblock](http://gaenserich.github.io/hostsblock/ "http://gaenserich.github.io/hostsblock/") to block all the unwanted 'annoyances' online. It also blocks the Google Sync Servers for both Chromium & Chrome. The fix is fairly simple if you know the sync server address, just [check the source code](http://src.chromium.org/svn/trunk/src/chrome/browser/sync/profile_sync_service.cc "Chromium & Chrome Sync Server Address").

	# hostsblock-urlcheck https://clients4.google.com/

Yes I'm trying to move away from Google Services, yet I'm using Chromium with sync services.
