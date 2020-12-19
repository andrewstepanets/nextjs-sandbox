import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>This is My First Next JS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <img src="/assets/img_logo.svg" alt="Andrew Steps Logo" className="m-auto my-4 w-24 sm:w-auto" />
        <h1 className="mx-auto text-4xl font-bold">
          Welcome to Next.js
        </h1>
      </main>

    </div>
  )
}
