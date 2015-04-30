---
layout: page
title: Installing Arch Linix ARM
subtitle: Raspberry Pi 2
tags: io, vacation, raspberry
meta:
  description: A simple guide for installing Arch Linux on a Raspberry Pi
  image:
    url:
    caption:
    link:
---

[This guide][findME] is intended to more detailed comprehensive install guide that what is found on the [Arch Linux ARM][alarm] site or the [eLinux Wiki][elinux]. The following convention will be used:

      #        <--- shell prompt
      # ls     <--- command to run
               <--- inside a command
      ##       <--- optional command to run

***Note:*** In order to follow these instructions you will need a prior linux install someplace. Another possibility would be to follow the guide to [Manually Updating Arch Linux on NOOBS formatted disk for RPi2][rHOWTO] .


### Media
Lets start downloading Arch Linux ARM.

      # wget http://archlinuxarm.org/os/ArchLinuxARM-rpi-2-latest.tar.gz

We also need know which device we will be working with.

      # lsblk

You might get something like the following:

      # lsblk
      NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
      sdX           8:0    1 29.8G  0 disk
      mmcblk0     179:0    0  3.7G  0 disk
      ├─mmcblk0p1 179:1    0  100M  0 part /boot
      └─mmcblk0p2 179:2    0  3.6G  0 part /

In this case we will be using the `sdX` device, change the `X` to your device name.

### Partition
The Raspberry Pi requires your boot device to have a MBR partition table. One has many choices to partition a device. Here `parted` is used, which is more verbose that fdisk.

We will create the partition type, along with two volumes. The first volume will be used for `/boot` the second volume will use the rest of the space on the drive for `/`.

      # sudo parted /dev/sdX
         (parted) mktable msdos
         (parted) mkpart primary fat32 2MiB 100MiB
         (parted) set 1 boot on
         (parted) mkpart primary ext4 101MiB 100%
         (parted) q

### Filesystem
It is easy to assume the file system was created with `parted`. Yes, we did use `fat32` and `ext4` which are file systems. I add the `-n` and `-L` flags in order to give the volumes proper names. I like to have incase I have issues and need to mount the microSD card on another system that has automount.

      # sudo mkfs.vfat -F32  -n archPiBoot /dev/sdX1
      # sudo mkfs.ext4 -L archPiRoot /dev/sdX2

### Installation

      # mkdir -p /tmp/pi/
      # sudo mount /dev/sdX2 /tmp/pi
      #mkdir /tmp/pi/boot
      # sudo mount /dev/sdX2 /tmp/pi/boot
      # su root
      # bsdtar -xpf ArchLinuxARM-rpi-2-latest.tar.gz -C /tmp/pi && exit
      # sync
      # sudo umount /tmp/pi/boot
      # sudo umount /tmp/pi/

### The Pi
Insert the microSD card, connect the an ethernet cable, keyboard, video, and finally adequate power source.

      login: root
      pass: root

I would invite you take a look at my [getting started guide][next].

##### Source Aids
* [Arch Linux ARM Raspberry Pi 2][alarm] --- install guide
* [eLinux][elinux] --- Arch Linux install guide
* [Arch Linux Raspberry Pi][arch-rp-wiki] --- wiki entry
* [Gento Raspberry Pi][gento-rp-wiki] --- wiki entries

[alarm]: http://archlinuxarm.org/platforms/armv7/broadcom/raspberry-pi-2#qt-platform_tabs-ui-tabs2
[elinux]: http://elinux.org/ArchLinux_Install_Guide
[arch-rp-wiki]: https://wiki.archlinux.org/index.php/Raspberry_Pi
[gento-rp-wiki]: http://wiki.gentoo.org/wiki/Raspberry_Pi
[rHOWTO]: https://www.reddit.com/r/raspberry_pi/comments/2ytvhg/how_to_manually_updating_arch_linux_on_noobs/
[findME]: http://nullog.net/io/pi/rasp-arch-install
[next]: /io/pi/rasp-arch-next/
