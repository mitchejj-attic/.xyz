---
title: iSight in Arch
subtitle: enabling the isight
tags:
  - arch
  - linux
  - macbook
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
date: '2013-05-26T00:00:00-04:00'
x-meta: >-
  /System/Library/Extensions/IOUSBFamily.kext/Contents/PlugIns/AppleUSBVideoSupport.kext/Contents/MacOS/AppleUSBVideoSupport
path: /2013/05/26/arch-sight/
---

According the the Arch [MacBook wiki page][macBookWiki], the MacBook's iSight camera should just work out of the box since kernal 2.6.26. Well that maybe the case on new hardware<sup id="fn1r-2013-05-26">[1]</sup>, older hardware<sup id="fn2r-2013-05-26">[2]</sup> doesn't have the iSight camera just work. One must first do some work, like finding the drivers `AppleUSBVideoSupport`. The driver can be found on any Mac OS X system, however it must come Mac OS X pre-10.6, so just just google it.

Install `isight-firmware-tools` from the AUR (you will need `base-devel`):

	bash <(curl aur.sh) -si isight-firmware-tools

Once the drive is found and tools are installed the easy part is putting it all together:

	# ift-extract --apple-driver AppleUSBVideoSupport
	# sudo reboot

The driver will be 'extracted' to `/lib/firmware/isight.fw` loaded at reboot[<sup id="fn3r-2013-05-26">[3]</sup> with an udev rule.

<div class="footnotes">
<ol>
  <li id='fn1-2013-05-26'>
   <p>MacBookPro (6,2), MacBookPro (9,2)
  <a href="#fn1r-2013-05-26">&#x21A9;&#xFE0E;</a></p></li>
  <li id='fn2-2013-05-26'>
   <p>MacBook (2,1), MacBook (4,1)
  <a href="#fn2r-2013-05-26">&#x21A9;&#xFE0E;</a></p></li>
  <li id='fn3-2013-05-26'>
   <p>/usr/lib/udev/ift-load --firmware /lib/firmware/isight.fw
  <a href="#fn3r-2013-05-26">&#x21A9;&#xFE0E;</a></p></li>
</ol>
</div>

[1]: #fn1-2013-05-26
[2]: #fn2-2013-05-26
[3]: #fn3-2013-05-26
[macBookWiki]: https://wiki.archlinux.org/index.php/MacBook#iSight			"modified on 12 May 2013, at 08:49"

