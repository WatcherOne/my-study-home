import { API_URL } from '@/constants/config'

export async function fetchGetData (url) {
    const result = await fetch(`${API_URL}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await result.json()
}
