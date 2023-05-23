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

import { getDictAll } from '@/api'

export const getStaticProps = async () => {
    const dictList = await getDictAll('/dict/getDictAll')

    return {
        props: {
            dictList
        }
    }
}
