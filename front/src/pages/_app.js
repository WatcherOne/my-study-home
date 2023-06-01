// 导入全局样式
import '@/styles/globals.css'
import '@/styles/variables.module.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

// 设置google字体
const inter = Inter({ subsets: ['latin'] })

// 输出性能指标
export function reportWebVitals (metric) {
    console.group('指标测试: ')
    console.log(metric)
    console.groupEnd()
}

export default function App ({ Component, pageProps }) {
    // 组件内部自定义样式 - 否则默认使用布局组件
    const getLayout = Component.getLayout
    return (
        <>
            <Head>
                <title>觅书隅安</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className={inter.className}>
                {
                    getLayout ? getLayout(<Component {...pageProps} />) : <Layout><Component {...pageProps} /></Layout>
                }
            </section>
        </>
    )
}
