# Local Guides Client

This is an unofficial client library to fetch contribution data for Google Maps Local Guides, such as points, amounts of reviews and photos, and more. It parses the Google Maps HTML source code of your public profile and requires no authentication.

This package is based on the [google-local-guides-api](https://github.com/JinKim7/google-local-guides-api) by @JinKim7 (which sadly does not get maintained anymore) and introduces additional features and bugfixes.


## Usage 

Install the package:

```
npm install local-guides-client
```

Following code creates a client instance, initilizes it by providing the profile URL and fetches the profile data.

```javascript
const lgclient = require('local-guides-client');

let client = new lgclient();

await client.init("https://www.google.com/maps/contrib/112307346288942529735?hl=en");

let data = client.getMetadata();
let points = client.getPoints();
```