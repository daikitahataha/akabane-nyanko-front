import api from '../rest';

const list = async(
    page: number
) => {
    const url = 'api/admin/tag/list';
    return await api.get(url)
}

export const tag = {
    list
}