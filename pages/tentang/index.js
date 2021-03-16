import Bisnis from '../../component/bisniskami/Bisnis'
import Hero from '../../component/herotentang/Hero'
import Layout from '../../component/Layout'
import Partner from '../../component/partner/Partner'
import Perwakilan from '../../component/perwakilan/Perwakilan'
import Tentang from '../../component/tentangbjs/Tentang'
import Visimisi from '../../component/visimisi/Visimisi'
const TentangKami = () => {
    return(
        <>
            <Layout>
            <Hero/>
            <Tentang/>
            <Visimisi/>
            <Bisnis/>
            <Perwakilan/>
            <Partner/>
            </Layout>
        </>
    )
}

export default TentangKami