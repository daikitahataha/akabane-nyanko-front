import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css'
import AreaIndex from '../../../features/admin/area/area-index';
import MainLayout from '../../../components/admin/layouts/main'

const Index = (props) => {
    return (
        <AreaIndex />
    )
}

Index.getLayout = (page) => (
    <MainLayout>{page}</MainLayout>
)

export default Index;