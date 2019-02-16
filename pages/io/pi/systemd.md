---
layout: page
title: systemd
subtitle: the everyday tool
tags: io, vacation, raspberry
meta:
  description: A few, important, fun and interesting things to do with systemd
  image:
    url:
    caption:
    link:
---

useradd -m -u 502 -G wheel -s /bin/zsh jason

http://www.life-beam.com/product/smart-hat/#

http://blog.volcanis.me/2014/06/01/systemd-networkd/

A few interesting commands


systemctl --state=failed

   autovt@.service

   journalctl -p 0..3 -xn

   systemd-analyze blame

   systemctl list-machines

     -t /dev/mmcblk0



   https://www.archlinux.org/packages/?name=irqbalance
      irqbalance.service


      omxplayer



      https://wiki.archlinux.org/index.php/Systemd-nspawn

      machinectl -a




      http://www.raspberrypi.org/forums/viewtopic.php?f=53&t=105027



I'm going to take a semi-unpopular position and say I actually think [systemd][systemd] is a fascinating technology. I've also found the concept of software containers interesting yet I've never been able to wrap my head around docker. Ironaccly this actical centers around a systemd afterthought systemd-nspawn.


I believe the big reason is I don't have a good justifiable use for everything, and thus complexity, docker brings to the table.

Which brings me to `systemd-nspawn`, to be it wonderful way to have multiple sandboxes (containers) in playground (Pi). On my current system I have another drive with a btrf partion for '/home' and '/var'. I did this for two reasons.

- larger drive
   - the pacman cache is on /var so more space is always welcomed
   - /home can grow fairly large
- built in compression
- self healing
   - Copy-on-Write
      - useful for my containers

I have created a base container, the populate it. I'm also installing nfs-utils since I want to share '/var/cache/pacman/pkg' across the host system and the guest systems.

   # btrfs subvolume create guest_base
   # pacstrap -i -c -d guest_base base nfs-utils
   # echo 'localhost:/var/cache/pacman/pkg   /var/cache/pacman/pkg  nfs  auto,x-systemd.automount,x-systemd.device-timeout=10,timeo=14 0 0' >> guest_base/etc/fstab



pacman -Syu arch-install-scripts nfs-utils btrfs-progs
btrfs subvolume create base

pacstrap -i -c -d base base nfs-utils



 ^cryptsetup,  lvm2 mdadm pciutils reiserfsprogs s-nail usbutils vi xfsprogs jfsutils
 ^4 ^25 ^28 ^33 ^37 ^38 ^45 ^47 ^49 ^21




localhost:/var/cache/pacman/pkg   /var/cache/pacman/pkg  nfs  noauto,x-systemd.automount,x-systemd.device-timeout=10,timeo=14 0 0

mount -t nfs localhost:/var/cache/pacman/pkg /var/cache/pacman/pkg


[systemd]: https://wiki.freedesktop.org/www/Software/systemd/
