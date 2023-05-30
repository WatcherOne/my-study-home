export default function MyBookList ({ dictList }) {
    return (
        <div>
            <span>书单页面</span>
            <div>
                {
                    dictList.map(item => {
                        return (
                            <span key={item.dictCode}>{item.dictName}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

// import { fetchGetData } from '@/api'

export const getStaticProps = async () => {
    // const dictList = await fetchGetData('/dict/getDictAll')
    const dictList = []

    return {
        props: {
            dictList
        }
    }
}
