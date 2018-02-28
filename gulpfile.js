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

gulp.task('default', [ 'sass', 'inject', 'watch', 'go'])

gulp.task('reload', reload)

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/main.scss')
    .pipe(glob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

gulp.task('inject', function () {
	var target  = gulp.src('./src/app/html/index.html')
	var sources = gulp.src(['./src/**/*.js', './css/**/*.css'], {read: false})
	var bower   = gulp.src(mbf(), { read: false })

	return target
		.pipe($.inject(sources))
		.pipe(inject(bower, { name: 'bower' }))
		.pipe(gulp.dest('./'))
})

gulp.task('reload:inject', [ 'inject' ], reload)
gulp.task('reload:sass', [ 'sass' ], reload)
gulp.task('watch', function () {
	gulp.watch('src/app/**/*.js', ['reload:inject'])
	gulp.watch('src/app/**/*.html', ['reload:inject'])
	gulp.watch('src/assets/**/*.scss', ['reload:inject'])
})

gulp.task('go',function(){
	browserSync({
		server:{
			baseDir: './'
		}
	})
})
