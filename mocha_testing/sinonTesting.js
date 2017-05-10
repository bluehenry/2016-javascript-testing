var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,
	assert = chai.assert;

var sinon = require('sinon');

describe('sinon tests', function(){
	var student;

	beforeEach(function(){
		student = {
			dropClass: function(classId, cb){
				cb();
			}			
		};
	});

	describe('student.dropClass', function(){
		it('should call the callback', function(){
			var spy = sinon.spy();
			student.dropClass(1, spy);
			spy.called.should.be.true;
		});
	});
});