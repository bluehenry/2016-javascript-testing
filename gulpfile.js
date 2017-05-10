'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

gulp.task('mocha', function () {
    return gulp.src(['mocha_testing/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function () {
    gulp.watch(['mocha_testing/*.js'], ['mocha'])
})

gulp.task('default', ['watch-mocha']);