'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import CustomInput from '@/components/CustomInput/CustomInput';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import Button from '@/components/Button/Button';
import Link from 'next/link';

export default function Home() {

  const countries = [
    { value: 'europe', label: 'Europe' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'ireland', label: 'Ireland' },
    { value: 'usa', label: 'USA' },
    { value: 'new-zealand', label: 'New Zealand' },
    { value: 'dubai', label: 'Dubai' },
    { value: 'uzbekistan', label: 'Uzbekistan' },
    { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'kazakhstan', label: 'Kazakhstan' },
    { value: 'georgia', label: 'Georgia' }
  ];

  return (
    <>
    <section className=''>
      <Swiper
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (_, className) {
            return '<span class="' + className + '">' + '</span>';
          },
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: ".swiper-button-disabled"
        }}
        modules={[Pagination, Navigation]}
        autoHeight={true}
        className='relative'
      >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: 'url(/hero.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '580px', // Set a fixed height
              }}
              className="flex items-center text-white px-6 md:px-20 font-poppins"
            >
              <div className="max-w-[499px]">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Explore, Learn, Succeed with Jeta Study Abroad
                </h1>
                <p className="text-sm md:text-base font-roboto">
                  Achieve your dreams with expert guidance. From top universities to a seamless transition overseas, we support your success every step of the way.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: 'url(/hero.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '580px', // Ensure consistent height
              }}
              className="flex items-center text-white px-6 md:px-20 font-poppins"
            >
              <div className="max-w-[499px]">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Start Your Global Journey Today
                </h2>
                <p className="text-sm md:text-base font-roboto">
                  Discover opportunities around the world. With tailored support and expert advice, your international education is within reach.
                </p>
              </div>
            </div>
          </SwiperSlide>


        <div className='swiper-pagination'></div>
        <div className='hidden md:block'>
          <div className="swiper-button image-swiper-button-next">
            <img style={{
              height: '24px',
              width: '24px'
            }} src={'/arrow-right-carousel.svg'} alt="arrow right" />
          </div>
        </div>
        <div className='hidden md:block'>
          <div className="swiper-button image-swiper-button-prev">
            <img style={{
              height: '24px',
              width: '24px'
            }} src={'/arrow-left-carousel.svg'} alt="arrow right" />
          </div>
        </div>
      </Swiper>
      </section>
      <section className='px-4 md:px-7 lg:px-14 py-12'>
        <h3 className='font-poppins text-3xl font-bold text-center mb-2'>Study Abroad free Assessment</h3>
        <p className='max-w-[486px] mx-auto text-[#2B292A] text-lg font-roboto text-center'>
          Fill in your details below to get a personalised advice
        </p>
        <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto mt-4'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1290px] mt-10'>
          <div className=''>
            <Image className='object-cover object-center h-full w-full' src='/form-image.png' alt='form' width={645} height={769} />
          </div>
          <form className='bg-[#E0E0E0]/[0.44] py-14 px-8'>
            <div className='space-y-5'>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <CustomInput
                  id="name"
                  type="text"
                  placeholder="First Name*"
                  required
                />
                <CustomInput
                  id="name"
                  type="text"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <CustomInput
                  id="name"
                  type="text"
                  placeholder="Email Address *"
                  required
                />
                <CustomInput
                  id="name"
                  type="text"
                  placeholder="Mobile Number *"
                  required
                />
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <CustomSelect
                  placeholder="Study Destination"
                  options={countries}
                  required
                />
                <CustomSelect
                  placeholder="When Do You Plan To Study?"
                  options={countries}
                  required
                />
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <CustomSelect
                  placeholder="Mode Of Counselling"
                  options={countries}
                  required
                />
                <CustomSelect
                  placeholder="Fund Your Education?"
                  options={countries}
                  required
                />
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <CustomSelect
                  placeholder="Preferred Study Level"
                  options={countries}
                  required
                />
              </div>
            </div>
            <p className='text-black font-roboto text-base mt-6'>
              Jeta will not share your details with others without your permission:
            </p>
            <div className='my-4 space-y-4'>
              <div className='flex items-center gap-3'>
                <input
                  id="accept"
                  type="checkbox"
                  className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
                  defaultChecked
                />
                <p className='text-black/55 font-roboto text-sm'>
                  I agree to GC Terms and Privacy Policy
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id="accept"
                  type="checkbox"
                  className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
                  defaultChecked
                />
                <p className='text-black/55 font-roboto text-sm'>
                  Please contact me by phone, email or SMS to assist with my enquiry
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id="accept"
                  type="checkbox"
                  className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
                  defaultChecked
                />
                <p className='text-black/55 font-roboto text-sm'>
                  I would like to receive updates and offers from IDP
                </p>
              </div>
              <Button text='BOOK YOUR SEAT' className='w-fit' />
            </div>
          </form>
        </div>
      </section>
      <section className='py-20' style={{
        background: 'url(/virtual-office-bg.png) lightgray 50% / cover no-repeat',
      }}>
        <form className='px-4 md:px-7 lg:px-14'>
          <h3 className='text-[#2B292A] font-poppins text-3xl font-semibold max-w-[410px]'>
            We are Online
            Meet Our Advisors Now
          </h3>
          <p className='mt-1 text-lg font-rubik font-normal max-w-[486px] text-[#2B292A]/[0.77]'>
            Join Between Mon to Sat 10:00 AM to 6:00 PM IST 
          </p>
          <div className='bg-[#0f75bc] w-20 h-[3px] my-4'></div>
          <div className='flex flex-col'>
            <input
              type={"tel"}
              placeholder={"Enter Mobile No. *"}
              className={`font-poppins my-5 border-[#2B292A]/55 bg-transparent focus:outline-none focus:ring-0 p-3 w-full border-2 placeholder-inter text-black placeholder-black/55 max-w-[396px] rounded-full`}
            />
            <input
              type={"email"}
              placeholder={"Enter Email ID *"}
              className={`font-poppins mb-5 border-[#2B292A]/55 bg-transparent focus:outline-none focus:ring-0 p-3 w-full border-2 placeholder-inter text-black placeholder-black/55 max-w-[396px] rounded-full`}
            />
            <Button text='JOIN VIRTUAL OFFICE NOW' className='w-fit' />
          </div>
        </form>
      </section>
      <section className='py-20 px-4 md:px-7 lg:px-14'>
        <h4 className='text-3xl font-roboto font-semibold text-center'>
          Student Testimonials
        </h4>
        <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto mt-4'></div>
        <div className='mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {
            Array.from({ length: 4 }, (_, idx) => (
              <div key={idx}>
                <Image src={'/testimonial-one.png'} alt='' width={297} height={382} className='w-full h-auto object-contain object-center' />
              </div>
            ))
         }
        </div>
        <div className='flex justify-end items-center mt-4'>
          <Link href="" className='font-poppins text-base font-medium text-[#0f75bc]'> View More Testimonials</Link>
         </div>
      </section>
      <section className='bg-[#F1F1F1]'>
        <div className='px-4 md:px-7 lg:px-14 py-20'>
          <h4 className='text-3xl font-poppins font-semibold'>
            News & Blogs
          </h4>
          <p className='text-base font-roboto text-black/55 mt-1'>
            Let’s help you live your dream
          </p>
          <div className='bg-[#0f75bc] w-20 h-[3px] mt-4'></div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
            {
              Array.from({ length: 3 }, (_, idx) => (
                <div key={idx} className=''>
                  <Image src={'/blog-one.png'} alt='' width={409} height={248} className='h-[248px] w-full' />
                  <p className='text-base font-roboto font-normal text-black/55 mt-4'>
                    Dec 03rd, 2022
                  </p>
                  <h5 className='text-black font-poppins text-xl font-semibold leading-7 mb-4'>
                    Controlled Substance Convictions & Immigration Laws
                  </h5>
                  <Link className='text-[#0f75bc] font-poppins text-base font-medium' href={''}>
                    Read More
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>

  );
}
