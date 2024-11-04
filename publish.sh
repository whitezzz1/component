#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config set registry=https://registry.npmjs.org
echo '请进行 npm 登录操作：'
npm login # 登陆
echo "-------publishing-------"
npm publish # 发布
npm config set registry=https://registry.npmmirror.com # 设置为淘宝镜像
echo "发布完成"
exit