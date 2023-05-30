import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    // 可以自定义 head 里面的内部
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
