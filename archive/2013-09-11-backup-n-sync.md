---
title: digital history
subtitle: the final frontier in personal computing
tags:
  - sync
  - backup
meta:
  description: null
  image:
    url: null
    caption: null
    link: null
  source:
    url: null
    title: null
dispatch: 'https://spideroak.com/download/referral/3dd319d4afeaad92c8672e76c8789ef2'
date: '2013-09-11T00:00:00-04:00'
path: /2013/09/11/backup-n-sync/
---

Each year, month, week and day we are moving awway from the classic personal computer paradigm and closer to some hybrid sci-fi paradigm geeks just lusted over as adolescents. With the rise of smart phones and cloud computing we will soon find ourselves at a cross road wondering what to do with all of our data. Now I could go on and on about data portablity. I think a bigger issue exist, the storge of our data. How does one preserve their digital history.

Ever since I moved to to linux as my day-to-day OS I've been searching for the best backup/sync solution. I want something I can trust, that has an ability to sync, revision/version control and most importantly I want a soulution that I can easily archived data when on my iPhone or on OS X. I know back up and sync are two different problems, requiring differet solutions. However, the data I wish to keep synced between devices also happen to be important enought for me to keep backed up.

From what I can tell on a few "big box" solutions exist. In the past I have relied on [Dropbox][dropbox] to help keep my data in sync, I really can't see a time where Dropbox isn't going to play a role... in what ever this quest is. Who doesn't love Dropbox? It is great for sharing files and keeping data synced; great as it is, it is not a backup solution.

Last year I did purchase a backup plan at a discounted price, Crash Plan. I didn't do much research on it, but for the price I just couldn't resist. I later found out the client side software required Java, I'm not a fan of running Java but I gave it spin and quickly dropped that solution. It seems like a good program, but ipt isn't want I want/need.

For awhile I've been doing my own thing using SparkleShare. At first glance this seems[^gitBackup] like a perfect solution, use anyone of the git based hosting solutions to to keep everything backed up and synced. This is great for little things that you wish to share, like your dotfiles or even your website. When the data becomes more personal, or work related you start looking at -crypto. Once you enable crypto Sparkleshare starts to break down. You no longer have easy access to files when away from your system and esentially loose revision control. In addition a [git repository does have a practical size limit][gitSize].

A few weeks ago I tried duplicity, I like it but where do I store my off site backups? The logical solution seems to be [Amazon S3][amazonS3] or [Amazon Glacier][amazonGlacier]. Both services are well tested and it is doubtful they will disappear anytime soon. This may be the best long term solution for deep archiving and will preserve some form of digital history.

 I've also tried [BitSync][bitSync], which keeps files in sync with amazing effecienty but for the sync to work more than one system, under your control, must be onlne. It also seems to be more or a niche geek solution.

For now I think I will be going with [SpiderOak][spiderOak]s. While SpiderOak may not be the most ideal solution for the preserving a persons digital history, it currently seems to be best of all the bad choices. I can then layer in the other systems/methods and allow SpiderOak to main heavy lifting.

Oh, I also have a lifetime account with StrongSpace... and while it can work as a backup solution and can sync via rsync. I must admit I don't feel I can trust it as a long term solution. Not after the Joyent/TextDrive debacle.

[^gitBackup]: Though it sounds like Git would make an amazing backup tool, Git really doesn't work out well for backups over the long term. Many solutions that are specifically designed for performing backups are even less expensive than GitHub's Micro plan. (via: [GitHub][gitBackup])

[dropbox]: http://db.tt/Woq86zN
[sparkleshare]: http://sparkleshare.org/
[gitBackup]: https://help.github.com/articles/what-is-my-disk-quota#backups
[gitSize]: http://www.quora.com/Git-revision-control/What-is-the-practical-maximum-size-of-a-Git-repository-full-of-text-based-data?share=1
[amazonS3]: http://aws.amazon.com/s3/
[amazonGlacier]: http://aws.amazon.com/glacier/
[bitSync]: http://labs.bittorrent.com/experiments/sync.html
[spiderOak]: https://spideroak.com/download/referral/3dd319d4afeaad92c8672e76c8789ef2

