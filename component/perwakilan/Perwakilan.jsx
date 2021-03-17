import s from './perwakilan.module.css'
import Image from 'next/image'
const Perwakilan = () => {
    return(
        <div className={s.perwakilan} id="perwakilan">
            <h1 className={s.perwakilanTitle}>
                    Kantor Perwakilan
                    <hr/>
            </h1>

            <div className={s.containerCard}>
                <div className={s.kantorCard}>
                    <Image src="/slide1.svg" width={250} height={300}/>
                    <h1>DKI JAKARTA</h1>
                    <h3>(pusat)</h3>
                    
                    <div className={s.kontakKantor}>
                        <div className={s.dataKantor}>                        <h3>Alamat :</h3>
                        <span className={s.isikontak}>JL. Angkasa Blok B9 KAV 6 Kota Baru Bandar Kemayoran Gunung Sahari Jakarta Pusat
                        </span>
                        </div>

                        <div className={s.dataKantor}>  
                        <h3>Email :</h3>
                        <span className={s.isikontak}>pt.bintangjamtamasejahtera@gmail.com
                        </span>
                        </div>
                    </div>
                </div>

                <div className={s.kantorCard}>
                    <Image src="/slide1.svg" width={250} height={300}/>
                    <h1>JAWA TENGAH</h1>
                    <h3></h3>
                    
                    <div className={s.kontakKantor}>
                        <div className={s.dataKantor}>                        <h3>Alamat :</h3>
                        <span className={s.isikontak}>Perum Jamkrindo Kantor Cabang Semarang Jl. Pamularsih Semarang Jawa Tengah
                        </span>
                        </div>

                        <div className={s.dataKantor}>  
                        <h3>Email :</h3>
                        <span className={s.isikontak}>pt.bintangjamtamasejahtera@gmail.com
                        </span>
                        </div>
                    </div>
                </div>


                <div className={s.kantorCard}>
                    <Image src="/slide1.svg" width={250} height={300}/>
                    <h1>JAWA BARAT</h1>
                    <h3></h3>
                    
                    <div className={s.kontakKantor}>
                        <div className={s.dataKantor}>                        <h3>Alamat :</h3>
                        <span className={s.isikontak}> Komp. Margahayu Raya Blok A.26 no. 2 Sekejati Buah Batu Bandung

                        </span>
                        </div>

                        <div className={s.dataKantor}>  
                        <h3>Email :</h3>
                        <span className={s.isikontak}>bintangjamtamasejahtera.bandung@<br/>gmail.com
                        </span>
                        </div>
                    </div>
                </div>

            </div>
                {/* 2 */}
            <div className={s.containerCard}>
                <div className={s.kantorCard}>
                    <Image src="/slide1.svg" width={250} height={300}/>
                    <h1>JAWA TIMUR</h1>
                    <h3></h3>
                    
                    <div className={s.kontakKantor}>
                        <div className={s.dataKantor}>                        <h3>Alamat :</h3>
                        <span className={s.isikontak}>PT Bintang Jamtama Sejahtera Jln Rungkut Mapan Barat VIII blok BH nomor 12 A Surabaya
                        </span>
                        </div>

                        <div className={s.dataKantor}>  
                        <h3>Email :</h3>
                        <span className={s.isikontak}>pt.bintangjamtamasejahtera@gmail.com
                        </span>
                        </div>
                    </div>
                </div>

                <div className={s.kantorCard}>
                    <Image src="/slide1.svg" width={250} height={300}/>
                    <h1>MAKASSAR</h1>
                    <h3></h3>
                    
                    <div className={s.kontakKantor}>
                        <div className={s.dataKantor}>                        <h3>Alamat :</h3>
                        <span className={s.isikontak}> Jl. Dr. Sam Ratulangi No. 140 , Makassar Kode POS 90125.
                        </span>
                        </div>

                        <div className={s.dataKantor}>  
                        <h3>Email :</h3>
                        <span className={s.isikontak}>pt.bintangjamtamasejahtera@gmail.com
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perwakilan