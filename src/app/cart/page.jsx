/* eslint-disable react/display-name */
"use client"
import { Context } from '@/store/Context'
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import PriceAndQty from './components/PriceAndQty';
import dynamic from 'next/dynamic';
import Payment from './components/Payment';
import ToastifyComponent from '@/Shared/ToastifyComponent';
import { useRouter } from 'next/navigation';
const Dialog = dynamic(() => import('@material-tailwind/react/components/Dialog'), { ssr: false });
const DialogFooter = dynamic(() => import('@material-tailwind/react/components/Dialog/DialogFooter'), { ssr: false });
const DialogHeader = dynamic(() => import('@material-tailwind/react/components/Dialog/DialogHeader'), { ssr: false });


const CartItemSkeleton = React.memo(() => {
    return (
        <div className="p-2 bg-white shadow-gray-500 shadow-lg rounded-md relative">
            <div className="grid md:grid-cols-3 items-center gap-4">
                <div className="relative bg-gradient-to-tr col-span-2 md:col-span-1 aspect-video md:aspect-auto from-gray-300 via-gray-100 rounded-md to-gray-50 md:h-full p-4 shrink-0 text-center">
                    <div className="bg-gray-300 animate-pulse h-full w-full rounded-md"></div>
                </div>

                <div className="p-2 col-span-2">
                    {/* Skeleton for Title */}
                    <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4 mb-3"></div>

                    {/* Skeleton for Brand */}
                    <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mb-4"></div>

                    {/* Skeleton for Description */}
                    <div className="h-3 bg-gray-300 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-3 bg-gray-300 animate-pulse rounded w-full mb-4"></div>

                    {/* Skeleton for Price and Quantity */}
                    <div className="h-6 bg-gray-300 animate-pulse rounded w-1/3 mb-6"></div>

                    {/* Skeleton for Buttons */}
                    <div className="divide-x border-y flex justify-between text-center mt-6">
                        <div className="h-8 bg-gray-300 animate-pulse rounded w-1/4"></div>
                        <div className="h-8 bg-gray-300 animate-pulse rounded w-1/4"></div>
                    </div>
                    <div className="divide-x border-y grid grid-cols-2 text-center mt-6">
                        <div className="h-8 bg-gray-300 animate-pulse rounded w-full mx-auto"></div>
                        <div className="h-8 bg-gray-300 animate-pulse rounded w-full mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    );
});

const CartItem = React.memo(({ cartsData, setCartsData, item, handleDelete, setItemDelete }) => {

    return (
        <div className="p-2 bg-white shadow-gray-500 shadow-lg rounded-md relative">
            <div className="grid md:grid-cols-3 items-center gap-4">
                <div className="relative bg-gradient-to-tr col-span-2 md:col-span-1 aspect-video md:aspect-auto from-gray-300 via-gray-100 rounded-md to-gray-50 md:h-full p-4 shrink-0 text-center">
                    <Image
                        priority
                        sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 33vw"
                        src={item.thumbnail}
                        fill
                        alt={item.title}
                    />
                </div>
                <div className="p-2 col-span-2">
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <h3 className="text-sm text-gray-800 my-3"><span className='font-bold'>Brand:</span> {item.brand}</h3>
                    <p className="text-sm text-gray-600 ">{item.description}</p>
                    <PriceAndQty cartsData={cartsData} setCartsData={setCartsData} item={item} />
                    <div className="divide-x border-y grid grid-cols-2 text-center mt-6">
                        <Link href={`/products/${item.category}/${item.id}`} className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-900 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 fill-current mr-3 inline-block" viewBox="0 0 128 128">
                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                            </svg>
                            View details
                        </Link>
                        <button onClick={() => {
                            setItemDelete(item)
                            handleDelete()
                        }} type="button" className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-900 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current mr-3 inline-block" viewBox="0 0 390 390">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
});




function Page() {

    const [currentStep, setCurrentStep] = useState(0);

    const { success } = ToastifyComponent()
    const router = useRouter()


    const [loading, setLoading] = useState(true);
    const { cartsData, deleteFromCart, setCartsData, totalPrice } = useContext(Context)



    const [open, setOpen] = useState(false)
    const [itemDelete, setItemDelete] = useState(null)

    const handleOpen = useCallback(() => {
        setOpen((prev) => !prev)
    }, []);

    const handleDelete = useCallback(() => {
        if (itemDelete) {
            deleteFromCart(itemDelete)
            setOpen(false)
        }
    }, [itemDelete, deleteFromCart]);


    const handleStep = () => {
        if (currentStep === 0) {
            setCurrentStep(1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            success("Payment Created Successfully")
            router.push("/")
        }
    }



    const steps = [
        loading ? (
            <CartItemSkeleton />
        ) : (
            cartsData.map((item, index) => (
                <CartItem
                    key={index}
                    cartsData={cartsData}
                    setCartsData={setCartsData}
                    item={item}
                    handleDelete={handleOpen}
                    setItemDelete={setItemDelete}
                />
            ))
        ),
        // eslint-disable-next-line react/jsx-key
        <Payment />,

    ]

    useEffect(() => {
        if (cartsData && cartsData.length > 0) {
            setLoading(false);
        }
    }, [cartsData]);


    return (
        <>
            <Dialog
                open={open}
                size={"xs"}
                handler={handleOpen}>
                <DialogHeader className='pt-5'>
                    <span className='text-base'>Are you sure you want to delete this product</span>
                </DialogHeader>
                <DialogFooter>
                    <button
                        onClick={handleOpen}
                        className="me-2 bg-black text-white rounded-lg hover:opacity-80 px-5 py-1.5"
                    >
                        <span>Cancel</span>
                    </button>
                    <button
                        className='bg-red1 text-white rounded-lg hover:opacity-80 px-8 py-1.5'
                        onClick={handleDelete}
                    >
                        <span>Yes</span>
                    </button>
                </DialogFooter>
            </Dialog>



            {loading ? (
                <main className='container mx-auto px-3 min-h-[80vh] flex justify-center items-center'>
                    <div className='animate-spin flex justify-center items-center h-full'>
                        <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                        </div>
                    </div>
                </main>
            ) : cartsData.length > 0 ? (
                <div className="bg-white h-full mt-5">
                    <div className="container mx-auto p-2 md:p-6">
                        <h1 className="text-xl md:text-3xl font-extrabold text-gray-800">Your shopping bag</h1>
                        <div className="grid lg:grid-cols-3 gap-6 relative mt-8">
                            <div className="lg:col-span-2 space-y-6">
                                {steps[currentStep]}
                            </div>
                            <div className="bg-white h-max rounded-md p-4 shadow-gray-500 shadow-lg sticky top-2">
                                <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
                                <ul className="text-gray-600 text-sm space-y-3 mt-3">
                                    <li className="flex flex-wrap gap-4">Subtotal <span className="ml-auto font-bold">${totalPrice}</span></li>
                                    <li className="flex flex-wrap gap-4">Shipping <span className="ml-auto font-bold">Free</span></li>
                                    <li className="flex flex-wrap gap-4">Tax <span className="ml-auto font-bold">$4.00</span></li>
                                    <li className="flex flex-wrap gap-4 font-bold">Total <span className="ml-auto">${(Number(totalPrice) + 4).toFixed(2)}</span></li>
                                </ul>
                                <button onClick={handleStep} type="button" className="mt-6 text-sm px-6 py-3 w-full bg-black hover:bg-black/80 tracking-wide text-white rounded-md">{currentStep === 0 ? "Make Payment" : "Finish"} </button>
                                <div className="mt-6 space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-800 mb-3">Secure payment</h4>
                                        <p className="text-sm text-gray-600">Experience peace of mind with our secure payment options, ensuring your transactions are protected and reliable.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-800 mb-3">Free delivery</h4>
                                        <p className="text-sm text-gray-600">Enjoy the convenience of free delivery on all your orders, providing a cost-effective and seamless shopping experience.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-800 mb-3">Easy to return</h4>
                                        <p className="text-sm text-gray-600">Simplify your shopping experience with hassle-free returns. Our easy return process ensures convenience and customer satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // عرض الرسالة عند عدم وجود عناصر
                <h1>There are no items in the cart.</h1>
            )}


        </>
    )
}

export default Page
