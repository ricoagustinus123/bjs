import Feed from '../component/feed/Feed'
import Hero from '../component/hero/Hero'
import Layout from '../component/Layout'
import Tentang from '../component/tentangbjs/Tentang'
import Head from 'next/head'
export default function Home() {
    return (
        <>
        <Head>
            <meta name="description" content="outsourching terpercaya di indonesia"/>
        </Head>
        <Layout>        
        <Hero/>
        <Tentang/>
        <Feed/>
        </Layout>

        </>
    )
}