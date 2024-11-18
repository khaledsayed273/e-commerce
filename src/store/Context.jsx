"use client";

import ToastifyComponent from "@/Shared/ToastifyComponent";

const { createContext, useEffect, useState, useMemo } = require("react");

export const Context = createContext();

export default function ProviderContext({ children }) {

    const { success, error } = ToastifyComponent()

    const [cartsData, setCartsData] = useState([]);


    const totalPrice = useMemo(() => {
        return cartsData.length > 0
            ? cartsData.map(item => item.total).reduce((acc, price) => acc + price, 0).toFixed(2)
            : 0
    }, [cartsData]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCarts = localStorage.getItem("carts");
            setCartsData(storedCarts ? JSON.parse(storedCarts) : []);
        }
    }, []);

    const addToCart = (item, qty, total) => {
        const cartExists = cartsData.find(data => data.id === item.id);
        if (!cartExists) {
            const copyOfItem = Object.assign(item, { qty, total })
            const updatedCartsData = [...cartsData, copyOfItem];
            setCartsData(updatedCartsData);
            localStorage.setItem("carts", JSON.stringify(updatedCartsData));
            success("Item added successfully");
        } else {
            error("This Item already added");
        }
    };

    const deleteFromCart = (item) => {
        const newCarts = cartsData.filter((items) => {
            return items.id !== item.id
        })
        setCartsData(newCarts);
        localStorage.setItem("carts", JSON.stringify(newCarts));
        success("Item deleted successfully");
    }

    return <Context.Provider value={{ addToCart, deleteFromCart, cartsData, totalPrice, setCartsData }}>{children}</Context.Provider>;
}
