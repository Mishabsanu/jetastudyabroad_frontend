'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AutoChangeText = () => {
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
        <section className="relative bg-[#0f75bc] text-white py-16 md:py-20 px-4 md:px-7">
            {/* Content */}
            <div className="relative z-10 max-w-[760px] mx-auto text-center">
                {/* Main Title */}
                <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
                    Your Destination with <span className="font-extrabold font-roboto text-[#ffeb3b]">JETA</span>
                </h1>

                {/* Rotating Points */}
                <div className="h-12 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="text-lg md:text-2xl font-semibold"
                        >
                            {rotatingPoints[currentIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AutoChangeText;
