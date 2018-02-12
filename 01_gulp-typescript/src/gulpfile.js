var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    ts = require('gulp-typescript'),
    server = require('gulp-webserver');

// path
var path = {
  source: __dirname,
  public: (function() { 
    return __dirname.replace('src', 'public');
  })()
};

/**
 * パスのコンパイル
 */
gulp.task('test', function() {
  console.log(path.source);
  console.log(path.public);
});

/**
 * ts
 */
gulp.task('ts', function() {
  var tsProject = ts.createProject('tsconfig.json');
  gulp.src(path.source + '/ts/**/*.ts')
  .pipe(tsProject())
  .pipe(gulp.dest(path.public + '/js/'));
});

/**
 * webserverの起動
 */
gulp.task('webserver', function() {
  gulp.src(path.public)
  .pipe(server());
});

/**
 * watch
 */
gulp.task('watch', function() {
  gulp.watch(path.source + '/ts/**/*.ts', ['ts']);
});

/**
 * default
 *   サーバを立ち上げて、ファイルの監視をする
 */
gulp.task('default', ['webserver', 'watch']);