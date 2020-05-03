import requests

url = "https://api.clashofclans.com/v1/players/%23(player_tag)"

payload = {}
headers = {
  'accept': 'application/json',
  'cache-control': 'max-age=600',
  'content-type': 'application/json; charset=utf-8',
  'Authorization': 'Bearer api_key'
}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
