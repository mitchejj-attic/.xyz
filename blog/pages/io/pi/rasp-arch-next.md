---
layout: page
title: Getting Started Guide
subtitle: Arch Raspberry Pi 2
tags: io, vacation, raspberry
meta:
  description: Now you have Arch Linux installed on a Raspberry Pi, what should you do?
  image:
    url:
    caption:
    link:
---

This, getting start guide was actually created before my [Arch Linux ARM Raspberry Pi 2 install guide][install], and the chances are good you are here because of it. I felt a tad overwhelmed trying to figure out the best, most logical, path from the primordial ooze of a tarball to what I deemed to be a good solid foundation. In order to organize my thoughts I had to map out a plan; identify flaw and blind spots.

The same conventions used in the [install guide][install] will be used here. I expected the Pi setup to all take place via SSH, therefore that decision will influence the order of operations.

[install]: /io/pi/rasp-arch-install/

### Finding the Pi
My Pi is connected directly connected to my home network via ethernet. My main computers local IP address is 192.168.0.6; in order to [find the Pi on the network][find] I could run `nmap -sn 192.168.0.0/24`. Interestingly nmap reports my Pi as an HP, I have an HP printer on the network which nmap was not finding.

	MAC Address: 78:AC:C0:xx:yy:zz (Hewlett-Packard Company)
	Nmap scan report for 192.168.0.17

I needed another method, I found a trusty USB keyboard and logged in.

	# ip addr show

Look near the bottom for `eth0` and you should find something akin to `inet 192.168.0.17/24`.

[find]: http://www.raspberrypi.org/documentation/troubleshooting/hardware/networking/ip-address.md


### Meta Data
I should look into doing this using `localectl`

	# rnano /etc/locale.gen
	# locale-gen
	# echo LANG=en_US.UTF-8 > /etc/locale.conf
	# export LANG=en_US.UTF-8
	# hostnamectl set-hostname arch-pi

### Date & Time
The Raspberry Pi doesn't have a hardware clock. In order to have a good historical record it is vital the system to have the correct time. Using [pool.ntp.org][ntp], pick the logical servers, to populate `/etc/systemd/timesyncd.conf`.

	# rnano /etc/systemd/timesyncd.conf
	# timedatectl set-timezone America/New_York
	# timedatectl set-ntp true
	# systemctl enable systemd-timedated
	# systemctl enable systemd-timesyncd

Ironically, `America/Detroit` has issues; test the setup by checking the output of `timedatectl status`.

[ntp]: http://www.pool.ntp.org/

### Securing pacman
Two different actions are need. First, and most importantly the Pi has a built in random number generator. Why would we leave random number generation up to software? We should use it right? For that, for that some tools are required before telling the system [where to find generator][RNGD_OPTS]. This **must** be done before trusting the pacman-keys. Secondly, for those wearing tin-foil hats everything will be reinstalled.

	# pacman -Syu rng-tools
	# echo 'RNGD_OPTS="-o /dev/random -r /dev/hwrng"' > /etc/conf.d/rngd
	# systemctl enable rngd
	# systemctl disable haveged.service

	# pacman-key --init
	# pacman -Sy archlinux-keyring
	# pacman-key --populate archlinux
	# pacman -Qenq | pacman -Sy -

[RNGD_OPTS]: http://archlinuxarm.org/forum/viewtopic.php?f=31&t=4993#p27708

### Raspberry Pi [userspace][userspace]
We will follow the naming scheme use for the dynamic linker.

	# cat /etc/ld.so.conf.d/00-raspberrypi-firmware.conf

This grants you easy access commands like [`vcgencmd`][vc].

	# echo 'export PATH=$PATH:/opt/vc/bin' > /etc/profile.d/00-raspberrypi-userspace.sh

[userspace]: https://github.com/raspberrypi/firmware
[vc]: http://elinux.org/RPI_vcgencmd_usage "vcgencmd usage"



### Users

	# passwd
	# pacman -S sudo zsh
	# useradd -m -G wheel -s /bin/zsh {my_user_name}
	# passwd {my_user_name}
	# echo '%wheel ALL=(ALL) ALL' > /etc/sudoers.d/group_wheel_conf

	## Same thing without a password
	# %wheel ALL=(ALL) NOPASSWD: ALL

Test that I can log in then that I can use `sudo -l`

### SSH

Personally, I kind of like the suggestion found in [Secure Secure Shell][sss] posting, with a few riders; my [sshd_config][sshd] is here.

	# rm /etc/ssh/ssh_host_*key*
	# ssh-keygen -t ed25519 -N '' -f /etc/ssh/ssh_host_ed25519_key
	# ssh-keygen -t rsa -b 4096 -N '' -f /etc/ssh/ssh_host_rsa_key
	# ln -s  /dev/null /etc/ssh/ssh_host_ecdsa_key
	# ln -s  /dev/null /etc/ssh/ssh_host_dsa_key
	# systemctl restart sshd.service

[sss]: https://stribika.github.io/2015/01/04/secure-secure-shell.html
[sshd]: https://gitlab.com/snippets/3795


### Setting Swap (just to offset RAM allocated to the GPU):

	# fallocate -l 32M /swapfile
	# chmod 600 /swapfile
	# mkswap /swapfile
	# swapon /swapfile
	# echo '/swapfile none swap defaults 0 0' >> /etc/fstab
	# echo 'vm.swappiness=10' >> /etc/sysctl.d/99-sysctl.conf

### Data integurity
Early detection often is key to rectifying impediments; the Raspberry Pi has a long standing history of data corruption on the systems SD card. By default `fsck` will run every 30 boots. Chances are you don't want to find out about data corruption at boot time, I believe checking the system every 8-16 days is a sane and precautionary tactic.

	# tune2fs -i 8d /dev/mmcblk0p2

### Over Clocking
Just follow this [link][oc] if you are interested.

[oc]: http://haydenjames.io/raspberry-pi-2-overclock/ "Warning: The following link can display a spammy screen cover"
