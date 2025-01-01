import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ setOpen }: MobileMenuProps) {
    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Blogs', url: '/blogs' },
        { name: 'Contact Us', url: '/#contact-us' },
    ];

    return (
        <div className="p-6 bg-white absolute top-0 left-0 z-50 w-full flex flex-col justify-between md:hidden">
            <div>
                <div className="flex justify-end items-center self-stretch">
                    <button onClick={() => setOpen(false)}>
                        <Image height={24} width={24} src="/close.svg" alt="Close menu" className="h-6 w-auto" />
                    </button>
                </div>

                <nav>
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map((link, idx) => (
                            <li key={idx} className="w-full">
                                <Link
                                    href={link.url}
                                    className="block w-full text-lg font-poppins text-app-black hover:text-blue-500 py-2 px-4 rounded-md"
                                    onClick={() => setOpen(false)} // Close menu when a link is clicked
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
