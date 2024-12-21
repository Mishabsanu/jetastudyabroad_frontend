import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

interface TeamMember {
    image: string;
    name: string;
    role: string;
}

interface TeamProps {
    teamMembers: TeamMember[];
}

const Team: FC<TeamProps> = ({ teamMembers }) => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.update(); // Ensure Swiper recalculates the layout
        }
    }, [swiperInstance]);

    return (
        <section className="py-14 md:py-24 bg-white text-zinc-900">
            <div className="container px-4 mx-auto">
                {/* Heading */}
                <div className="flex justify-center text-center mb-12">
                    <div className="sm:max-w-lg">
                        <h3 className="text-3xl leading-none md:text-[45px] font-bold">
                            Core Team
                        </h3>
                        <p className="font-medium opacity-60 mt-4">
                            Meet the creative and talented people who make our company shine!
                        </p>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop
                    onSwiper={setSwiperInstance}
                    modules={[Navigation, Autoplay]}
                    className="team-swiper"
                >
                    {teamMembers.map((member, idx) => (
                        <SwiperSlide key={idx} className="py-5">
                            <div className="bg-white shadow-lg rounded-2xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="w-full rounded-t-2xl h-[220px] md:h-[350px] object-cover object-top"
                                />
                                <div className="p-3 text-center">
                                    <h5 className="text-xl mb-1 font-bold">{member.name}</h5>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;
