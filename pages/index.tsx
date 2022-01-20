import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className={style.homeContainer}>
          <div className="flex justify-center flex-col items-center">
            <Image src="/Homepage.png" width="172" height="36" alt="Homepage" />
            <p className={style.homeTagline}>a web3 gateway to hidden experiences</p>
          </div>
          <div className="flex justify-center flex-col items-center absolute bottom-8">
            <p className={style.homeCredit}>powered by</p>
            <Image src="/Layer 1.png" width="114" height="30" alt="Homepage" />
          </div>
        </main>
      </Container>
    </div>
  )
}

export default Home
