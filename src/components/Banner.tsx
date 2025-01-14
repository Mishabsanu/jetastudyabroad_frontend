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
        <section className="relative bg-[#0f75bc] text-white py-4 md:py-8 px-4 md:px-7">
            {/* Content */}
            <div className="relative z-10 max-w-[420px] mx-auto text-center">
                {/* Main Title */}
                <h1 className="text-lg md:text-3xl font-poppins font-bold mb-2">
                    Your Destination with <span className="font-extrabold font-roboto">JETA</span>
                </h1>

                {/* Rotating Points */}
                <div className="h-7 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm md:text-base font-semibold"
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
