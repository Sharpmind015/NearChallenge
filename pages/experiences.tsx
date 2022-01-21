import type { NextPage } from 'next'
import {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useQuery } from "react-query"
import Container from '../layouts/Container'
import Topbar from '../layouts/Topbar'
import RecentExperience from '../components/RecentExperience'
import Category from '../components/Category'
import SeeAllContainer from '../layouts/SeeAllContainer'
import Loader from '../components/Loader'
import { Data } from './api/recentexperiences'

const Experiences: NextPage = () => {
  const { isLoading, error, data } = useQuery<Data, (input: RequestInfo, init?: RequestInit) => Promise<Data>>('recentexperiences', () =>
     fetch('/api/recentexperiences').then(res  =>
       res.json()
     )
   )
  const [search, setSearch] = useState<string>('');
  const onChange : (e : React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setSearch(e.target.value);
  }

  if (isLoading) return (
    <Loader />
  )

  if (error) return <>An error has occurred</>
  
  return (
    <div className="">
      <Head>
        <title>User : Experience</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
          <div>
          <Topbar />
          <main className="px-6">
          <div className='pt-3 flex justify-between fixed top-20 left-0 w-full h-20 px-6 bg-white z-40'>         
            <form onSubmit={(e) => e.preventDefault()}>
              <label className='w-269px w-1/2 h-12 py-3 bg-white' htmlFor='Search'>
                <svg className='absolute left-10 z-30 top-1/2 -translate-y-1/2' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.481 17.5L14.7426 13.755L18.481 17.5ZM16.8143 8.74999C16.8143 10.6286 16.068 12.4303 14.7397 13.7587C13.4113 15.087 11.6096 15.8333 9.73098 15.8333C7.85236 15.8333 6.05069 15.087 4.7223 13.7587C3.39392 12.4303 2.64764 10.6286 2.64764 8.74999C2.64764 6.87137 3.39392 5.0697 4.7223 3.74132C6.05069 2.41293 7.85236 1.66666 9.73098 1.66666C11.6096 1.66666 13.4113 2.41293 14.7397 3.74132C16.068 5.0697 16.8143 6.87137 16.8143 8.74999V8.74999Z" stroke="#6F6E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input value={search} onChange={onChange} className='px-12 py-3 text-gray-500 text-base bg-gray-700 rounded-lg  focus:ring-2 focus:ring-accent-200 focus:ring-opacity-75 outline-none w-269px absolute  top-1/2 -translate-y-1/2 left-6' type="text" placeholder='Search experiences' />
              </label>
            </form>
            <button className='absolute right-6 top-1/2 -translate-y-1/2'>
              <Image src="/filter.svg" width='24' height='24' alt='' />
            </button>
          </div>
          <h3 className='heading heading--2 mt-40'>Recent Experiences</h3>
          {data && data.data.map(({src, title, description, users, id}) => (
              <RecentExperience key={id} src={src} title={title} description={description} users={users} />
          ))}
          <SeeAllContainer title='Popular Categories' />
          <div className='flex justify-between flex-wrap -mx-3'>
            <div className='px-3 w-1/2'>
              <Category src='/Exchanges.png' title='Exchanges' colorType='bg-blue-500' />
            </div>
            <div className='px-3 w-1/2'>
              <Category src='/Games.png' title='Games' colorType='bg-gray-700' />
            </div>
            <div className='px-3 w-1/2'>
              <Category src='/Marketplaces.png' title='Marketplaces' colorType='bg-green-100' />
            </div>
            <div className='px-3 w-1/2'>
              <Category src='/Defi2.png' title='Defi' colorType='bg-pink-100' />
            </div>
            <div className='px-3 w-1/2'>
              <Category src='/Collectibles.png' title='Collectibles' colorType='bg-green-200' />
            </div>
            <div className='px-3 w-1/2'>
              <Category src='/Utilities.png' title='Utilities' colorType='bg-blue-600' />
            </div>
          </div>
          <SeeAllContainer title='Trending Experiences' />
          {data && data.data.map(({src, title, description, users, id}) => (
              <RecentExperience key={id} src={src} title={title} description={description} users={users} />
          ))}
        </main>
        </div>
      </Container>
    </div>
  )
}

export default Experiences
