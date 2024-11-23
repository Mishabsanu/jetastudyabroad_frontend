import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact Us', url: '/contact' },
    ];

    return (
        <nav className="sticky bg-white top-0 z-50 flex justify-between items-center px-4 md:px-7 lg:px-14 py-3.5">
            <div className="text-2xl font-bold">
                <Link href="/">
                    <Image src="/jeta-logo.svg" className="h-10 w-auto" alt="Logo" height={64} width={298} />
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
        </nav>
    );
}
