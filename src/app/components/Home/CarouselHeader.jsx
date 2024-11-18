"use client"
import Image from 'next/image'
import React from 'react'
import ads1 from "./images/phone1.png"
import ads2 from "./images/phone.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

function CarouselHeader() {

  const ads = [
    {
      image: ads1
    },
    {
      image: ads2
    },
  ]

  return (

    <Swiper
      className="rounded-sm w-full h-[300px] sm:h-[450px] md:h-[500px] xl:h-[650px] lg:container mySwiper"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      effect={'fade'}
      
      modules={[Autoplay, EffectFade]}
    >
      {ads.map((item, index) => (
        <SwiperSlide  key={index}>
          <div className='relative aspect-video h-full w-full'>
            <Image
              src={item.image}
              alt={`image ${index}`}
              fill
              priority
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselHeader
