import { NextPage } from 'next'
import { VFC } from 'react'
import { 
	Table,
    Pagination,
    PaginationProps
} from 'semantic-ui-react'
import { Tags } from '../../../datatype/admin/tag.type'
import { IndexPage } from '../../../state/admin/tag'
import { useSnapshot } from 'valtio'
import IndexOperation from '../../../components/admin/common/index-operation'

type Props = {
    tagList: Tags
    totalPage: number
}

const Index: VFC<Props> = (props) => {
    const { tagList, totalPage } = props

    const page = useSnapshot(IndexPage);
    const onPaginate = (
        e: React.MouseEvent<HTMLAnchorElement>,
        data: PaginationProps
    ) => {
        const { activePage } = data
        page.paginate(activePage)
    }

    return (
        <>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#ID</Table.HeaderCell>
                        <Table.HeaderCell>タグ名</Table.HeaderCell>
                        <Table.HeaderCell>操作</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { tagList.map((tag, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{tag.ID}</Table.Cell>
                                <Table.Cell>{tag.name}</Table.Cell>
                                <Table.Cell>
                                    <IndexOperation />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Pagination
                boundaryRange={0}
                defaultActivePage={page.page}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={totalPage}
                onPageChange={onPaginate}
            />
        </>
    )
}

export default Index