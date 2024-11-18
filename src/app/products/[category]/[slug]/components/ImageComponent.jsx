"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageComponent({ data }) {
    const [activeImage, setActiveImage] = useState(data.images[0])

    const handleActiveImage = (image) => {
        setActiveImage(image)
    }

    return (
        <div className="flex  flex-col-reverse md:flex-row w-full lg:w-3/4 xl:w-2/3 ">
            <div className="overflow-y-auto mt-5 md:mt-0 gap-4 flex md:flex-col pb-5 md:pb-0 max-h-[430px] md:pe-3 md:me-3 lg:me-0">
                {data.images.map((image, index) => (
                    <Image sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 33vw" priority width={100} height={100} key={index} src={image} alt="Thumbnail 1"
                        className={`border ${activeImage != image && "opacity-60"} border-black/30 rounded-md cursor-pointer h-[70px] w-[70px]  hover:opacity-100 transition duration-300`}
                        onClick={() => handleActiveImage(image)} />
                ))}
            
            </div>
            <div className='relative h-[430px] w-full md:w-[450px] md:ms-3 xl:w-[500px]'>
                <Image sizes="(max-width: 768px) 100vw , (max-width: 1200px) 50vw , 33vw" key={activeImage} priority fill src={activeImage} alt={data.title} className=" rounded-lg mx-auto border border-gray-200 shadow-md mb-4" id="mainImage" />
            </div>
        </div>
    )
}

export default ImageComponent
