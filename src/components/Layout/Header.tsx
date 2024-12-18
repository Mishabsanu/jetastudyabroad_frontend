import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black text-white py-3 px-4 md:px-7 lg:px-14">
            <div className="flex justify-end gap-8 items-center">
                {/* Call Section */}
                <div className="flex gap-2 justify-center items-center">
                    <Image
                        className="h-4 w-4 md:h-6 md:w-6 object-contain"
                        height={24}
                        width={24}
                        src="/call.png"
                        alt="Phone Icon"
                    />
                    <Link
                        href="tel:1234567890"
                        className="font-roboto text-xs md:text-sm text-white hover:underline"
                        aria-label="Call us at 1234567890"
                    >
                        1234567890
                    </Link>
                </div>

           
                <div className="flex gap-2 justify-center items-center">
                    <Image
                        className="h-4 w-4 md:h-6 md:w-6 object-contain"
                        height={24}
                        width={24}
                        src="/email.png"
                        alt="Email Icon"
                    />
                    <Link
                        href="mailto:contact@example.com"
                        className="font-roboto text-xs md:text-sm text-white hover:underline"
                        aria-label="Contact us via email"
                    >
                        contact@example.com
                    </Link>
                </div>
            </div>
        </header>
    );
}
