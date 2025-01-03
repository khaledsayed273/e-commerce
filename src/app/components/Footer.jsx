import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <section className="py-5 container mx-auto">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="bg-black rounded-2xl p-8 xl:p-11">
                        <h3 className="font-manrope text-xl md:text-4xl text-white text-center font-bold mb-4">
                            Join the Smart Shopping Revolution
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base text-center mb-11 max-lg:max-w-2xl mx-auto">
                            Join our community of savvy shoppers who are always ahead with the best prices and premium products. Receive exclusive updates, new arrivals, and limited-time offers directly in your inbox.
                        </p>
                        <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                            <input
                                type="text"
                                name="email"
                                className="py-2 px-6 bg-transparent rounded-full border lg:border-none border-gray-300 text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                                placeholder="Enter your email to subscribe"
                            />
                            <button
                                type="submit"
                                className="py-2 px-5 text-sm bg-red1 shadow-md rounded-full text-white font-semibold hover:bg-red-700"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='shadow-2xl mt-7 shadow-black dark:shadow-gray-600 dark:text-white'>
                <div className="container mx-auto">
                    <div className=" px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
                            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                                <Link aria-label="linkToHome" className='hover:scale-110 transition-all font-bold text-2xl' href={"/"}>
                                    Dark Store
                                </Link>
                                <p className="py-8 text-sm text-gray-500 dark:text-gray-400 lg:max-w-xs text-center lg:text-left">Trusted in more than 100
                                    countries & 5 million customers. Have any query ?</p>
                                <a href="javascript:;"
                                    className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-red1 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-red-700 lg:mx-0">
                                    Contact us
                                </a>
                            </div>
                            <div className="lg:mx-auto">
                                <h4 className="text-lg text-gray-900 font-medium mb-7 dark:text-white">Pagedone</h4>
                                <ul className="text-sm  transition-all duration-500">
                                    <li className="mb-6">
                                        <Link href="/" className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">Home</Link>
                                    </li>
                                    <li className="mb-6">
                                        <Link href="/about" className="cursor-pointer  text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/products" className="cursor-pointer  text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">Products</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:mx-auto">
                                <h4 className="text-lg text-gray-900 font-medium mb-7 dark:text-white">Support</h4>
                                <ul className="text-sm  transition-all duration-500">
                                    <li className="mb-6">
                                        <a href="javascript:;" className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">Customer
                                            Support</a>
                                    </li>
                                    <li className="mb-6">
                                        <a href="javascript:;" className="cursor-pointer  text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">Terms &
                                            Conditions</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="cursor-pointer  text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">Privacy
                                            Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:mx-auto">
                                <h4 className="text-lg text-gray-900 font-medium mb-7 dark:text-white">Subscribe</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-6 mb-7">Subscribe to get the latest news from us</p>
                                <Link href="/"
                                    className="flex cursor-pointer items-center justify-center gap-2 border border-red1 rounded-full py-3 px-6 w-fit text-sm text-red1 font-semibold transition-all duration-500 hover:bg-indigo-50">
                                    Subscribe<svg width="15" height="12" viewBox="0 0 15 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                            stroke="#A61C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="py-7 border-t border-gray-200">
                            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                                <span className="text-sm text-gray-500 dark:text-white">©pagedone 2024, All rights reserved.</span>
                                <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                                    <Link href="/"
                                        className="w-8 cursor-pointer h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black/80 hover:bg-black">
                                        <svg className="w-5 h-5 text-white group-hover:text-white" width="32" height="32"
                                            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                                fill="currentColor" />
                                        </svg>
                                    </Link>
                                    <Link href="/"
                                        className="group cursor-pointer relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-900 before:content[''] before:absolute  before:w-full before:h-full before:-z-10">
                                        <svg className="w-8 h-8 text-white " width="26" height="26" viewBox="0 0 26 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_8797_65643)">
                                                <rect className="fill-url(#paint0_linear_8797_65643) h-tr group-hover:fill-black"
                                                    x="0.0585938" width="26" height="26" rx="13"
                                                    fill="url(#paint0_linear_8797_65643)" />
                                                <path
                                                    d="M10.6324 13.0004C10.6324 11.6936 11.6921 10.6339 12.9998 10.6339C14.3074 10.6339 15.3677 11.6936 15.3677 13.0004C15.3677 14.3072 14.3074 15.3669 12.9998 15.3669C11.6921 15.3669 10.6324 14.3072 10.6324 13.0004ZM9.35232 13.0004C9.35232 15.0137 10.9853 16.6457 12.9998 16.6457C15.0143 16.6457 16.6472 15.0137 16.6472 13.0004C16.6472 10.9871 15.0143 9.35513 12.9998 9.35513C10.9853 9.35513 9.35232 10.9871 9.35232 13.0004ZM15.9392 9.21059C15.9392 9.37908 15.9891 9.5438 16.0827 9.68393C16.1763 9.82406 16.3094 9.9333 16.4651 9.99784C16.6208 10.0624 16.7922 10.0793 16.9576 10.0465C17.1229 10.0137 17.2749 9.93264 17.3941 9.81355C17.5134 9.69446 17.5946 9.5427 17.6276 9.37746C17.6605 9.21223 17.6437 9.04093 17.5793 8.88525C17.5148 8.72956 17.4056 8.59647 17.2655 8.50281C17.1253 8.40915 16.9606 8.35912 16.792 8.35905H16.7916C16.5656 8.35916 16.3489 8.4489 16.1891 8.60856C16.0293 8.76822 15.9394 8.98475 15.9392 9.21059ZM10.13 18.7788C9.4375 18.7473 9.06108 18.632 8.81094 18.5346C8.4793 18.4056 8.24267 18.2519 7.99389 18.0036C7.7451 17.7553 7.5911 17.5191 7.46256 17.1876C7.36505 16.9377 7.24969 16.5614 7.21821 15.8693C7.18377 15.121 7.17689 14.8962 7.17689 13.0005C7.17689 11.1047 7.18434 10.8805 7.21821 10.1316C7.24975 9.43947 7.36596 9.0639 7.46256 8.81328C7.59167 8.48184 7.74544 8.24535 7.99389 7.99672C8.24233 7.74808 8.47873 7.59417 8.81094 7.46571C9.06097 7.36825 9.4375 7.25297 10.13 7.2215C10.8788 7.18709 11.1037 7.18021 12.9998 7.18021C14.8958 7.18021 15.121 7.18765 15.8704 7.2215C16.5629 7.25302 16.9387 7.36916 17.1895 7.46571C17.5211 7.59417 17.7577 7.74842 18.0065 7.99672C18.2553 8.24501 18.4087 8.48184 18.5378 8.81328C18.6354 9.06316 18.7507 9.43947 18.7822 10.1316C18.8166 10.8805 18.8235 11.1047 18.8235 13.0005C18.8235 14.8962 18.8166 15.1204 18.7822 15.8693C18.7507 16.5614 18.6347 16.9376 18.5378 17.1876C18.4087 17.5191 18.255 17.7556 18.0065 18.0036C17.7581 18.2517 17.5211 18.4056 17.1895 18.5346C16.9394 18.6321 16.5629 18.7474 15.8704 18.7788C15.1216 18.8133 14.8967 18.8201 12.9998 18.8201C11.1029 18.8201 10.8786 18.8133 10.13 18.7788ZM10.0712 5.94436C9.31504 5.97878 8.79832 6.09861 8.34706 6.27409C7.87972 6.45532 7.4841 6.69845 7.08876 7.09293C6.69342 7.4874 6.45077 7.88342 6.26944 8.35048C6.09384 8.80175 5.97394 9.31787 5.9395 10.0736C5.9045 10.8305 5.89648 11.0725 5.89648 13.0004C5.89648 14.9283 5.9045 15.1703 5.9395 15.9272C5.97394 16.683 6.09384 17.199 6.26944 17.6503C6.45077 18.1171 6.69347 18.5136 7.08876 18.9079C7.48404 19.3022 7.87972 19.545 8.34706 19.7267C8.79917 19.9022 9.31504 20.022 10.0712 20.0564C10.829 20.0909 11.0707 20.0994 12.9998 20.0994C14.9288 20.0994 15.1709 20.0914 15.9283 20.0564C16.6846 20.022 17.2009 19.9022 17.6525 19.7267C18.1195 19.545 18.5154 19.3023 18.9108 18.9079C19.3061 18.5134 19.5483 18.1171 19.7301 17.6503C19.9057 17.199 20.0262 16.6829 20.06 15.9272C20.0945 15.1697 20.1025 14.9283 20.1025 13.0004C20.1025 11.0725 20.0945 10.8305 20.06 10.0736C20.0256 9.31782 19.9057 8.80146 19.7301 8.35048C19.5483 7.8837 19.3055 7.48803 18.9108 7.09293C18.5161 6.69782 18.1195 6.45532 17.6531 6.27409C17.2009 6.09861 16.6845 5.97821 15.9289 5.94436C15.1715 5.90994 14.9294 5.90137 13.0003 5.90137C11.0713 5.90137 10.829 5.90937 10.0712 5.94436Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_8797_65643" x1="25.5589" y1="26" x2="-0.441125"
                                                    y2="-6.99847e-07" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FBE18A" />
                                                    <stop offset="0.21" stopColor="#FCBB45" />
                                                    <stop offset="0.38" stopColor="#F75274" />
                                                    <stop offset="0.52" stopColor="#D53692" />
                                                    <stop offset="0.74" stopColor="#8F39CE" />
                                                    <stop offset="1" stopColor="#5B4FE9" />
                                                </linearGradient>
                                                <clipPath id="clip0_8797_65643">
                                                    <rect width="26" height="26" rx="13" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link href="/"
                                        className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 ">
                                        <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 8 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z"
                                                fill="currentColor" />
                                        </svg>
                                    </Link>
                                    <Link href="/"
                                        className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000]  hover:bg-gray-900 ">
                                        <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M13.9191 1.10651C14.558 1.27906 15.0602 1.78251 15.2299 2.42069C15.5388 3.57887 15.5388 5.99687 15.5388 5.99687C15.5388 5.99687 15.5388 8.41487 15.2299 9.57306C15.0578 10.2136 14.5556 10.7171 13.9191 10.8872C12.7638 11.1969 8.12875 11.1969 8.12875 11.1969C8.12875 11.1969 3.49603 11.1969 2.33844 10.8872C1.69952 10.7147 1.19735 10.2112 1.0276 9.57306C0.71875 8.41487 0.71875 5.99687 0.71875 5.99687C0.71875 5.99687 0.71875 3.57887 1.0276 2.42069C1.1997 1.78015 1.70188 1.27669 2.33844 1.10651C3.49603 0.796875 8.12875 0.796875 8.12875 0.796875C8.12875 0.796875 12.7638 0.796875 13.9191 1.10651ZM10.4981 5.99687L6.6481 8.22578V3.76796L10.4981 5.99687Z"
                                                fill="white" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
