import React, { Suspense } from 'react'
import Nav from './components/Nav'

export const metadata = {
    title: "gallery",
    description: "gallery description",
    keywords: "gallery keywords"
}

const getCategories = async () => {
    try {
        const req = await fetch(`${process.env.baseUrl}/products/category-list`)
        const res = await req.json()
        return res
    } catch (e) {
        return e
    }
}



export default async function layout({ children }) {
    const categoriesData = await getCategories()

    return (
        <main className='px-2 md:px-5 '>
            <Nav categoriesData={categoriesData} />
            <div className='container mx-auto my-5'>
                <Suspense fallback={
                    <div className='animate-spin flex justify-center items-center h-full'>
                        <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                        </div>
                    </div>
                }>
                    {children}
                </Suspense>
            </div>
        </main>
    )
}





