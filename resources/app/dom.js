(function(){

  var shell = require("shell");
  onload = function(){
      var webview = document.getElementById("discord-webview");
      webview.addEventListener("new-window", function(event){
          console.log(event.url);
          shell.openExternal(event.url);
      });
  };
})();
