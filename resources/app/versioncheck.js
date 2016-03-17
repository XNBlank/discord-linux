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

  var usePTB;
  var useCanary;
  usePTB = data.isPTB;
  useCanary = data.isCanary;

  onload = function(){
    if(usePTB == true){
      document.getElementById("discord-webview").src = "https://ptb.discordapp.com/channels/@me";
    } else if(useCanary == true){
      document.getElementById("discord-webview").src = "https://canary.discordapp.com/channels/@me";
    }
  }();

})();
