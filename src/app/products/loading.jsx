import React from 'react'

function loading() {
    return (
        <main className='container mx-auto px-3 min-h-screen flex justify-center items-center'>
            <div className='animate-spin flex justify-center items-center h-full'>
                <div className='w-14 h-14 bg-transparent border-8 border-t-red1 border-r-red1 border-l-transparent border-b-red1  rounded-full'>
                </div>
            </div>
        </main>
    )
}

export default loading