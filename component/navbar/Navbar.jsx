import s from'./navbar.module.css';
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState,useEffect } from 'react';

export default function Navbar({quality}) {

 
    const [show,setShow] = useState(false)
    const [navbar,setnavbar] = useState(false)

    useEffect( function scroll() {
      function handleScroll() {
      if (window.scrollY >= 20) {
        setnavbar(true)
      }else{
        setnavbar(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
  });
    return(
       <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        </Head>
        <nav className={navbar ? (s.navbarScroll) : (s.navbar) }>
          <div className={s.brand}>
            <Image src="/bjs-logo.svg" quality={100} alt=" logo bintang jamtama sejahtera" width={200} height={102}  className={s.logoscroll}/>
          </div>
          <ul className={s.menu}>
            <li className={s.menuComponent}>
              <Link href="/">Beranda</Link>
              </li> 
            <li className={s.menuComponent}>
              <Link href="/tentang">Tentang Kami</Link>
            </li>  
            <li className={s.menuComponent}>
              <Link href="/layanan">Layanan</Link>
            </li>  
            <li className={s.menuComponent}>
              <Link href="/aktivitas">Aktivitas</Link>
            </li>  
            <li className={s.menuComponent}>
              <Link href="/kontak">Hubungi kami</Link>
            </li>
          </ul>
          
          
        </nav>
        <div className={s.containerMenumobile}>
        <div className={s.dropMenu}>
        <Image src="/bjs-logo.svg" quality={100} alt=" logo bintang jamtama sejahtera" width={200} height={102} className={s.logo}/>
          <span className="material-icons">
            
            <p className={s.dropicon} onClick={()=>{
              setShow(!show)
            }}>menu</p>
          </span>
          </div>
        <div className={s.menumobile} style={{
          display : show ? "flex" : null,
          marginTop : show ? 60 : null,
          opacity : show ? 1 : null,
          position : show ? "fixed" :null
        }}>
          <li className={s.menuComponent2}>
              <Link href="/">beranda</Link>
              </li> 
            <li className={s.menuComponent2}>
              <Link href="/tentang">tentang kami</Link>
            </li>  
            <li className={s.menuComponent2}>
              <Link href="/layanan">layanan</Link>
            </li>  
            <li className={s.menuComponent2}>
              <Link href="/aktivitas">aktivitas</Link>
            </li>  
            <li className={s.menuComponent2}>
              <Link href="/kontak">hubungi kami</Link>
            </li>
          </div>
          </div>
       </>
    )
}