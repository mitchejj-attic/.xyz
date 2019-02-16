---
title: Moving to Arch?
subtitle: null
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
date: '2013-04-16T00:00:00-04:00'
path: /2013/04/16/way-of-the-arch/
---
A few months back I installed Ubuntu; shortly after that I moved to CrunchBang. For the most part I've enjoyed my experiences with CruncBang. The few things I haven't enjoyed where directly related to it foundation, Debian. However, I stuck with it and even upgraded the Macbook (4,1) replacing the HD with an SSD and doubling the RAM.

I enjoyed the experience even more. Yet I keep feeling like the Debian base was holding me back. My use cases don't require stability. For the last week I've been tinkering with ArchLinux. First in a VM, then finally my older MacBook (2,1). The biggest headache to date, and I'm sure many more will come, has been the ability to boot the system. I was using the install CD as a bootstrap. Three days ago I started learning, more like glossing over, how EFI booting works. Slowly I was able to build a semi-working boot system.

The main important parts /boot/efi must be its own volume
mkdir -p /boot/efi/EFI/boot

install refind and move the required bits over to /boot/efi/EFI/boot rename refind_ia32.efi to bootia32.efi (the 2,1 MacBook has a 32-bit efi) and your now able to boot into refind.

