"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group fixed bottom-5 right-5 flex items-end justify-end w-24 z-[9999]">
            {/* Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white shadow-xl flex items-center justify-center p-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 transition-transform duration-500`}
            >
                <Image
                    src="/customer-service.png"
                    alt="Share"
                    width={32}
                    height={32}
                    className="object-contain object-center"
                />
            </button>

            {/* Sub Buttons */}
            <div
                className={`flex flex-col gap-2 justify-center items-center absolute bottom-16 right-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* WhatsApp Button */}
                <Link
                    href="https://wa.me/+916282118447"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 transition-all duration-300"
                >
                    <Image
                        src="/WhatsApp.webp"
                        alt="WhatsApp"
                        width={32}
                        height={32}
                        className="opacity-80"
                    />
                </Link>

                {/* Instagram Button */}
                <Link
                    href="https://www.instagram.com/jeta_studyabroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-400 hover:bg-pink-500 transition-all duration-300"
                >
                    <Image
                        src="/insta.png"
                        alt="Instagram"
                        width={32}
                        height={32}
                        className="opacity-80"
                    />
                </Link>

                {/* LinkedIn Button */}
                <Link
                    href="https://www.linkedin.com/company/jeta-study-abroad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 hover:bg-blue-500 transition-all duration-300"
                >
                    <Image
                        src="/linkedin.png"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        className="opacity-80"
                    />
                </Link>

                {/* YouTube Button */}
                <Link
                    href="https://www.youtube.com/@jetastudyabroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300"
                >
                    <Image
                        src="/youtube.png"
                        alt="YouTube"
                        width={32}
                        height={32}
                        className="opacity-80"
                    />
                </Link>
            </div>
        </div>
    );
}
