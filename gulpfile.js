'use strict';

var gulp = require('gulp'),
    jscs = require('gulp-jscs');

gulp.task('default', function () {
    return gulp.src('test.js')
        .pipe(jscs({ fix: true }))
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(gulp.dest('.'));
});
