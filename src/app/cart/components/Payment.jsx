import React from 'react'

function Payment() {
    return (
        <div className="shadow-gray-500 shadow-lg p-4 rounded-md lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 ">Delivery Details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 "> Your name </label>
                            <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 " placeholder="Bonnie Green" required />
                        </div>

                        <div>
                            <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 "> Your email* </label>
                            <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 " placeholder="name@.com" required />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <label htmlFor="select-country-input-3" className="block text-sm font-medium text-gray-900 "> Country* </label>
                            </div>
                            <select defaultValue="AS" id="select-country-input-3" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                                <option >United States</option>
                                <option value="AS">Australia</option>
                                <option value="FR">France</option>
                                <option value="ES">Spain</option>
                                <option value="UK">United Kingdom</option>
                            </select>
                        </div>

                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 "> City* </label>
                            </div>
                            <select defaultValue="NY" id="select-city-input-3" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 ">
                                <option >San Francisco</option>
                                <option value="NY">New York</option>
                                <option value="LA">Los Angeles</option>
                                <option value="CH">Chicago</option>
                                <option value="HU">Houston</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 "> Phone Number* </label>
                            <input type="number" id="phone-input-3" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Phone Number" required />

                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 "> Email </label>
                            <input type="email" id="email" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 " placeholder="name@.com" required />
                        </div>

                        <div>
                            <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 "> Company name </label>
                            <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="LLC" required />
                        </div>

                        <div>
                            <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 "> VAT number </label>
                            <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  " placeholder="DE42313253" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900 "> Address  </label>
                            <input type="text" id="address" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  " placeholder="your address" required />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 ">Payment</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-400 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " defaultChecked />
                                </div>

                                <div className="ms-4 text-sm">
                                    <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 "> Credit Card </label>
                                    <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 ">Pay with your credit card</p>
                                </div>
                            </div>

                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-400 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" />
                                </div>

                                <div className="ms-4 text-sm">
                                    <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 "> Payment on delivery </label>
                                    <p id="pay-on-delivery-text" className="mt-1 text-xs font-normal text-gray-500" >+$15 payment processing fee</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-400 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " />
                                </div>
                                <div className="ms-4 text-sm">
                                    <label htmlFor="paypal-2" className="font-medium leading-none text-gray-900 "> Paypal account </label>
                                    <p id="paypal-text" className="mt-1 text-xs font-normal text-gray-500 ">Connect to your account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Delivery Methods</h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-400 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" defaultChecked />
                                </div>

                                <div className="ms-4 text-sm">
                                    <label htmlFor="dhl" className="font-medium leading-none text-gray-900 "> $15 - DHL Fast Delivery </label>
                                    <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500 ">Get it by Tommorow</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-400 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600  " />
                                </div>

                                <div className="ms-4 text-sm">
                                    <label htmlFor="fedex" className="font-medium leading-none text-gray-900 "> Free Delivery - FedEx </label>
                                    <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 ">Get it by Friday, 13 Dec 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4  ">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-400 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " />
                                </div>

                                <div className="ms-4 text-sm">
                                    <label htmlFor="express" className="font-medium leading-none text-gray-900 "> $49 - Express Delivery </label>
                                    <p id="express-text" className="mt-1 text-xs font-normal text-gray-500 ">Get it today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 "> Enter a gift card, voucher or promotional code </label>
                    <div className="flex max-w-md items-center gap-4">
                        <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="" required />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Payment
