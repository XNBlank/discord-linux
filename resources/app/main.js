var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');
var MenuItem = require('menu-item');
var Tray = require('tray');
var ipc = require('electron').ipcMain
var globalShortcut = require('global-shortcut');
var shell = require('shell');
var path = require("path");
var fs = require("fs");
var initPath = path.join(app.getPath("userData"), "init.json");
var data;
var dialog = require('dialog');
try {
	data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
}
catch(e){
	data = {
		"bounds": {"x":100, "y":100, "width":1024,"height":768},
		"minTray":false,
		"useCSS":false
	};
}

var menu = new Menu();
var minToTray;
var useCustomCSS;
minToTray = data.minTray;
useCustomCSS = data.useCSS;
var updateReady = false;
var quitForReal = false; // Dirty

app.commandLine.appendSwitch('client-certificate', 'file://' + __dirname + '/assets/comodorsaaddtrustca.crt');
app.commandLine.appendSwitch('ignore-certificate-errors');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

    updateWindow = new BrowserWindow({width: 300, height: 300, icon: __dirname + '/icon.png', title: "Discord", 'auto-hide-menu-bar': true, frame: false});
    updateWindow.setResizable(false);
    updateWindow.setAlwaysOnTop(true);
    updateWindow.setSkipTaskbar(true);
    updateWindow.loadURL('file://' + __dirname + '/update.html');

    //When no updates



    //mainWindow = new BrowserWindow((data && data.bounds) ? data.bounds : {width: 1200, height: 900});
    mainWindow = new BrowserWindow({width: 900, height: 750, icon: __dirname + '/icon.png', title: "Discord", 'auto-hide-menu-bar': true});
    mainWindow.setBounds(data.bounds);
    webContents = mainWindow.webContents;
    updateWindow.close();
    mainWindow.setTitle("Discord");
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    //Nullify any closed windows.
    mainWindow.on('closed', function() {
        //updateWindow.close();
        mainWindow = null;
    });
    updateWindow.on('closed', function(){
        updateWindow = null;
    });
    //Save settings when app is closed.
    mainWindow.on('close', function(){
        var data = {
					bounds: mainWindow.getBounds(),
					minTray: minToTray,
					useCSS: useCustomCSS
        };
        fs.writeFileSync(initPath, JSON.stringify(data));
    });


    var showButton = new MenuItem({
        label: 'Show Discord',
        type: 'normal',
        click: function() {
			mainWindow.setSkipTaskbar(false);
            mainWindow.show();
        }
    });

    //Minimize to tray. (Only works on some OSs)
    var disMinButton = new MenuItem({
      label: 'Disable Minimize to Tray',
      type: 'checkbox',
      checked: !minToTray,
      click: function() {
        if(disMinButton.checked == true){
          minToTray = false;
          console.log("Disabled MinToTray");
        } else if (disMinButton.checked == false) {
          minToTray = true;
          console.log("Enabled MinToTray");
        }

		disMinButton.checked = !minToTray;

      }
    });

		//Toggle CSS (Only works on some OSs?)
			var toggleCSS = new MenuItem({
				label: 'Use Custom CSS',
				type: 'checkbox',
				checked: useCustomCSS,
				click: function() {
					if(toggleCSS.checked == true){
						useCustomCSS = true;
						console.log("Disabled useCustomCSS");
					} else if (toggleCSS.checked == false) {
						useCustomCSS = false;
						console.log("Enabled useCustomCSS");
					}
	
			toggleCSS.checked = useCustomCSS;
	
				}
			});

    mainWindow.on('close', function(event) {
        if(minToTray && !quitForReal){
			event.preventDefault();
			data.bounds = mainWindow.getBounds();
			mainWindow.hide();
        	mainWindow.setSkipTaskbar(true);
        }
    });


    //Tray Menu
    //menu.append(new MenuItem({ label: 'Show Discord', type: 'normal', click: function() { mainWindow.restore(); mainWindow.setSkipTaskbar(false); } }));
    //menu.append(showButton); - Depricated. Doesn't work in Ubuntu Unity
    menu.append(new MenuItem({label: 'Show Discord', type: 'normal', click: function(){ mainWindow.setSkipTaskbar(false); mainWindow.show(); } }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'Refresh Discord', type: 'normal', click: function(){ mainWindow.reload(); } }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(disMinButton);
		menu.append(toggleCSS);
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'Quit Discord', type: 'normal', click: function() { quitForReal = true; app.quit(); } }));

    appIcon = new Tray(__dirname + '/tray.png');
    appIcon.setToolTip('Discord');
    appIcon.setContextMenu(menu);

	appIcon.on('click', function(event){
		mainWindow.setSkipTaskbar(false);
		mainWindow.show();
	});

    //Link fix
    webContents.on('new-window', function(event, urlToOpen) {
      event.preventDefault();
      shell.openExternal(urlToOpen);
    });

    //Allow refreshing and Show Window
    mainWindow.on('focus', function(){
        //showButton.enabled = false;
        globalShortcut.register('ctrl+r', function () {
            mainWindow.reload();
        });
    });
    //Disable refresh when not in focus.
    mainWindow.on('blur', function(){
        //showButton.enabled = true;
        globalShortcut.unregister('ctrl+r');
    });

	mainWindow.webContents.on('will-navigate', function(event){
		event.preventDefault();
	});

});
