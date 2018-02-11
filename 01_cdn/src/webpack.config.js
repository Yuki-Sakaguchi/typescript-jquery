var webpack = require('webpack');

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `${__dirname}/ts/app.ts`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname.replace('src', 'public')}/js`,
    // 出力ファイル名
    filename: 'bundle.js'
  },

  // モジュール
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'awesome-typescript-loader'
      },
      // ソースマップファイルの処理
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  // 解決
  resolve: {
    // import 文で .ts ファイルを解決するため
    extensions: [
      '.ts', '.js', '.json'
    ]
  },

  // 外部依存
  externals: {
    jquery: 'jQuery'
  },

  // ソースマップを有効に
  devtool: 'source-map',

  // プラグイン
  plugins: [
    new webpack.ProvidePlugin({
      // jQueryをファイルにロードするため
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};