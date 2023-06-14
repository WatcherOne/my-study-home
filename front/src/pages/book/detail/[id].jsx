import { fetchGetData } from '@/pages/api/common'
import styles from './detail.module.css'

export default function BookDetail ({ info }) {

    return (
        <div className={styles.detail_container}>
            <div className={styles.book_title}>{info.title}</div>
            <div className={styles.book_base_info}>
                <div className={styles.book_cover}></div>
                <div className={styles.book_info}>
                    <div>
                        <span className={styles.book_prefix}>副标题:</span>
                        <span className={styles.book_link}>{info.subTitle}</span>
                    </div>
                    <div>
                        <span className={styles.book_prefix}>作者:</span>
                        <span className={styles.book_link}>[{info.nation}]{info.author.name}</span>
                    </div>
                    <div>
                        <span className={styles.book_prefix}>外文名:</span>
                        <span>{info.foreignTitle}</span>
                    </div>
                    <div>
                        <span className={styles.book_prefix}>出版年:</span>
                        <span>{info.publishTime}</span>
                    </div>
                    <div>
                        <span className={styles.book_prefix}>标签:</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.book_mark}></div>
            <div className={styles.book_description}>
                <div className={styles.desctription_title}>内容简介 - - - - </div>
                <div className={styles.desctription_content}>{info.introduction}</div>
            </div>
            <div className={styles.book_short_comment}>
                <div className={styles.comment_title}>短评 - - - - </div>
            </div>
            <div className={styles.book_long_comment}>
                <div className={styles.comment_title}>书评 - - - - </div>
            </div>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    const { id } = params
    const { data } = await fetchGetData(`/bookDetail/${id}`)

    return {
        props: {
            info: data
        }
    }
}

export const getStaticPaths = async () => {
    const result = await fetchGetData('/booklist')
    const { rows } = result.data || {}

    const paths = rows.map(item => ({ params: { id: item.id + '' } }))

    return {
        paths,
        fallback: 'blocking'
    }
}
