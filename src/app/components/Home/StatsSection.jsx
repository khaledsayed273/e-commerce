"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";


const StatsSection = () => {
    const sectionRef = useRef(null);
    const [countStarted, setCountStarted] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { gsap } = require("gsap");
            const { ScrollTrigger } = require("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            const element = sectionRef.current;

            gsap.fromTo(
                element,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        onEnter: () => setCountStarted(true),
                    },
                }
            );
        }
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-gray-50 my-10 p-8 min-h-[350px] flex flex-col items-center justify-center font-sans">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
                <div className="text-center">
                    <h3 className="text-gray-800 text-2xl md:text-4xl font-extrabold">
                        {countStarted && <CountUp start={0} end={17.6} duration={2.5} decimals={1} separator="," />}
                        <span className="text-red1">M+</span>
                    </h3>
                    <p className="text-base font-bold mt-4">Total Customers</p>
                    <p className="text-sm text-gray-500 mt-2">
                        The total number of customers who have made purchases from the platform.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-gray-800 text-2xl md:text-4xl font-extrabold">
                        {countStarted && <CountUp start={0} end={15.5} duration={2.5} decimals={1} separator="," />}
                        <span className="text-red1">M+</span>
                    </h3>
                    <p className="text-base font-bold mt-4">Revenue</p>
                    <p className="text-sm text-gray-500 mt-2">
                        The total sales generated through the platform since its launch.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-gray-800 text-2xl md:text-4xl font-extrabold">
                        {countStarted && <CountUp start={0} end={500} duration={2.5} decimals={1} separator="," />}
                        <span className="text-red1">K+</span>
                    </h3>
                    <p className="text-base font-bold mt-4">Active Products</p>
                    <p className="text-sm text-gray-500 mt-2">
                        The number of products currently available on the platform for purchase.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-gray-800 text-2xl md:text-4xl font-extrabold">
                        {countStarted && <CountUp start={0} end={98.5} duration={2.5} decimals={1} />}
                        <span className="text-red1">%</span>
                    </h3>
                    <p className="text-base font-bold mt-4">Customer Satisfaction</p>
                    <p className="text-sm text-gray-500 mt-2">
                        The percentage of customers who rated their shopping experience as positive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
