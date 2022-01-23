import React, {useState, useEffect} from 'react'
import useSWR from "swr"
import type { NextPage } from 'next'

type Task = {
  ID: number,
  Title: string,
  Content: string
}

type Data = Task[]

const Home: NextPage = () => {
  const [data, setData] = useState<Data>([])

  async function fetcher(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }

  const {catData} = useSWR('http://localhost:8080/api/admin/cat/list', fetcher);
  console.log('catData')
  console.log(catData)

  return (
    // {data.map((d) => {
    //   return (
    //     <div>hello</div>
    //   )
    // })
    // }
    <p>hahaha</p>
  )
}

export default Home
