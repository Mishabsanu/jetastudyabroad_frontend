import Button from '@/components/Button/Button';
import ContactForm from '@/components/ContactForm'
import Team from '@/components/Team';
import Image from 'next/image'
import React from 'react'

export default function About() {
    const teamMembers = [
        {
            image: '/AKASH.jpg',
            name: 'Akash S M',
            role: 'Vertical Head',
        },
        {
            image: '/Adarsh.webp',
            name: 'Adarsh P S',
            role: 'Chief Executive Officer',
        },
        {
            image: '/Adarsha.jpeg',
            name: 'Adharsha K',
            role: 'Destination Expert',
        },
        {
            image: '/Sherin.jpg',
            name: 'Shahla Sherin K. P',
            role: 'Social Media Manager',
        },
        {
            image: '/Jincy.jpeg',
            name: 'Jincy Raj',
            role: 'Counselor',
        },
        {
            image: '/Janish.jpg',
            name: 'Janish Jayan',
            role: 'Chief Marketing Officer',
        },
        {
            image: '/VISHNU.jpg',
            name: 'Vishnu Aravindan',
            role: 'HR Manager',
        },
    ];

    const handleScrollToContact = () => {
        const element = document.getElementById("contact-us");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Element with ID 'contact-us' not found");
        }
    };

    return (
        <>
            <section style={{
                background: 'url(/about-bg.png) lightgray 50% / cover no-repeat',
            }} className='px-4 md:px-7 lg:px-14 py-28'>
                <div>
                    <h1 className='font-poppins text-3xl font-semibold max-w-[499px] mb-3'>Why Jeta Study Abroad</h1>
                    <p className='text-lg font-roboto font-normal max-w-[461px]'>
                        At Jeta Study Abroad, we’re more than just a guide for your academic
                        journey—we’re here to support you in building a fulfilling life in a new country.
                    </p>
                </div>
            </section>
            <section className='px-4 md:px-7 lg:px-14 py-20'>
                <h2 className='text-[#2B292A] font-poppins text-center mx-auto text-3xl font-semibold max-w-[522px]'>
                    Study Abroad With Someone
                    Who Knows The Way
                </h2>
                <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto my-4'></div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                    <div className='space-y-5'>
                        <div className='relative'>
                            <Image src={'/about-one.png'} alt='About Image' width={650} height={260} className='object-contain object-center w-full h-auto' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='relative'>
                                <Image src={'/about-two.png'} alt='About Image' width={320} height={260} className='object-contain object-center w-full h-auto' />
                            </div>
                            <div className='relative'>
                                <Image src={'/about-three.png'} alt='About Image' width={320} height={260} className='object-contain object-center w-full h-auto' />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <p className='text-base md:text-lg font-roboto leading-5'>
                            At Jeta Study Abroad, we’re more than just a guide for your academic
                            journey—we’re here to support you in building a fulfilling life in a new country.
                            Our mission is to provide you with the tools, resources, and support to make this
                            transition seamless. Studying abroad isn’t just about academics; it’s a pathway
                            to a world of opportunities, personal growth, and a brighter future.
                        </p>
                        <h3 className='text-xl font-semibold font-poppins text-[#0f75bc]'>Mission & Vision</h3>
                        <p className='text-base md:text-lg font-roboto leading-5'>
                            Mission: Our mission is to empower students to experience life beyond borders.
                            Through our unique support programs—Jeta Dome for housing assistance, Jeta
                            Fin for non-collateral loans, and Jeta Lab for community building—we ensure
                            that students have everything they need to thrive academically and socially
                            while navigating life in a new country
                        </p>
                        <p className='text-base md:text-lg font-roboto leading-5'>
                            Vision: We envision Jeta Study Abroad as a trusted partner for students
                            nationwide, helping turn study abroad dreams into reality. Our goal is to expand
                            across all of India within the next two years, creating lifelong connections and
                            opportunities that enrich each student’s journey
                        </p>
                        <Button onClick={handleScrollToContact} text='Connect Now' className='w-fit mt-8' />
                    </div>
                </div>
            </section>
            <section className='bg-[#F1F1F1] px-4 md:px-7 lg:px-14 py-16'>
                <h3 className='text-[#2B292A] font-poppins text-center mx-auto text-3xl font-semibold max-w-[522px]'>
                    Specialties of Jeta Study Abroad

                </h3>
                <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto my-4'></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-[1100px] mx-auto'>
                    <div>
                        <h4 className='text-xl font-poppins font-semibold mb-1'>
                            Comprehensive Guidance
                        </h4>
                        <p className='text-base font-roboto leading-6 font-normal'>
                            We guide you through each step, from course
                            selection to making friends in your new country.
                        </p>
                    </div>
                    <div>
                        <h4 className='text-xl font-poppins font-semibold mb-1'>
                            Partner Programs
                        </h4>
                        <p className='text-base font-roboto leading-6 font-normal'>
                            Our unique programs—Jeta Uni, Jeta Dome, Jeta Fin, and
                            Jeta Lab—offer specialized support for education, accommodation, finances,and social connections.
                        </p>
                    </div>
                    <div>
                        <h4 className='text-xl font-poppins font-semibold mb-1'>
                            Student-Centric Approach
                        </h4>
                        <p className='text-base font-roboto leading-6 font-normal'>
                            Our services are tailored to meet students&apos; needs,
                            offering free training, housing assistance, and access to community spaces to ensure you feel right at home.
                        </p>
                    </div>
                </div>
            </section>
            <section id="contact-us" className='px-4 md:px-7 lg:px-14 py-20'>
                <ContactForm />
            </section>
            <section className='px-4 md:px-7 lg:px-14 py-20'>
                <Team teamMembers={teamMembers} />
            </section>
        </>
    )
}
