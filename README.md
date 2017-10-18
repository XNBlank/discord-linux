# Discord-Linux has been deprecated
**Please use the official Linux Discord client for full features such as Push To Talk and Game Detection.**


[Canary announcement](https://www.reddit.com/r/discordapp/comments/4bu7lm/discord_linux_very_experimental_canary_release/)

[Canary download URL](https://discordapp.com/api/download/canary?platform=linux)

# Discord-Linux
## An electron wrapper for DiscordApp!

Discord-Linux is a wrapper for [DiscordApp](http://discordapp.com/). This was made for those who would like to run Discord under it's own program on Linux. There are two different flavours of Discord-Linux; x86 (32bit) and x64 (64bit).

### If you have any questions, feel free to drop by the Discord channel : ![https://discord.gg/discord-linux](https://discordapp.com/api/guilds/96230004047740928/embed.png?style=banner2)

---

## FAQ

Q : Why am I not getting notices from mentions, messages, etc?

A : **Make sure you check your settings and enable notices. Most of the time, on first startup, notices are turned off by default.**

Q : How come Push to Talk doesn't work?

A : **Unfortunately, Discord-Linux isn't as full featured as official clients, which means it will mostly act like the web version of Discord. So that means no full Push to Talk support.**

Q : How do I make / enable custom themes?

A : **Few things to note about using a Custom CSS.**

**- 1 ) the CSS must use !important on every line.**

**- 2 ) the injected CSS is located in the same dir as the `init.json` (`~/.config/Discord/user.css`) and must be named `user.css`**

**You are able to disable your css theme using the tray icon menu, which now has a toggle option for it.**

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

## Debian
Download the TAR file below and extract to a directory of your choice. No need to build or make. Just run the discord application.

## Arch

<a href="https://aur.archlinux.org/packages/discord/">Aur Repository</a>
(Thanks rockneurotiko)
## Source

<a href="https://github.com/XNBlank/discord-linux/archive/x86-0.1.5.tar.gz"><img src="http://i.imgur.com/ffAMbEr.png"></a> <a href="https://github.com/XNBlank/discord-linux/archive/x64-0.1.5.tar.gz"><img src="http://i.imgur.com/ZgjJZ2E.png"></a>
