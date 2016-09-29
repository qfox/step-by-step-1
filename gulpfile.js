const fs = require('fs');

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');

const decl = [
    'reset',
    'page',
    'link',
    'button',
    'button--danger'
];

gulp.task('build', function() {
    const fulldecl = decl.reduce((res, s) => {
        res.push(s);
        try {
            require(`./styles/${s}.deps.js`).forEach(s => res.push(s));
        } catch(e) {}
        try {
            require(`./styles.desktop/${s}.deps.js`).forEach(s => res.push(s));
        } catch(e) {}
        return res;
    }, []);

    const files = fulldecl.map(s => `styles/${s}.css`)
        .concat(fulldecl.map(s => `styles.desktop/${s}.css`))
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
