var fun1 = require('../src/isEven');
var fun2 = require('../src/add');

var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,	
	assert = chai.assert;


//group tests
describe('group tests', function(){

	//describe.skip('isEven', function(){
	//describe.only('isEven', function(){
	describe('isEven', function(){
		it('should return true when number is even', function(){
			fun1.isEven(4).should.be.true;
		})

		it('assert.equal false when number is odd', function(){
			assert.equal(fun1.isEven(3), false);
		})
	});

	describe('add', function(){
		var num;
		beforeEach(function() {
			num = 5;
		});

		afterEach(function(){

		});

		it('should be 10 when adding 5 to 5', function(){
			num = fun2.add(num, 5);
			//should/expect: BDD style
			num.should.equal(10);		
			//fun.add(num, 5).should.equal(12);
		});

		it('expect be 11 when adding 6 to 5', function(){
			num = fun2.add(num, 6);
			//should/expect: BDD style		
			expect(num).to.equal(11);
		});
		
		it('assert.equal be 12 when adding 7 to 5', function(){
			//assert: TDD style		
			assert.equal(fun2.add(num, 7), 12);
		});
	});
});