import { fetcher } from './fetcher'
import http from './http'

const list = (
    url: string,
    page: number,
) => {
    const useUrl = url + '?page=' + page
    return http({
        method: 'GET',
		url: useUrl,
    })
}

export const area = {
    list
}