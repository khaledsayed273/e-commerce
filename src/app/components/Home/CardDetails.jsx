"use client";
import React, { useContext, useState } from "react";
import { Context } from "@/store/Context";

import Button from "@material-tailwind/react/components/Button"
import Dialog from "@material-tailwind/react/components/Dialog"
import DialogHeader from "@material-tailwind/react/components/Dialog/DialogHeader"
import DialogBody from "@material-tailwind/react/components/Dialog/DialogBody"
import DialogFooter from "@material-tailwind/react/components/Dialog/DialogFooter"
import Image from "next/image";

function CardDetails({ handleOpen, open, item }) {


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

    const { addToCart } = useContext(Context)

    const [qty, setQty] = useState(1)
    const [total, setTotal] = useState(item.price)

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

    const handleSend = () => {
        addToCart(item, qty, total)
        handleOpen()
        setQty(1)
        setTotal(item.price)
    }

    return (
        <>
            <Dialog size="sm" open={open} handler={handleOpen}>
                <DialogHeader className="p-0">
                    <div className="relative rounded-t-lg overflow-hidden h-[200px] sm:h-[280px] md:h-[450px] w-full mx-auto">
                        <Image src={item.thumbnail} alt={item.title} fill priority />
                    </div>
                </DialogHeader>
                <DialogBody>
                    <h3 className=" text-black font-bold">{item.title}</h3>
                    <p className="text-black text-sm my-3 leading-6">{item.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-red1 text-sm md:text-base font-semibold ">SKU: {item.sku}</span>
                        <span className="text-orange-900 font-semibold text-sm sm:text-base">STOCK: {item.stock}</span>
                    </div>
                    <p className="text-black text-sm md:text-base my-3 font-semibold">Return Policy: {item.returnPolicy}</p>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                            {[...Array(5)].map((_, index) => (
                                index < Math.round(item.rating) ? <RatedIcon key={index} /> : <UnratedIcon key={index} />
                            ))}
                            <span className='ms-2 text-sm mt-0.5 text-gray-700'>({item.stock})</span>
                        </div>
                        <div >
                            <div className="font-semibold">
                                <span>Price: </span>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className='flex items-center font-semibold text-black'>
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
                            <span className="mx-2 font-bold">{qty}</span>
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
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="black"
                        onClick={handleOpen}
                        className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={handleSend}>
                        <span>Add To Card</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default CardDetails