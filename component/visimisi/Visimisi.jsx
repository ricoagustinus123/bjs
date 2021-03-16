import s from './visimisi.module.css'

const Visimisi = () => {
    return(
        <div className={s.containerVisi}>
            <div className={s.visi}>
                <h2 className={s.titlevisimisi}>Visi</h2>
                <p>PT. Bintang Jamtama Sejahtera menjadi Perusahaan Pengelola Pengadaan Barang dan Jasa, yang terpercaya dan turut serta dalam membangun perekonomian  bangsa</p>
            </div>

            <div className={s.misi}>
            <h2 className={s.titlevisimisi}>Misi</h2>
                <p className={s.subMisi}>
                1. Menjalankan kegiatan pelayanan pengadaan barang   dan jasa  bagi Pelanggan ,dengan berorientasi 
                pada  pemberian Pelayanan Prima kepada semua Pelanggan.
                </p>
                <p className={s.subMisi}>
                2. Mempersiapkan SDM yang memiliki etos kerja dan produktifitas yang tinggi serta memiliki semangat  
                untuk berkembang.
                </p>

                <p className={s.subMisi}>
                3. Mengembangkan konsep usaha dengan prinsip Kerjasama dan atau Kemitraan, yang berlandaskan pada  semangat Inovasi dan  kemandirian
                </p>

                <p className={s.subMisi}>
                4. Memfasilitasi kepentingan Stakeholder yang berorientasi pada profitabilitas.
                </p>

                <p className={s.subMisi}>
                5. Patuh pada ketentuan perundangan dan peraturan  yang berlaku. 

                </p>
            </div>
        </div>
    )
}

export default Visimisi