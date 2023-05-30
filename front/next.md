##### next使用说明

- CSR：Client Side Rendering            # 客户端渲染(通常指浏览器)
- SSR：Service Side Rendering           # 服务器渲染【每次请求重新生成的】
- SSG：Static Site Generation           # 静态网站生成【构建时生成的, html + json】
- ISG：Incremental Site Rendering       # 增量式的网站渲染（revalidate:10）
- DPR：Distributed Persistent Rendering # 分布式的持续渲染
[参考文档](https://www.cnblogs.com/lhb25/p/16223782.html)


> 预渲染方式
1. 静态生成(默认方式): HTML在构建时生成，并在每次页面请求（request）时重用
2. 服务器渲染：在每次页面请求（request）时重新生成 HTML（SSR/动态渲染）

> 静态生成
1. 生成不带数据的静态页面（默认情况下）
2. 需要获取数据的静态生成
```
# 某些页面需要获取外部数据以进行预渲染
getStaticProps() 函数：页面内容 取决于 外部数据
getStaticPaths() 函数：页面 paths（路径） 取决于外部数据【通常与 getStaticProps 同时用】
```

> getStaticProps()
> 从同一个文件导出(export)一个名为getStaticProps的异步(async)函数, 并将数据作为props参数传递给页面
> 只有在执行next build时才会调用, 之后的每次请求都只会使用构建时的数据
> 构建时 next.js 会将其构建为 html, 并且还会构建一份 json 文件, 存储 getStaticProps 的返回值
> 在访问时 初次进入页面为该页面时会直接使用 html 内容，而非初次进入则会去请求该 json 文件获取数据进行渲染
> 在开发时（即 next dev）时，getStaticProps会在每次页面访问时被请求！！！
> defaultLocale 配置该参数来启用 ISR
> 定义页面在被重新生成之前需要等待多长时间，单位秒
> 设置为10，则next将在页面被请求后的10s内重新生成页面（表示重新进入页面后将获得最新页面数据）
```
json文件中数据如下
{ 'pageProps': { // props对象 }, '_N_SSG': true }
```
```
export async function getStaticProps (context) {
    *  context:
    *  1. params: Object    // 动态路由参数 如：params.id
    *  2. preview: Boolean  // the page is in the preview mode ?
    *  3. previewData: 
    *  4. locale: 如果加入了国际路由则有语言支持（暂时无用）
    *  5. locales: 
    *  6. defaultLocale:
    *  // 除了4、5、6其它没有时是没有键的
    return {
        // 将作为组件文件里面的 props 参数
        props: { list: [] },
        // 将尝试重新生成页面, 最多每10s一次
        revalidate: 10
    }
    // 允许返回 404状态和页面
    if (!data) =>
    return {
        notFound: true
    }
}
```

> getStaticPaths()
> 具有 动态路由 的页面, 在构建 id 所对应的内容时可能需要从外部获取数据
> 主要用于动态路由中的静态页面构建, 简单来说就是将一个动态路由通过getStaticPaths转换为多个静态页面
> 当 next build 时, next检测到动态路由时会尝试调用 getStaticPaths 并获取其返回值
> 将返回值 paths 进行遍历, 依次取出和动态路由进行匹配，匹配后进行静态页面生成步骤
> 将 path 中的 params 传入 getStaticProps 中, 执行 getStaticProps 获得返回值
> 通过返回值生成 响应的html和json文件
> 以下代码会生成3个静态页面【1-3】.html 和 3个json文件，生成的文件可以到 .next/server/pages/ 下查看
> fallback 参数如下
> 同上，在开发时（即 next dev）时，getStaticPaths 会在每次页面访问时被请求！！
```
export async function getStaticPaths () {
    // 从外部拿数据, 此处为mock数据
    const paths = [
        // params中的参数需要为字符串, 否则导致无法匹配（猜测next进行了类型判断或map操作）
        { params: { id: 1 } },
        { params: { id: 2 } },
        { params: { id: 3 } }
    ]
    return {
        paths,
        // true | false | 'blocking'
        // 用于控制 访问动态路由时该地址未落地成静态页面时的处理
        // false: 当访问不存在页面时会返回404, 如上  .../8 时会返回404
        // true:  当访问不存在页面时不会返回404, 而是返回【动态路由页面】，并使用页面参数去请求getStaticProps生成静态页面和JSON文件返回【动态渲染】到页面中, 二次访问该页面由于已经有了静态页面, 则和其它已存在行为一致, 可以理解为一种 lazy build
        // 'blocking': 基本与true一致, 不同的是当访问不存在页面时会等待getStaticProps执行完成后再返回页面
        // true & 'blocking': 一个是先返回再请求数据动态渲染 另一个是拿数据再返回 一个异步一个同步
        fallback: true
    }
}
```

> 服务器渲染
1. getServiceSideProps() // 服务器将在每次页面请求时调用此函数
> 当你的某个页面需要预渲染频繁更新的数据时, 使用服务器渲染
> 由于服务器端渲染会导致性能比“静态生成”慢，因此仅在绝对必要时才使用此功能
