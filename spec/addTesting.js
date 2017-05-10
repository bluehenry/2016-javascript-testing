var fun = require('../src/add');

describe('jasmine testing - add', function(){
	var num;
	beforeEach(function() {
		num = 5;
	});

	afterEach(function(){

	});

	it('should be 10 when adding 5 to 5', function(){
		num = fun.add(num, 5);				
		expect(num).toBe(10);		
	});

	it('should be 12 when adding 7 to 5', function () {
	    num = fun.add(num, 7);
	    expect(num).toBe(11);
	});
});
