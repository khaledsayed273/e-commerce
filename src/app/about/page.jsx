import React from 'react'
import StatsSection from '../components/Home/StatsSection'

function page() {
    return (
        <main className="container mx-auto">
            <header className="py-14">
                <div className="px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-2xl text-gray-900 dark:text-white mb-5 md:text-5xl md:leading-normal">
                        Control your Finances with our <span className="text-red1">Smart Tool</span>
                    </h1>
                    <p className="max-w-lg mx-auto text-sm text-center md:text-base font-normal leading-7 text-gray-500 dark:text-gray-300 md:mb-9">
                        Invest intelligently and discover a better way to manage your entire wealth easily. Our smart tool is designed to simplify your shopping experience and help you find the best deals on the market.
                    </p>
                </div>
            </header>
            <section >
                <div className="px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="max-w-2xl mx-auto text-center font-manrope font-bold text-2xl text-gray-900 dark:text-gray-400 mb-7 md:text-4xl md:leading-normal ">
                        Who we are 
                    </h2>
                    <p className="text-sm md:text-base font-normal leading-7 text-gray-500 dark:text-white mb-12">
                        At Dark store, we understand that managing finances and making smart purchasing decisions can be a daunting task. Thats why we have developed a platform that not only makes shopping easier but also helps you track and optimize your spending habits. Whether you are looking for the latest tech gadgets, home essentials, or luxury items, our smart tool allows you to make informed decisions. We bring you a wide variety of high-quality products from trusted brands, all at competitive prices. Our platform is designed to be user-friendly, making it simple to navigate, compare prices, and take advantage of exclusive offers. Our goal is to revolutionize the way you shop and manage your finances, helping you save both time and money. Join our growing community and start making smarter financial decisions today. Stay ahead with personalized recommendations and updates tailored to your preferences.
                    </p>
                </div>
            </section>
            <StatsSection />
        </main>
    )
}

export default page
