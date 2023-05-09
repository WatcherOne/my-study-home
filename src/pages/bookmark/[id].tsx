// 收藏夹详细
import { useRouter } from 'next/router'

export default function Page () {
    const router = useRouter()

    return <div>Post: { router.query.id }</div>
}
