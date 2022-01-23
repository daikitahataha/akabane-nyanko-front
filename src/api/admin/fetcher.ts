import http from './http'

const GET = (url: string, params?) => {
    return http({
        method: 'GET',
        url: url,
        params
    })
}

const POST = (url, params?) => {
    return http({
        method: 'POST',
        url: url,
        params
    })
}

export const fetcher = {
    GET,
    POST
}