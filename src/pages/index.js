import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'
import Hero from './components/Hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>This is My First Next JS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <Hero />
        {/* <img src="/assets/img_logo.svg" alt="Andrew Steps Logo" className="m-auto my-4 w-24 sm:w-auto" />
        <h1 className="mx-auto text-4xl font-bold">
          Welcome to Next.js
        </h1>
        <Link href="/page-two">
          <a className="text-red-400">Go Page Two</a>
        </Link> */}
      </main>

    </Layout>
  )
}
