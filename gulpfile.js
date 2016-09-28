const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');

gulp.task('build', function() {
    return gulp.src('styles/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(debug());
});

gulp.task('default', gulp.series('build'));

gulp.task('watch', function () {
    gulp.watch('styles/*.css', gulp.series('build'));
});
