### 前言
本博客前台使用react开发，主要以create-react-app脚手架进行开发，另外准备要以koa作为后台开发。

### 环境准备
1. 准备脚手架 

打开cmd，输入以下命令就可以开始进行开发


    npm intall -g create-react-app
    create-react-app blog
    cd blog 
    npm start

2. 环境配置

create-react-app生成的项目文，看不到webpack相关的配置文件，需要先暴露出来，使用如下命令即可：


    npm run eject

安装less-loader 和 less

    npm install less-loader less --save-dev

然后看教程 https://segmentfault.com/a/1190000010162614