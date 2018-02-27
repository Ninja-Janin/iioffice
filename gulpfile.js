'use strict';
 
var gulp = require('gulp'),
	$    = require('gulp-load-plugins')(),
	mbf  = require('main-bower-files');

gulp.task('build:sass', function () {
  return gulp.src('./src/assets/styles/main.scss')
    .pipe(gulp-sass-glob())
    .pipe($.gulp-sass.sync().on('error', $.gulp-sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('index', function () {
	var target  = gulp.src('./src/app/html/index.html');
	var sources = gulp.src(['./src/**/*.js', './css/**/*.css'], {read: false});
	var bower   = gulp.src(mbf(), { read: false })

	return target.pipe($.inject(sources))
		.pipe($.inject(bower, { name: 'bower' }))
		.pipe(gulp.dest('./src'));
});

gulp.task('server', function () {
  gulp.watch('./src/**/*.scss', ['build:sass']);
});
