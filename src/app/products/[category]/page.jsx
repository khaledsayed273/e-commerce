import React from 'react'
import ClientSide from './components/ClientSide'
import Link from 'next/link'
import Nav from './components/Nav'

export async function generateMetadata({ params }) {
    return {
        title: params.category,
    }
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


async function page({ params }) {
    const baseUrl = process.env.baseUrl
    const categoriesData = await getCategories()
    return (
        <main className='px-2 md:px-5'>
            <Nav category={params.category} categoriesData={categoriesData}/>
            <div className='container mx-auto my-5'>
                <ClientSide category={params.category} baseUrl={baseUrl} />
            </div>
        </main>
    )
}

export default page
