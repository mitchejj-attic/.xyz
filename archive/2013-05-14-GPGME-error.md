---
title: pacman errors
subtitle: 'error: GPGME error: No data'
tags:
  - arch
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
date: '2013-05-14T00:00:00-04:00'
path: /2013/05/14/GPGME-error/
---
Just in case I run up against this again....

	sudo pacman -Syy
	sudo pacman-key --refresh-keys
	sudo pacman-key --populate archlinux
	sudo pacman -Scc

