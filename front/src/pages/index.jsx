import Link from 'next/link'
import styles from '@/styles/index.module.scss'

export const getStaticProps = async () => {
    const result = await fetch('http://localhost:3000/api/booklist')
    return {
        props: {
            name: '首页2'
        }
    }
}

export default function Home(props) {
    console.log(props)
    return (
        <section className={styles.container}>
            <div className="title">{props.name}</div>
            <Link href="/my/bookGroup">我的书单</Link>
        </section>
    )
}
