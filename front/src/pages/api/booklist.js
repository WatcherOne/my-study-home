import { API_URL } from '@/constants/config'
import { getMyBookList } from '@/db/service/Book'

export async function fetchGetData (url) {
    const res = await fetch(`${API_URL}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export default async function handler (req, res) {
    const data = await getMyBookList(req, res)
    console.log(2332, data)
    return res.status(200).json({ list: [{ name: 's22' }] })
}
