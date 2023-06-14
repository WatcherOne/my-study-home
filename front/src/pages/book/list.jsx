import Router from 'next/router'
import Link from 'next/link'
import { fetchGetData } from '@/pages/api/common'
import styles from './list.module.css'

export default function BookList (props) {
    const { list } = props
    console.log(list)

    return (
        <div className={styles.list_container}>
            {
                list.map(item => {
                    return (
                        <div className={styles.list_box} key={item.id}>
                            <div className={styles.cover}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.title}>《{item.title}》</div>
                            <div className={styles.author}>{item.authorId}</div>
                            <div className={styles.list_intro}>{item.introduction}</div>
                        </div>
                    )
                })
            }
            {/* <Link href="/book/detail/1">详细</Link>
            <a onClick={() => { Router.push('/book/detail/2') }}>详细</a> */}
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
