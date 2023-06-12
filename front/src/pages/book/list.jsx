import Router from 'next/router'
import Link from 'next/link'
import { getBookPage } from '@/db/service/Book'

export default function BookList () {

    return (
        <div>
            <span></span>
            <Link href="/book/detail/1">详细</Link>
            <a onClick={() => { Router.push('/book/detail/2') }}>详细</a>
        </div>
    )
}

export const getStaticProps = async (req, res) => {
    const result = await getBookPage(req, res)
    console.log(result)
    return {
        props: {
            list: []
        },
        revalidate: 12 * 60 * 60 * 1000
    }
}
