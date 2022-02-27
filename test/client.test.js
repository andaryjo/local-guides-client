const lgclient = require("../index.js");

describe("Test client", () => {

    it("Should return profile data with all attributes", async () => {

        const data = await lgclient.fetchData("112307346288942529735");

        expect(data).toHaveProperty("name");
        expect(typeof data.name).toBe("string");
        expect(data.name).toEqual("Joey");

        expect(data).toHaveProperty("level");
        expect(typeof data.level).toBe("number");

        expect(data).toHaveProperty("reviews");
        expect(typeof data.reviews).toBe("number");

        expect(data).toHaveProperty("ratings");
        expect(typeof data.ratings).toBe("number");

        expect(data).toHaveProperty("photos");
        expect(typeof data.photos).toBe("number");

        expect(data).toHaveProperty("videos");
        expect(typeof data.videos).toBe("number");

        expect(data).toHaveProperty("answers");
        expect(typeof data.answers).toBe("number");

        expect(data).toHaveProperty("edits");
        expect(typeof data.edits).toBe("number");

        expect(data).toHaveProperty("placesAdded");
        expect(typeof data.placesAdded).toBe("number");

        expect(data).toHaveProperty("roadsAdded");
        expect(typeof data.roadsAdded).toBe("number");

        expect(data).toHaveProperty("factsChecked");
        expect(typeof data.factsChecked).toBe("number");

        expect(data).toHaveProperty("qa");
        expect(typeof data.qa).toBe("number");

        expect(data).toHaveProperty("publishedLists");
        expect(typeof data.publishedLists).toBe("number");

        expect(data).toHaveProperty("photoViews");
        expect(data.photoViews == null || typeof data.photoViews == "number").toBeTruthy();
    })

    it("Should return no profile data", async () => {

        const data = await lgclient.fetchData(null);

        expect(data).toHaveProperty("name");
        expect(data.name).toBeNull();

        expect(data).toHaveProperty("level");
        expect(data.level).toBeNull();

        expect(data).toHaveProperty("reviews");
        expect(data.reviews).toBeNull();

        expect(data).toHaveProperty("ratings");
        expect(data.ratings).toBeNull();

        expect(data).toHaveProperty("photos");
        expect(data.photos).toBeNull();

        expect(data).toHaveProperty("videos");
        expect(data.videos).toBeNull();

        expect(data).toHaveProperty("answers");
        expect(data.answers).toBeNull();

        expect(data).toHaveProperty("edits");
        expect(data.edits).toBeNull();

        expect(data).toHaveProperty("placesAdded");
        expect(data.placesAdded).toBeNull();

        expect(data).toHaveProperty("roadsAdded");
        expect(data.roadsAdded).toBeNull();

        expect(data).toHaveProperty("factsChecked");
        expect(data.factsChecked).toBeNull();

        expect(data).toHaveProperty("qa");
        expect(data.qa).toBeNull();

        expect(data).toHaveProperty("publishedLists");
        expect(data.publishedLists).toBeNull();

        expect(data).toHaveProperty("photoViews");
        expect(data.photoViews).toBeNull();

    })
});