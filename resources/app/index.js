var plugins = require('electron-plugins'),
    ipc = require('electron').ipcRenderer;

document.addEventListener('DOMContentLoaded', function () {
    var context = { document: document }
    plugins.load(context, function (err, loaded) {
        if(err) return console.error(err);
        console.log('Plugins loaded successfully.');
    });

    var electronScreen = require('screen');
    var webFrame = require('web-frame');
    var size = electronScreen.getPrimaryDisplay().workAreaSize;

    function log2(number) {
        return Math.log(number) / Math.log(2);
    }

    webFrame.setZoomFactor(Math.floor(log2((size.width*size.height)/(800*600))));
})

ipc.on('update-available', function () {
    console.log('there is an update available for download')
})
