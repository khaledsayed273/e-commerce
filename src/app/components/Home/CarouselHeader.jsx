"use client"
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import ads1 from "./images/phone.png"
import ads2 from "./images/ads2.jpeg"
import ads3 from "./images/ads3.jpg"
import ads4 from "./images/ads4.jpg"

function CarouselHeader() {

  const ads = [
    {
      image: ads1
    },
    {
      image: ads2
    },
    {
      image: ads3
    },
    {
      image: ads4
    },
  ]

  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1.5 }}
      className="rounded-sm h-[250px] md:h-[450px] mt-5"
      nextArrow={false}
      prevArrow={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block cursor-pointer rounded-2xl transition-all content-[''] w-4 h-4 border-2  ${activeIndex === i ? " bg-red1" : "bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {ads.map((item, index) => (
        <div key={index} className='relative h-full w-full'>
          <Image
            src={item.image}
            alt={`image ${index}`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            placeholder='blur'
          />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselHeader
