import Image from 'next/image';
import React from 'react';

interface CustomSelectProps {
    options: { value: string; label: string }[];
    placeholder: string;
    required?: boolean;
    icon?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, required, icon, placeholder }) => {
    return (
        <div className="relative w-full mb-8">
            <select
                required={required}
                defaultValue={""}
                className={`border-b-2 border-[#2B292A]/55 bg-transparent font-poppins focus:outline-none focus:ring-0 py-2 w-full border-t-0 border-l-0 border-r-0 placeholder-inter text-black/55 placeholder-black/55 appearance-none ${icon ? 'pr-10' : ''}`}
            >
                <option value="" disabled className="text-black">
                   {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="text-black">
                        {option.label}
                    </option>
                ))}
            </select>
            {icon && (
                <Image
                    src={icon}
                    alt={'-icon'}
                    height={16}
                    width={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer font-poppins"
                />
            )}
        </div>
    );
};

export default CustomSelect;
