import { FC } from 'react'
import { NextPage } from 'next'
import { 
	Button, 
	Grid,
	Header,
} from 'semantic-ui-react'
import Index from '../../../components/admin/area/index'

const AreaIndex: NextPage = () => {
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
			<Index />
		</div>
	)
}

export default AreaIndex