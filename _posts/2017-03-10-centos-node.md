---
layout: content
title: Centos安装node.js
---

linux不熟，走了很多弯路，看到一个文章如何简单安装node.js，今天记录下。

1. 第一步下载node.js

    wget https://nodejs.org/dist/v7.7.2/node-v7.7.2-linux-x64.tar.xz
    地址去node官网查找

2. 解压安装

    udo tar --strip-components 1 -xvf node-v* -C /usr/local

3. 测试是否安装成功

    node -v
    npm -v

大功告成