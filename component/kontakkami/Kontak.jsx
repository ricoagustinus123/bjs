import s from './kontak.module.css'
const Kontak = () => {
    return(
        <div className={s.kontak}>
            <h1 className={s.kontakTitle}>
                    Kontak Kami
                    <hr/>
                </h1>

                <div className={s.map}>
                     <div className="google-map-code">
                     <div style={{width:"400%"}}>
                         <iframe style={{
                            borderRadius:"20px"}} width={600} height={500} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=PT%20JAMTAMA,%20Gedung%20Jamkrindo,%20Jl.%20Angkasa%20No.10,%20RW.10,%20Gn.%20Sahari%20Sel.,%20Kec.%20Kemayoran,%20Kota%20Jakarta%20Pusat,%20Daerah%20Khusus%20Ibukota%20Jakarta%2010610+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>

                    </div>

                    <div className={s.datakontak}>
                        <h1 className={s.titlelokasi}>
                            Lokasi
                        </h1>
                        <div className={s.alamat}>
                            <p>Gedung Jamkrindo, Jl. Angkasa No.10, RW.10, Gn. Sahari Sel., Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10610
                            Hours: 
                            Closed ⋅ Opens 8AM
                            </p>
                        </div>

                        <span>email : pt.bintangjamtamasejahtera@gmail.com
                        </span>
                    </div>
                </div>
        </div>

        
    )
}
export default Kontak