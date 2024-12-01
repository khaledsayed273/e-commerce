"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';
import notFoundImage from "./images/not found image.png";
import CardDetails from "./CardDetails"

const Card = ({ item }) => {
    const afterDiscount = item.price;
    const discountPercentage = item.discountPercentage;
    const beforeDiscount = afterDiscount / (1 - (discountPercentage / 100));
    const [hovered, setHovered] = useState(false);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(item.images[0])
    const [image2, setImage2] = useState(item.images[1])
    const handleOpen = () => setOpen(!open);

    function onImageLoad() {
        setLoading(false)
    }

    const handleMouseEnter = () => {
        if (item.images.length > 1) setHovered(true);
    }

    const handleMouseLeave = () => {
        if (hovered) setHovered(false);
    }

    function RatedIcon() {
        return (
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500 me-1" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }

    function UnratedIcon() {
        return (
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500 me-1" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }

    return (
        <div className='h-[420px] border dark:border-gray-800 shadow-xl rounded-md max-w-[320px] mx-auto my-5 hover:shadow-gray-500 hover:dark:shadow-gray-900 transition-all duration-300'>
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className='relative group overflow-hidden'>
                <span className='absolute bg-red1 text-white z-10 py-1 px-3.5 rounded-md top-3 left-3 text-sm'>-{Math.round(item.discountPercentage)}%</span>
                <Link href={`/products/${item.category}/${item.id}`} className='relative block w-full h-[250px] bg-[#F5F5F5] dark:bg-black/50 '>
                    {loading &&
                        <div className="w-full h-full bg-gray-500 animate-pulse"></div>
                    }
                    <Image
                        src={image}
                        onError={() => {
                            setImage(notFoundImage)
                        }}
                        width={500}
                        height={500}
                        onLoad={onImageLoad}
                        alt={item.category}
                        sizes="(max-width: 768px) 33vw, 33vw"
                        className={`transition-opacity duration-500 object-contain ease-in-out ${hovered && item.images.length > 1 ? 'opacity-0' : 'opacity-100'}`}
                    />
                    {item.images.length > 1 && (
                        <Suspense fallback={<div className="w-full h-full bg-gray-500 animate-pulse"></div>}>
                            <Image
                                src={image2}
                                onError={() => {
                                    setImage2(notFoundImage)
                                }}
                                fill
                                alt={item.category}
                                sizes="(max-width: 768px) 33vw, 33vw"
                                className={`absolute top-0 object-contain left-0 transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </Suspense>
                    )}
                </Link>
            </div>
            <div className='flex flex-col justify-between mt-3 p-2'>
                <div className="relative inline group max-w-max">
                    <h3 className="font-semibold dark:text-white text-sm md:text-base mb-2 cursor-pointer">
                        {item.title.length <= 24 ? item.title : `${item.title.slice(0, 24)}...`}
                    </h3>
                    <div className="max-w-xs text-xs absolute shadow-lg hidden group-hover:block bg-[#f1f1f1] dark:bg-cardDark dark:text-white text-black font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max -bottom-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#dfdfdf] dark:before:bg-cardDark before:absolute before:z-[-1] before:-top-1 before:left-2">
                        {item.title}
                    </div>
                </div>
                <div className='my-4 flex justify-between items-center'>
                    <div>
                        <span className='text-red1 text-sm me-3'>${item.price}</span>
                        <span className='text-gray-600 dark:text-gray-300 text-sm line-through'>${Math.round(beforeDiscount)}</span>
                    </div>
                    <h4 className='font-semibold text-gray-500 dark:text-gray-200 text-xs '>{item.brand}</h4>

                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        {[...Array(5)].map((_, index) => (
                            index < Math.round(item.rating) ? <RatedIcon key={index} /> : <UnratedIcon key={index} />
                        ))}
                        <span className='ms-2 text-sm mt-0.5 text-gray-700 dark:text-gray-300'>({item.stock})</span>
                    </div>
                    <button aria-label="addToCard" onClick={handleOpen} className='p-2 border rounded-md border-gray-400 group'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-white transition-all group-hover:scale-75">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>

            </div>
            {open && (

                <Suspense fallback={<div className='animate-spin flex justify-center items-center h-full'>
                    <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                    </div>
                </div>}>
                    <CardDetails handleOpen={handleOpen} open={open} item={item} />
                </Suspense>
            )}
        </div>
    )
}

export default Card 
