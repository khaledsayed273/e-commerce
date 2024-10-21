import Link from 'next/link'
import React from 'react'

const getCategories = async () => {
    try {
        const req = await fetch(`${process.env.baseUrl}/products/category-list`)
        const res = await req.json()
        return res
    } catch (e) {
        return e
    }
}

async function Sidebar() {

    const data = await getCategories()

    return (
        <ul style={{scrollbarColor: "#A61C1C rgba(216, 215, 215, 0.438)" , scrollbarWidth: "thin"}} className='overflow-auto w-full max-h-[450px] p-3 '>
            {data.map((item, index) => (
                <li className='mb-3' key={index}>
                    <Link className='capitalize text-sm font-semibold text-gray-800 hover:text-red1' href={`/products/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Sidebar
