---
title: Chromium & Chrome Sync Server Address
subtitle: null
tags:
  - chromium
meta:
  description: null
  image:
    url: null
    caption: null
    link: null
  source:
    url: >-
      ttp://elliotli.blogspot.com/2010/07/google-chrome-chromium-sync-server.html
    title: Yan Li's Words
dispatch: null
date: '2013-05-23T00:00:00-04:00'
path: /2013/05/23/google-sync-server/
---
I use [hostsblock](http://gaenserich.github.io/hostsblock/ "http://gaenserich.github.io/hostsblock/") to block all the unwanted 'annoyances' online. It also blocks the Google Sync Servers for both Chromium & Chrome. The fix is fairly simple if you know the sync server address, just [check the source code](http://src.chromium.org/svn/trunk/src/chrome/browser/sync/profile_sync_service.cc "Chromium & Chrome Sync Server Address").

	# hostsblock-urlcheck https://clients4.google.com/

Yes I'm trying to move away from Google Services, yet I'm using Chromium with sync services.

