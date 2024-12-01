import React from 'react'

function page() {
  return (
    <main className='py-7 md:py-10 '>
      <div className="container mx-auto px-3 md:px-6 font-sans">
        <h2 className="text-xl md:text-3xl font-extrabold text-red1 mb-10 md:mb-14">Frequently Asked Questions</h2>
        <div className="space-y-8 max-w-4xl">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-white">How can I track my order?</h3>
              <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                {`You can track your order by visiting the "Order Tracking" page on our website and entering your order number and email address.`}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-white">What is the return policy?</h3>
              <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                {`We offer a 30-day return policy for unused and undamaged products. Please visit our "Returns & Exchanges" page for more details.`}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-white">Do you ship internationally?</h3>
              <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                Yes, we ship to many countries worldwide. Shipping fees and delivery times may vary depending on your location.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-white">How can I contact customer support?</h3>
              <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                {`You can reach our customer support team via the "Contact Us" page or by calling our hotline at 1-800-555-1234.`}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-white">Can I change my order after placing it?</h3>
              <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                Changes to an order can be made within the first hour of placing it. After that, we cannot guarantee changes due to the processing time.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-white">What payment methods do you accept?</h3>
              <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                {`We accept major credit cards, PayPal, and Apple Pay. For more options, please refer to our "Payment Methods" page.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>


  )
}

export default page
