var assert = require('chai').assert;
describe('Array', function() {
    describe('#indexOf()', function() {
        beforeEach(function() {
            console.log('before every test in every file');
        });
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});
