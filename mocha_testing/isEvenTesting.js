var fun = require('../src/isEven');

var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,	
	assert = chai.assert;

//describe.skip('isEven', function(){
//describe.only('isEven', function(){
describe('isEven', function(){
	it('should return true when number is even', function(){
		fun.isEven(4).should.be.true;
	})

	it('assert.equal false when number is odd', function(){
		assert.equal(fun.isEven(6), false);
	})
});