import Image from 'next/image'
import s from "./feed.module.css"
import Link from 'next/link'
const Feed = () => {
    return(
        <div className={s.feed}>
            <div className={s.feedCard}>
                <Image className={s.image} src="/feed1.svg" width={500} height={400} />
                <h1 className={s.feedTitle}>Layanan
               
                </h1>
                <p className={s.feedDesc}>
                   memberikan pelayanan terbaik bagi setiap partner kami
                </p>
                <Link href="/">
                <div className={s.readmore}>
                <Link href="/layanan">Readmore</Link>
                <span className="material-icons">
                 arrow_forward
                </span>
                </div>
                </Link>
            </div>

            {/* feed 2 */}
            <div className={s.feedCard}>
                <Image src="/feed2.svg"  width={500} height={400} />
                <h1 className={s.feedTitle}>Kantor Perwakilan
                
                </h1>
                <p className={s.feedDesc}>
                    Untuk pelayanan, kami berada di Jakarta,Jawwa Tengah,Jawa Timur,Jawa Barat,dan Makassar.
                </p>
                <Link href="/">
                <div className={s.readmore}>
                <Link href="/tentang?#perwakilan">Readmore</Link>
                <span className="material-icons">
                 arrow_forward
                </span>
                </div>
                </Link>
            </div>

            {/* feed 3 */}
            <div className={s.feedCard}>
                <Image src="/feed3.svg" style={{marginTop:"-30px",backgrondColor:"red"}} width={500} height={400} />
                <h1 className={s.feedTitle}>Aktivitas
               
                </h1>
                <p className={s.feedDesc}>
                   berikut beberapa aktivitas yang kami lakukan.
                </p>
                <Link href="/">
                <div className={s.readmore}>
                <Link href="/aktivitas">Readmore</Link>
                <span className="material-icons">
                 arrow_forward
                </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Feed