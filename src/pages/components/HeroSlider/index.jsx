import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import TextSlider from '../TextSlider';

import BackgroundImage1 from '../../../assets/background-image-1.jpg'
import BackgroundImage2 from '../../../assets/background-image-2.jpg'
import BackgroundImage3 from '../../../assets/background-image-3.jpg'

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Style from './style.module.css'

function HeroSlider() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1} HeroSlider
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                effect='fade'
            >
                <SwiperSlide className={Style.slideItem} style={{ backgroundImage: `url(${BackgroundImage1})` }} >
                </SwiperSlide>
                <SwiperSlide className={Style.slideItem} style={{ backgroundImage: `url(${BackgroundImage2})` }} >
                </SwiperSlide>
                <SwiperSlide className={Style.slideItem} style={{ backgroundImage: `url(${BackgroundImage3})` }} >
                </SwiperSlide>
            </Swiper>
            <div className={Style.textSlider}>
                <TextSlider />
            </div>
        </>

    )
}

export default HeroSlider