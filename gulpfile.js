const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');

const Builder = require('gulp-bem-bundle-builder');
const bundlerFs = require('gulp-bem-bundler-fs');

const builder = Builder({
    levels: ['blocks', 'desktop.blocks']
});

gulp.task('build', function() {
    return bundlerFs('pages/*')
        .pipe(builder({
            css: bundle =>
                bundle.src('css')
                    .pipe(concat(bundle.name + '.css'))
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(debug());
});

gulp.task('default', gulp.series('build'));

gulp.task('watch', function () {
    gulp.watch('styles/*.css', gulp.series('build'));
});
