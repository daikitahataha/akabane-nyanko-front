import api from '../rest';

const list = async(
    url: string,
    page: number
) => {
    const useUrl = url + '?page=' + page
    return await api.get(useUrl)
}

export const tag = {
    list
}