"use client"
import { Context } from '@/store/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

function PriceComponents({ item }) {
    const [qty, setQty] = useState(1)
    const [total, setTotal] = useState(item.price)

    const { addToCart } = useContext(Context)

    const router = useRouter()

    const handlePlus = () => {
        if (item.stock > qty) {
            setQty((prev) => {
                const newQty = prev + 1;
                const price = newQty * item.price;
                setTotal(parseFloat(price.toFixed(2)));
                return newQty;
            });
        }
    }
    const handleMin = () => {
        if (qty > 1) {
            setQty((prev) => {
                const newQty = prev - 1;
                const price = newQty * item.price;
                setTotal(parseFloat(price.toFixed(2)));
                return newQty;
            });
        }
    };

    const handleSend = () => {
        addToCart(item, qty, total)
        setQty(1)
        setTotal(item.price)
        const timeout = setTimeout(() => {
            router.push("/")
        }, 1500);

        return () => clearTimeout(timeout)
        
    }

    return (
        <>
            <div className="flex justify-between items-center mt-3">
                <div className='flex items-center font-semibold text-black dark:text-white'>
                    <span>Total: </span>
                    <span> ${total}</span>
                </div>
                <div className="flex items-center text-black select-none">
                    <button onClick={handlePlus} className="hover:opacity-70">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_259_785)">
                                <rect x="3" y="3" width="20" height="20" rx="10" fill="white" shapeRendering="crispEdges" />
                                <rect x="3.25" y="3.25" width="19.5" height="19.5" rx="9.75" stroke="black" strokeWidth="0.5" shapeRendering="crispEdges" />
                                <path d="M12.875 6.99634V19.0038" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                <path d="M7 13.0024L19 13.0024" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </g>
                            <defs>
                                <filter id="filter0_d_259_785" x="0.9" y="0.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="1.05" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_259_785" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_259_785" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <span className="mx-2 font-bold dark:text-white">{qty}</span>
                    <button onClick={handleMin} className="hover:opacity-70">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_259_790)">
                                <rect x="3" y="3" width="20" height="20" rx="10" fill="white" shapeRendering="crispEdges" />
                                <rect x="3.25" y="3.25" width="19.5" height="19.5" rx="9.75" stroke="black" strokeWidth="0.5" shapeRendering="crispEdges" />
                                <path d="M7 13L19 13" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </g>
                            <defs>
                                <filter id="filter0_d_259_790" x="0.9" y="0.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="1.05" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_259_790" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_259_790" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                </div>

            </div>
            <div className='mt-5'>
                <button onClick={handleSend} className="flex ml-auto text-white bg-red1 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
            </div>
        </>
    )
}

export default PriceComponents
