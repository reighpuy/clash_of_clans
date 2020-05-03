package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.clashofclans.com/v1/players/%23(player_tag)"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("accept", "application/json")
  req.Header.Add("cache-control", "max-age=600")
  req.Header.Add("content-type", "application/json; charset=utf-8")
  req.Header.Add("Authorization", "Bearer api_key")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}