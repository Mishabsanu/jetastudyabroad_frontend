import Image from "next/image";
import { useForm, Controller } from "react-hook-form";

// Define the type for the form data
interface FormData {
    fullName: string;
    email: string;
    phone: string;
    place: string;
    destination: string;
    qualification: string;
    address: string;
}

export default function ConsultingForm() {
    const countries = [
        "Europe",
        "United Kingdom",
        "Canada",
        "Australia",
        "Ireland",
        "USA",
        "New Zealand",
        "Dubai",
        "Uzbekistan",
        "Kyrgyzstan",
        "Kazakhstan",
        "Georgia",
    ];

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            place: "",
            destination: "",
            qualification: "",
            address: "",
        },
        mode: "onTouched",
    });

    const onSubmit = (data: FormData) => {
        console.log("Form Submitted:", data);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="pt-20 text-black font-poppins grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center" >
                <Image
                    src="/consulting-illustration.png"
                    alt="Consulting Illustration"
                    width={500}
                    height={500}
                />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6"
            >
                <h2 className="text-xl font-bold text-center font-rubik">Book Free Consulting Now</h2>

                {/* First Name and Email */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full">
                        <label htmlFor="fullName" className="block text-xs font-medium mb-1">
                            Full Name
                        </label>
                        <Controller
                            name="fullName"
                            control={control}
                            rules={{ required: "Full name is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="fullName"
                                    className="w-full bg-gray-200 text-black p-2 rounded placeholder:text-sm placeholder:font-roboto"
                                    placeholder="Enter your first name"
                                />
                            )}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="block text-xs font-medium mb-1">
                            Email Address
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-200 text-black p-2 rounded placeholder:font-roboto placeholder:text-sm"
                                    placeholder="Enter your email address"
                                />
                            )}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Phone and Place */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full">
                        <label htmlFor="phone" className="block text-xs font-medium mb-1">
                            Phone Number
                        </label>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-gray-200 text-black p-2 rounded placeholder:font-roboto placeholder:text-sm"
                                    placeholder="Enter your phone number"
                                />
                            )}
                        />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>

                    <div className="w-full">
                        <label htmlFor="place" className="block text-xs font-medium mb-1">
                            Place
                        </label>
                        <Controller
                            name="place"
                            control={control}
                            rules={{ required: "Place is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="place"
                                    className="w-full bg-gray-200 text-black p-2 rounded placeholder:font-roboto placeholder:text-sm"
                                    placeholder="Enter your place"
                                />
                            )}
                        />
                        {errors.place && <p className="text-red-500 text-xs">{errors.place.message}</p>}
                    </div>
                </div>

                {/* Study Destination */}
                <div>
                    <label htmlFor="destination" className="block text-xs font-medium mb-1">
                        Study Destination
                    </label>
                    <Controller
                        name="destination"
                        control={control}
                        rules={{ required: "Study destination is required" }}
                        render={({ field }) => (
                            <select
                                {...field}
                                id="destination"
                                className="w-full bg-gray-200 text-black p-2 font-roboto text-sm rounded placeholder:font-roboto placeholder:text-sm"
                            >
                                <option value="">Choose...</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.destination && <p className="text-red-500 text-xs">{errors.destination.message}</p>}
                </div>

                {/* Qualification and Address */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full">
                        <label htmlFor="qualification" className="block text-xs font-medium mb-1">
                            Qualification
                        </label>
                        <Controller
                            name="qualification"
                            control={control}
                            rules={{ required: "Qualification is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="qualification"
                                    className="w-full bg-gray-200 text-black p-2 rounded placeholder:font-roboto placeholder:text-sm"
                                    placeholder="Enter your qualification"
                                />
                            )}
                        />
                        {errors.qualification && <p className="text-red-500 text-xs">{errors.qualification.message}</p>}
                    </div>

                    <div className="w-full">
                        <label htmlFor="address" className="block text-xs font-medium mb-1">
                            Address
                        </label>
                        <Controller
                            name="address"
                            control={control}
                            rules={{ required: "Address is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="address"
                                    className="w-full bg-gray-200 text-black p-2 rounded placeholder:font-roboto placeholder:text-sm"
                                    placeholder="Enter your address"
                                />
                            )}
                        />
                        {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#0f75bc] text-white p-3 rounded hover:bg-blue-600 transition"
                >
                    Book Your Seat
                </button>
            </form>
        </div>
    );
}
