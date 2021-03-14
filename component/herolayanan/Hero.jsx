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
            <Link href="/" className={s.hubungi}>Hubungi Kami</Link>
        </div>
    )
}

export default Hero