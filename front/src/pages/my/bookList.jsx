export default function MyBookList ({ bookList = [] }) {

    const showBooks = (list = []) => {
        return list.map((item, index) => {
            return (
                <div key={item.id}>
                    <span>{index + 1}. </span>
                    <span>[{item.author.name}] -</span>
                    <span>{item.title}</span>    
                </div>
            )
        })
    }

    return (
        <div>
            <div>我的书单</div>
            <div>
                {
                    bookList.map(item => {
                        return (
                            <div key={item.id} className='book-group'>
                                <div>{item.name}</div>
                                <div className='book-list'>{showBooks(item.list)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

import { fetchGetData } from '@/api'

export const getStaticProps = async () => {
    const bookList = await fetchGetData('/book/myBookList')

    return {
        props: {
            bookList
        }
    }
}
