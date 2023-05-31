import Head from 'next/head'
import { Inter } from 'next/font/google'

// 设置google字体
const inter = Inter({ subsets: ['latin'] })

export default function Layout ({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="you can set your Book-List and Todo-List" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={inter.className}>
                <header>
                    <h1>测试布局</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <span>Copywrite 2023 - wacther</span>
                </footer>
            </section>
        </>
    )
}
