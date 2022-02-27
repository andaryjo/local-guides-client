const axios = require("axios");

module.exports.fetchData = (uid) => {
    return new Promise(async (resolve, reject) => {
        const mapsUrl = `https://www.google.com/maps/contrib/${uid}?hl=en`;

        let response;
        try {
            response = (await axios.get(mapsUrl));
        } catch (err) {
            reject("was not able to fetch data for uid");
            console.error(err);
            return;
        }

        const raw = response.data;
        const finalURL = response.request.res.responseUrl;
        console.log(finalURL);

        const results = {
            name: getName(raw),
            level: getLevel(raw),
            points: getPoints(raw),
            reviews: getReviews(raw),
            ratings: getRatings(raw),
            phots: getPhotos(raw),
            videos: getVideos(raw),
            answers: getAnswers(raw),
            edits: getEdits(raw),
            placesAdded: getPlacesAdded(raw),
            roadesAdded: getRoadsAdded(raw),
            factsChecked: getFactsChecked(raw),
            qa: getQA(raw),
            publishedLists: getPublishedLists(raw),
            photoViews: getPhotoViews(raw)
        }

        resolve(results);
    });
}

function getName(raw) {
    const pattern = /"Contributions by (.*?)"/g;
    return extractMatch(raw, pattern);
}

function getLevel(raw) {
    const pattern = /Level (\d+) Local Guide/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getPoints(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) Points/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getReviews(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) review[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getRatings(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) rating[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getPhotos(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) photo[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getVideos(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) video[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getAnswers(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) answer[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getEdits(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) edit[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getPlacesAdded(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) place[s]? added/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getRoadsAdded(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) road[s]? added/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getFactsChecked(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) fact[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getQA(raw) {
    const pattern = /(\d+(?:[\.\,]\d+)*) Q\\\\u0026A/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getPublishedLists(raw) {
    let pattern = /(\d+(?:[\.\,]\d+)*) published list[s]?/g;
    return parseNumber(extractMatch(raw, pattern));
}

function getPhotoViews(raw) {
    const pattern = /[null|"],((?!(?:1,))\d+),\[\[/g;
    return parseNumber(extractMatch(raw, pattern));
}

function extractMatch(raw, pattern) {
    let matches = pattern.exec(raw);
    if (!matches) return null;
    return matches.length > 0 ? matches[1] : "";
}

function parseNumber(string) {
    if (!string) return null;
    return parseInt(string.replace(/,/g, '').replace(/\./g, ''));
}
