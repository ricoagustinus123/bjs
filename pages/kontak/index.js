import Head from 'next/head'
import Hero from '../../component/herokontak/Hero'
import Kontak from '../../component/kontakkami/Kontak'
import Layout from '../../component/Layout'
const Kontakkami = () => {
    return(
        <>
            <Head>
                <title>kontak-BJS</title>
                <meta name="description" content="kontak perusahaan outsourching"/>
            </Head>
            <Layout>
                <Hero/>
                <Kontak/>
            </Layout>
        </>
    )
}

export default Kontakkami