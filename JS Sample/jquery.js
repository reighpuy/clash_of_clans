var settings = {
  "url": "https://api.clashofclans.com/v1/players/%23(player_tag)",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "accept": "application/json",
    "cache-control": "max-age=600",
    "content-type": "application/json; charset=utf-8",
    "Authorization": "Bearer api_key"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});