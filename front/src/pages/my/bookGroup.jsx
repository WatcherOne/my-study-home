// import './bookGroup.css'

export default function MyBookGroup ({ bookGroupList = [] }) {

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
        <div className='book-group-container'>
            <div className='page-title'>我的书单</div>
            <div className='book-group-box'>
                {
                    bookGroupList.map(item => {
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

// import { fetchGetData } from '@/api'

export const getStaticProps = async () => {
    // const bookGroupList = await fetchGetData('/book/myBookList')
    const bookGroupList = []

    return {
        props: {
            bookGroupList
        }
    }
}
