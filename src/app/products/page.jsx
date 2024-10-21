import React from 'react'
import ClientSide from './components/ClientSide'
import Nav from './[category]/components/Nav'


const getCategories = async () => {
    try {
        const req = await fetch(`${process.env.baseUrl}/products/category-list`)
        const res = await req.json()
        return res
    } catch (e) {
        return e
    }
}

async function page() {
    const baseUrl = process.env.baseUrl
    const categoriesData = await getCategories()

    return (
        <main className='px-2 md:px-5 '>
            <Nav categoriesData={categoriesData} />
            <div className='container mx-auto my-5'>
                <ClientSide baseUrl={baseUrl} />
            </div>
        </main>
    )
}

export default page
