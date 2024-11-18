"use client"
import React, { useEffect, useState } from 'react'

function PriceAndQty({ cartsData, setCartsData, item }) {
    const [qty, setQty] = useState(item.qty)
    const [total, setTotal] = useState(item.total)

    const cartFound = cartsData.find((cart) => cart.id === item.id)

    const handlePlus = () => {
        if (item.stock > qty) {
            setQty((prev) => {
                const newQty = prev + 1;
                const newTotal = parseFloat((newQty * item.price).toFixed(2));
                setTotal(newTotal);
                return newQty;
            });
        }
    };


    const handleMin = () => {
        if (qty > 1) {
            setQty((prev) => {
                const newQty = prev - 1;
                const newTotal = parseFloat((newQty * item.price).toFixed(2));
                setTotal(newTotal);
                return newQty;
            });
        }
    };


    useEffect(() => {
        if (qty !== cartFound.qty) {
            const newObject = { ...cartFound, qty, total: parseFloat((qty * item.price).toFixed(2)) };
            const updatedCartsData = cartsData.map((cart) =>
                cart.id === newObject.id ? newObject : cart
            );
            setCartsData(updatedCartsData);
            localStorage.setItem("carts", JSON.stringify(updatedCartsData));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qty]);

    return (
        <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-3">
                <h4 className="text-sm text-gray-600">Qty:</h4>
                <button onClick={handleMin} type="button"
                    className="flex items-center justify-center w-5 h-5 bg-red1 outline-none rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                    </svg>
                </button>
                <span className="font-bold text-sm leading-[16px]">{qty}</span>
                <button onClick={handlePlus} type="button"
                    className="flex items-center justify-center w-5 h-5 bg-red1 outline-none rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                    </svg>
                </button>
            </div>
            <div>
                <h4 className="text-lg font-bold text-red1">${total}</h4>
            </div>
        </div>
    )
}

export default PriceAndQty
