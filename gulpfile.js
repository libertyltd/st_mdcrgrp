var     gulp = require('gulp'),
        less = require('gulp-less'),
        sourcemaps = require('gulp-sourcemaps');

spritesmith = require('gulp.spritesmith');
concat = require('gulp-concat');

gulp.task('less', function () {
    gulp.src ('./css/less/frontend.less')
            .pipe (sourcemaps.init())
            .pipe (less())
            .pipe (concat('style.css'))
            .pipe (sourcemaps.write())
            .pipe (gulp.dest( './css'))
});


gulp.task('watch', function() {
    gulp.watch('./css/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);