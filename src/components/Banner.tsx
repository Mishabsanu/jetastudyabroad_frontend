'use client'
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

        < div className="relative z-10 text-black px-4 max-w-[760px] mx-auto text-center" >
            {/* Main Title */}
            < h1 className="text-2xl md:text-4xl font-poppins font-bold mb-4" >
                Your Destination with <span className="font-extrabold font-roboto">JETA</span>
            </h1 >

            {/* Rotating Points */}
            < div className="h-10 overflow-hidden" >
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="text-base md:text-xl font-bold text-[#0f75bc]"
                    >
                        {rotatingPoints[currentIndex]}
                    </motion.p>
                </AnimatePresence>
            </div >
        </div >
    );
};

export default AutoChangeText;
