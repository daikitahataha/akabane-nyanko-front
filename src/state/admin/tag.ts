import { proxy } from 'valtio'

export const IndexPage = proxy({
    page: 1,
    paginate: (page: number) => {
        IndexPage.page = page
    }
})