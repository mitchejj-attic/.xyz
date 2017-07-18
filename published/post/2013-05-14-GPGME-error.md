---
title: pacman errors
subtitle: "error: GPGME error: No data"
tags: arch
meta:
  description:
  image:
    url:
    caption:
    link:
  source:
    url:
    title:
dispatch:
truncatable: false
date:
---
Just in case I run up against this again....

	sudo pacman -Syy
	sudo pacman-key --refresh-keys
	sudo pacman-key --populate archlinux
	sudo pacman -Scc
