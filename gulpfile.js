var gulp = require('gulp'),
   ts = require('gulp-typescript'),
   del = require('del'),
   run = require('run-sequence')
   sourceMaps = require('gulp-sourcemaps')

gulp.task('clean', function() {
   return del('temp/');
});

gulp.task('js', function () {
   return gulp.src('src/**/*.ts')
      .pipe(sourceMaps.init())
      .pipe(ts({
         "target": "ES5",
         "module": "commonjs",
         "sourceMap": true,
         "emitDecoratorMetadata": true,
         "experimentalDecorators": true,
         "removeComments": false,
         "noImplicitAny": false
      }))
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('temp/'))
});

gulp.task('html', function() {
   return gulp.src('src/**/*.html')
      .pipe(gulp.dest('temp/'))
})


gulp.task('build', function(done) {
   run(
      'clean',
      ['js', 'html'],
      done);
});


