
import { getBookDetail } from '@/db/service/Book'

export default async function handler (req, res) {
    const result = await getBookDetail(req, res)
    res.status(200).json(result)
}
