import React, { Suspense } from 'react'

export default async function layout({ children }) {
    return (
        <main className='px-2 md:px-5 min-h-screen'>
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





