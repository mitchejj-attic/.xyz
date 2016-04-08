---
layout: page
title: vacation[summer, 2013]
subtitle: Arch Linux on USB Flash
tags: arch, linux
meta:
  description:
  image:
    url:
    caption:
    link:
---

The first step is to download the official ISO, well maybe. I've never been able to make any of my MacBook's to boot the EFISTUB. Maybe adding the boot options `noapic`, `noapic`, `nomodeset` In fact I haven't been able to make a VM boot an EFISTUB yet. Before writeing this little post I was never able to get any version of Linux to boot off a flash drive on my MacBook (2,1)

		### Are Comments
	# run this as root or sudo

I will opt install a small system on a flash drive and use that as my installer, this will have other benefits including using it portable system and rescue drive and most importantly and learning device. Using my current Arch install I just need to install arch-install-scripts.

### Prep the USB Flash Drive
I used gparted (yes, I am using Arch and GUI tools for this) to created a GPT along with two partitions. It is my personal preference to make my EFI drive my first partition so `/dev/sdc1` is 512MB fat32[^fat32] partion wwhich will be placed at /boot. Oh, apparently fat32 file systems shouldn't be less than 512MB, you could make it smaller but I really didn't see a reason to, I think I also should I have set the boot flag. The second drive partition will be for everything, I chose to make `/dev/sdc2` a 1GB ext4 partition for /. I know ext4 and a 1GB partition is beyond overkill for this particular application, just go with it for now, and use `lsblk -f` to ensure the right drive is being used.

It is important to mount everything in the proper order and location for this application / followed by boot:

	# mkdir -p mnt
	# mount /dev/sdc2 /mnt
	# mkdir -p mnt/boot
	# mount /dev/sdc1 /mnt/boot

### Install
I know I want, need a few tools installed (I have systems with both 32 & 64 bit efi's thus I need booth versions of grub):

	# pacstrap  -i /mnt base zsh

Here on out I follow the basic install guide

		### check it of course, compare UUID with `blkid`
	# genfstab -U -p /mnt >> /mnt/etc/fstab

		### make my life a bit better
	# arch-chroot /mnt /bin/zsh
	# chsh /bin/zsh

	# pacman -S arch-install-scripts dosfstools mtools gptfdisk openssh rng-tools avahi nss-mdns wpa_supplicant wpa_actiond wireless_tools dialog grub-efi-x86_64 grub-efi-i386 refind-efi

	# ln -s /usr/share/zoneinfo/America/Boston /etc/localtime
	# echo archFlash > /etc/hostname

		### comment out my location
	# nano /etc/locale.gen
	# locale-gen && hwclock --systohc --utc

		## Only make protocol 2 keys
	# rngd -f -r /dev/urandom
	# ssh-keygen -t ecdsa -b 521 -f  /etc/ssh/ssh_host_ecdsa_key -N ''
	# ssh-keygen -t rsa -b 15360 -f /etc/ssh/ssh_host_rsa_key -N ''

Yes, a 15360-bit rsa key is a bit insane, a 3072-bit or even 2048-bit key would have been more than sufficient.

The wiki page [Install Arch on a USB Key][wikiUSB] told me to me to edit hook array in `/etc/mkinitcpio.conf` and move 'block' right after 'udev', I couldn't see the harm in following wise advise.

		### rebuilding my RAM disk
	# mkinitcpio -p linux

Now the fun part, getting it all to boot. This where I also run into many problems. I'm not using `efibootmgr` as I have a Mac, leaving me to use mactel-boot. However, with mactel-boot /boot must be an HFS+ partition in order to do that I must install `hfsprogs` and `mactel-boot` from the AUR. I choose not to do that. The complexity of my install is increased, yet it seems 'pure'. A quick work around would be (but you can't run this as the root user & you would also need to install base-devel):

	# bash <(curl aur.sh) -si hfsprogs
	# bash <(curl aur.sh) -si mactel-boot

 I want to use refind, a I can easily drop into the EFI shell if the need exist, this would/should also work for Gummiboot to I suppose. I also like to use GRUB2 to keep it 'simple'... go figure I said simple grub2 in the same sentence... maybe this isn't so pure.

### Crafting a MacBook (2,1) & (4,1) solution

 First move refind in place [^refindUpdate]:

	# cp /usr/lib/refind_x64.efi /boot/EFI/boot/bootx64.efi
	# cp /usr/lib/refind_ia32.efi /boot/EFI/boot/bootia32.efi
	# cp /usr/share/refind/icons /boot/EFI/boot/icons
	# cp /usr/share/refind/fonts /boot/EFI/boot/fonts
	# touch /boot/EFI/boot/refind.conf


