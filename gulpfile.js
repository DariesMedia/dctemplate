const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// OPTIMIZING All HTML FILES
gulp.task('processHTML', (done) => {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'));
  done();
});

// OPTIMIZING All JPG FILES
gulp.task('processJPG', (done) => {
  gulp.src('images/*.jpg')
    .pipe(gulp.dest('dist/images'));
  done();
});

// OPTIMIZING All JS FILES
gulp.task('processJS', (done) => {
  gulp.src('*.js')
    .pipe(jshint({
      esversion: 8
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
    done();
});

// COPYING BROWSER.JS TO DIST
gulp.task('babelPolyfill', (done) => {
  gulp.src('node_modules/babel-polyfill/browser.js')
    .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
  done();
});

// LIVE BROWSER RELOAD
gulp.task('browserSync', () => {
  browserSync.init({
    server: './dist',
    port: 8080,
    ui: {
      port: 8081
    }
  });
});

// WATCHING ALL FILES FOR CHANGES
gulp.task('watch', gulp.parallel('browserSync'), function(){
  gulp.watch('*.html', gulp.parallel(['processHTML'])).on('change', browserSync.reload);
  gulp.watch('images/*.svg', gulp.parallel(['processJPG']));
  gulp.watch('*.js', gulp.parallel(['processJS'])).on('change', browserSync.reload);
});

// AUTOMATING ALL TASKS IN A SINGLE COMMAND
gulp.task('default', gulp.parallel(['processHTML','processJPG', 'processJS', 'babelPolyfill', 'watch']), function(done){
  done();
});

