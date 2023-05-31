// 导入全局样式
import '@/styles/globals.css'
import Layout from '@/components/layout'

// 输出性能指标
export function reportWebVitals (metric) {
    console.log(metric)
}

export default function App({ Component, pageProps }) {
    // 组件内部自定义样式 - 否则默认使用布局组件
    const getLayout = Component.getLayout
    if (getLayout) {
        return getLayout(<Component {...pageProps} />)
    } else {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}
