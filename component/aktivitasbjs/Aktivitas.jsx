import s from "./aktivitas.module.css"
import Image from 'next/image'

const Aktivitasbjs = () => {
    return(
        <div className={s.containeraktivitas}>
            <div className={s.aktivitasbjs}>
                <h2> KEGIATAN UMKM</h2>
                <video className={s.video} autoPlay muted controls>
                    <source src="/koperasi.mp4" type="video/mp4"></source>
                Hellos
                </video>
            </div>

            <div className={s.aktivitasbjs2}>
                <h2>KEGIATAN KONTRAKTOR</h2>
                
                <div className={s.gallerykontraktor}>
                    <Image src="/kontraktor1.jpg" width={250} height={180} alt="kontraktor 1"/>
                    <Image src="/kontraktor2.jpg" width={250} height={180} alt="kontraktor 2"/>
                    <Image src="/kontraktor3.jpg" width={250} height={180} alt="kontraktor 3"/>
                    <Image src="/kontraktor4.jpg" width={250} height={180} alt="kontraktor 4"/>
                </div>
            </div>

            <div className={s.aktivitasbjs3}>
                <h2>KEGIATAN PEMADAM</h2>
                
                <div className={s.gallerypemadam}>
                    <Image src="/pemadam.png" width={1000} height={250} alt="kontraktor 1"/>

                </div>
            </div>
        </div>
    )
}

export default Aktivitasbjs