Populate refind.conf with the following gist
 {% gist 5648196 %}

Next, grub, this will throw out four fatal warnings/errors, yet it works.

	# grub-install --efi-directory=/boot/ --bootloader-id=arch_grub --target=x86_64-efi --recheck
	# grub-install --efi-directory=/boot/ --bootloader-id=arch_grub --target=i386-efi --recheck
	# cp /usr/share/locale/en\@quot/LC_MESSAGES/grub.mo /boot/grub/locale/en.mo
	# grub-mkconfig -o /boot/grub/grub.cfg

MAYBE: The EFI secret source sauce is to `add_efi_memmap` to the boot options otherwise your booting (I think, in legacy mode, BIOS compatible mode). edit `/etc/default/grub` and find the line 'GRUB_CMDLINE_LINUX' and add the sauce. Also to see if you booted via EFI try `[ -d /sys/firmware/efi ] && echo "EFI boot on HDD" || echo "Legacy boot on HDD"`.


Setting up mDNS (see previous posting on avahi)

	# sync
	# exit

I want/need network access, since these installs will take place at home, using my current network, I will just copy over my current profiles from `/etc/netctl/`, once booted into the flash drive I could run `iwconfig` find the device name for my wls and enp. UPDATE: I need to install b43-firmware from the AUR in order for my Wi-Fi to work on the (4,1) system.

	# sync
	# umount /mnt/boot
	# umount /mnt

Boot the drive to ensure your able to boot the system & enable a few services, I can easily install Arch on my other systems via ssh.

		### I had to enable root access for install
	# systemctl enable sshd.service
	# systemctl enable avahi-daemon.service

Just a few layout notes for my other systems

### Use GPT

Have a 1MB buffer between partitions (including the first entry and last)

- **/dev/sda1/**
	- Will be mounted at /boot
	- Needs to be either FAT32 (ideal) or HFS+
		- Maybe make another partition and mount at /boot/EFI (hfs+)
	- Make at least 512MB

- **/dev/sda2/**
	- Will be mounted as /
	- Should be ext4, could be ext3
	- Should be about 35% of the drive, room to grow
- **/dev/sda3/**
	- Will be mounted as /home
	- Must be ext4, to keep data safe
- **Swap**
	- First use the local HD reduce RAM constraints (think of this a small cache)
		- fallocate -l 256MB /swapfile
		- chmod 600 /swapfile
		- mkswap /swapfile
		- swapon -p 20 /swapfile
		- edit `/etc/sysctl.conf` and change swappiness to 50
		- edit fstab find the swapfile entry and edit the options to defaults,pri=50
	- I will just make use of a swap file, lets try to make the FS as [fast as possible for this][fastSwap] (more to come)
		- should I mount in /var/tmp/swap
	- mke2fs -t ext4 -m 1.0
		- I've read using  `-O ^has_journal` will disable journal at creation skipping a few steps below
	- tune2fs -o journal_data_writeback
	- tune2fs -O ^has_journal
	- look into barrier=0,nobhng
		- does using errors=remount-ro make sense?
	- mkdir -P /var/unstable
	- mount /dev/sdXY /var/unstable
{: .blank-bullet}

**Notes:** this install also works just fine on a MacBookPro(9,2)

**Update:** I suffered some drive issue with the flash drive. pacman became croupt (the binaries where zeroed out) and the /boot partition was destroyed. I was able to reinstall pacman by downloading the source: [^pacmanNote]

	# curl -O ftp://ftp.archlinux.org/other/pacman/pacman-4.1.2.tar.gz
	# tar -x pacman.tar.gz
	# cd pacman
	# configure ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var
	# make
	# make install
	# pacman -S $(pacman -Qnq)

[wikiUSB]: https://wiki.archlinux.org/index.php/Usb_install
[fastSwap]: http://fenidik.blogspot.com/2010/03/ext4-di-sable-journal.html
[extDiff]: http://www.thegeekstuff.com/2011/05/ext2-ext3-ext4/



[^fat32]: `sudo mkfs.vfat -c -F32 /dev/sdc1 -n flashBoot -v`
[^refindUpdate]: Everything moved to /usr/share/refind/ need to update this section.
[^pacmanNote]: The last command reinstalls 'all' packages... While it may not be needed, I just found I ran into a few issues where other libs where also croupted. If flash drive was supposed to be used for anything other than play/test and installer I would have wiped the drive and started fresh.
