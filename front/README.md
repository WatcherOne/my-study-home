##### a project for nextJS

> environment
```
next 只支持 React16 以上
node >= 16.8.0 [建议: 16.14.0]
```

> contruction
```
static           //  静态文件服务. ./static/ 映射到 /static/
  |              //  根目录目录下 创建静态文件夹 static, Next.js 会自动处理
  |              //  代码可以通过/static/来引入相关的静态资源
  |
public           //  公共静态文件，访问是 '/...' 直接斜杠就到文件夹下面找
  |              //  public 和 static 都可以
  |
components       //  存在一些通用组件，不使当成路由处理时存放位置
  |---icons      //  可以存在一些 svg 的图标组件（参考svg图标[https://heroicons.com/]）
  |

pages            //  默认情况, Next将会把/pages下的所有文件匹配路由
  |---_app.js    //  根组件，所有页面渲染经过这里（可以包装这个组件）
  |---layout.js  //  通用布局组件
  |
```

- npm i
- npm run serve // 开发环境启动
- npm run build // 打包项目 (包含 next export: 生成静态部署文件资源)
- npm run start // 启动服务端

##### 使用文档说明

> 使用 Head 组件
```
// 可以在任务位置使用
import Head from 'next/head'

export default () => (
    <div>
        // 自定义文档头内容
        <Head>
            <title>xxxxx</title>
        </Head>
    </div>
)
```

> _app.js
> 重写它来控制页面初始化
```
1. 当页面变化时保持页面布局
2. 当路由变化时保持页面状态
3. 使用componentDidCatch自定义处理错误
4. 注入额外数据到页面里
```

> _document.js
> nextJS 会自动定义文档标记，也可以自定义标记
```
1. 在服务端呈现
2. 初始化服务端时添加文档标记元素
3. 通常实现服务端渲染会使用一些 css-in-js 库
```

> _error.js
> 404和500错误客户端和服务端都会通过error.js组件处理

> 使用 layout
```
自定义布局组件来封装 _app.js
- 如果不应用于全局的布局 只部分页面则 使用
Component.getLayout ?? ((page) => page)
// 表示组件里面有个 getLayout方法来传递内部组件到里面去塞入布局嵌套位置处 如果没有则直接放回本身组件页面即可
```

> Link 组件
```
<Link href="/xxx/xxx" as prefetch></Link>
// prefetch: 默认为true, 表示 next/link 将在后台预取页面（预加载）, 通过设置false来禁用, 预取仅在【生产中】启用
// as: 可以定义在浏览器hover处显示另一个别名的地址（但是实际上是改变了a标签的href，而在内部跳转时，对as属性作了别名判断）
```

> withRouter 高阶组件, 用来处理路由
> 如果函数组件里没有路由跳转的属性(histroy, location, match), 通过withRouter属性传下去, 就会获得路由属性, 就可以路由跳转传参
```
// 通过这个组件可以将 路由参数传递进来 而不用 先获取路由实例对象
export default ({ router }) => (
    // you can use router.push() replace
    // const router = useRouter()
)
```

> 动态导入（取消服务器渲染-测试验证！）
```
import dynamic from 'next/dynamic'

const comp1 = dynamic(() => import('./xxx/xxx'), {
    ssr: false,
    loading: () => <></>
})
```

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

> 特殊的CSS属性
```
:root {
    color-scheme: dark;  // 设置浏览器主题色(一般只有 light、dark 等)
}
@media (prefers-color-scheme: dark) {
    // 系统设置深色模式下的样式
    body {
        background-color: xxx;
    }
}
```
