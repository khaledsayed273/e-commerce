"use client"
import React, { useEffect, useState } from 'react'
import SwiperComponent from './SwiperComponent'

function BestSellProducts({ baseUrl , title = "Flash Sales" }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getBestSellProducts = async () => {
            const skipRandom = Math.floor(Math.random() * 194)
            try {
                const req = await fetch(`${baseUrl}/products?limit=15&skip=${skipRandom}`)
                const res = await req.json()
                const productsRes = await res.products
                return setProducts(productsRes)

            } catch (e) {
                return false
            } finally {
                setLoading(false)
            }
        }
        getBestSellProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {loading ? (
                <div className='flex items-center justify-center my-52'>
                    <div className='animate-spin flex justify-center items-center'>
                        <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                        </div>
                    </div>
                </div>
            ) : (
                <SwiperComponent title={title} data={products} />
            )}
        </div>
    )
}

export default BestSellProducts
