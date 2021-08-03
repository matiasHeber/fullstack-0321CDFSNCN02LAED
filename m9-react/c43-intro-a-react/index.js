import axios from "axios";

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.io)",
 "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAACbCRwEAAAAAW%2F3J0c9uTezRk8ZEs0vlkLXCGZ0%3Dbmy3EmqJnEUqlb8sO2IpGKHlrdBiJKRf2SBtmy2J69DEE6xgpE" 
}

let reqOptions = {
  url: "https://api.twitter.com/2/tweets?ids=1418323286405025802,1418322577022496779&tweet.fields=created_at&expansions=author_id",
  method: "GET",
  headers: headersList,
}

axios.request(reqOptions).then(function (response) {
  console.log(response.data);
})