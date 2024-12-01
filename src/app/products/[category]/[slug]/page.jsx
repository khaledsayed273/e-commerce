import Link from 'next/link'
import React from 'react'
import ImageComponent from './components/ImageComponent'
import PriceComponents from './components/PriceComponents';
import Comments from './components/Comments';
import BestSellProducts from '@/app/components/Home/BestSellProducts';

export async function generateMetadata({ params }) {
  const { slug } = await params

  const baseUrl = process.env.baseUrl

  try {
    const req = await fetch(`${baseUrl}/products/${slug}`, { next: { revalidate: 3600 } })
    const res = await req.json()
    const data = await res
    return {
      title: data.title,
      description: data.description
    }

  } catch (e) {
    return {
      title: "Not Found",
    }
  }
}

const getDetails = async (baseUrl, slug) => {
  try {
    const req = await fetch(`${baseUrl}/products/${slug}`, { next: { revalidate: 3600 } })
    const res = await req.json()
    const data = await res
    return data

  } catch (e) {
    return false
  }
}

async function page({ params }) {

  function RatedIcon() {
    return (
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red1 me-1" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    );
  }

  function UnratedIcon() {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red1 me-1" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    );
  }


  const baseUrl = process.env.baseUrl
  const { slug } = await params
  const data = await getDetails(baseUrl, slug)
  const afterDiscount = data.price;
  const discountPercentage = data.discountPercentage;
  const beforeDiscount = afterDiscount / (1 - (discountPercentage / 100));
  return (
    <main className='min-h-screen my-8 dark:text-white'>
      {data && (
        <div className='container mx-auto mt-5 px-2 md:px-5 mb-20'>
          <div className='mb-5 text-sm text-gray-600  dark:text-white/50 font-semibold capitalize'>
            <Link className='me-2 hover:text-black dark:hover:text-white' href={"/products"}>products</Link>
            {`/`}
            <Link className='mx-2 hover:text-black dark:hover:text-white' href={`/products/${data.category}`}>{data.category}</Link>
            {`/`}
            <span className='mx-2 text-black dark:text-white'>{data.title}</span>
          </div>

          <div className='my-10'>

            <div className="mx-auto flex flex-wrap md:gap-5 2xl:gap-2 lg:flex-nowrap">
              <ImageComponent data={data} />

              <div className="lg:w-1/2 xl:w-1/2 2xl:w-2/3 w-full mt-3 lg:mt-0">
                <h1 className="text-gray-900 dark:text-white text-xl xl:text-2xl 2xl:text-3xl font-medium mb-5">{data.title}</h1>
                <div className="flex mb-4">
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, index) => (
                      index < Math.round(data.rating) ? <RatedIcon key={index} /> : <UnratedIcon key={index} />
                    ))}
                  </div>
                  <span className="flex items-center">
                    <span className="text-gray-600 dark:text-white/50 text-sm md:text-base ml-3">{data.reviews.length} Reviews</span>
                  </span>
                </div>
                <h2 className="text-gray-900 dark:text-white/60 md:text-lg mb-2 font-semibold">Brand: {data.brand}</h2>

                <p className="text-sm leading-7 md:text-base">{data.description}</p>
                <span className="text-red1 text-sm md:text-base font-semibold my-3 block ">SKU: {data.sku}</span>
                <p className="text-black dark:text-white text-sm md:text-base my-3 font-semibold">Return Policy: {data.returnPolicy}</p>
                <div className='my-3 flex justify-between'>
                  <div>
                    <span className='text-red-500 md:text-xl font-medium me-3'>${data.price}</span>
                    <span className='text-gray-600 dark:text-gray-400 md:text-lg font-medium line-through'>${Math.round(beforeDiscount)}</span>
                  </div>
                  <span className="text-orange-900 dark:text-orange-500 font-semibold text-sm sm:text-base">STOCK: {data.stock}</span>
                </div>
                <PriceComponents item={data} />
              </div>
            </div>
          </div>
          <div className='mb-7'>
            <h3 className="text-gray-800 dark:text-gray-300 capitalize text-sm mb-3 font-semibold"><span className='text-black dark:text-gray-500 font-bold'>warranty Information:</span> {data.warrantyInformation}</h3>
            <h3 className="text-gray-800 dark:text-gray-300 capitalize text-sm mb-3 font-semibold"><span className='text-black dark:text-gray-500 font-bold'>shipping Information:</span>  {data.shippingInformation}</h3>
            <h3 className="text-gray-800 dark:text-gray-300 capitalize text-sm mb-3 font-semibold"><span className='text-black dark:text-gray-500 font-bold'>availability Status:</span>  {data.availabilityStatus}</h3>
          </div>
          {data.reviews.length > 0 && (
            <Comments comments={data?.reviews} />
          )}
            <BestSellProducts baseUrl={process.env.baseUrl} title={"Best Sale"} />
        </div>
      )}
    </main>
  )
}

export default page
