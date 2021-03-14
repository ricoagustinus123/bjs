import s from "./footer.module.css";
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className="container-footer">
           <div className={s.sidemap}>
               <div className={s.bjs}>
                    <Image src="/bjs-logo.svg" className={s.logofooter} width={200} height={70} quality={100}/>
                    <h2>PT. Bintang Jamtama Sejahtera</h2>
                    <p>JL. ANGKASA BLOK B9 KAV. 6 KOTA BARU BANDAR KEMAYORAN, RT - / RW -, GUNUNG SAHARI SELATAN, KEMAYORAN, KOTA JAKARTA PUSAT, DKI JAKARTA, KODEPOS 10610</p>
               </div>
               <div className={s.siteDesc}>
                   <h3 className={s.titlefooter1}>Layanan</h3>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>perdagangan</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Jasa</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Pembangunan</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Perindustrian</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Pengangkutan Darat</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Pertanian</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Percetakan</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Perbengkelan</p>
               </div>
               <div className={s.siteDesc2}>
                   <h3 className={s.titlefooter2}>Kantor Perwakilan</h3>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>dki Jakarta
                   
                    </p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Jawa Tengah</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Jawa Barat</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Jawa Timur</p>
                   <p><span className="material-icons">
                    keyboard_arrow_right</span>Makassar</p>
               </div>
               <div className={s.sideDesc}>
                   <h3 className={s.titlefooter3}>Hubungi Kami</h3>
                   <div className={s.iconkontak}>
                   <Image src="/wa.svg" width={50} height={30} quality={100}/>

                   <Image src="/mail.svg" width={50} height={30} quality={100}/>
                   </div>
               </div>
           </div>

           <div className={s.copyright}>
               <h4>Copyright 2021 | BJS Indonesia</h4>
           </div>
        </footer>
    )
}

export default Footer