describe('jasmine mocking tests', function () {
    var student, classId;

    beforeEach(function () {
        student = {
            dropClass: function (value) {
                classId = value;
            }
        };

        spyOn(student, 'dropClass');
        student.dropClass(1);
    });


    describe('student.dropClass', function () {
        it('should call the callback', function () {            
            expect(student.dropClass).toHaveBeenCalled();
        });
    });
});