import http.client
import mimetypes

conn = http.client.HTTPSConnection("api.clashofclans.com")
payload = ''
headers = {
  'accept': 'application/json',
  'cache-control': 'max-age=600',
  'content-type': 'application/json; charset=utf-8',
  'Authorization': 'Bearer api_key'
}
conn.request("GET", "/v1/locations/32000114/rankings/players?limit=3", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))