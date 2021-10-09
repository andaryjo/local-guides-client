const expect = require('chai').expect;

require('dotenv').config({ path: "./.env" });
const ContributionMetadata = require('../src/ContributionMetadata');

describe('ContributionMetadata Class', () => {
    let contributionMetadata;

    describe('getMetadata()', () => {
        let metadata;

        before(async () => {
            contributionMetadata = new ContributionMetadata();

            await contributionMetadata.init(process.env.CONTRIB_LINK);
            metadata = contributionMetadata.getMetadata();
            console.log(metadata);
        });

        for (const reqAttr of ["name", "points", 'level', 'reviews', 'ratings', 'questions', 'placesAdded', 'edits', 'facts', 'videos', 'qa', 'roadsAdded', 'listsPublished']) {
            it('metadata should have attribute ' + reqAttr, async () => {
                expect(metadata[reqAttr]).to.not.be.null;
                if (reqAttr == "name") expect(metadata[reqAttr]).to.be.a('string');
                else {
                    expect(metadata[reqAttr]).to.be.a('number');
                    expect(metadata[reqAttr] >= 0).to.equal(true);
                }
            })
        }
    });
});
