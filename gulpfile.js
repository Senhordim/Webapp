'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var connect = require('gulp-connect');

gulp.task('pug', function() {
  gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out'))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('./src/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./out/styles'))
    .pipe(connect.reload());
});

// Watch files
gulp.task('watch', function() {
  gulp.watch(
    [
      './src/*.pug',
      './src/assets/styles/**/*.scss'
    ],
    [
      'pug',
      'sass'
    ]);
});

gulp.task('connect', function() {
  connect.server({
    root: './out',
    livereload: true
  });
});

gulp.task('build', ['pug', 'sass']);
gulp.task('server', ['connect', 'watch'])

