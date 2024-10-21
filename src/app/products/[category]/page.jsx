import React from 'react'
import ClientSide from './components/ClientSide'


export async function generateMetadata({ params }) {
    return {
        title: params.category,
    }
}

async function page({ params }) {
    const baseUrl = process.env.baseUrl
    return (
        <ClientSide category={params.category} baseUrl={baseUrl} />
    )
}

export default page
