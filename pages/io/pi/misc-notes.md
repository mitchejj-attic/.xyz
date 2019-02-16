---
layout: page
title: you shouldn't see this
subtitle: just a mange bit of links
tags: null
meta:
  description:
  image:
     url:
     caption:
     link:
sitemap_priority: '-1.0'
---
https://wiki.archlinux.org/index.php/VPN_over_SSH
http://www.tldp.org/HOWTO/NFS-HOWTO/security.html
https://serverfault.com/questions/486188/securing-nfs-against-ssh-tunneling


http://allanmcrae.com/2015/01/replacing-makepkg-asroot/
http://aur.sh/

http://0pointer.net/blog/
http://www.linuxfromscratch.org/lfs/view/systemd/chapter06/systemd.html
http://0pointer.de/blog/projects/detect-virt.html

http://www.ihackforfun.eu/index.php?title=improve-security-by-removing-services&more=1&c=1&tb=1&pb=1

	https://raymii.org/s/tutorials/IPSEC_L2TP_vpn_on_a_Raspberry_Pi_with_Arch_Linux.html

https://github.com/Nefelim4ag/systemd-swap

http://www.apertoire.net/gogs-an-alternative-to-gitlab/

------
pibang
http://n0where.net/pibang-linux/
https://github.com/super-nathan/pibang-configs/tree/master/skel

http://www.duckdns.org/


I have a little usb mico SD adaptor that I was using on one of the MacBooks. So my plan is to use the built in microSD card reader (mmcblk0) to be MBR based with '/boot','/etc', and '/usr' (/sbin, /bin /lib are all found in /usr). So basically /home, /srv and /var I will then move everything else to the USB reader (sda) GTP based with different subvolumes.

mount -o noatime,discard,ssd,autodefrag,compress=lzo,space_cache
mount -o noatime,discard,ssd,autodefrag,compress=lzo,space_cache /dev/sda /mnt/usb/
btrfs subvolume create /mnt/usb/home
mkfs.btrfs --force --label piModern -O ^extref,^skinny-metadata /dev/sda


rsync -aAXv /var/* /mnt/usb/var
mount -o noatime,discard,ssd,autodefrag,compress=lzo,space_cache UUID=93f0a8fa-4406-4786-aa99-e53ae8ce704d /mnt/usb/
rsync -aAXv

In /etc/fstab, the mount option subvol="subvolume-name" has to be specified, and the fsck setting in the last field has to be 0.


Now that I have my Pi in my posession, shipping issues...




Finding the IP address
ip addr show


pacman -Syu haveged openssh  htop  avahi nss-mdns zsh

rm /etc/ssh/ssh_host_*_key*


https://github.com/afaqurk/linux-dash
https://wiki.archlinux.org/index.php/Raspberry_Pi
http://elinux.org/RPi_Hub




----
nfs
osx: id
linux: http://www.cyberciti.biz/faq/howto-change-rename-user-name-id/


sudo mount -v -t nfs -o resvport 192.168.0.17:/srv/nfs4/usb test
sudo mount -v -t nfs -o resvport 192.168.0.17:/home/jason test
http://wiki.linux-nfs.org/wiki/index.php/Nfsv4_configuration
http://linux.die.net/man/5/exports
https://yourmacguy.wordpress.com/2012/06/29/osx-automount/
https://tentacles666.wordpress.com/2013/10/27/nfs-mounts-in-os-x-mavericks/
http://www.bresink.com/osx/NFSManager.html
http://www.cyberciti.biz/faq/apple-mac-osx-nfs-mount-command-tutorial/

http://www.iplocation.net/tools/netmask.php


---
sys info
https://superuser.com/questions/303981/what-is-the-linux-command-to-find-out-hardware-info
http://www.linuxquestions.org/questions/linux-general-1/command-to-check-hardware-135433/



---
https://github.com/anholt?tab=activity
http://dri.freedesktop.org/wiki/VC4/
https://github.com/ssvb/xf86-video-fbturbo
http://cgit.freedesktop.org/xorg/driver/xf86-video-fbdev/


http://www.monitorix.org/screenshots.html


ddns
ddclient
https://wiki.archlinux.org/index.php/Dynamic_DNS


systemctl restart ddclient.service

use=web, web=checkip.dyndns.com/, web-skip='IP Address'
protocol=freedns
#server=freedns.afraid.org
login=mitchejj
password=YAVsoW1A
rpi-50a.mooo.com

https://wiki.archlinux.org/index.php/Systemd/Timers#As_a_cron_replacement


https://wiki.archlinux.org/index.php/Display_Power_Management_Signaling
http://www.cyberciti.biz/tips/linux-disable-screen-blanking-screen-going-blank.html



interesting bits
http://www.berryterminal.com/doku.php/berryboot

http://smarticase.com/collections/all/products/smarti
https://wiki.archlinux.org/index.php/Solid_State_Drives

http://allanmcrae.com/2015/01/replacing-makepkg-asroot/


--- notes from install _____
