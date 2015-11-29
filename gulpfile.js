var TS_FILES = 'src/**/*.ts',
   LESS_FILES = 'src/**/*.less',
   HTML_FILES = 'src/**/*.html';

var gulp = require('gulp'),
   ts = require('gulp-typescript'),
   del = require('del'),
   runSequence = require('run-sequence'),
   sourceMaps = require('gulp-sourcemaps'),
   less = require('gulp-less')

gulp.task('clean', function () {
   return del('temp/');
});

gulp.task('ts', function () {
   return gulp.src(TS_FILES)
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

gulp.task('less', function () {
   gulp.src(LESS_FILES)
      .pipe(less())
      .pipe(gulp.dest('temp/'))
})

gulp.task('html', function () {
   return gulp.src(HTML_FILES)
      .pipe(gulp.dest('temp/'))
})


gulp.task('build', function (done) {
   runSequence(
      'clean',
      ['ts', 'less', 'html'],
      done);
});

gulp.task('watch', ['build'], function () {
   gulp.watch(TS_FILES, ['ts']);
   gulp.watch(LESS_FILES, ['less']);
   gulp.watch(HTML_FILES, ['html']);

})

