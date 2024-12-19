import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2">
            <div className="flex flex-col items-center space-y-1 p-2 rounded-l-lg">
                {/* Instagram Link */}
                <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer "
                >
                    <Image
                        src="/insta.png" // Replace with your Instagram icon file path
                        alt="Instagram"
                        width={42}
                        height={42}
                        className="hover:opacity-80 h-12 w-12"
                    />
                </Link>

                <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer "
                >
                    <Image
                        src="/WhatsApp.webp" // Replace with your LinkedIn icon file path
                        alt="WhatsApp"
                        width={42}
                        height={42}
                        className="hover:opacity-80 h-11 w-11"
                    />
                </Link>

                {/* LinkedIn Link */}
                <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer "
                >
                    <Image
                        src="/linkedin.png" // Replace with your LinkedIn icon file path
                        alt="LinkedIn"
                        width={42}
                        height={42}
                        className="hover:opacity-80 h-12 w-12"
                    />
                </Link>
            </div>
        </div>
    );
}
