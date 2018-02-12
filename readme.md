# typescriptでjqueryを使う
 
- 00_typescript_cdn
  - jQueryはcdnで読み込む
  - gulpやwebpackを使わない最小単位
  - @types/jqueryを読み込むだけjqueryのエラーがでなくなる
  - typescriptのコンパイルはtscコマンドで行う
    - tsc ./ts/app.ts --outDir ../public/js/
  - typescriptのみだとモジュールの管理ができないので、browserifyやwebpackでバンドルする必要がある

- 01_gulp-typescript_cdn
  - jQueryはcdnで読み込む
  - typescriptはgulpのgulp-typescriptでコンパイル
  - @types/jqueryを読み込めばOK
  - tsconfig.jsonがドキュメントルートにないとエラーになるが、tsconfig.jsonの「typeRoots」に「"../node_modules/@types"」へのパスを入れればOK
  - typescriptのみだとモジュールの管理ができないので、browserifyやwebpackでバンドルする必要がある

- 02_webpack_cdn
  - jQueryはcdnで読み込む
  - typscriptはwebpackでコンパイルする
  - @types/jqueryを読み込む
  - webpackを使うので、モジュールも外部ファイルにしてバンドルできる

- 03_webpack_bundle
  - typescriptはwebpackでコンパイルする
  - jQueryもtypescriptのコンパイル時に一緒にバンドルする
  - グローバルで使えるように、都度importしなくてもよくする