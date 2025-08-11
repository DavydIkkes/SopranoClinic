const fileInclude = require('gulp-file-include');

module.exports = function () {
	$.gulp.task('html', function () {
		return $.gulp.src('src/*.html', { allowEmpty: true })
			.pipe(fileInclude({
				prefix: '@',
				basepath: 'src/',
				indent: true
			}))
			.pipe($.gp.htmlmin({
				collapseWhitespace: true,
				removeComments: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true,
				sortAttributes: true
			}))
			.pipe($.gulp.dest($.path.buildPath));
	});
}