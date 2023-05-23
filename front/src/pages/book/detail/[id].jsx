import { useRouter } from 'next/router'

export default function BookDetail ({ info }) {
    const { query } = useRouter()
    return (
        <div>详细书籍信息{query.id}-{info.name}</div>
    )
}

export const getStaticProps = async ({ params }) => {
    const res = await fetchGetData(`/book/detail/${params.id}`)

    return {
        props: {
            info: res
        }
    }
}

import { fetchGetData } from '@/api'

export const getStaticPaths = async () => {
    const res = await fetchGetData('/book/list')
    const { rows = [] } = res || {}

    const paths = rows.map(item => ({ params: { id: item.id + '' } }))

    return {
        paths,
        fallback: 'blocking'
    }
}
