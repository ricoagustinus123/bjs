import Head from 'next/head'
import Aktivitasbjs from '../../component/aktivitasbjs/Aktivitas'
import Hero from '../../component/heroaktivitas/Hero'
import Layout from '../../component/Layout'
const Aktivitas = () => {
    return(
        <>
            <Head>
                <title>Aktivitas BJS-Indonesia</title>
                <meta name="description" content="aktivitas yang dilakukan PT.Bintang Jamtama Sejahtera"/>
            </Head>
            <Layout>
                <Hero/>
                <Aktivitasbjs/>
            </Layout>
        </>
    )
}
export default Aktivitas