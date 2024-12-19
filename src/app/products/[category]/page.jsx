import React from 'react'
import Card from '@/app/components/Home/Card'
import Paginate from '../components/Paginate'


const getProducts = async (baseUrl, category, currentPage) => {
    try {
        const req = await fetch(`${baseUrl}/products/category/${category}?limit=20&skip=${currentPage * 20}`)
        const res = await req.json()
        return res
    } catch (e) {
        return false
    }
}

export async function generateMetadata({ params }) {
    const { category } = await params
    return {
        title: category,
    }
}

async function page({ params, searchParams }) {
    const baseUrl = process.env.baseUrl
    const { category } = await params
    const { page } = await searchParams
    const data = await getProducts(baseUrl, category, page ? page - 1 : 0)
    
    return (
        <>
            <div className='flex justify-between my-10'>
                <h1 className='text-lg md:text-2xl text-red1 font-semibold flex items-center capitalize'>{data.total > 0 && (`${category} (${data.total})`)} </h1>
            </div>
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
            {data?.total > 20 && (
                <Paginate data={data} category={category} />
            )}
        </>

    )
}

export default page
