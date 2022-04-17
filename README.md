# bundle
常见打包构建工具demo库，以分支承载；

## 好文
+ [前端构建这十年](https://segmentfault.com/a/1190000040496020)

## 分支介绍
+ webpack
    <br>位于webpack分支：
    ```
    git checkout webpack
    ```
+ rollup
    <br>位于rollup分支：
    ```
    git checkout webpack
    ```

## 模块化
    + 模块规范
        + esm
            es modules
        + cjs
            node commonjs 规范
        + umd
            支持 cjs 和 amd 规范，自动挂载导出到 global ，一般用在浏览器中

    + package.json
        + main
            + cjs
        + modules
            + esm
        + browser
            + umd
    + bundle
        所以毫无疑问，在用户不知情的情况下，永远都不要使用 browser 字段，永远使用 module 字段支持摇树，如果必须支持 umd ，可以添加至 umd:main 字段
        + webpack
            但 webpack 的 Resolve 机制会默认优先识别 browser 也就是 umd 规范，这就使得你只要使用了该库任何功能都会被整个库打包进来（ 配置字段 resolve.aliasFields ），当无 browser 字段时优先使用 module 字段（支持摇树）。
        