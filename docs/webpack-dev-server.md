## webpack-dev-server

```
 node_modules/.bin/webpack-dev-server
```

+ content-base 默认为当前目录，可指定其他
    ```
      webpack-dev-server --content-base build/  //上述命令是在命令行中执行的,它将build目录作为根目录
    ```
+ publicPath：虚拟目录，自动指向path编译目录（ / => /dist/）
+ path：指定编译目录而已（/dist/），不能用于html中的js引用