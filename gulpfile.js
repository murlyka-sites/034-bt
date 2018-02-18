/*jshint esversion: 6 */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
	imagemin.mozjpeg = require('imagemin-mozjpeg');
	imagemin.pngquant = require('imagemin-pngquant');


gulp.task('imagemin', taskImagemin);

function taskImagemin() {
	return gulp.src(['source/images/**/*.jpg', 'source/images/**/*.png', 'source/images/**/*.svg'])
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.mozjpeg({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.pngquant({quality: '85-100'}),
			imagemin.svgo()
		]))
		.pipe(gulp.dest('public/images/'));
}