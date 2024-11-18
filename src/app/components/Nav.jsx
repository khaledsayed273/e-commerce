"use client"
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

function Nav({ categoriesData }) {

    const {category}= useParams()

    const pathName = usePathname()
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollPosition = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }

    useEffect(() => {
        const ulElement = scrollRef.current;
        ulElement.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition();
        return () => {
            ulElement.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -230,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 230,
            behavior: 'smooth'
        });
    };

    return (
        <div className='flex border-b border-gray-500'>
            <ul ref={scrollRef} className='flex  transition-all  py-3 overflow-hidden me-3 select-none'>
                <li>
                    <Link className={`capitalize hover:bg-black/90 hover:text-white px-4 py-2 rounded-sm ${pathName === "/products" && "text-white bg-black/90 underline-offset-4 underline"} font-semibold text-nowrap text-xs  hover:underline-offset-4 hover:underline text-gray-600`} href={`/products`}>
                        All
                    </Link>
                </li>
                {categoriesData?.map((item, index) => (
                    <li key={index}>
                        <Link className={`capitalize hover:bg-black/90 hover:text-white px-4 py-2 rounded-sm font-semibold text-nowrap text-xs ${category === item && "text-white bg-black/90 underline-offset-4 underline"} hover:underline-offset-4 hover:underline text-gray-600`} href={`/products/${item}`}>
                            {item.replace(/-/g, ' ')}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='flex items-center'>
                <button aria-label="Prev" onClick={scrollLeft} className={`me-2 py-1 px-2 hover:bg-gray-500/50 ${!canScrollLeft && "opacity-50"}`}>
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.04283 2.16797L9.45705 3.58218L6.03994 6.99987L9.45705 10.4175L8.04283 11.8318L3.21094 6.99987L8.04283 2.16797Z" fill="currentColor"></path>
                    </svg>
                </button>
                <button aria-label="Next" onClick={scrollRight} className={`rotate-180 py-1 px-2 hover:bg-gray-500/50 ${!canScrollRight && "opacity-50"}`}>
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.04283 2.16797L9.45705 3.58218L6.03994 6.99987L9.45705 10.4175L8.04283 11.8318L3.21094 6.99987L8.04283 2.16797Z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default React.memo(Nav) 
