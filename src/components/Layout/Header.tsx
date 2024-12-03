import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-black text-white py-3 px-4 md:px-7 lg:px-14">
            <div className="flex justify-end gap-8">
                <div className="flex gap-2 justify-center items-center">
                    <Image className="h-4 w-4 md:h-6 md:w-6 object-contain object-center" height={24} width={24} src="/news.svg" alt="" />
                    <p className="font-roboto text-sm md:text-lg text-white">News & Updates</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <Image className="h-4 w-4 md:h-6 md:w-6 object-contain object-center" height={24} width={24} src="/location.svg" alt="" />
                    <p className="font-roboto text-sm md:text-lg text-white">Contact Us</p>
                </div>
            </div>
        </header>
    );
}
