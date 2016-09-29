const fs = require('fs');

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');

const decl = [
    'reset',
    'page',
    'page__footer',
    'link',
    'button',
    'button--danger'
];

gulp.task('build', function() {
    const files = decl.map(s => `styles/${s}.css`)
        .concat(decl.map(s => `styles.desktop/${s}.css`))
        .filter(f => fs.existsSync(f));
    return gulp.src(files)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(debug());
});

gulp.task('default', gulp.series('build'));

gulp.task('watch', function () {
    gulp.watch('styles/*.css', gulp.series('build'));
});
