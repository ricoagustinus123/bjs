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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem nihil ipsa accusantium eligendi impedit. Ducimus quo placeat repellat quam, id fugit, molestias asperiores velit ratione labore adipisci nulla cumque?
                </p>
                <Link href="/">
                <div className={s.readmore}>
                Readmore
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem nihil ipsa accusantium eligendi impedit. Ducimus quo placeat repellat quam, id fugit, molestias asperiores velit ratione labore adipisci nulla cumque?
                </p>
                <Link href="/">
                <div className={s.readmore}>
                Readmore
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem nihil ipsa accusantium eligendi impedit. Ducimus quo placeat repellat quam, id fugit, molestias asperiores velit ratione labore adipisci nulla cumque?
                </p>
                <Link href="/">
                <div className={s.readmore}>
                Readmore
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