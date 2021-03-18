import s from './partner.module.css'
import Image from 'next/image'
const Partner = () =>{
    return(
        <div className={s.partner}>
             <h1 className={s.partnerTitle}>
                        Partner Kami
                    <hr/>
            </h1>
            <Image src="/jamkrindo.svg" className={s.partnerKita} width={150} height={150} quality={100}/>
        </div>
    )
}

export default Partner