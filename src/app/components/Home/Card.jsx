"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from "@material-tailwind/react";

function Card({ item }) {
    const afterDiscount = item.price;
    const discountPercentage = item.discountPercentage;
    const beforeDiscount = afterDiscount / (1 - (discountPercentage / 100));

    function RatedIcon() {
        return (
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33" />
            </svg>
        );
    }

    function UnratedIcon() {
        return (
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="black" />
            </svg>
        );
    }

    return (
        <div className='h-[350px] rounded-md max-w-[320px] mx-auto'>
            <div className='relative group overflow-hidden'>
                <span className='absolute bg-red1 text-white z-10 py-1 px-3.5 rounded-md top-3 left-3 text-sm'>-{Math.round(item.discountPercentage)}%</span>
                <Link href={"/"} className='relative block w-full h-[250px] bg-[#F5F5F5] '>
                    <Image src={item.thumbnail} fill alt={item.category} sizes="(min-width: 808px) 50vw, 100vw" />
                </Link>
                <button className='bg-black w-full text-white -bottom-10 group-hover:bottom-0 h-[40px] absolute transition-all z-20 p-2'>Add To Cart</button>
            </div>
            <div className='flex flex-col justify-between mt-5 '>
                <h3 className='font-semibold text-sm md:text-base mb-2'>{item.title}</h3>
                <div className='mb-2'>
                    <span className='text-red1 text-sm me-3'>${item.price}</span>
                    <span className='text-gray-600 text-sm line-through'>${Math.round(beforeDiscount)}</span>
                </div>
                <div className='flex items-center'>
                    <Rating ratedIcon={<RatedIcon/>} unratedIcon={<UnratedIcon />} value={Math.round(item.rating)} readonly />
                    <span className='ms-2 text-sm mt-0.5 text-gray-700'>({item.stock})</span>
                </div>
            </div>
        </div>
    )
}

export default Card 
