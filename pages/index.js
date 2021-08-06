import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Airbnb</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-[#662B2B]">
                <Header />
                <Banner />
            </h1>
        </div>
    )
}
