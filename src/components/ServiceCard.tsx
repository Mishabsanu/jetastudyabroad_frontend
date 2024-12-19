import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface SlideCardProps {
    description: string;
    image: string;
    color: string;
}

const ServiceCard: React.FC<SlideCardProps> = ({  description, image, color }) => {
    const controls = useAnimation();
    const slideText = useAnimation();
    const [clicked, setClicked] = useState(false);

    const handleHover = () => {
        controls.start({
            y: "100%",
            x: "50%",
            scale: 2.2,
            filter: "blur(8px)",
            opacity: 0,
        });
        slideText.start({ x: 0, opacity: 1 });
    };

    const handleLeave = () => {
        controls.start({ y: 0, x: 0, scale: 1.1, filter: "blur(0)", opacity: 1 });
        slideText.start({ x: 100, opacity: 0 });
    };

    const handleClick = () => {
        if (clicked) {
            handleLeave();
            setClicked(false);
        } else {
            handleHover();
            setClicked(true);
        }
    };

    return (
        <div className="shadow-2xl">
            <motion.div
                onClick={handleClick}
                onHoverStart={handleHover}
                onHoverEnd={handleLeave}
                className="cursor-pointer"
            >
                <div
                    className={`relative bg-gradient-to-b ${color} -z-10 rounded-xl`}
                    style={{
                        overflow: "hidden",
                        height: "300px",
                    }}
                >
                    <motion.div
                        initial={{ y: 0 }}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <div>
                        <motion.div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                padding: "20px",
                            }}
                        >
                            <motion.p
                                initial={{ x: 300, opacity: 0 }}
                                animate={slideText}
                                transition={{ duration: 0.5 }}
                                className="p-3 text-white font-poppins text-sm md:text-base"
                            >
                                {description}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceCard;
