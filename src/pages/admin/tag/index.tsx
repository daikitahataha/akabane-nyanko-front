import { NextPage } from 'next';
import { FC, useEffect } from 'react'
import useSWR from "swr"
import 'semantic-ui-css/semantic.min.css'
import MainLayout from '../../../components/admin/layouts/main'
import TagIndex from '../../../features/admin/tag/tag-index';

const Index = (props) => {
    return (
        <TagIndex />
    )
}

Index.getLayout = (page) => (
    <MainLayout>{page}</MainLayout>
)

export default Index

