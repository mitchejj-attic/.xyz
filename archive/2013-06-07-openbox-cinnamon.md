---
title: falsity of sure things
subtitle: natural scrolling with cinnamon
tags:
  - arch
  - linux
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
date: '2013-06-07T00:00:00-04:00'
path: /2013/06/07/openbox-cinnamon/
---
My [vacation\[summer, 2013\]][myLink] ended and I continue to evaluate and tinker with plans to create a standardized deployment across my laptops; I am finding what I once thought was a sure thing isn't. I currently run [OpenBox][openBox] on my Arch install, my desire to keep minimal system along how much I enjoy many aspects of [Crunch Bang][#!] I thought OpenBox would be the clear winner. Yet [Cinnamon][cMon] is starting to emerge as a strong contender, I am starting to grow fond of the environment. I wish Cinnamon was an independant [project][cMonProject] and not a vital cog of Mint Linux. Without such seperation, lack of documantion and independant development cycle the project lacks transparency leaving the UX at the whim of the Mint dev team.

>Cinnamon is a Mint project and it's the implementation of Mint's vision and needs for a desktop.[^...1]
><small><cite>[Clement Lefebvre][clem]</cite></small>

Electing to use Cinnamon would be taking the easy way out along with the baggage associated with it. Cinnamon is a derivative of GNOME, which has a plethora of settings not always exposed to the user. One such setting is natural scrolling, I have natural scrolling correctly configure in xorg.conf\{.d\}


	Section "InputClass"
	   ...
	   Option   "VertScrollDelta"     "-111"
	   Option   "HorizScrollDelta"    "-111"
	   ...
	EndSection


Neither GNOME nor Cinnamon would honor this system wide defualt setting, so some tweaking in in order. I could use `dconf-editor` to follow the bread crumbs along the schema path below to alter the key value. A much simpler and dare I say elegant solution exist:

	gsettings set org.gnome.settings-daemon.peripherals.touchpad natural-scroll "true"



[^...1]: It is perfectly acceptable for Mint to spend their resources on improving Cinnamon for Mint. Speaking only as an end user not using a Mint distro, if I elect to use Cinnamon I would personally feel more comfortable with my choice if development priority was given to improve the project overall and not specifically Mint.<blockquote>It's in its design to be compatible with Linux as a whole though, so for it not work or not to be suitable on any distribution is a perfectly valid concern and we do consider it a bug.</blockquote>

[1]: #fn1-2013-06-07
[#!]: http://crunchbang.org
[myLink]: ../pages/arch-on-flash
[openBox]: http://openbox.org/
[cMon]: http://cinnamon.linuxmint.com/
[cMonProject]: https://github.com/linuxmint/cinnamon	"Cinnamon Git Hub Project"
[clem]: https://github.com/linuxmint/Cinnamon/issues/1828#issuecomment-16286688	"Creator of Mint"

