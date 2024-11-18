"use client"
import Card from '@/app/components/Home/Card'
import React, { useCallback, useEffect, useState } from 'react'
import Paginate from './Paginate'

function ClientSide({ category, baseUrl }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(0)
    const [page, setPage] = useState(0)

    const handlePageClick = useCallback((event) => {
        setPage(event.selected);
        setCurrentPage(event.selected * 20);
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const req = await fetch(`${baseUrl}/products/category/${category}?limit=20&skip=${currentPage}`)
                const res = await req.json()
                return setData(res)
            } catch (e) {
                return e
            } finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [baseUrl, currentPage, category])

    return (
        <>
            <div className='flex justify-between my-10'>
                <h1 className='text-lg md:text-2xl text-red1 font-semibold flex items-center capitalize'>{data.total > 0 && (`${category} (${data.total})`)} </h1>
            </div>
            {loading ? (
                <div className='px-3 min-h-[70vh] flex justify-center items-center'>
                    <div className='animate-spin flex justify-center items-center h-full'>
                        <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {data?.products?.length > 0 ? (
                        <div className="grid mb-10 min-h-[60vh] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {data?.products?.map((item) => (
                                <div key={item.id}>
                                    <Card item={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h2 className='text-center text-lg font-semibold mt-52 md:text-3xl '>There Is No Data</h2>
                    )}
                </>
            )}
            {data?.total > 20 && (
                <Paginate data={data} page={page} handlePageClick={handlePageClick} />
            )}
        </>
    )
}

export default ClientSide
