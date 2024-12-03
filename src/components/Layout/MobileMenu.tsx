import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileMenu({ setOpen }: MobileMenuProps) {
    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact Us', url: '/contact' },
    ];
    return (
        <div className='p-6 bg-white absolute top-6 left-0 z-50 w-full flex flex-col justify-between md:hidden'>
            <div>
                <div className="flex justify-end items-center self-stretch">
                    <button onClick={() => setOpen(false)}>
                        <Image height={24} width={14} src="/close.svg" alt="Logo" className='h-6 w-auto' />
                    </button>
                </div>
                <nav>
                    <ul className="">
                        <ul className="hidden md:flex space-x-6 text-lg">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.url} className="hover:text-blue-500 font-poppins">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <li className="pt-4 w-full text-app-black font-poppins text-sm font-semibold pb-2 border-b">
                            <a href="#" className='w-full'>Home</a>
                        </li>
                        <li className="pt-4 w-full text-app-black font-poppins text-sm font-semibold pb-2 border-b">
                            <a href="#" className='w-full'>Services</a>
                        </li>
                        <li className="pt-4 w-full text-app-black font-poppins text-sm font-semibold pb-2 border-b">
                            <a href="#" className='w-full'>About</a>
                        </li>
                        <li className="pt-4 w-full text-app-black font-poppins text-sm font-semibold pb-2 border-b">
                            <a href="#" className='w-full'>Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}