---
layout: post
title: "iSight in Arch"
description: "enabling the isight"
tags: arch, linux, macbook
x-meta: /System/Library/Extensions/IOUSBFamily.kext/Contents/PlugIns/AppleUSBVideoSupport.kext/Contents/MacOS/AppleUSBVideoSupport
source:
   url:
   title:
llist:
image:
   url:
   caption:
---

According the the Arch [MacBook wiki page][macBookWiki], the MacBook's iSight camera should just work out of the box since kernal 2.6.26. Well that maybe the case on new hardware[^newMac], older hardware[^oldMac] doesn't have the iSight camera just work. One must first do some work, like finding the drivers `AppleUSBVideoSupport`. The driver can be found on any Mac OS X system, however it must come Mac OS X pre-10.6, so just just google it.

Install `isight-firmware-tools` from the AUR (you will need `base-devel`):

	bash <(curl aur.sh) -si isight-firmware-tools

Once the drive is found and tools are installed the easy part is putting it all together:

	# ift-extract --apple-driver AppleUSBVideoSupport
	# sudo reboot

The driver will be 'extracted' to `/lib/firmware/isight.fw` loaded at reboot[^skipReboot] with an udev rule.

[^newMac]: MacBookPro (6,2), MacBookPro (9,2)
[^oldMac]: MacBook (2,1), MacBook (4,1)
[^skipReboot]: /usr/lib/udev/ift-load --firmware /lib/firmware/isight.fw

[macBookWiki]: https://wiki.archlinux.org/index.php/MacBook#iSight			"modified on 12 May 2013, at 08:49"
