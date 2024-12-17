import Image from 'next/image';
import React from 'react';

interface CustomSelectProps {
    options: { value: string; label: string }[]; // Array of options for the select dropdown
    placeholder: string; // Placeholder text for the dropdown
    required?: boolean; // Whether the select is required
    icon?: string; // Optional icon for the dropdown
    value?: string; // Controlled value for the select
    onChange?: React.ChangeEventHandler<HTMLSelectElement>; // onChange handler for value changes
    error?: string; // Optional error message for validation
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    required = false,
    icon,
    placeholder,
    value,
    onChange,
    error,
}) => {
    return (
        <div className="relative w-full">
            <select
                value={value}
                onChange={onChange}
                required={required}
                defaultValue=""
                className={`border-b-2 border-[#2B292A]/55 bg-transparent font-poppins focus:outline-none focus:ring-0 py-2 w-full border-t-0 border-l-0 border-r-0 placeholder-inter text-black placeholder-black/55 appearance-none ${icon ? 'pr-10' : ''
                    } ${error ? 'border-red-500' : 'border-[#2B292A]/55'}`}
            >
                <option value="" disabled className="text-gray-500">
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
                    alt="select-icon"
                    height={16}
                    width={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>} {/* Error message */}
        </div>
    );
};

export default CustomSelect;
