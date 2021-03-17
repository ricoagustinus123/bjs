import s from './hero.module.css';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from 'next/link'
import Image from 'next/image'
const Hero = () => {
    return(
        <div className={s.hero}>
            <div className={s.heroText}>
                <h1 className={s.heroTitle}>
                    Pelayanan Prima
                </h1>
                <p className={s.herodesc}>“Melayani dengan sepenuh hati untuk meraih sukses bersama”</p>

               <span className={s.hubungi}> <Link href="/"  >Hubungi Kami</Link></span>
            </div>
            <div className={s.carousel}>
               
                <CarouselProvider 
                    
                    naturalSlideWidth={1600}
                    naturalSlideHeight={925}
                    totalSlides={3}
                    interval={5000}
                    isPlaying={true}
                    playDirection={"forward"}
                >
                <Slider>
                    <Slide index={0}><Image src="/slide1.jpg" width={1000} height={700} quality={100}/></Slide>
                    <Slide index={2}><Image src="/slide2.jpg" width={900} height={700} quality={100}/></Slide>
                    <Slide index={3}><Image src="/slide3.png" width={1000} height={700} quality={100}/></Slide>
            
                    
                </Slider>
                <div className={s.dot}>
                    <Dot slide={0}/>
                    <Dot slide={1}/>
                    <Dot slide={2}/>
                </div>
                
                </CarouselProvider>
            </div>
        </div>
    )
}
export default Hero