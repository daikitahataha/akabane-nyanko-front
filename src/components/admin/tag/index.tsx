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

type Props = {
    tagList: Tags
    totalPage: number
}

const Index: VFC<Props> = (props) => {
    const page = useSnapshot(IndexPage);
    const onPaginate = (
        e: React.MouseEvent<HTMLAnchorElement>,
        data: PaginationProps
    ) => {
        const { activePage } = data
        page.paginate(activePage)
    }

    const { tagList, totalPage } = props
    return (
        <>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#ID</Table.HeaderCell>
                        <Table.HeaderCell>タグ名</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Called</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { tagList.map((tag, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{tag.ID}</Table.Cell>
                                <Table.Cell>{tag.name}</Table.Cell>
                                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                <Table.Cell>No</Table.Cell>
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