// https://css-tricks.com/gulp-for-beginners/

// Requirements

var gulp = require('gulp');
var sass = require('gulp-sass');



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
  return gulp.src('_sass/**/*.scss') //globbing
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets'))

});






gulp.task('watch', function(){
  gulp.watch('_sass/scss/**/*.scss', ['sass']);
  // Other watchers
})
