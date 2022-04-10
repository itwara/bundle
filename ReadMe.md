# rollup
rollup是一款用来es6模块打包代码的构建工具(支持css和js打包),如果需要打包其他模块，需要引入其他插件;

## 特性
1. 基于es6代码，rollup会默认启动tree-shake，移除模块中未使用的代码；
2. 支持babel



## 问题
1. 描述：npm run build 执行报错 (plugin babel) Error: Plugin/Preset files are not allowed to export objects；
    ```
    wubuyi@MacBook-Pro bundle % npm run build                 

    > bundle-rollup@1.0.0 build
    > rollup -c


    ./src/index.js → ./dist/js/main.min.js...
    [!] (plugin babel) Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/wubuyi/work/bundle/node_modules/babel-preset-stage-2/lib/index.js
    src/index.js
    Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/wubuyi/work/bundle/node_modules/babel-preset-stage-2/lib/index.js
        at createDescriptor (/Users/wubuyi/work/bundle/node_modules/@babel/core/lib/config/config-descriptors.js:211:11)
        at createDescriptor.next (<anonymous>)
        at evaluateSync (/Users/wubuyi/work/bundle/node_modules/gensync/index.js:251:28)
        at /Users/wubuyi/work/bundle/node_modules/gensync/index.js:31:34
        at Array.map (<anonymous>)
        at Function.sync (/Users/wubuyi/work/bundle/node_modules/gensync/index.js:31:22)
        at Function.all (/Users/wubuyi/work/bundle/node_modules/gensync/index.js:210:24)
        at Generator.next (<anonymous>)
        at createDescriptors (/Users/wubuyi/work/bundle/node_modules/@babel/core/lib/config/config-descriptors.js:142:41)
        at createDescriptors.next (<anonymous>)
    ```

    原因：babel 版本不一致；[rollup-plugin-babel@latest](https://www.npmjs.com/package/rollup-plugin-babel) 版本是7.x，而安装的babel-core的版本是6.x；降低rollup-plugin-babel版本,npm install --save-dev rollup-plugin-babel@3

2. 描述：执行npm uninstall rollup-plugin-babel报错，如下：
    ```
    npm ERR! code E404
    npm ERR! 404 Not Found - GET https://registry.npmjs.org/plugin-external-helpers - Not found
    npm ERR! 404 
    npm ERR! 404  'plugin-external-helpers@^6.22.0' is not in this registry.
    npm ERR! 404 
    npm ERR! 404 Note that you can also install from a
    npm ERR! 404 tarball, folder, http url, or git url.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/wubuyi/.npm/_logs/2022-04-09T11_41_26_295Z-debug-0.log
    ```
    原因：npm uninstall 会查询package.json的配置，而package.json中存在包名错误：plugin-external-helpers 更正为babel-plugin-external-helpers;

3. 描述：执行npm run build, 报错 [!] Error: You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.
    ```
    wubuyi@MacBook-Pro bundle % npm run build

    > bundle-rollup@1.0.0 build
    > rollup -c


    ./src/index.js → ./dist/js/main.umd.js...
    [!] Error: You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.
    Error: You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.
        at error (/Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:198:30)
        at umd (/Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:13841:16)
        at Chunk.render (/Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:14892:29)
        at /Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:16030:52
        at Array.map (<anonymous>)
        at Bundle.addFinalizedChunksToBundle (/Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:16028:34)
        at Bundle.generate (/Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:16008:24)
        at /Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:23635:27
        at catchUnfinishedHookActions (/Users/wubuyi/work/bundle/node_modules/rollup/dist/shared/rollup.js:23077:20)
        at async Promise.all (index 0)
    ```
    原因：rollup.config.js 配置问题，缺少name；
    ```
    output: {
        name: 'bundle',
        file: './dist/js/main.umd.js',
        format: 'umd', // "amd", "cjs", "system", "es", "iife" or "umd"
    }
    ```


    
   