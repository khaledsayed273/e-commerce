"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Card from './Card';

function SwiperComponent({ title, data }) {

    const swiperRef = useRef();

    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-lg md:text-2xl font-semibold text-red1'>{title}</h2>
                <div className='flex justify-end '>
                    <button aria-label="prev" className='me-2 hover:opacity-60 border border-black/20 rounded-full' onClick={() => swiperRef.current?.slidePrev()}>
                        <svg className='dark:text-black' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                            <path d="M22 16L15 23L22 30M15 23H31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button aria-label="next" className='hover:opacity-60 border border-black/20 rounded-full' onClick={() => swiperRef.current?.slideNext()}>
                        <svg className='dark:text-black' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                lazy={`${true}`}
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    958: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper h-[450px]"
            >
                {data.map((item) => (
                    <SwiperSlide  key={item.id}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default SwiperComponent
