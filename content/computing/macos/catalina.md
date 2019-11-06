# Catalina

Word Of Caution: Mac OS Catalina does not easily allow access to /, not even with sudo, this causes mongo to not be usable when installed using available instructions. Even if you do install mongod somewhere when you try to run it will fail due to the fact that /data/db does not exist. And you cannot create it. Thanks Apple. They have been locking down the system for several releases now. I suspect the end-game is that you can only get Mac software from the App Store. If it weren't for the iPhone you could call that a crazy idea.

I see this problem was reported already on Oct 22. The solution there seems good enough but I’m going to look into modifying mongo.conf so as to avoid requiring the extra command line argument.

Just add the conf and the problem is solved.

Installing via brew does the trick too.

you can always add mongod to your .zprofile with the config location  `alias mongod="mongod --config /usr/local/etc/mongod.conf"`

I have a student using a MacBook Pro and he can not access his html files in Chrome.  Has anyone else had this problem and know how to fix it, my Google-Fu is failing me on this one. (edited)

[https://support.apple.com/guide/mac-help/change-permissions-for-files-folders-or-disks-mchlp1203/mac](https://support.apple.com/guide/mac-help/change-permissions-for-files-folders-or-disks-mchlp1203/mac)

[https://cmatskas.com/interacting-with-local-data-files-using-chrome/](https://cmatskas.com/interacting-with-local-data-files-using-chrome/)

I just helped a student with this a couple days ago. It’s a Catalina issue (I think). The following worked well:

[https://stackoverflow.com/questions/39482690/cant-open-some-html-files-in-chrome-mac/41923908#41923908](https://stackoverflow.com/questions/39482690/cant-open-some-html-files-in-chrome-mac/41923908#41923908)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA0NTE2MDc1OF19
-->