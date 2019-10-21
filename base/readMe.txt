1.output:必须是绝对地址，不然会报错

2.webpack-dev-server默认会以当前目录为基本目录,除非你制定它.
	webpack-dev-server --content-base build/
 上述命令是在命令行中执行的,它将build目录作为根目录

3.publicPath
  webpack-dev-server环境下，path、publicPath、区别与联系

	path：指定编译目录而已（/dist/），不能用于html中的js引用。
	publicPath：虚拟目录，自动指向path编译目录（ / => /dist/）。

  html中引用js文件时，必须引用此虚拟路径（但实际上引用的是内存中的文件，既不是/dist/ 也不是/assets/）


  处理静态资源引用地址用的 比如在 CSS 中引用了图片
打包后默认情况是 url(文件名) 这样必须确保资源文件和 CSS 处于同一目录
但我们显然不希望这样 希望修改打包引用地址 修改为 img 目录下的资源 就需要这个参数了

3.Automatic Refresh

4.
–quiet 控制台中不输出打包的信息 
–compress 开启gzip压缩 
–progress 显示打包的进度 

