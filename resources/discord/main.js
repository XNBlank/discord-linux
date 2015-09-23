var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');
var MenuItem = require('menu-item');
var Tray = require('tray');
var globalShortcut = require('global-shortcut');
var shell = require('shell');
var path = require("path");
var fs = require("fs");
var initPath = path.join(app.getAppPath(), "init.json");
var data;
try {
data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
}
catch(e) {
}

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

var appIcon = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow((data && data.bounds) ? data.bounds : {width: 1200, height: 900});
//  mainWindow = new BrowserWindow({width: 1200, height: 900, icon: __dirname + '/icon.png', title: "Discord", 'auto-hide-menu-bar': true});
  mainWindow.setTitle("Discord");
  mainWindow.setMenuBarVisibility(false);
  var minToTray;
  try{
    minToTray = data.minTray;
  }
  catch(e){
    console.log(e);
    minToTray = false;
  }
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('close', function(){
    var data = {
      bounds: mainWindow.getBounds(),
      minTray: minToTray
    };
    fs.writeFileSync(initPath, JSON.stringify(data));
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });




  globalShortcut.register('ctrl+r', function () {
          mainWindow.reload();
  });


  //tray icon
  appIcon = new Tray(__dirname + '/tray.png');

  var disMinButton = new MenuItem({
    label: 'Disable Minimize to Tray',
    type: 'checkbox',
    checked: true,
    click: function() {
      if(disMinButton.checked == true){
        minToTray = false;
        console.log("Disabled MinToTray");
      } else if (disMinButton.checked == false) {
        minToTray = true;
        console.log("Enabled MinToTray");
      }
    }
  });

      if(minToTray == false){
        disMinButton.checked = true;
      }
      else if(minToTray == true){
        disMinButton.checked = false;
      }

  var menu = new Menu();
  menu.append(new MenuItem({ label: 'Show Discord', type: 'normal', click: function() { mainWindow.restore(); mainWindow.setSkipTaskbar(false); } }));
  menu.append(new MenuItem({ type: 'separator' }));
  menu.append(new MenuItem({ label: 'Refresh Discord', type: 'normal', click: function(){ mainWindow.reload(); } }));
  menu.append(new MenuItem({ type: 'separator' }));
  menu.append(disMinButton);
  menu.append(new MenuItem({ type: 'separator' }));
  menu.append(new MenuItem({ label: 'Quit Discord', type: 'normal', click: function() { app.quit(); } }));

  appIcon.setToolTip('Discord');
  appIcon.setContextMenu(menu);

  mainWindow.on('minimize', function() {
    if(minToTray == true){
      mainWindow.setSkipTaskbar(true);
    }
  });

  var webContents = mainWindow.webContents;

//Link fix
  webContents.on('new-window', function(event, urlToOpen) {
    event.preventDefault();
    shell.openExternal(urlToOpen);
  });

});
