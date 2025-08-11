const path = require('path');
const buildPath = path.join($.path.buildPath, 'css');

module.exports = function () {
    $.gulp.task('scss', function () {
        return $.gulp.src('src/scss/main.scss')
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass(require('sass'))())
            .on('error', $.gp.notify.onError({
                title: 'Error!'
            }))
            .pipe($.gp.csso({
                restructure: true,
                sourceMap: false,
                debug: false
            }))
            .pipe($.gulp.dest(buildPath));
    });
}