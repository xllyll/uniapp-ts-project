# uniapp vite ts project

## 三方库
- Vant4 h5(Vant-weapp 小程序版本)
- pinia
- less

## vscode 运行

安装插件

- uni-helper
- uni-create-view

运行代码

~~~
// h5
npm run dev:h5
// 小程序
npm run dev:mp-weixin
~~~

## BUG 
~~~
uniapp+vue3+ts 使用pinia报错
"hasInjectionContext" is not exported by "node_modules/vue-demi/lib/index.mjs", imported by "node_modules/pinia/dist/pinia.mjs". 11:36:19.397 at ../node_modules/pinia/dist/pinia.mjs:6:9

解决方法：

先删除pinia

npm uni pinia

再重新安装

npm i pinia@2.0.36 -force
~~~
