"use client"
import React from 'react'

function Comments({ comments }) {


    function RatedIcon() {
        return (
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500 me-1" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }

    function UnratedIcon() {
        return (
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500 me-1" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }


    return (
        <div className='mb-7'>
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="grid md:grid-cols-2 gap-5 mt-7">
                {comments.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md shadow-gray-500">
                        <h3 className="md:text-lg font-bold">{item.reviewerName}</h3>
                        <p className="text-gray-700 text-sm my-2">
                            Posted on {new Date(item.date).toISOString().split('T')[0]}
                        </p>
                        <div className='flex my-3'>
                            {[...Array(5)].map((_, index) => (
                                index < Math.round(item.rating) ? <RatedIcon key={index} /> : <UnratedIcon key={index} />
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">
                            {item.comment}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Comments
