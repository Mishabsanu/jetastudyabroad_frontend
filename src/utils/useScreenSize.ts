import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setScreenSize('sm'); // Tailwind `sm` breakpoint: 640px
            } else if (width >= 640 && width < 768) {
                setScreenSize('md'); // Tailwind `md` breakpoint: 768px
            } else if (width >= 768 && width < 1024) {
                setScreenSize('lg'); // Tailwind `lg` breakpoint: 1024px
            } else if (width >= 1024 && width < 1280) {
                setScreenSize('xl'); // Tailwind `xl` breakpoint: 1280px
            } else {
                setScreenSize('2xl'); // Tailwind `2xl` breakpoint: 1536px and above
            }
        };
        updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return screenSize;
};

export default useScreenSize;
