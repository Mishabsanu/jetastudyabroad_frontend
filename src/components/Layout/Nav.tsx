"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Nav() {
    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Blogs', url: '/blogs' },
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky bg-white top-0 z-50 px-4 md:px-7 lg:px-14 py-3.5 shadow-2xl">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <Image src="/jeta-logo.PNG" className="h-6 md:h-12 w-auto" alt="Logo" height={100} width={400} />
                    </Link>
                </div>
                <ul className="hidden md:flex space-x-6 text-lg">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link href={link.url} className="hover:text-blue-500 font-poppins">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div onClick={()=>setOpen(!open)} className="block md:hidden">
                    <Image alt="" src={'/menu.svg'} width={24} height={24} className="h-6 w-6 object-contain object-center" />
                </div>
            </div>
            <div className="relative">
                {
                    open &&
                    <MobileMenu setOpen={setOpen} />
                }
            </div>
        </nav>

    );
}
