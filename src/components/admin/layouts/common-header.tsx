import { NextPage } from 'next'
import styles from './Layout.module.scss'
import { Header, Image } from 'semantic-ui-react'

const CommonHeader: NextPage = () => {
    return (
        <div className={styles.admin__header_wrap}>
            <Header as='h2'>
                <Image src='/images/header_logo.png' />
            </Header>
        </div>
    )
}

export default CommonHeader