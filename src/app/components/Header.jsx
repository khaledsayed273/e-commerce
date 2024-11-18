"use client"
import { Context } from '@/store/Context'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo, useContext, useState } from 'react'
import Badge from "@material-tailwind/react/components/Badge"
import Menu from "@material-tailwind/react/components/Menu"
import MenuHandler from "@material-tailwind/react/components/Menu/MenuHandler"
import MenuItem from "@material-tailwind/react/components/Menu/MenuItem"
import IconButton from "@material-tailwind/react/components/IconButton"
import { usePathname } from 'next/navigation'

const MenuList = dynamic(() =>
    import('@material-tailwind/react').then((mod) => mod.MenuList), { ssr: false }
)


function Header() {

    const CartIcon = memo(() => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ));

    const pathName = usePathname()

    CartIcon.displayName = "CartIcon";

    const { cartsData, deleteFromCart, totalPrice } = useContext(Context)

    const uls = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Products",
            href: "/products"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Faq",
            href: "/faq"
        },
    ]


    const isCartEmpty = !cartsData || cartsData.length === 0;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    const [showMenu , setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const hiddenMenuOrCardDropDown = () => {
        setShowMenu(false)
        setIsMenuOpen(false)
    }

    return (
        <nav className='border-b border-gray-300 pt-2.5'>
            <div onClick={hiddenMenuOrCardDropDown} className={`${isMenuOpen || showMenu  ? "block" : "hidden"}  absolute left-0 top-0 bottom-0 right-0 `}>
            </div>
            <div className='container p-2 mx-auto flex items-center justify-between '>
                <Link aria-label="linkToHome" className='hover:scale-110 z-50 transition-all font-bold text-2xl' href={"/"}>
                    Dark Store
                </Link>
                <ul className={`absolute transition-all duration-300 bg-white ${showMenu ? "top-16" : "-top-80"}  left-0 right-0 z-40 md:static flex flex-col items-center md:flex-row `}>
                    {uls.map((item, index) => (
                        <li className='my-7  md:my-0 md:mx-4 lg:me-14' key={index}>
                            <Link onClick={() => setShowMenu(false)} className={`font-semibold lg:text-lg ${pathName === item.href && "underline"} hover:underline underline-offset-8`} href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center'>
                    <div className='mx-4 flex'>
                        <Menu
                            open={isMenuOpen}
                            dismiss={{
                                itemPress: false,
                            }}
                        >
                            {isCartEmpty ? (
                                <button aria-label="cartEmpty">
                                    <CartIcon />
                                </button>
                            ) : (
                                <MenuHandler>
                                    <div className="flex z-50">
                                        <Badge content={cartsData.length}>
                                            <IconButton onClick={toggleMenu} aria-label="cartButton" className="bg-transparent  shadow-none hover:shadow-none p-0">
                                                <CartIcon />
                                            </IconButton>
                                        </Badge>
                                    </div>
                                </MenuHandler>
                            )}
                            <MenuList className="mt-3 p-2 shadow-lg  shadow-gray-400 max-h-[520px] w-[350px]">
                                <div className='max-h-[400px] overflow-auto p-1.5'>
                                    {cartsData.map((item) => (
                                        <div key={item.id} className="flex border border-gray-500 rounded-xl  items-center  gap-4 p-2 mb-5">
                                            <div className='flex flex-1 items-center'>
                                                <Image
                                                    width={60}
                                                    height={60}
                                                    alt="tania andrew"
                                                    src={item.thumbnail}
                                                />
                                                <div className="flex w-full ms-2 flex-col gap-1">
                                                    <span className="font-semibold">
                                                        {item.title}
                                                    </span>
                                                    <div className="flex mt-2 font-semibold items-center justify-between gap-1 text-sm  ">
                                                        <span>QTY : {item.qty}</span>
                                                        <span>Total : {item.total}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button aria-label="deleteCart" onClick={() => deleteFromCart(item)} className='hover:scale-75 transition-all'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex text-base text-gray-700 font-semibold my-4 justify-between items-center'>
                                    <span>
                                        Total
                                    </span>
                                    <span>
                                        ${totalPrice}
                                    </span>
                                </div>
                                <Link onClick={toggleMenu} className='mb-2 block mx-auto text-center font-semibold hover:opacity-80 border rounded-md py-2 bg-black text-white' href={"/cart"}>Check out</Link>
                            </MenuList>
                        </Menu>
                    </div>

                    <Menu>
                        <MenuHandler>
                            <button className='z-50' aria-label="person">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </MenuHandler>
                        <MenuList className='mt-3'>
                            <MenuItem className="flex items-center gap-2">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                                        fill="#90A4AE"
                                    />
                                </svg>
                                <span>
                                    My Profile
                                </span>
                            </MenuItem>
                            <MenuItem>
                                <Link className='gap-2 flex items-center' href={"/cart"}>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2ZM2 2H12V9H10L9 11H5L4 9H2V2Z"
                                            fill="#90A4AE"
                                        />
                                    </svg>
                                    <span>
                                        My Orders
                                    </span>
                                </Link>
                            </MenuItem>
                            <MenuItem >
                                <Link className="flex items-center gap-2" href={"/faq"}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM14 8C14 8.993 13.759 9.929 13.332 10.754L11.808 9.229C12.0362 8.52269 12.0632 7.76679 11.886 7.046L13.448 5.484C13.802 6.249 14 7.1 14 8ZM8.835 11.913L10.415 13.493C9.654 13.8281 8.83149 14.0007 8 14C7.13118 14.0011 6.27257 13.8127 5.484 13.448L7.046 11.886C7.63267 12.0298 8.24426 12.039 8.835 11.913ZM4.158 9.117C3.96121 8.4394 3.94707 7.72182 4.117 7.037L4.037 7.117L2.507 5.584C2.1718 6.34531 1.99913 7.16817 2 8C2 8.954 2.223 9.856 2.619 10.657L4.159 9.117H4.158ZM5.246 2.667C6.09722 2.22702 7.04179 1.99825 8 2C8.954 2 9.856 2.223 10.657 2.619L9.117 4.159C8.34926 3.93538 7.53214 3.94687 6.771 4.192L5.246 2.668V2.667ZM10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z"
                                            fill="#90A4AE"
                                        />
                                    </svg>
                                    <span>
                                        Faq
                                    </span>
                                </Link>
                            </MenuItem>
                            <hr className="my-2 border-blue-gray-50" />
                            <MenuItem className="flex items-center gap-2 ">
                                <svg
                                    width="16"
                                    height="14"
                                    viewBox="0 0 16 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg" >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                                        fill="#90A4AE"
                                    />
                                </svg>
                                <span>
                                    Sign Out
                                </span>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    <button onClick={handleShowMenu} className='ms-3 md:hidden hover:opacity-80'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>
                </div>
            </div>
            
        </nav>
    )
}

export default Header
