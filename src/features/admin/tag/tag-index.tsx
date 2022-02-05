import { FC, useEffect } from 'react'
import { NextPage } from 'next'
import { 
	Button, 
	Grid,
    Header
} from 'semantic-ui-react'
import useSWR from "swr"
import { useSnapshot } from 'valtio'
import Index from '../../../components/admin/tag/index'
import Loading from '../../../components/admin/common/loader'
import { IndexPage } from '../../../state/admin/tag'
import { rest } from '../../../api/rest'

const TagIndex: NextPage = () => {

    const page = useSnapshot(IndexPage);
    const url = 'api/admin/tag/list' + '?page=' + page.page.toString();
    const {data, error} = useSWR(url, rest.get)
    if (error) return <div>failed to load</div>
    if (!data) return <div><Loading /></div>

	return (
		<div>
			<Grid>
                <Grid.Column width={10}>
                    <Header as='h2'>タグ一覧</Header>
                </Grid.Column>
            </Grid>
			<Grid>
				<Grid.Row>
                    <Grid.Column width={5}></Grid.Column>
                    <Grid.Column width={11}>
                        <Button primary floated='right'>新規作成</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Index tagList={data.list} totalPage={data.total_page}/>
		</div>
	)
}

export default TagIndex