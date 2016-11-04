# Fancyui

组件库, 将包含基础组件(Button, Checkbox)以及复合组件.

### 上手须知

1. 基于angular
2. 基于Bootstrap
3. 使用ES6 + Babel

### 开发须知

##### 测试

运行`gulp`会运行测试, 在**examples**目录建立自己的示例

##### 新建组件

运行`gulp component --name componentName` 在`src/component/`目录里创建一个新组件目录, 并预设一些文件

##### 打包

`gulp build` 生成文件到dist目录

##### 生成网站示例和doc

切到gh-page分支：
`npm run build:example`
注意: 不要在其他分支运行这个命令


### change log

##### 1.0.2 
主要合并了bp-utils代码, 基本可以代替. 另外此版本是不兼容版本, 需要在项目中添加新常量$env
```javascript
  .constant('$env', {
    DEBUG: process.env.DEBUG
  })
```