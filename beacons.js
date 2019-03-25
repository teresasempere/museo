const requestUrl = "https://api.kontakt.io/device";
const requestMethod = "GET";
const requestMode = "cors";

let headers = {
  'Api-Key': "yKGMffOgXeFEbEPJuFeyDbocBehyTJfK",
  'Accept': "application/vnd.com.kontakt+json;version=10"
};

let parameters = {
  'access': "OWNER"
};

let url = new URL(requestUrl);
url.search = new URLSearchParams(parameters);

fetch(url, {
    method: requestMethod,
    mode: requestMode,
    headers: headers
  })
  .then((response) => response.json())
  .then((json) => console.log(JSON.stringify(json)));