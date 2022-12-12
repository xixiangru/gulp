const gulp = require('gulp');
const uglify = require('gulp-uglify');

const fileJs = './src/*.js';

function minifyJS() {
	return gulp.src(fileJs).pipe(uglify()).pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(minifyJS);
