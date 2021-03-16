import s from './hero.module.css'
import Link from 'next/link'
const Hero = () => {
    return(
        <div className={s.hero}>
            <h1 className={s.heroTitle}>
                Hubungi Kami
            </h1>

        </div>
    )
}

export default Hero