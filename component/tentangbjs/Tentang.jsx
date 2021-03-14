import Image from 'next/image'
import s from './tentang.module.css'

const Tentang = () => {
    return(
        <>
            <div className={s.tentang}>
                <h1 className={s.tentangTitle}>
                    Apa itu BJS ?
                    <hr/>
                </h1>

                <div className={s.tentangDesc}>
                    <p className={s.tentangText}>
                    PT. Bintang Jamtama Sejahtera adalah sebuah perusahaan yang didirikan pada tahun 2015 oleh Koperasi Warga Jamkrindo Sejahtera. Dalam implementasinya PT Bintang Jamtama Sejahtera menjalankan bisnisnya dalam ruang bisnis pengadaan Barang dan Jasa.  Saat ini PT. Bintang Jamtama Sejahtera memiliki jaringan pelayanan di 5 Provinsi  : Jakarta, Jawa Barat, Jawa Tengah , Jawa Timur dan Sulawesi Selatan, dan akan terus dikembangkan untuk propinsi propinsi lain. Di dukung tenaga profesional dan jaringan supplier , vendor yang profesional dan berdedikasi, serta Jamkrindo sebagai User utamanya, PT. Bintang Jamtama Sejahtera bersiap mengembangkan bisnisnya. Partnership Bisnis akan menjadi sebuah terobosan model bisnis baru, dimana PT. Bintang Jamtama Sejahtera berorientasi menjadikan UMKM sebagai bagian dari bisnis kerjasama tersebut .  
                    </p>
                    <div className={s.imageTentang}>
                    <Image src="/tentangimg.svg" width={360} height={360} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tentang