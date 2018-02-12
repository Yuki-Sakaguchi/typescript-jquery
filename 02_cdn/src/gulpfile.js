var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    webpack = require("webpack"),
    webpackStream = require("webpack-stream"),
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
 * webpack（jsのモジュール管理）
 */
gulp.task('webpack', function() {
  var webpackConfig = require("./webpack.config");
  webpackStream(webpackConfig, webpack)
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
  gulp.watch(path.source + '/ts/**/*.ts', ['webpack']);
});

/**
 * default
 *   サーバを立ち上げて、ファイルの監視をする
 */
gulp.task('default', ['webserver', 'watch']);