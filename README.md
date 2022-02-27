# Local Guides Client

This is an unofficial client library to fetch contribution data for Google Maps Local Guides, such as points, amounts of reviews and photos, and more. It parses the Google Maps HTML source code of your public profile and requires no authentication.

This package is based on the [google-local-guides-api](https://github.com/JinKim7/google-local-guides-api) by @JinKim7 (which sadly does not get maintained anymore) and introduces additional features and bugfixes.


## Usage 

Install the package:

```
npm install local-guides-client
```

Following code fetches data of the Local Guide profile with the profile ID `112307346288942529735`.

```javascript
const lgclient = require('local-guides-client');

lgclient.fetchData("112307346288942529735").then(data => {
    console.log(data);
});
```
Output:

```json
{
    "name": "Joe",
    "level": 9,
    "points": 50219,
    "reviews": 352,
    "ratings": 73,
    "photos": 3652,
    "videos": 8,
    "answers": 946,
    "edits": 1618,
    "placesAdded": 748,
    "roadsAdded": 1,
    "factsChecked": 73,
    "qa": 11,
    "publishedLists": 1,
    "photoViews": 19698543
}
```
