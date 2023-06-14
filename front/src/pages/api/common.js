import { API_URL } from '@/constants/config'

export async function fetchGetData (url, params = {}) {
    const urlParams = params ? `?${handleParams(params)}` : ''
    const result = await fetch(`${API_URL}${url}${urlParams}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await result.json()
}

function handleParams (params) {
    let result = ''
    for (let key in params) {
        result += `${key}=${params[key]}&`
    }
    return result
}
