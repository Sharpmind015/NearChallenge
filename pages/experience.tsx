import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../layouts/Container'
import Topbar from '../layouts/Topbar'
import RecentExperience from '../components/RecentExperience'
import {useState} from 'react'
import Link from 'next/link'

const Experience: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const onChange : (e : React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setSearch(e.target.value);
  }
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
          <div className='mt-3 flex justify-between'>         
            <form onSubmit={(e) => e.preventDefault()}>
              <label className='relative w-269px w-1/2 h-12' htmlFor='Search'>
                <svg className='absolute left-3 top-1/2 -translate-y-1/2' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.481 17.5L14.7426 13.755L18.481 17.5ZM16.8143 8.74999C16.8143 10.6286 16.068 12.4303 14.7397 13.7587C13.4113 15.087 11.6096 15.8333 9.73098 15.8333C7.85236 15.8333 6.05069 15.087 4.7223 13.7587C3.39392 12.4303 2.64764 10.6286 2.64764 8.74999C2.64764 6.87137 3.39392 5.0697 4.7223 3.74132C6.05069 2.41293 7.85236 1.66666 9.73098 1.66666C11.6096 1.66666 13.4113 2.41293 14.7397 3.74132C16.068 5.0697 16.8143 6.87137 16.8143 8.74999V8.74999Z" stroke="#6F6E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input value={search} onChange={onChange} className='px-12 py-3 text-gray-500 text-base bg-gray-700 rounded-lg  focus:ring-2 focus:ring-accent-200 focus:ring-opacity-75 outline-none w-269px' type="text" placeholder='Search experiences' />
              </label>
            </form>
            <button>
              <Image src="/filter.svg" width='24' height='24' alt='' />
            </button>
          </div>
          <h3 className='heading heading--2 mt-6'>Recent Experiences</h3>
          <RecentExperience src='/DeFi.png' title='DeFi Swap' description='Swap your digital assets' users='+200 users' />
          <RecentExperience src='/Docu.png' title='Docu Sign' description='sign smart contracts seamlessly' users='+1k users' />
          <div className='flex justify-between items-center mt-6'>
            <h3 className='heading heading--2'>Popular categories</h3>
            <div>
              <Link href=''>
                <a className='text-sm text-accent-200 not-italic font-semibold inline-block'>
                  <span className='inline-block mr-3'>See All</span>
                  <svg className='inline-block' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.705766 2.70577C0.315978 2.31598 0.318104 1.68189 0.70607 1.29392L0.793916 1.20608C1.18387 0.816121 1.8135 0.813508 2.20798 1.20799L7.29201 6.29201C7.68302 6.68302 7.68648 7.31351 7.29201 7.70799L2.20798 12.792C1.81697 13.183 1.18188 13.1819 0.793916 12.7939L0.70607 12.7061C0.316114 12.3161 0.312765 11.6872 0.705766 11.2942L4.99999 7L0.705766 2.70577Z" fill="#885FFF"/>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </main>
        </div>
      </Container>
    </div>
  )
}

export default Experience
