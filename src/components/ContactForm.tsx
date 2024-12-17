'use client';

import Image from "next/image";
import Button from "./Button/Button";
import CustomInput from "./CustomInput/CustomInput";
import CustomSelect from "./CustomSelect/CustomSelect";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the type for the form data
interface FormData {
    firstName: string;
    email: string;
    phone: string;
    place: string;
    destination: string;
    qualification: string;
    address: string;
    terms: boolean;
}

export default function ContactForm() {
    const countries = [
        { value: 'europe', label: 'Europe' },
        { value: 'united-kingdom', label: 'United Kingdom' },
        { value: 'canada', label: 'Canada' },
        { value: 'australia', label: 'Australia' },
        { value: 'ireland', label: 'Ireland' },
        { value: 'usa', label: 'USA' },
        { value: 'new-zealand', label: 'New Zealand' },
        { value: 'dubai', label: 'Dubai' },
        { value: 'uzbekistan', label: 'Uzbekistan' },
        { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
        { value: 'kazakhstan', label: 'Kazakhstan' },
        { value: 'georgia', label: 'Georgia' }
    ];

    // Use React Hook Form with TypeScript
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    // Handle form submission
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Form Data: ", data);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1290px] mt-10'>
            <div>
                <Image
                    className='object-cover object-center h-full w-full'
                    src='/form-image.png'
                    alt='form'
                    width={645}
                    height={769}
                />
            </div>
            <form
                className='bg-[#E0E0E0]/[0.44] py-14 px-8 flex flex-col justify-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='space-y-5'>
                    {/* First Name and Email */}
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <div className="mb-8 w-full">
                            <CustomInput
                                id="firstName"
                                type="text"
                                placeholder="First Name*"
                                {...register("firstName", { required: "First Name is required" })}
                            />
                            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                        </div>

                        <div className="mb-8 w-full">
                            <CustomInput
                                id="email"
                                type="email"
                                placeholder="Email Address *"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Phone and Place */}
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <div className="mb-8 w-full">
                            <CustomInput
                                id="phone"
                                type="tel"
                                placeholder="Mobile Number *"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit phone number",
                                    },
                                })}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>

                        <div className="mb-8 w-full">
                            <CustomInput
                                id="place"
                                type="text"
                                placeholder="Place *"
                                {...register("place", { required: "Place is required" })}
                            />
                            {errors.place && <p className="text-red-500">{errors.place.message}</p>}
                        </div>
                    </div>

                    {/* Study Destination and Qualification */}
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <div className="mb-8 w-full">
                            <CustomSelect
                                placeholder="Study Destination"
                                options={countries}
                                {...register("destination", { required: "Select a destination" })}
                            />
                            {errors.destination && (
                                <p className="text-red-500">{errors.destination.message}</p>
                            )}
                        </div>

                        <div className="mb-8 w-full">
                            <CustomInput
                                id="qualification"
                                type="text"
                                placeholder="Qualification *"
                                {...register("qualification", { required: "Qualification is required" })}
                            />
                            {errors.qualification && (
                                <p className="text-red-500">{errors.qualification.message}</p>
                            )}
                       </div>
                    </div>

                    {/* Address */}
                    <div className='flex flex-col items-center mb-8 w-full'>
                            <CustomInput
                                id="address"
                                type="text"
                                placeholder="Address *"
                                {...register("address", { required: "Address is required" })}
                            />
                            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                </div>

                {/* Consent Checkboxes */}
                <p className='text-black font-roboto text-base mt-6'>
                    Jeta will not share your details with others without your permission:
                </p>
                <div className='my-4 space-y-4'>
                    <div className='flex items-center gap-3'>
                        <input
                            id="terms"
                            type="checkbox"
                            {...register("terms", { required: "You must agree to the terms" })}
                            className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
                        />
                        <p className='text-black/55 font-roboto text-sm'>
                            I agree to GC Terms and Privacy Policy
                        </p>
                        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <Button text='BOOK YOUR SEAT' className='w-fit' type="submit" />
            </form>
        </div>
    );
}