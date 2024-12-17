import Image from 'next/image';
import React from 'react';

interface CustomInputProps {
    id: string;
    type: string;
    placeholder: string;
    required?: boolean;
    icon?: string;
    label?: string; // Optional label for the input field
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>; // Handle input changes
    error?: string; // Optional error message
}

const CustomInput: React.FC<CustomInputProps> = ({
    id,
    type,
    placeholder,
    required,
    icon,
    label,
    value,
    onChange,
    error,
}) => {
    return (
        <div className="relative w-full">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-2 block">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className={`w-full py-2 px-3 border-b-2 font-poppins bg-transparent text-black placeholder-black/55 focus:outline-none focus:ring-0 ${icon ? 'pr-10' : ''
                    } ${error ? 'border-red-500' : 'border-[#2B292A]/55'} placeholder-inter`}
            />
            {icon && (
                <Image
                    src={icon}
                    alt={`${id}-icon`}
                    height={16}
                    width={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>} {/* Error message */}
        </div>
    );
};

export default CustomInput;
