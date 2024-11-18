"use client"
import Card from '@/app/components/Home/Card'
import React, { useCallback, useEffect, useState } from 'react'
import Paginate from './Paginate'

function ClientSide({ baseUrl }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);


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
                const req = await fetch(`${baseUrl}/products/search?q=${debouncedSearch}&limit=20&skip=${currentPage}`)
                const res = await req.json()
                return setData(res)
            } catch (e) {
                return e
            } finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [baseUrl, currentPage, debouncedSearch])

    return (
        <>
            <div className='flex justify-between my-10'>
                <h2 className='text-lg md:text-2xl text-red1 font-semibold flex items-center'>{data.total > 0 && (`Products (${data.total})`)} </h2>
                <div className="relative max-w-48 sm:min-w-80">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" id="icon" name="icon" className="py-2 outline-none border-2 px-4 ps-11 block w-full border-gray-500 rounded-lg text-sm focus:border-red1 focus:ring-red1 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search" />
                </div>
            </div>
            {loading ? (
                <div className='min-h-screen flex items-center justify-center my-52'>
                    <div className='animate-spin flex justify-center items-center'>
                        <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {data.products.length > 0 ? (
                        <div className="grid mb-10 min-h-[60vh] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {data?.products?.map((item) => (
                                <div key={item.id}>
                                    <Card item={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h1 className='text-center text-lg font-semibold mt-52 md:text-3xl '>There Is No Data</h1>
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
