var fun = require('../src/isEven');

describe('jasmine testing - isEven', function () {
	it('should return true when number is even', function(){
	    expect(fun.isEven(4)).toBe(true);
	})

	it('assert.equal false when number is odd', function(){
	    
	    expect(fun.isEven(3)).toBe(true);
	})
});