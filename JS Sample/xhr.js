
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.clashofclans.com/v1/players/%23(player_tag)");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("cache-control", "max-age=600");
xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
xhr.setRequestHeader("Authorization", "Bearer api_key");

xhr.send();