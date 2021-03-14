import s from './hero.module.css';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from 'next/link'
const Hero = () => {
    return(
        <div className={s.hero}>
            <div className={s.heroText}>
                <h1 className={s.heroTitle}>
                    Pelayanan Prima
                </h1>
                <p className={s.herodesc}>“Melayani dengan sepenuh hati untuk meraih sukses bersama”</p>

                <a href="/" className={s.hubungi} type="submit">Hubungi Kami</a>
            </div>
            <div className={s.carousel}>
               
                <CarouselProvider 
                    
                    naturalSlideWidth={500}
                    naturalSlideHeight={525}
                    totalSlides={3}
                    interval={5000}
                    isPlaying={"true"}
                >
                <Slider>
                    <Slide index={0}><h1>I am the first Slide.</h1></Slide>
                    <Slide index={1}><h1>I am the second Slide.</h1></Slide>
                    <Slide index={2}><h1>I am the third Slide.</h1></Slide>
                </Slider>
                <Dot slide={0}/>
                <Dot slide={1}/>
                <Dot slide={2}/>
                </CarouselProvider>
            </div>
        </div>
    )
}
export default Hero