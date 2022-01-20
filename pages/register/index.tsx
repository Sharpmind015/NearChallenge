import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../../layouts/Container'
import AuthTopbar from '../../layouts/AuthTopbar'

const Register: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>
          <AuthTopbar type="homeAuth" />
        </main>
      </Container>
    </div>
  )
}

export default Register
