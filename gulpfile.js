var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function(){
  return gulp.src('./main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('./main.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./index.html').on('change', browserSync.reload);
})
