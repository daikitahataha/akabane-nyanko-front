import { Children } from 'react'
import { NextPage } from 'next'
import { Menu } from 'semantic-ui-react'
import styles from './Layout.module.scss'
import LeftSideMenu from './left-side-menu'
import CommonHeader from './common-header'

const MainLayout: NextPage = ({ children }) => {
    return (
        <>
            <CommonHeader />
            <div className={styles.admin_body_layout}>
                <LeftSideMenu />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default MainLayout