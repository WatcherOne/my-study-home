import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    // 可以自定义 head 里面的内部
    return (
        <Html lang="en">
            <Head>
                {/* 只是警告： */}
                {/* _document.js仅在初始预渲染时渲染, 故不加title */}
                {/* <title>觅书隅安</title> */}
                <meta name="description" content="you can set your Book-List and Todo-List" />
                {/* 因为无法对其进行重复数据消除 */}
                {/* <meta name=“viewport”…>因标记在app中的 Head 处 */}
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
