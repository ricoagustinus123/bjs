import s from './hero.module.css'
import Link from 'next/link'
const Hero = () => {
    return(
        <div className={s.hero}>
            <h1 className={s.heroTitle}>
                Tentang Kami
            </h1>
            <p className={s.herodesc}>
            “Melayani dengan sepenuh hati untuk meraih sukses bersama”
            </p>
           <span className={s.hubungi}> <Link href="/" >Hubungi Kami</Link></span>
        </div>
    )
}

export default Hero