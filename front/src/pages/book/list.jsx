import Router from 'next/router'
import Link from 'next/link'

export default function BookList () {

    return (
        <div>
            <span></span>
            <Link href="/book/detail/1">详细</Link>
            <a onClick={() => { Router.push('/book/detail/2') }}>详细</a>
        </div>
    )
}
