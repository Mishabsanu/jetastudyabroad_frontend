import axiosInstance from "@/lib/axios";
import Image from "next/image";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
// Define the type for the form data
interface FormData {
  type: string;
  venue: string;
  fullName: string;
  email: string;
  phone: string;
  place: string;
  destination: string;
  qualification: string;
  address: string;
}

export default function ConsultingForm() {
  const [type, setType] = useState("home");
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

  const venueOptions = {
    home: ["Home", "Cafe"],
    phone: ["WhatsApp", "Phone Call"],
    video: ["Google Meet", "Microsoft Teams", "WhatsApp", "Zoom"],
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {

      venue: "",
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

  const onSubmit = async (data: FormData) => {
  
    try {
      const response = await axiosInstance.post(
        "/user-enquiry/add-user-enquiry",
        data
      );
      console.log("Response: ", response.data);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      console.log(error, "error");
      toast.error("Failed to submit form. Please try again!");
      //   alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="pt-20 text-black font-poppins grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center">
        <Image
          src="/call.jpg"
          alt="Consulting Illustration"
          width={7137}
          height={5304}
          className="w-full max-h-[400px] object-cover"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-8 space-y-4 mx-auto"
      >
        <h2 className="text-lg md:text-2xl font-bold text-center font-rubik pb-2">
          Book Your Consultation Now !
        </h2>

        <div className="grid grid-cols-3 bg-gray-200 rounded-full">
          <button
            className={`flex justify-center items-center gap-2 py-1.5 rounded-full ${
              type === "home" ? "bg-[#0f75bc] text-white" : ""
            }`}
            onClick={() => setType("home")}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
                fill={`${type === "home" ? "#FFFFFF" : "#000000"}`}
              />
            </svg>
            <p className="text-sm font-poppins">Home</p>
          </button>
          <button
            className={`flex justify-center items-center gap-2 py-1.5 rounded-full ${
              type === "phone" ? "bg-[#0f75bc] text-white" : ""
            }`}
            onClick={() => setType("phone")}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="style=fill">
                <g id="call">
                  <path
                    id="vector"
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.6258 19.6195 21.5163 19.8128 21.388 20C21.3433 20.0651 21.2964 20.1295 21.2471 20.1931C21.1824 20.2767 21.1134 20.359 21.04 20.44C20.8504 20.6489 20.6534 20.8354 20.4476 21C20.1217 21.2608 19.774 21.4667 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    fill={`${type === "phone" ? "#FFFFFF" : "#000000"}`}
                  />
                  <path
                    id="vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.98958 2.39989C3.74153 1.66198 4.62059 1.25 5.59 1.25C5.97318 1.25 6.36311 1.33138 6.71941 1.5014C7.08755 1.67229 7.42309 1.93393 7.68396 2.30922L10.0003 5.574C10.2053 5.85906 10.3657 6.13796 10.4818 6.42035C10.5997 6.6971 10.68 7.00644 10.68 7.32C10.68 7.70687 10.5673 8.07663 10.367 8.40939C10.1968 8.70784 9.96427 8.99567 9.69563 9.26502L9.00688 9.98096C9.01385 9.99743 9.02321 10.0197 9.03333 10.0455C9.183 10.3079 9.44802 10.6772 9.84989 11.1524C10.29 11.6609 10.7568 12.1761 11.2604 12.6897C11.7923 13.2116 12.2961 13.6858 12.8048 14.1178C13.2858 14.5247 13.6606 14.7841 13.933 14.9322C13.955 14.9417 13.9753 14.9509 13.9918 14.9584L14.6815 14.2778C14.955 14.0046 15.2482 13.7638 15.5612 13.5966C15.8882 13.4019 16.2447 13.29 16.64 13.29C16.9399 13.29 17.2362 13.354 17.534 13.4758C17.8169 13.5916 18.0939 13.7509 18.3717 13.9398L18.378 13.9441L21.6909 16.2961C22.0455 16.5425 22.3234 16.8545 22.4965 17.2479L22.5016 17.2596L22.5064 17.2715C22.6338 17.59 22.72 17.9351 22.72 18.33C22.72 18.8025 22.6147 19.2817 22.3982 19.7403C22.2879 19.9738 22.1587 20.2021 22.0066 20.424C21.9538 20.5011 21.8983 20.5773 21.84 20.6525C21.7634 20.7514 21.682 20.8484 21.5957 20.9436C21.3815 21.1797 21.1554 21.3943 20.9162 21.5856C20.537 21.8891 20.1283 22.1318 19.6865 22.3131C18.9922 22.6021 18.2445 22.75 17.45 22.75C16.3114 22.75 15.1213 22.4821 13.896 21.96C12.6885 21.4455 11.4895 20.7561 10.3086 19.8963L10.3076 19.8956C9.12671 19.0331 8.00824 18.0786 6.94224 17.0229L6.93709 17.0178C5.88147 15.9519 4.92677 14.8332 4.07368 13.6614L4.07114 13.658C3.22474 12.4813 2.5351 11.293 2.0297 10.1032L2.02877 10.101C1.51719 8.88605 1.25 7.69701 1.25 6.54C1.25 5.77184 1.3856 5.02732 1.66286 4.33342C1.94487 3.61753 2.38783 2.96904 2.98958 2.39989Z"
                    fill={`${type === "phone" ? "#FFFFFF" : "#000000"}`}
                  />
                </g>
              </g>
            </svg>
            <p className="text-sm font-poppins">Phone</p>
          </button>
          <button
            className={`flex justify-center items-center gap-2 py-1.5 rounded-full ${
              type === "video" ? "bg-[#0f75bc] text-white" : ""
            }`}
            onClick={() => setType("video")}
          >
            <svg
              fill={`${type === "video" ? "#FFFFFF" : "#000000"}`}
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>video</title>
              <path d="M15.5 13.219l6.844-3.938c0.906-0.531 1.656-0.156 1.656 0.938v11.625c0 1.063-0.75 1.5-1.656 0.969l-6.844-3.969v2.938c0 1.094-0.875 1.969-1.969 1.969h-11.625c-1.063 0-1.906-0.875-1.906-1.969v-11.594c0-1.094 0.844-1.938 1.906-1.938h11.625c1.094 0 1.969 0.844 1.969 1.938v3.031z"></path>
            </svg>
            <p className="text-sm font-poppins">Video</p>
          </button>
        </div>
        <h3 className="text-base md:text-lg font-medium text-center font-rubik">
          {type === "home"
            ? "Home Consulting"
            : type === "phone"
            ? "Phone Consulting"
            : "Video Consulting"}
        </h3>
        <div>
          <Controller
            name="venue"
            control={control}
            rules={{ required: "Please select any option" }}
            render={({ field }) => (
              <div className="relative w-full">
                {type === "home" ? (
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/location-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                ) : type === "phone" ? (
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/phone-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/video-camera-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                )}
                <select
                  {...field}
                  id="venue"
                  className="w-full bg-gray-200 text-black px-2 py-3 pl-12 font-roboto text-sm rounded placeholder:font-roboto placeholder:text-sm"
                >
                  <option value="">
                    {type === "home" ? "Select Venue" : "Select Platform"}
                  </option>
                  {venueOptions[type as keyof typeof venueOptions].map(
                    (country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}
          />
          {errors.venue && (
            <p className="text-red-500 text-xs">{errors.venue.message}</p>
          )}
        </div>

        {/* First Name and Email */}
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  {/* Icon */}
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/user-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                  <input
                    {...field}
                    type="text"
                    id="fullName"
                    className="w-full bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                    placeholder="Enter your full name"
                  />
                </div>
              )}
            />

            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </div>

          <div className="w-full">
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
                <div className="relative w-full">
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/phone-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                  <input
                    {...field}
                    type="tel"
                    id="phone"
                    className="w-full bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                    placeholder="Phone number"
                  />
                </div>
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>

          <div className="w-full">
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
                <div className="relative w-full">
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/mail-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                  <input
                    {...field}
                    type="email"
                    id="email"
                    className="w-full bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                    placeholder="Email address"
                  />
                </div>
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone and Place */}

        <div className="w-full">
          <Controller
            name="place"
            control={control}
            rules={{ required: "Place is required" }}
            render={({ field }) => (
              <div className="relative w-full">
                <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                  <Image
                    src="/location-svgrepo-com.svg"
                    alt="Destination Icon"
                    width={16}
                    height={16}
                    className=""
                  />
                </div>
                <input
                  {...field}
                  type="text"
                  id="place"
                  className="w-full bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                  placeholder="Enter your place"
                />
              </div>
            )}
          />
          {errors.place && (
            <p className="text-red-500 text-xs">{errors.place.message}</p>
          )}
        </div>

        {/* Study Destination */}
        <div>
          <Controller
            name="destination"
            control={control}
            rules={{ required: "Study destination is required" }}
            render={({ field }) => (
              <div className="relative w-full">
                <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                  <Image
                    src="/book-svgrepo-com.svg"
                    alt="Destination Icon"
                    width={16}
                    height={16}
                    className=""
                  />
                </div>
                <select
                  {...field}
                  id="destination"
                  className="w-full text-sm bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                >
                  <option value="">Choose your study location</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
          {errors.destination && (
            <p className="text-red-500 text-xs">{errors.destination.message}</p>
          )}
        </div>

        {/* Qualification and Address */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <Controller
              name="qualification"
              control={control}
              rules={{ required: "Qualification is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/user-graduate-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                  <input
                    {...field}
                    type="text"
                    id="qualification"
                    className="w-full bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                    placeholder="Enter your qualification"
                  />
                </div>
              )}
            />
            {errors.qualification && (
              <p className="text-red-500 text-xs">
                {errors.qualification.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <div className="flex justify-center items-center bg-white p-2 absolute left-3 top-1/2 -translate-y-1/2 rounded-full">
                    <Image
                      src="/location-svgrepo-com.svg"
                      alt="Destination Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                  <input
                    {...field}
                    type="text"
                    id="address"
                    className="w-full bg-gray-200 text-black py-2 px-2 pl-14 rounded placeholder:text-sm placeholder:font-roboto"
                    placeholder="Enter your address"
                  />
                </div>
              )}
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#0f75bc] text-white p-3 rounded hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
