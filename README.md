Source from : ClashOfClans
<br>
 && **Edited by Reighpuy**

Get Api Key : [COC](https://developer.clashofclans.com/)

```python
headers = {
  'accept': 'application/json',
  'cache-control': 'max-age=600',
  'content-type': 'application/json; charset=utf-8',
  'Authorization': 'Bearer (insert apikey here)'
}
conn.request("GET", "/v1/locations/(location_id)/rankings/players?limit=3", payload, headers)
```
