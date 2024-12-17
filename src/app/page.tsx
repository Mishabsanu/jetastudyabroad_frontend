'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import dynamic from "next/dynamic";
// import HomeBanner from '@/components/Banner';
import StudentJourney from '@/components/StudentJourney';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
const InteractiveGlobe = dynamic(() => import('@/components/IntractiveGlobe/IntractiveGlobe'), {
  ssr: false,
});

export default function Home() {

  const cards = [
    {
      title: "JETA Uni",
      description:
        "Many students face challenges finding part-time jobs or reliable earning opportunities while studying abroad. That’s why JETA Uni offers a free forex trading course, covering everything from basic to advanced strategies. Our program equips students with valuable income-generating skills, providing a sustainable alternative to traditional part-time jobs and paving the way for financial independence.",
      image: "/jeta-uni.jpg",
      color: "from-[#0f75bc] via-[#084f79] to-[#032841]",
    },
    {
      title: "JETA Dome",
      description:
        "Experience stress-free living with JETA Dome’s tailored housing assistance. Our team will guide you to get comfortable accommodations and ensure a smooth transition for students adjusting to their new surroundings, letting them focus on their academic and personal growth.",
      image: "/jeta-dome.jpg",
      color: "from-[#0f75bc] via-[#084f79] to-[#032841]",
    },
    {
      title: "JETA Fin",
      description:
        "We make achieving academic dreams easier for you with this plan. This service provides student loans that cover up to 99% of your tuition and living expenses, all without requiring collateral. Our loan structure is designed to reduce financial stress, allowing students to focus entirely on their studies and personal growth instead of worrying about expenses.",
      image: "/jeta-fin.jpg",
      color: "from-[#0f75bc] via-[#084f79] to-[#032841]",
    },
    {
      title: "JETA Lab",
      description:
        "Creating a home away from home is our mission. Our JETA lab is a vibrant and welcoming community designed to enrich your personal life in a foreign country. At JETA Lab, you can forge meaningful friendships, exchange ideas, and connect with like-minded individuals from diverse backgrounds. JETA Lab also hosts skill-building workshops, group activities, and networking opportunities to help you grow personally and professionally.",
      image: "/jeta-lab.jpg",
      color: "from-[#0f75bc] via-[#084f79] to-[#032841]",
    },
  ];


  const bannerData = [
    '/banner1.jpg',
    '/banner2.jpg',
    '/banner3.jpg',
  ];


  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (_, className) => `<span class="${className}"></span>`,
          }}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          modules={[Pagination, Navigation]}
          className="relative"
        >
          {bannerData.map((imageUrl, idx) => (
            <SwiperSlide key={idx} className="relative">
              {/* Single Image */}
              <Image
                src={imageUrl}
                alt={`Slide ${idx + 1}`}
                width={1200}
                height={400}
                priority
                className='w-full h-96 md:h-[calc(100vh-120px)] object-fill'
              />
            </SwiperSlide>
          ))}

          {/* Pagination */}
          <div className="swiper-pagination"></div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="swiper-button image-swiper-button-next">
              <Image
                height={24}
                width={24}
                src="/arrow-right-carousel.svg"
                alt="Next"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="swiper-button image-swiper-button-prev">
              <Image
                height={24}
                width={24}
                src="/arrow-left-carousel.svg"
                alt="Previous"
              />
            </div>
          </div>
        </Swiper>
      </section>
      {/* <HomeBanner /> */}
      <section className='px-4 md:px-7 lg:px-14 py-20'>
        <h3 className='font-poppins text-3xl/9 font-bold text-center mb-2 max-w-[638px] mx-auto'>JETA: Your Trusted Partner in Global Education Network</h3>
        <p className='text-[#2B292A] text-lg font-roboto text-center max-w-[838px] mx-auto'>
          Renowned for our unwavering integrity and excellence, JETA Study Abroad is one of the finest abroad education consultancies in Kerala. 
          With our exceptional connections in prestigious universities around the globe, we provide end-to-end support, guiding students to secure their place and build a fulfilling future on their dream campuses.
        </p>
        <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto mt-4'></div>
        <ContactForm />
      </section>
      <section className='py-20' style={{
        background: 'url(/virtual-office-bg.png) lightgray 50% / cover no-repeat',
      }}>
        <form className='px-4 md:px-7 lg:px-14'>
          <h3 className='text-[#2B292A] font-poppins text-3xl font-semibold max-w-[410px]'>
            We are Online
            Meet Our Counsellor Now
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
      <section className="py-20 px-4 md:px-7 lg:px-14 text-center">
        <InteractiveGlobe />
        <h4 className="text-xl md:text-2xl font-poppins font-semibold text-gray-800 mt-6">
          No Borders, Just Dreams - <span className="text-blue-500">Study Anywhere with Us</span>
        </h4>
      </section>
      <StudentJourney />
      <section className='px-4 md:px-7 lg:px-14 py-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              description={card.description}
              image={card.image}
              color={card.color}
            />
          ))}
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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            <div>
              <Image src={'/about-four.png'} alt='' width={400} height={400} className='h-auto w-full rounded-xl' />
            </div>
            <div>
              <h5 className='text-black font-poppins text-xl md:text-4xl font-semibold md:leading-10 mb-4'>
                Unlock Your Future: Why Studying Abroad is a Life-Changing Experience
              </h5>
              <p className='font-roboto text-base leading-normal mb-6'>
                In an increasingly globalized world, studying abroad offers students an unparalleled opportunity to broaden their horizons. Beyond earning a degree, it’s about discovering new cultures, embracing diversity, and growing as an individual. If you&apos;re considering taking the leap, here’s everything you need to know about why studying abroad could be the best decision of your life.
              </p>
              <Link className='text-[#0f75bc] font-poppins text-base font-medium' href={'/blogs'}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
