import Image from 'next/image'
import s from './bisnis.module.css'
const Bisnis = () => {
    return(
        <div className={s.bisnis}>
            <h1 className={s.bisnisTitle}>
                    Bisnis Kami
                    <hr/>
            </h1>

            <div className={s.partbisnis}>
                <div className={s.katebisnis}>
                <Image src="/perdagangan.svg" width={50} height={150}/>
                <h4>Perdagangan</h4>
                </div>

                <div className={s.katebisnis}>
                <Image src="/jasa.svg" width={50} height={150}/>
                <h4>Jasa</h4>
                </div>

                <div className={s.katebisnis}>
                <Image src="/pembangunan.svg" width={50} height={150}/>
                <h4> Pembangunan</h4>
                </div>

                <div className={s.katebisnis}>
                <Image src="/industri.svg" width={50} height={150}/>
                <h4>Industri</h4>
                </div>
            </div>

            <div className={s.partbisnis}>
                <div className={s.katebisnis}>
                <Image src="/angkutan.svg" width={50} height={150}/>
                <h4>Pengangkutan Darat</h4>
                </div>

                <div className={s.katebisnis}>
                <Image src="/pertanian.svg" width={50} height={150}/>
                <h4>Pertanian</h4>
                </div>

                <div className={s.katebisnis}>
                <Image src="/cetak.svg" width={50} height={150}/>
                <h4>Percetakan</h4>
                </div>

                <div className={s.katebisnis}>
                <Image src="/bengkel.svg" width={50} height={150}/>
                <h4>Perbengkelan</h4>
                </div>
            </div>

        </div>
    )
}

export default Bisnis