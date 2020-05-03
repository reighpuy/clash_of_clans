var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("cache-control", "max-age=600");
myHeaders.append("content-type", "application/json; charset=utf-8");
myHeaders.append("Authorization", "Bearer api_key");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.clashofclans.com/v1/players/%23(player_tag)", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));