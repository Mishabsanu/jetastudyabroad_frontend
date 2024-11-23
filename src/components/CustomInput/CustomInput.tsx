import React from 'react';

interface CustomInputProps {
    id: string;
    type: string;
    placeholder: string;
    required?: boolean;
    icon?: string;  // Optional icon prop for dynamic image
}

const CustomInput: React.FC<CustomInputProps> = ({ id, type, placeholder, required, icon }) => {
    return (
        <div className="relative w-full mb-8">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                className={`border-b-2 font-poppins border-[#2B292A]/55 bg-transparent focus:outline-none focus:ring-0 py-2 w-full border-t-0 border-l-0 border-r-0 placeholder-inter text-black placeholder-black/55 ${icon ? 'pr-10' : ''}`} // Add padding if icon exists
            />
            {icon && (
                <img
                    src={icon}
                    alt={`${id}-icon`}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer font-poppins"
                />
            )}
        </div>
    );
};

export default CustomInput;