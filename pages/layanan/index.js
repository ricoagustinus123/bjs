import Layout from '../../component/Layout'
import Head from 'next/head'
import Hero from '../../component/herolayanan/Hero'
import Layanan from '../../component/layanankami/Layanan'
const Layanankami = () => {
    return(
        <>
            <Head>
                <meta name="description" content="penyedia jasa outsourching"/>
                <meta name="keywords" content="office boy,office girl,driver, security,admin"/>
                <title>LAYANAN-BJS</title>
                <link rel="icon" href="/bjs-logo.svg"/>
            </Head>

            <Layout>
                <Hero/>
                <Layanan/>
            </Layout>
        </>
    )
}

export default Layanankami