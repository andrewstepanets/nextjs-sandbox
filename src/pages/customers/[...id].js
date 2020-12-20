import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <Head>
                <title>Customer [{id}]</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-3/4 flex flex-col justify-center">
                <img src="/assets/img_logo.svg" alt="Andrew Steps Logo" className="m-auto my-4 w-24 sm:w-auto" />
                <h1 className="mx-auto text-4xl font-bold">
                    Welcome to Customer [{id}] page!
        </h1>
                <Link href="/page-two">
                    <a className="text-red-400">Go Page Two</a>
                </Link>
            </main>

        </div>
    )
}
