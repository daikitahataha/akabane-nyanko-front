import { VFC } from 'react'
import { Dropdown } from 'semantic-ui-react'

const IndexOperation: VFC = () => {
    return (
        <Dropdown item icon='ellipsis vertical'>
            <Dropdown.Menu>
                <Dropdown.Item>編集</Dropdown.Item>
                <Dropdown.Item>削除</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default IndexOperation