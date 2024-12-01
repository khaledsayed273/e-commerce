"use client";

import ToastifyComponent from "@/Shared/ToastifyComponent";
import Cookies from "js-cookie";

const { createContext, useEffect, useState, useMemo } = require("react");

export const Context = createContext();

export default function ProviderContext({ initialTheme, children }) {

    const [theme, setTheme] = useState(initialTheme || "light")
    const { success, error } = ToastifyComponent()
    const [cartsData, setCartsData] = useState([]);

    const totalPrice = useMemo(() => {
        return cartsData.length > 0
            ? cartsData.map(item => item.total).reduce((acc, price) => acc + price, 0).toFixed(2)
            : 0
    }, [cartsData]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCarts = localStorage.getItem("cartsProducts");
            const theme = Cookies.get("theme") || "light";
            setCartsData(storedCarts ? JSON.parse(storedCarts) : []);
            Cookies.set("theme", theme);
            setTheme(theme)
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        document.body.setAttribute("data-theme", theme)
        Cookies.set("theme", theme);
    }, [theme]);

    const addToCart = (item, qty, total) => {
        const cartExists = cartsData.find(data => data.id === item.id);
        if (!cartExists) {
            const copyOfItem = Object.assign(item, { qty, total })
            const updatedCartsData = [...cartsData, copyOfItem];
            setCartsData(updatedCartsData);
            localStorage.setItem("cartsProducts", JSON.stringify(updatedCartsData));
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
        localStorage.setItem("cartsProducts", JSON.stringify(newCarts));
        success("Item deleted successfully");
    }

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
    }

    return <Context.Provider value={{ addToCart, deleteFromCart, cartsData, totalPrice, setCartsData, theme, handleTheme }}>{children}</Context.Provider>;
}
