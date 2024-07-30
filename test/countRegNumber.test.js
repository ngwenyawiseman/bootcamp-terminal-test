import assert from 'assert'
import countRegNumber from '../countRegNumber.js';

describe ('Testing the countRegNumber function', function(){
    it('should split the string at the coma and return the number of registration numbers in the string',
    function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});