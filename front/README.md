##### a project for nextJS

> enviroment
```
node >= 16.8.0 [建议: 16.14.0]
```

> contruction
```
components       //  存在一些通用组件，不使当成路由处理时存放位置
  |---icons      //  可以存在一些 svg 的图标组件（参考svg图标[https://heroicons.com/]）
  |
public           //  公共静态文件，访问是 '/...' 直接斜杠就到文件夹下面找
  |              //  根目录 public 目录下放静态文件，Next.js 会自动处理 [] VS static
  |
pages            //  路由文件位置
  |---_app.js    //  根组件，所有页面渲染经过这里（可以包装这个组件）
  |---layout.js  //  通用布局组件
  |
```

- npm i
- npm run serve
- npm run build

##### 常见问题

> [TypeError: Class extends value undefined is not a constructor or null]
```
1. node版本与next版本不匹配
2. node >= 16.8.0 [建议: 16.14.0]
```

> 使用 CSS 模块功能必须将 css 文件以 .module.css 结尾
```
components.module.css  // css文件可以放在 styles 中；也可以放在对应同级组件下
import classes from './xxx.module.css'
<div className={classes.item}></div>
// .css 文件中 将有 .item {} 样式
// 作为 module 样式 只会分配给导入设置的 不会应用于 「<div className="item"></div>」
// 生成的 class 将是转化后的 class 值
```
