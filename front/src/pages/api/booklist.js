
import { getBookPage } from '@/db/service/Book'

export default async function handler (req, res) {
    const result = await getBookPage(req, res)
    res.status(200).json(result)
}
