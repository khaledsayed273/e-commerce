import React from 'react'
import ClientSide from './components/ClientSide'


export async function generateMetadata({ params }) {
    const { category } = await params
    return {
        title: category,
    }
}

async function page({ params }) {
    const baseUrl = process.env.baseUrl
    const { category } = await params

    return (
        <ClientSide category={category} baseUrl={baseUrl} />
    )
}

export default page
