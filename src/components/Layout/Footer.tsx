import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const footerLinks = [
    {
      title: {
        text: "Study Abroad",
        url: "/"
      },
      items: [
        { text: 'How to choose your destination', url: '/choose-your-destination' },
        { text: 'Study abroad intakes', url: '/study-abroad-intakes' },
        { text: 'Guide for parents', url: '/guide-for-parents' },
        { text: 'THE World University Rankings', url: '/the-world-university-rankings' },
        { text: 'QS World University Rankings', url: '/qs-world-university-rankings' },
        { text: 'GC Events', url: '/gc-events' },
        { text: 'Institution answers', url: '/institution-answers' },
        { text: 'Student Essentials', url: '/student-essentials' }
      ]
    },
    {
      title: {
        text: "Useful Links",
        url: ""
      },
      items: [
        { text: 'Jeta Blog', url: '/jeta-blog' },
        { text: 'Engineering courses', url: '/engineering-courses' },
        { text: 'Health and medicine', url: '/health-and-medicine' },
        { text: 'Information technology', url: '/information-technology' },
        { text: 'Management courses', url: '/management-courses' },
        { text: 'Find Scholarships', url: '/find-scholarships' },
        { text: 'Student Reviews', url: '/student-reviews' },
        { text: 'Ask GC', url: '/ask-gc' }
      ]
    },
    {
      title: {
        text: "IELTS",
        url: ""
      },
      items: [
        { text: 'What is IELTS?', url: '/what-is-ielts' },
        { text: 'Prepare for IELTS', url: '/prepare-for-ielts' },
        { text: 'Computer-delivered IELTS', url: '/computer-delivered-ielts' },
        { text: 'Book my IELTS test', url: '/book-ielts-test' },
        { text: 'IELTS for UKVI', url: '/ielts-for-ukvi' },
        { text: 'IELTS test dates', url: '/ielts-test-dates' },
        { text: 'About GC IELTS', url: '/about-gc-ielts' }
      ]
    }
  ]
  return (
    <footer className='bg-[#2B292A] py-20 px-4 md:px-7 lg:px-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-5 md:gap-0'>
        <div>
          <Link href="/">
            <Image src="/jeta-logo.svg" className="h-10 w-auto" alt="Logo" height={64} width={298} />
          </Link>
        </div>
        {
          footerLinks.map((link, idx) => (
            <div key={idx}>
              <h4 className='text-xl font-poppins text-white font-medium mb-5'>{link.title.text}</h4>
              <div className='space-y-4'>
                {
                  link.items.map((item, idx) => (
                    <Link className='text-white inline-flex font-rubic text-sm' key={idx} href={item.url}>{item.text}</Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </footer>
  )
}
