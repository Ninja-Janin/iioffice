'use strict';
 
var gulp = require('gulp'),
	inject = require('gulp-inject'),
	$    = require('gulp-load-plugins')(),
	mbf  = require('main-bower-files'),
	sass = require('gulp-sass'),
	glob = require('gulp-sass-glob')

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/main.scss')
    .pipe(glob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
	var target  = gulp.src('./src/app/html/index.html');
	var sources = gulp.src(['./src/**/*.js', './css/**/*.css'], {read: false});
	var bower   = gulp.src(mbf(), { read: false })

	return target
		.pipe($.inject(sources))
		.pipe(inject(bower, { name: 'bower' }))
		.pipe(gulp.dest('./'));
});

gulp.task('server', function () {
  gulp.watch('./src/**/*.scss', ['index', 'sass']);
});

