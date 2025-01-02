"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // To get the current route
import MobileMenu from "./MobileMenu";

export default function Nav() {
    const navLinks = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Blogs", url: "/blogs" },
        { name: "Contact Us", url: "#contact" },
    ];

    const [open, setOpen] = useState(false);
    const pathname = usePathname(); // Current route

    const handleScrollToContact = () => {
        const element = document.getElementById("contact-us");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "/#contact-us";
        }
    };

    return (
        <nav className="sticky bg-white top-0 z-50 px-4 md:px-7 lg:px-14 py-3.5 shadow-2xl">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <Image
                            src="/jeta-logo.png"
                            className="h-6 md:h-12 w-auto"
                            alt="Logo"
                            height={100}
                            width={400}
                        />
                    </Link>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    {navLinks.map((link, idx) => (
                        <li key={idx} className="relative group">
                            {link.url === "#contact" ? (
                                <button
                                    onClick={handleScrollToContact}
                                    className={`font-poppins ${pathname === "/#contact"
                                            ? "text-blue-500 font-semibold"
                                            : "hover:text-blue-500"
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    href={link.url}
                                    className={`font-poppins ${pathname === link.url
                                            ? "text-blue-500 font-semibold"
                                            : "hover:text-blue-500"
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                {/* Mobile Menu Icon */}
                <div onClick={() => setOpen(!open)} className="block md:hidden">
                    <Image
                        alt=""
                        src={"/menu.svg"}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain object-center"
                    />
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="relative">
                {open && <MobileMenu setOpen={setOpen} />}
            </div>
        </nav>
    );
}
