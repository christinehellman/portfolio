// https://css-tricks.com/gulp-for-beginners/

// Requirements

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// Tasks

gulp.task('task-name', function() {
  // Stuff here, this is an example
});

gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});

gulp.task('sass', function(){
  return gulp.src('development/scss/**/*.scss') //globbing
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('development/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('devlopment/scss/**/*.scss', ['sass']);
  // Other watchers

});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'development'
    },
  })
})
