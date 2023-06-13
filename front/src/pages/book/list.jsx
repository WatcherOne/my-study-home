import Router from 'next/router'
import Link from 'next/link'
import { fetchGetData } from '@/pages/api/common'

export default function BookList (props) {
    const { list } = props

    return (
        <div className='book_list_container'>
            {
                list.map(item => {
                    return (
                        <div className='book_description' key={item.id}>
                            <div>《{item.title}》</div>
                            <div>{item.introduction}</div>
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
