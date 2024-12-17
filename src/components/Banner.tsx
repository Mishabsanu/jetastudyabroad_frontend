'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button/Button";

const HomeBanner = () => {
    // Rotating content
    const rotatingPoints = [
        "360 Degree Solutions",
        "99% Collateral Free Loan",
        "A Guide to Comfortable Accommodation",
        "Access to Free Forex Trading Course",
        "JETA Labs – Your Socializing Hub",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Change rotating point every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingPoints.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [rotatingPoints.length]);

    return (
        <div
            className="relative py-20 md:h-[calc(100vh-100px)] bg-[url('/hero.png')] bg-cover bg-center flex items-center justify-center text-center"
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-white px-4">
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
                    Your Destination with <span className="font-extrabold font-roboto">JETA</span>
                </h1>

                {/* Rotating Points */}
                <div className="h-10 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl font-light"
                        >
                            {rotatingPoints[currentIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>
                <Button text='Get a Free Consultation' className='w-fit' />
            </div>
        </div>
    );
};

export default HomeBanner;
