var fun = require('../src/add');

var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,	
	assert = chai.assert;

describe('add', function(){
	var num;
	beforeEach(function() {
		num = 5;
	});

	afterEach(function(){

	});

	it('should be 10 when adding 5 to 5', function(){
		num = fun.add(num, 5);
		//should/expect: BDD style
		num.should.equal(10);		
		//fun.add(num, 5).should.equal(12);
	});

	it('expect be 11 when adding 6 to 5', function(){
		num = fun.add(num, 6);
		//should/expect: BDD style		
		expect(num).to.equal(11);
	});
	
	it('assert.equal be 12 when adding 7 to 5', function(){
		//assert: TDD style		
		assert.equal(fun.add(num, 7), 12);
	});
});
