# Discord-Linux
## An electron wrapper for DiscordApp!



![DiscordApp](https://discordapp.com/assets/df21d1b0c082d8a3cce1c43b290614f9.png)

Discord-Linux is a wrapper for [DiscordApp](http://discordapp.com/). This was made for those who would like to run Discord under it's own program on Linux. There are two different flavours of Discord-Linux; x86 (32bit) and x64 (64bit).

At the moment it is in a very simple state and will be updated frequently. If you find any issues, write it up in the issues tab and I'll see what I can do. 


### If you have any questions or need support, feel free to drop by the Discord channel : https://discord.gg/0XKEBLSe6cdvBgWo
---

## TODO

**Nothing**. If you have a suggestion, feel free to drop by the Discord channel and voice it!
---

## FAQ

Q : Why am I not getting notices from mentions, messages, etc?

A : **Make sure you check your settings and enable notices. Most of the time, on first startup, notices are turned off by default.**

Q : How come Push to Talk doesn't work?

A : **Unfortunately, Discord-Linux is just a wrapper, which means it will act like the web version of Discord. So that means no full Push to Talk support. Sorry.**

## Downloads

##Changelog 0.1-5
Ability to add a custom CSS theme is now possible! Now you can customize Discord to how you would like to see it, whether to have it fit the theme of your desktop, or to make it more translucent. The sky is the limit!

**Few things to note about using a Custom CSS.**
- 1 ) the CSS must use !important on every line.
- 2 ) the injected CSS is located in the same dir as the `init.json` (`~/.config/Discord/user.css`) and must be named `user.css`

You are able to disable your css theme using the tray icon menu, which now has a toggle option for it.

For a starter theme, here is one made by a Discord-Linux user that goes by the name of Tenshin.
http://hastebin.com/raw/azowaciwit

###Changelog 0.1-4
- Updated to upstream version of Electron.
- Small tweaks in code.
- Config is saved to userdata folders now.

Please note that the .DEB files below are not up to date. If you are on debian and wish to update, please download the source file and overwrite your old installation.

### Changelog 0.1-3
- CRITICAL UPDATE : iframe replaced with webview, due to new x-frame-options set on the domain for http://discordapp.com/login/ (Thanks for the help @jacobmischka )

### Changelog 0.1-2
- Fixed graphical glitch after DiscordApp update causing the Light Theme to look really odd. (Thanks @jacobmischka )
- Added **true** minimize to tray support. (Thanks @jacobmischka again~)
- Added support for HighDPI screens. (Thanks @NathanielMichael )


### Changelog 0.1-1
- Fixed refresh bug.
- Stabilized program more.
- Cleaned up code, removed unnecessary elements.
- (Hopefully) fixed missing icon.
- (Hopefully) fixed missing tray icon on some OS's

### Please delete your old Discord Linux folder and replace it with this update.

## Debian (0.1-3)
<a href="https://github.com/XNBlank/discord-linux/releases/download/x86-0.1.3/discordlinux-ia32.deb"><img src="http://i.imgur.com/1AXUERm.png"></a> <a href="https://github.com/XNBlank/discord-linux/releases/download/x64-0.1.3/discordlinux-x64.deb"><img src="http://i.imgur.com/mnREvcr.png"></a>

## Arch

<a href="https://aur.archlinux.org/packages/discord/">Aur Repository</a>
(Thanks rockneurotiko)
## Source

<a href="https://github.com/XNBlank/discord-linux/archive/x86-0.1.5.tar.gz"><img src="http://i.imgur.com/ffAMbEr.png"></a> <a href="https://github.com/XNBlank/discord-linux/archive/x64-0.1.5.tar.gz"><img src="http://i.imgur.com/ZgjJZ2E.png"></a>
