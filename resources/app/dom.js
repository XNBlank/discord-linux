(function(){

  var fs = require("fs");
  var shell = require("shell");

  var datapath = process.env.HOME + "/.config/Discord/init.json";
  var data;
  try{
    data = JSON.parse(fs.readFileSync(datapath, 'utf-8'));
  } catch(e){
    alert("Error loading init.json." + e);
  }

  var toggleCSS;
  var usePTB;
  var useCanary;
  toggleCSS = data.useCSS;
  usePTB = data.isPTB;
  useCanary = data.isCanary;
  //alert("Using CSS?" + toggleCSS);


  onload = function(){
      //alert(csspath);
      var customcss = "";
      var webview = document.getElementById("discord-webview");
      if(toggleCSS == true){
        var csspath = process.env.HOME + "/.config/Discord/user.css";
	fs.readFile(csspath, 'utf-8', function(err,data){
	  if (err) {alert(err);}
	  customcss = data;
	});
      }
      webview.addEventListener("dom-ready", function(event){
	webview.openDevTools();
	if(customcss != "" && toggleCSS == true){
	  webview.insertCSS(customcss);
	}
      });

      webview.addEventListener("new-window", function(event){
          console.log(event.url);
          shell.openExternal(event.url);
      });

  };
})();
