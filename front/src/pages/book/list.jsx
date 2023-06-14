import Router from 'next/router'
import Link from 'next/link'
import { fetchGetData } from '@/pages/api/common'
import styles from './list.module.css'

export default function BookList (props) {
    const { list } = props

    return (
        <div className={styles.list_container}>
            {
                list.map(item => {
                    return (
                        <div className={styles.list_box} key={item.id}>
                            <div className={styles.cover}>
                                <img src="" alt="" />
                            </div>
                            <Link href={`/book/detail/${item.id}`} className={styles.title}>《{item.title}》</Link>
                            <div className={styles.author_info}>
                                <span className={styles.author_name}>{item.author.name}[{item.author.nation}]</span>
                                <span>{item.publishTime}</span>
                            </div>
                            <div onClick={() => { Router.push(`/book/detail/${item.id}`) }} className={styles.list_intro}>{item.introduction}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const getStaticProps = async () => {
    const result = await fetchGetData('/booklist')
    const { rows } = result.data || {}

    return {
        props: {
            list: rows
        },
        revalidate: 12 * 60 * 60
    }
}
