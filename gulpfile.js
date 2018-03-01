'use strict'
 
var gulp        = require('gulp'),
	inject      = require('gulp-inject'),
	$           = require('gulp-load-plugins')(),
	mbf         = require('main-bower-files'),
	sass        = require('gulp-sass'),
	glob        = require('gulp-sass-glob'),
	browserSync = require('browser-sync'),
	reload      = require('browser-sync').reload,
	util        = require('gulp-util')

gulp.task('default', [ 'sass', 'inject', 'watch', 'server'])

gulp.task('reload', reload)

gulp.task('sass', function () {
  return gulp.src('./assets/sass/main.scss')
    .pipe(glob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('inject', function () {
	var target  = gulp.src('./assets/html/index.html')
	var sources = gulp.src(['./assets/**/*.js', './assets/css/**/*.css'], {read: false})
	var bower   = gulp.src(mbf(), { read: false })

	return target
		.pipe($.inject(sources))
		.pipe(inject(bower, { name: 'bower' }))
		.pipe(gulp.dest('./'))
})

gulp.task('reload:inject', [ 'inject' ], reload)
gulp.task('reload:sass', [ 'sass', 'inject'], reload)

gulp.task('watch', function () {
	gulp.watch('assets/**/*.js', ['reload:inject'])
	gulp.watch('assets/**/*.html', ['reload:inject'])
	gulp.watch('assets/**/*.scss', ['reload:sass'])
})

gulp.task('server',function(){
	browserSync({
		server:{
			baseDir: './'
		}
	})
})
