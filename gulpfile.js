var gulp = require('gulp'),
    uglifycss = require('gulp-uglifycss'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    scss = require('gulp-sass'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver');


gulp.task("scss", function () {


    gulp.src("src/scss/**/*.scss")
        .pipe(scss())
        .pipe(concat("all.css"))
        .pipe(uglifycss({
            "maxLineLen": 100000,
            "uglyComments": true
        }))
        .pipe(rename("app.css"))
        .pipe(gulp.dest('build'));
});

gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task("watch", function () {
    gulp.watch('src/scss/*.scss', ["scss"])


});
