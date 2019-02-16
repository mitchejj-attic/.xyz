---
title: raspberry
subtitle: pi 2
tags:
  - linux
  - arch
  - pi
meta:
  description: null
  image:
    url: null
    caption: null
    link: null
  source:
    url: null
    title: null
dispatch: null
date: '2015-03-15T20:49:32-04:00'
path: /2015/03/15/raspberry/
---

I've been enjoying my new toy over vacation thus far, and a [vacation[winter, 2015]][w2015] posting is in the works. What is this toy? This toy will essentially ensure my old MacBooks will get the boot as I have purchased a Raspberry Pi 2, running Arch Linux ARM. I really don't know what I'm going to do with the Pi yet... a fileserver or media center are the top contenders. I do have few quibbles regarding the current state of Linux on the Raspberry Pi. The micro SD boot drive must be [MBR][mbr], and [root must be on an ext4 partition][btrfs]. I tend to like forward moving technology and would prefer / to live on a btrfs partition. I can understand the rational for both, but it doesn't mean I can't nit pick right?

[w2015]: /io/pi/
[mbr]: https://github.com/raspberrypi/noobs/wiki/Standalone-partitioning-explained "BCM2835 ROM can only read bootcode.bin from MBR"
[btrfs]: https://github.com/raspberrypi/linux/issues/116#issuecomment-58808250

