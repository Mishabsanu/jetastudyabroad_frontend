'use client';
import React, { FC } from 'react';
import Image from 'next/image';

interface TeamMember {
    image: string;
    name: string;
    role: string;
}

interface TeamProps {
    teamMembers: TeamMember[];
}

const Team: FC<TeamProps> = ({ teamMembers }) => {
    return (
        <section className="py-14 md:py-24 bg-white text-zinc-900">
            <div className="container px-4 mx-auto">
                {/* Heading */}
                <div className="flex justify-center text-center mb-12">
                    <div className="sm:max-w-lg">
                        <h3 className="text-3xl leading-none md:text-[45px] font-bold">
                            Our Team Members
                        </h3>
                        <p className="font-medium opacity-60 mt-4">
                            Meet the creative and talented people who make our company shine!
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-white shadow-xl rounded-2xl p-4">
                            <div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="w-full rounded-t-2xl h-[210px] object-cover object-top"
                                />
                                <div className="p-3 text-center">
                                    <h5 className="text-xl mb-1 font-bold">
                                        {member.name}
                                    </h5>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
