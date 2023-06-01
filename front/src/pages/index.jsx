import Link from 'next/link'
import styles from '@/styles/index.module.scss'

export default function Home() {
    return (
        <section className={styles.container}>
            <div className="title">首页</div>
            <Link href="/my/bookGroup">我的书单</Link>
        </section>
    )
}
