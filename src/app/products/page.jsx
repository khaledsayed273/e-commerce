import React from 'react'
import ClientSide from './components/ClientSide'

function page() {
    const baseUrl = process.env.baseUrl
    return (
        <ClientSide baseUrl={baseUrl} />
    )
}

export default page
