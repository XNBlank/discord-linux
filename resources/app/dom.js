(function() {

	var fs = require("fs");
	var shell = require("shell");

	var initPath = path.join(app.getPath("userData"), "init.json");
	var data;
	try {
		data = JSON.parse(fs.readFileSync(datapath, 'utf-8'));
	} catch (e) {
		data = {
			"bounds": {
				"x": 100,
				"y": 100,
				"width": 1024,
				"height": 768
			},
			"minTray": false,
			"useCSS": false
		};
	}

	var toggleCSS;
	toggleCSS = data.useCSS;

	onload = function() {
		var customcss = "";
		var webview = document.getElementById("discord-webview");
		if (toggleCSS == true) {
			var csspath = process.env.HOME + "/.config/Discord/user.css";
			fs.readFile(csspath, 'utf-8', function(err, data) {
				if (err) {
					alert(err);
				}
				customcss = data;
			});
		}
		webview.addEventListener("dom-ready", function(event) {
			if (customcss != "" && toggleCSS == true) {
				webview.insertCSS(customcss);
			}
			window.dispatchEvent(new Event("resize"));
		});

		webview.addEventListener("new-window", function(event) {
			console.log(event.url);
			shell.openExternal(event.url);
		});

	};
})();
