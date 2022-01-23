import { NextPage } from 'next'
import styles from './Layout.module.scss'
import { Menu } from 'semantic-ui-react'

const LeftSideMenu: NextPage = () => {
    return (
        <div className={styles.admin__left_side_menu_wrap}>
            <Menu pointing secondary vertical style={{height: '100%'}}>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='friends'
                />
            </Menu>
        </div>
    )
}

export default LeftSideMenu