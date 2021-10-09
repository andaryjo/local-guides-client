const axios = require('axios');

class ContributionMetadata {
    async init(link) {
        this.responseBody = await this.getResponseBody(link);
    }

    /**
     * Gets how many points is associated with your Local Guide Profile
     * @public
     * @return {string} # of points
     */
    getName() {
        let pattern = /"Contributions by (.*?)"/g;
        return this.getMatch(pattern);
    }

    /**
     * Gets how many points is associated with your Local Guide Profile
     * @public
     * @return {string} # of points
     */
    getPoints() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) Points/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets what level you are on your Local Guide Profile
     * @public
     * @return {string} your level
     */
    getLevel() {
        let pattern = /Level (\d+) Local Guide/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many reviews you have left associated with your Local Guide Profile
     * @public
     * @return {string} # of reviews
     */
    getReviews() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) review[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many ratings you gave associated with your Local Guide Profile
     * @public
     * @return {string} # of ratings
     */
    getRatings() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) rating[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many questions you left associated with your Local Guide Profile
     * @public
     * @return {string} # of questions
     */
    getQuestions() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) answer[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many places you added associated with your Local Guide Profile
     * @public
     * @return {string} # of places added
     */
    getPlacesAdded() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) place[s]? added/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many edits you made associated with your Local Guide Profile
     * @public
     * @return {string} # of edits
     */
    getEdits() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) edit[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many facts you left associated with your Local Guide Profile
     * @public
     * @return {string} # of facts
     */
    getFacts() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) fact[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many videos you uploaded associated with your Local Guide Profile
     * @public
     * @return {string} # of videos
     */
    getVideos() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) video[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many Q&As you answered associated with your Local Guide Profile
     * @public
     * @return {string} # of Q&As
     */
    getQA() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) Q\\\\u0026A/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many roads you added associated with your Local Guide Profile
     * @public
     * @return {string} # of roads
     */
    getRoadsAdded() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) road[s]? added/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets how many lists you published associated with your Local Guide Profile
     * @public
     * @return {string} # of published lists
     */
    getPublishedLists() {
        let pattern = /(\d+(?:,\d+)*(?:\.\d+)?) published list[s]?/g;
        return this.parseNumber(this.getMatch(pattern));
    }

    /**
     * Gets all the metadata in one object
     * @public
     * @return {JSON} metadata
     */
    getMetadata() {
        return {
            name: this.getName(),
            points: this.getPoints(),
            level: this.getLevel(),
            reviews: this.getReviews(),
            ratings: this.getRatings(),
            questions: this.getQuestions(),
            placesAdded: this.getPlacesAdded(),
            edits: this.getEdits(),
            facts: this.getFacts(),
            videos: this.getVideos(),
            qa: this.getQA(),
            roadsAdded: this.getRoadsAdded(),
            listsPublished: this.getPublishedLists()
        }
    }

    /**
     * Gets the match result based on the pattern searching through the response body of the web page
     * @private
     * @param {RegExp} pattern Pattern used to find matches within the body
     * @param {string} body Entire web page body
     * @return {string} first group match result if found, empty string if not found.
     */
    getMatch(pattern) {
        let matches = pattern.exec(this.responseBody);
        if (!matches) return null;
        return matches.length > 0 ? matches[1] : "";
    }

    /**
     * Gets the web page response body as a string
     * @private
     * @param {string} link Link to your contribution page
     * @return {string} response data which is a string of the entire web page
     */
    async getResponseBody(link) {
        return (await axios.get(link)).data;
    }

    parseNumber(string) {
        return parseInt(string.replace(/,/g, '').replace(/\./g, ''));
    }
}

module.exports = ContributionMetadata;
