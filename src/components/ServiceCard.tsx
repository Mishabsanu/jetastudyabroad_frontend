import Image from "next/image";

interface SlideCardProps {
    description: string;
    image: string;
    color: string;
}

const ServiceCard: React.FC<SlideCardProps> = ({  description, image }) => {

    return (
        <div className="group h-96 w-full [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                        <Image
                            className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                            src={image}
                            alt={'service'}
                            width={320}
                            height={320}
                        />
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-[#0f75bc] px-4 md:px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <p className="text-sm md:text-lg text-pretty text-center">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
