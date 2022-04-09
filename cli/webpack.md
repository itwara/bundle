## [webpack](https://webpack.js.org/api/cli/)

```
 node_modules/.bin/webpack
```
+ --config
    ```
      node_modules/.bin/webpack --config spa/webpack.config.js
      node_modules/.bin/webpack --config mpa/webpack.config.js
    ```
+ --devtool
    ```
      node_modules/.bin/webpack --config spa/webpack.config.js --devtool source-map
      node_modules/.bin/webpack --config mpa/webpack.config.js --devtool source-map
    ```
+ --progress 百分比进度
    ```
      node_modules/.bin/webpack --config spa/webpack.config.js --progress
      node_modules/.bin/webpack --config mpa/webpack.config.js --progress
    ```
+ --debug
    ```
      node_modules/.bin/webpack --config spa/webpack.config.js --debug
      node_modules/.bin/webpack --config mpa/webpack.config.js --debug
    ```
+ --profile
    ```
      node_modules/.bin/webpack --config spa/webpack.config.js --profile
      node_modules/.bin/webpack --config mpa/webpack.config.js --profile
    ```
+ --verbose 显示更多信息
    ```
      node_modules/.bin/webpack --config spa/webpack.config.js --verbose
      node_modules/.bin/webpack --config mpa/webpack.config.js --verbose
    ```
+ output: 必须是绝对地址，不然会报错
+ --quiet 控制台中不输出打包的信息 
+ –-compress 开启gzip压缩 
+ –-progress 显示打包的进度