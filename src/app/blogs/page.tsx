import MotionContainer from "@/components/MotionContainer/MotionContainer";
import MotionItem from "@/components/MotionItem/MotionItem";
import Link from "next/link";

export default function Page() {
    return (
        <>
            {/* Banner Section */}
            <section style={{
                background: 'url(/blogs-bg.png) lightgray 50% / cover no-repeat',
            }} className='px-4 md:px-7 lg:px-14 py-5 md:py-24'>
                <div>
                    <h1 className='font-poppins text-3xl font-semibold max-w-[499px] mb-3'>Blogs</h1>
                    <p className='text-base md:text-lg font-roboto font-normal max-w-[599px]'>
                        Discover valuable insights, tips, and updates on studying abroad. From navigating academic choices to adapting to a new culture, our blogs provide expert advice and inspiring stories to help you make the most of your journey with Jeta Study Abroad.
                    </p>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center">Our Latest Blog</h2>
                    <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto mb-16'></div>

                    {/* Motion Container for Blog Post Animation */}
                    <MotionContainer classNames="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">

                        {/* Blog 1: US Visa Guide */}
                        <MotionItem classNames="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:border-indigo-600 cursor-pointer">
                            <div className="flex items-center">
                                <img
                                    src="/us-visa-banner.png"
                                    alt="US Visa Guide"
                                    className="rounded-t-2xl w-full object-cover"
                                />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">Jan 10, 2025</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                                    Looking for a US Visa to Study Abroad? Here is Your Complete Guide.
                                </h4>
                                <p className="text-gray-500 leading-6 mb-10">
                                    Learn about the step-by-step process of obtaining a US student visa with expert tips.
                                </p>
                                <Link href="/blogs/us-visa-guide-2025" className="cursor-pointer text-lg text-indigo-600 font-semibold">
                                    Read more..
                                </Link>
                            </div>
                        </MotionItem>

                        {/* Blog 2: MRes in the UK */}
                        <MotionItem classNames="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:border-indigo-600 cursor-pointer">
                            <div className="flex items-center">
                                <img
                                    src="/mres-uk-banner.png"
                                    alt="MRes in the UK"
                                    className="rounded-t-2xl w-full object-cover"
                                />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">Jan 12, 2025</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                                    MRes Degree in the UK 2025: A Complete Guide to Its Opportunities & Features.
                                </h4>
                                <p className="text-gray-500 leading-6 mb-10">
                                    Explore why the UK is the perfect destination for your MRes program.
                                </p>
                                <Link href="/blogs/mres-in-uk-2025" className="cursor-pointer text-lg text-indigo-600 font-semibold">
                                    Read more..
                                </Link>
                            </div>
                        </MotionItem>

                        {/* Blog 3: Diploma Programs in Spain */}
                        <MotionItem classNames="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:border-indigo-600 cursor-pointer">
                            <div className="flex items-center">
                                <img
                                    src="/spain-diploma-banner.png"
                                    alt="Diploma Programs in Spain"
                                    className="rounded-t-2xl w-full object-cover"
                                />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">Jan 14, 2025</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                                    Start Your Adventure: Presenting Spain&apos;s Finest Diploma Programs.
                                </h4>
                                <p className="text-gray-500 leading-6 mb-10">
                                    Discover top diploma programs in Tourism Management and Spanish Cuisine.
                                </p>
                                <Link href="/blogs/diploma-programs-spain" className="cursor-pointer text-lg text-indigo-600 font-semibold">
                                    Read more..
                                </Link>
                            </div>
                        </MotionItem>
                    </MotionContainer>
                </div>
            </section>
        </>
    );
}
